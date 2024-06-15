import { Editor } from "@monaco-editor/react";
import CodeSnippetSelector from "./CodeSnippetSelector";
import { useState, useRef } from "react";
import { CODE_SNIPPETS } from "../Constants";
import Output from "./Output";

const CodeEditor = () => {
  const [value, setValue] = useState("");
  const [output, setOutput] = useState(
    "Click 'Run Code' to see the output here"
  );
  const editorRef = useRef();
  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };
  const onSelect = (selectedValue) => {
    setValue(CODE_SNIPPETS[selectedValue]);
  };

  const runCode = async () => {
    setOutput("Compiling...");
    const sourceCode = editorRef.current.getValue();
    const jsonCourceCode = { sourceCode: sourceCode };
    if (!sourceCode) return;
    try {
      const response = await fetch(
        `${process.env.REACT_APP_SERVERURL}/runcode`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(jsonCourceCode),
        }
      );

      const stdText = await response.text();
      setOutput(stdText);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="code-editor-container">
      <div className="selector-container">
        <div className="selector">
          <label>Language:</label>
          <button>Python3</button>
        </div>
        <div className="selector">
          <label>Code Snippets:</label>
          <CodeSnippetSelector onSelect={onSelect} />
        </div>
        <div className="output-selector">
          <label>Output:</label>
          <button className="output-btn" onClick={runCode}>
            Run Code
          </button>
        </div>
      </div>
      <div className="main-content-container">
        <Editor
          height="75vh"
          width="50%"
          theme="vs-dark"
          language="python"
          defaultValue='print("hello world")'
          value={value}
          onMount={onMount}
        />
        <Output output={output} />
      </div>
    </div>
  );
};

export default CodeEditor;
