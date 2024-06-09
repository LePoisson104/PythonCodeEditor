const Appendix = () => {
  return (
    <div className="appendix-container">
      <footer>
        <h2>Online Python IDE</h2>
        <p>
          I built this online Python IDE using Monaco editor from React for the
          frontend and ExpressJs for the backend, which sends Python code to a
          C++ program for interpretation. The C++ code is divided into three
          main components: lexer, parser, and interpreter. The program reads the
          Python code line by line, passing it into the lexer for tokenization.
          The list of tokens is then passed to the parser, which constructs an
          Abstract Syntax Tree (AST) composed of various types of nodes.
          Finally, the AST is sent to the interpreter, which processes the nodes
          and outputs the results. This seamless integration of modern web
          technologies with a robust C++ backend creates a powerful and
          efficient coding environment.
        </p>
        <h2>About Python</h2>
        <p>
          Python, initially developed by Guido van Rossum and released to the
          public in 1991, is now one of the most widely used general-purpose
          programming languages. Its source code is freely available, and it can
          be used and distributed without restrictions, including for commercial
          purposes. Python is extensively employed in web development, enabling
          the creation of mobile apps, online apps, tools, data analytics, and
          machine learning applications. Designed to be straightforward and
          user-friendly, Python resembles the English language, making it
          simpler to read and write compared to languages like C++, Java, and
          C#. Its high productivity and efficiency have contributed to its
          popularity as a preferred programming language.
        </p>
        <h2>Features:</h2>
        <p>
          The Python code you provided will be interpreted by a C++ program,
          which can only understand some basic Python grammars. Here is a list
          of features that the program can interpret.
        </p>
        <ul>
          <li>
            variable declaration e.g. a = 2 or it can take it as an expression a
            = 2 + 1 * 7
          </li>
          <li>
            built-in print() function that can print a string or a string follow
            by a variable e.g print("result", a)
          </li>
          <li>If else statement up to 2 levels</li>
          <li>
            and basic funtions, for example please check the code snippets from
            above
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Appendix;
