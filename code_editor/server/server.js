const PORT = process.env.PORT ?? 8000;
const express = require("express");
const cors = require("cors");
const fs = require("fs").promises;
const path = require("path");
const { exec } = require("child_process");
const util = require("util");

const app = express();
app.use(cors());
app.use(express.json());

const execPromise = util.promisify(exec); // Promisify exec for async/await

app.post("/runcode", async (req, res) => {
  const { sourceCode } = req.body;
  const fileName = path.join(__dirname, "mypython.py");
  const cppPath = path.join(__dirname, "mypython.cpp");
  const execPath = path.join(__dirname, "mypython");
  const command = `g++ -std=c++11 -o ${execPath} ${cppPath} && ${execPath} ${fileName}`;

  try {
    // Write the source code to the file
    await fs.writeFile(fileName, sourceCode);

    // Execute the command
    const { stdout, stderr } = await execPromise(command);

    if (stderr) {
      console.error(`Interpreter stderr: ${stderr}`);
      return res.status(500).send(`Interpreter stderr: ${stderr}`);
    }

    res.send(stdout);
  } catch (error) {
    console.error(error.message);
    return res.status(500).send(`Error: ${error.message}`);
  }
});

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
