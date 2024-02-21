import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

test("renders naviagation list", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );

  const navList = screen.getByRole("link", {
    name: /home/i,
  });
  expect(navList).toBeInTheDocument();
});
