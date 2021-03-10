import React, { useState, useEffect, useRef } from "react";
function App() {
  const STARTING_TIME = 5;
  const [input, setInput] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME);
  const [isTimeRunning, setIsTimeRunning] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const textBoxRef = useRef(null);

  const handleInput = (e) => {
    const { value } = e.target;
    setInput(value);
  };

  useEffect(() => {
    if (isTimeRunning && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining((time) => time - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      endGame();
    }
  }, [timeRemaining, isTimeRunning]);

  function calculateWordCount(text) {
    const wordsArr = text
      .trim()
      .split(" ")
      .filter((word) => word !== "").length;

    return wordsArr;
  }

  async function startClock() {
    await setIsTimeRunning(true);
    setTimeRemaining(STARTING_TIME);
    setInput("");

    textBoxRef.current.focus();
  }

  function endGame() {
    setIsTimeRunning(false);
    setWordCount(calculateWordCount(input));
  }

  return (
    <div className="App">
      <h1> Title</h1>
      <textarea
        ref={textBoxRef}
        onChange={(e) => handleInput(e)}
        value={input}
        disabled={!isTimeRunning}
      />
      <h4>Time remaining:{timeRemaining} </h4>
      <button onClick={startClock} disabled={isTimeRunning}>
        {timeRemaining !== 0 ? "Start" : "Restart"}
      </button>
      <h1> Word Count:{wordCount}</h1>
    </div>
  );
}

export default App;
