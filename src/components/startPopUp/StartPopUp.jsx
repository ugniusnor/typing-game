import React, { useState } from "react";
import Button from "../buttons/Button";
export default function StartPopUp({
  stateFn,
  playTime,
  playTimeInput,
  initPlayTime,
}) {
  const checkInput = (input) => {
    const re = /^[1-9][0-9]*$/;
    if (re.test(input) && parseInt(input) < 60 && input.length > 0) {
      return true;
    } else {
      return false;
    }
  };
  const [isInputRight, setIsInputRight] = useState(true);

  const handleSumbit = (input) => {
    if (checkInput(input)) {
      initPlayTime(input);
    } else {
      setIsInputRight(false);
    }
  };

  return (
    <div className="pop_up" style={{ display: !playTime ? "block" : "none" }}>
      <label htmlFor="play_time_input">Set playing time</label>
      <input
        data-testid="pop_up_input"
        id="play_time_input"
        name="play_time_input"
        value={playTimeInput}
        onChange={(e) => {
          stateFn(e.target.value);
        }}
      />
      <Button
        text={"OK"}
        onClickFn={() => {
          handleSumbit(playTimeInput);
        }}
      />
      {!isInputRight && (
        <small className="err_msg">
          Sorry, wrong input <br />
        </small>
      )}
    </div>
  );
}
