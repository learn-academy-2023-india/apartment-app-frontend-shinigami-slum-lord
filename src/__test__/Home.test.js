import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";

test("renders Home component", () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );

  expect(screen.getByText(/Welcome to Shinigami Slums/i)).toBeInTheDocument();

  // Using getByRole for heading
  expect(screen.getByRole('heading', { name: /Welcome to Shinigami Slums/i })).toBeInTheDocument();
});
