import React, { useState } from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/css/css";
import "codemirror/mode/javascript/javascript";
import "codemirror/addon/hint/show-hint";
import "codemirror/addon/hint/show-hint.css"; // Import hint CSS
import "codemirror/addon/hint/javascript-hint";
import "codemirror/addon/hint/xml-hint";

import { CiMinimize1 } from "react-icons/ci";
import { CiMaximize1 } from "react-icons/ci";
import "./Element.css";
import { Controlled as ControlledEditor } from "react-codemirror2";

function Element({ language, title, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleChange(editor, data, value) {
    onChange(value);
  }

  const handleMinimize = () => {
    setIsOpen((previous) => !previous);
  };

  return (
    <div className={`container${isOpen ? " minimize" : ""}`}>
      <div className="header">
        {title}
        <button onClick={handleMinimize}>
          {isOpen ? <CiMaximize1 /> : <CiMinimize1 />}
        </button>
      </div>
      <ControlledEditor
        className="codeEditor-wrapper"
        options={{
          mode: language,
          theme: "material",
          lineNumbers: true,
          lineWrapping: true,
          lint: true,
          extraKeys: { "Ctrl-Space": "autocomplete" }, // Enable autocomplete with Ctrl-Space
          hintOptions: { completeSingle: false }, // Show multiple suggestions
        }}
        value={value}
        onBeforeChange={handleChange}
        editorDidMount={(editor) => {
          editor.on("inputRead", (instance, change) => {
            if (change.text[0].match(/[\w.]/)) {
              // Check if input is alphanumeric or dot
              instance.showHint(); // Trigger autocomplete on valid input
            }
          });
        }}
      />
    </div>
  );
}

export default Element;
