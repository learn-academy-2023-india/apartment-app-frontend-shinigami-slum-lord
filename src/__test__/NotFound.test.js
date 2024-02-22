import React from "react";
import { render, screen } from "@testing-library/react";
import NotFound from "../pages/NotFound";

test("renders Not Found page correctly", () => {
  render(<NotFound />);

  expect(screen.getByText(/404 - Not Found/i)).toBeInTheDocument();
  expect(screen.getByText(/The page you are looking for doesn't exist/i)).toBeInTheDocument();
});
