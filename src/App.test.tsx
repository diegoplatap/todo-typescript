import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

it("renders a todo app", () => {
  render(<App />);
  const linkElement = screen.getByText(/Todo App with Typescript/i);
  expect(linkElement).toBeInTheDocument();
});
