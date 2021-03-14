import { useState, useEffect, useRef } from "react";
function useWordGame(STARTING_TIME) {
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
  }, [timeRemaining, isTimeRunning, STARTING_TIME]);

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

  return {
    textBoxRef,
    handleInput,
    input,
    isTimeRunning,
    timeRemaining,
    wordCount,
    startClock,
  };
}
export default useWordGame;
