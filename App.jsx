import { useState } from "react";

export default function App() {
  const [input, setInput] = useState("");

  const [chip, setChip] = useState([]);

  const handleKey = (e) => {
    if (e.key === "Enter" && input.trim() !== "") {
      setChip((prev) => [...prev, input]);
      setInput("");
    }
  };

  const handleDelete = (index) => {
    const copyChips = [...chip];
    copyChips.splice(index, 1);
    setChip(copyChips);
  };

  return (
    <div className="flex justify-center">
      <div className="">
        <input
          className="border"
          type="text"
          placeholder="Enter"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => handleKey(e)}
        />
        <br />
        <div className = 'flex'>
        {chip.map((data, index) => (
          <div className="flex-1 bg-gray border rounded-xl text-center mb-2 mt-2">
            {data}
            <button
              className="ml-16 text-red-400 hover:cursor-pointer"
              onClick={() => handleDelete(index)}
            >
              X
            </button>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}
