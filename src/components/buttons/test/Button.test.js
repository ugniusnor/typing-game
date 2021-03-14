import React from "react";
import ReactDOM from "react-dom";
import Button from "../Button";

it("renders button without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Button text={"this is test text"} />, div);
  expect(div.querySelector("button").textContent).toBe("this is test text");
});
