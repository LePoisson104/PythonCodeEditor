import { Editor } from "@monaco-editor/react";
import CodeSnippetSelector from "./CodeSnippetSelector";
import { useState } from "react";
import { CODE_SNIPPETS } from "../Constants";

const CodeEditor = () => {
  const [value, setValue] = useState("");

  const onSelect = (selectedValue) => {
    console.log(selectedValue);
    setValue(CODE_SNIPPETS[selectedValue]);
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
      </div>
      <Editor
        height="75vh"
        theme="vs-dark"
        language="python"
        defaultValue='print("hello world")'
        value={value}
      />
    </div>
  );
};

export default CodeEditor;
