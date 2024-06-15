const PORT = process.env.PORT ?? 8000;
const express = require("express");
const app = express();
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");

app.use(cors());
app.use(express.json());

app.post("/runcode", (req, res) => {
  const { sourceCode } = req.body;
  const fileName = path.join(__dirname, "mypython.py");
  const cppPath = path.join(__dirname, "mypython.cpp");
  const execPath = path.join(__dirname, "mypython");
  const command = `g++ -std=c++11 -o ${execPath} ${cppPath} && ${execPath} ${fileName}`;

  fs.writeFile(fileName, sourceCode, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Error writing to file");
    }
  });

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(error.message);
      return res
        .status(500)
        .send(`Error executing mypython.cpp: ${error.message}`);
    }
    if (stderr) {
      console.error(`Interpreter stderr: ${stderr}`);
      return res.status(500).send(`Interpreter stderr: ${stderr}`);
    }

    // console.log(`Interpreter stdout: ${stdout}`);
    res.send(stdout);
  });
});

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
