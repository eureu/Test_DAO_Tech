import { Input } from "antd";
import { useEffect, useState } from "react";
export default function WriteTask() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setShowWriter(false);
      localStorage.setItem("savedInput", inputValue);
      // setInputValue("");
    }
  };

  useEffect(() => {
    const savedValue = localStorage.getItem("savedInput");
    if (savedValue) {
      setInputValue(savedValue);
    }
  }, []);

  return (
    <div>
      <Input
        type="text"
        placeholder="write"
        value={inputValue}
        onKeyDown={handleKeyDown}
        onChange={handleChange}
      />
    </div>
  );
}
