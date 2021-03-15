import React from "react";
import App from "./App";
import { render, fireEvent, getByLabelText, act } from "@testing-library/react";

test("renders the app component", () => {
  const { getByText, getByTestId } = render(<App />);
  expect(getByText("Set playing time")).not.toBeNull();
  expect(getByText("OK")).not.toBeNull();
  expect(getByTestId("pop_up_input")).not.toBeNull();
  //   expect(root.querySelector(".pop_up > input")).toBeTruthy();
});
test("Allows to start a game", () => {
  const { getByText, getByTestId, getByLabelText } = render(<App />);
  const input = getByLabelText("Set playing time");
  fireEvent.change(input, {
    target: { value: "5" },
  });
  fireEvent.click(getByText("OK"));
  expect(getByText("React typing game")).not.toBeNull();
  expect(getByTestId("game_input_field")).not.toBeNull();
  expect(getByText("Time remaining:")).not.toBeNull();
  expect(getByText("Start")).not.toBeNull();
  expect(getByText("Word Count:0")).not.toBeNull();
});
test("Does not allow to start the game", () => {
  const { getByText, getByTestId, getByLabelText } = render(<App />);
  const input = getByLabelText("Set playing time");
  fireEvent.change(input, {
    target: { value: "aaaa" },
  });
  fireEvent.click(getByText("OK"));
  expect(getByText("Sorry, wrong input")).not.toBeNull();
  fireEvent.change(input, {
    target: { value: "<><><><" },
  });
  fireEvent.click(getByText("OK"));
  expect(getByText("Sorry, wrong input")).not.toBeNull();
  fireEvent.change(input, {
    target: { value: "    " },
  });
  fireEvent.click(getByText("OK"));
  expect(getByText("Sorry, wrong input")).not.toBeNull();
  fireEvent.change(input, {
    target: { value: "  2 2 2 2   " },
  });
  fireEvent.click(getByText("OK"));
  expect(getByText("Sorry, wrong input")).not.toBeNull();
});
