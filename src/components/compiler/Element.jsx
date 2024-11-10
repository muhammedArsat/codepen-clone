import React, { useState } from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/css/css";
import "codemirror/mode/javascript/javascript";
import { CiMinimize1 } from "react-icons/ci";
import { CiMaximize1 } from "react-icons/ci";
import "./Element.css";
import { Controlled as ControlledEditor } from "react-codemirror2";

function Element({ language, title, value, onChange }) {
    const [isopen,setIsOpen] = useState(false);
    function handleChange(editor, data, value){
      
        onChange(value);
    }
    const handleMinimize = () =>{
        setIsOpen(previous => !previous);
    }
  return (
    <div className={`container${isopen ?"minimize":""}`}>
      <div className="header">
        {title}
        <button onClick={handleMinimize}>
            {isopen ? <CiMaximize1/> : <CiMinimize1/>}
            </button>
      </div>
      <ControlledEditor
        className="codeEditor-wrapper"
        options={{
          lint: true,
          mode: language,
          theme: "material",
          lineNumbers: true,
          lineWrapping:true
        }}
        value={value}
        onBeforeChange={handleChange}
      />
    </div>
  );
}

export default Element;
