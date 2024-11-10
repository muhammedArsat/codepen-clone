import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Editor from "./components/compiler/Element";
function App() {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [output, setOutput] = useState("");

  useEffect(() => {
    setOutput(`
      <html>
      <body>
      ${html}
      </body>
      <style>
      ${css}
      </style>
      <script>${js}</script>
      </html>
      
      `);
  }, [html,css,js]);

  return (
    <div>
      <Navbar />
      <div className="code-container">
        <Editor
          key={"html"}
          language={"xml"}
          title="HTML"
          value={html}
          onChange={setHtml}
        />
        <Editor
          key={"css"}
          language={"css"}
          title={"css"}
          value={css}
          onChange={setCss}
        />
        <Editor
          key={"js"}
          language={"javascript"}
          title={"js"}
          value={js}
          onChange={setJs}
        />
      </div>
      <div className="output-container">

        <iframe srcDoc={output} title="output" sandbox="allow-scripts" width="100%" height="100%"/>
      </div>
    </div>
  );
}

export default App;
