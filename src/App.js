import React, { useState, useEffect, useRef } from "react";
import useWordGame from "./hooks/useWordGame";
import StartPopUp from "./components/startPopUp/StartPopUp";
import Button from "./components/buttons/Button";
function App() {
  const [playTime, setPlayTime] = useState(false);
  const [playTimeInput, setPlayTimeInput] = useState("");
  const initPlayTime = () => {
    setPlayTime(playTimeInput);
  };
  const {
    textBoxRef,
    handleInput,
    input,
    isTimeRunning,
    timeRemaining,
    wordCount,
    startClock,
  } = useWordGame(playTime);

  return (
    <div className="App">
      <StartPopUp
        stateFn={setPlayTimeInput}
        playTimeInput={playTimeInput}
        playTime={playTime}
        initPlayTime={initPlayTime}
      />
      {playTime && (
        <div>
          <h1>React typing game</h1>
          <textarea
            data-testid="game_input_field"
            ref={textBoxRef}
            onChange={(e) => handleInput(e)}
            value={input}
            disabled={!isTimeRunning}
          />
          <h4>Time remaining:{timeRemaining}</h4>

          <Button
            onClickFn={startClock}
            text={timeRemaining !== 0 ? "Start" : "Restart"}
            isDisabled={isTimeRunning}
          />
          <h1> Word Count:{wordCount}</h1>
        </div>
      )}
    </div>
  );
}

export default App;
