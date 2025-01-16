import { Box, flexbox, Text } from "@chakra-ui/react";
import { useState } from "react";

const Output = ({ editorRef }) => {
  const [output, setOutput] = useState(
    "Click 'Run Code' to see the output here"
  );
  const [responseTime, setResponseTime] = useState(null);

  const runCode = async () => {
    setResponseTime(null);
    setOutput("Interpreting...");
    const sourceCode = editorRef.current.getValue();
    const jsonCourceCode = { sourceCode: sourceCode };
    if (!sourceCode) return;

    try {
      const startTimer = performance.now();
      const response = await fetch(
        `${process.env.REACT_APP_SERVERURL}/runcode`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(jsonCourceCode),
        }
      );

      if (!response.ok) {
        // If the response status is not OK, throw an error
        throw new Error(
          `HTTP error! Sorry the code that you provided may not be supported by the interpreter. | Status Code: ${response.status} |`
        );
      }

      const endTimer = performance.now();
      setResponseTime(endTimer - startTimer);

      const stdText = await response.text();
      console.log(stdText);
      setOutput(stdText);
    } catch (err) {
      console.error("An error occurred:", err); // Log the full error object
      setOutput(`Error: ${err.message}`); // Display the error message in the output
    }
  };

  let formattedTime;

  if (responseTime >= 1000) {
    // Convert to seconds if the response time is 1000ms or more
    formattedTime = (responseTime / 1000).toFixed(2) + "s";
  } else {
    // Keep it in milliseconds if less than 1000ms
    formattedTime = Math.round(responseTime) + "ms";
  }

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
      <Box
        height="74.5vh"
        p={2}
        background="#202020"
        display={"flex"}
        justifyContent={"space-between"}
        flexDirection={"column"}
      >
        <Text paddingLeft={8} sx={{ whiteSpace: "pre-wrap" }}>
          {output}
        </Text>
        <Text paddingLeft={8}>{responseTime ? formattedTime : ""}</Text>
      </Box>
    </Box>
  );
};

export default Output;
