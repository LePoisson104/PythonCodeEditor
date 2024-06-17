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
      </div>
    </div>
  );
}

export default App;
