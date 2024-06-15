import CodeEditor from "./components/CodeEditor";
import Header from "./components/Header";
import Appendix from "./components/Appendix";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content-container">
        <CodeEditor />
        <Appendix />
        <p className="copy-right">
          © 2024 @LePoisson104 online-python-code-editor
        </p>
      </div>
    </div>
  );
}

export default App;
