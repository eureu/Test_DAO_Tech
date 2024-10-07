import { Button, Input } from "antd";
import "./App.css";
import { useState, useEffect } from "react";
import WriteTask from "./WriteTask";

function App() {
  const [showWriter, setShowWriter] = useState(false);
  const [showTask, setShowTask] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setShowWriter(false);
      setShowTask(true);
      localStorage.setItem("savedValue", inputValue);
      setInputValue("");
    }
  };

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
          <div className="all-tasks"></div>
          <p>Сохраненное значение: {inputValue}</p>
        </div>
      </div>
    </>
  );
}

export default App;
