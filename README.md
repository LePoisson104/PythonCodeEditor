# PythonCodeEditor

## Online Python IDE

- I built this online Python IDE using Monaco editor from React for the frontend and ExpressJs for the backend, which sends Python code to a C++ program for interpretation. The C++ code is divided into three main components: lexer, parser, and interpreter. The program reads the Python code line by line, passing it into the lexer for tokenization. The list of tokens is then passed to the parser, which constructs an Abstract Syntax Tree (AST) composed of various types of nodes. Finally, the AST is sent to the interpreter, which processes the nodes and outputs the results. This seamless integration of modern web technologies with a robust C++ backend creates a powerful and efficient coding environment.

## Features:

- The Python code you provided will be interpreted by a C++ program, which can only understand some basic Python grammars. Here is a list of features that the program can interpret.

  - variable declaration e.g. a = 2 or it can take it as an expression a = 2 + 1 \* 7
  - built-in print() function that can print a string or a string follow by a variable e.g print("result", a)
  - If else statement up to 2 levels
  - and basic funtions, for example please check the code snippets from above

## HOSTED LINK

- https://pythoncodeeditor-1.onrender.com

## Instructions:

```bash
# Clone this repo
git clone https://github.com/LePoisson104/PythonCodeEditor.git
```

```bash
# Navigate to code_editor file
cd code_editor
```

```bash
# Navigate to the client or server directory
cd client/server
```

```bash
# Install dependencies
npm install
```

```bash
# Start the client/server
npm run start
```
