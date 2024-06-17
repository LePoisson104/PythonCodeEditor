import { useState, useEffect, useRef } from "react";

const CodeSnippetSelector = ({ onSelect }) => {
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("Select Snippet: ");
  const dropDownRef = useRef();
  const menuRef = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("click", handler);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  const handleSelectedValue = (value) => {
    setSelectedValue(value);
    onSelect(value);
  };

  return (
    <div
      className="dropdown"
      onClick={() => {
        setOpen(!open);
      }}
      ref={dropDownRef}
    >
      <div className={`select ${open ? "clicked" : null}`}>
        <span className="selected">{selectedValue}</span>
        <div className={`caret ${open ? "rotate" : null}`}></div>
      </div>
      <ul className={`menu ${open ? "active" : "inactive"}`} ref={menuRef}>
        <li
          className={`${
            selectedValue === "Simple Operations" ? "current-select" : null
          }`}
          onClick={() => {
            handleSelectedValue("Simple Operations");
          }}
        >
          Simple Operations
        </li>
        <li
          className={`${
            selectedValue === "1lv if else" ? "current-select" : null
          }`}
          onClick={() => {
            handleSelectedValue("1lv if else");
          }}
        >
          1lv if else
        </li>
        <li
          className={`${
            selectedValue === "2lv if else" ? "current-select" : null
          }`}
          onClick={() => {
            handleSelectedValue("2lv if else");
          }}
        >
          2lv if else
        </li>
        <li
          className={`${
            selectedValue === "Function" ? "current-select" : null
          }`}
          onClick={() => {
            handleSelectedValue("Function");
          }}
        >
          Function
        </li>
      </ul>
    </div>
  );
};

export default CodeSnippetSelector;
