import React, { useState } from "react";

import "./App.css";

function App() {
  const [num, setNum] = useState(0);
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(0);
 

  const handleSum = () => {
    if (num < 150) {
      const newNum = num + 1;
      updateNumber(newNum);
    } else {
      alert("Not grether than 150");
    }
  };
  const handleSub = () => {
    if (num > 0) {
      const newNum = num - 1;
      updateNumber(newNum);
    } else {
      alert("Not less than 0 ");
    }
  };

  const updateNumber = (newNum) => {
    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push(newNum);
    setHistory(newHistory);
    setHistoryIndex(historyIndex + 1);
    setNum(newNum);
  };

  const handleUndo = () => {
    if (historyIndex > 0) {
      setHistoryIndex(historyIndex - 1);
      setNum(history[historyIndex - 1]);
    }
  };
  const handleRedo = () => {
    if (historyIndex < history.length - 1) {
      setHistoryIndex(historyIndex + 1);
      setNum(history[historyIndex + 1]);
    }
  };


  return (
    <>
    <div className="py-7">
      <div className="flex gap-2 w-5/6 mx-auto">
        <button
          onClick={handleRedo}
          className="flex items-center justify-center  bg-blue-800   py-2 px-10"
          disabled={historyIndex === history.length - 1}
        >
          Redo
        </button>
        <button onClick={handleUndo} className="flex items-center justify-center  bg-blue-800 py-2 px-10 " disabled={historyIndex === 0}>
          Undo
        </button>
      </div>

      <div className="flex justify-center items-center h-screen  ">
        <div className="flex items-center flex-col justify-center gap-5 w-4/6 mx-auto">
          <p className="text-2xl font-semibold"> Current Number : {num}</p>

          <div className="w-5/6 m-auto mb-5 bg-gray-400 h-6 rounded overflow-hidden ">
            <div
              className="bg-blue-800 h-full duration-200 ease-linear"
              style={{ width: `${(num / 150) * 100}%` }}
            ></div>
          </div>

          <div className="flex items-center justify-center gap-2">
            <button
              onClick={handleSum}
              className=" flex items-center justify-center w-10 bg-blue-800   text-3xl "
            >
              +
            </button>

            <button
              onClick={handleSub}
              className=" flex items-center justify-center w-10 bg-blue-800   text-3xl "
            >
              -
            </button>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default App;
