import { Button, Input } from "antd";
import "./App.css";
import { useState, useEffect } from "react";
import WriteTask from "./WriteTask";

function App() {
  const [showWriter, setShowWriter] = useState(false);

  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);

  // changing input value
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  // event Enter keydown
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setShowWriter(false);

      // localStorage.setItem("savedValue", inputValue);
      // setInputValue("");

      // upd localStorage value
      if (inputValue) {
        const updatedItems = [...items, inputValue];
        setItems(updatedItems);
        localStorage.setItem("items", JSON.stringify(updatedItems));
      }
    }
  };

  // useEffect(() => {
  //   const items = JSON.parse(localStorage.getItem("savedValue"));
  // });

  // {
  //   items.map((item, index) => <li key={index}>{item}</li>);
  // }

  return (
    <>
      <div className="main-container">
        <h1>Write your task</h1>
        <div className="card">
          <Button onClick={() => setShowWriter(true)}>Add task</Button>
          {/* {showWriter && <WriteTask  />} */}
          {showWriter && (
            <Input
              onKeyDown={handleKeyDown}
              value={inputValue}
              onChange={handleChange}
            />
          )}
          {/* {showTask && <Tasks />} */}
          <div className="all-tasks">
            <ul>
              {items.map((key, index) => {
                <li>
                  key: {key} index: {index}
                </li>;
              })}
            </ul>
          </div>
          <p>Сохраненное значение: {inputValue}</p>
        </div>
      </div>
    </>
  );
}

export default App;
