import React from "react";

export default function Button({ onClickFn, text, isDisabled = false }) {
  return (
    <button data-testid="button" disabled={isDisabled} onClick={onClickFn}>
      {text}
    </button>
  );
}
