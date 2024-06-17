import { Editor } from "@monaco-editor/react";
import CodeSnippetSelector from "./CodeSnippetSelector";
import { useState, useRef } from "react";
import { CODE_SNIPPETS } from "../Constants";
import Output from "./Output";

const CodeEditor = () => {
  const [value, setValue] = useState("");
  const editorRef = useRef();

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onSelect = (selectedValue) => {
    setValue(CODE_SNIPPETS[selectedValue]);
  };

  return (
    <div className="code-editor-container">
      <div className="editor-container">
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
          className="editor"
          height="75vh"
          width="100%"
          theme="vs-dark"
          language="python"
          defaultValue='print("hello world")'
          value={value}
          onMount={onMount}
        />
      </div>
      <Output editorRef={editorRef} />
    </div>
  );
};

export default CodeEditor;
