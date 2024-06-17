import { Box, Text } from "@chakra-ui/react";
import { useState } from "react";

const Output = ({ editorRef }) => {
  const [output, setOutput] = useState(
    "Click 'Run Code' to see the output here"
  );

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
    <Box className="output-container">
      <div className="selector-container">
        <div className="selector">
          <label>Output::</label>
          <button className="output-btn" onClick={runCode}>
            Run Code
          </button>
        </div>
      </div>
      <Box height="74.5vh" p={2} background="#202020">
        <Text paddingLeft={8}>{output}</Text>
      </Box>
    </Box>
  );
};

export default Output;
