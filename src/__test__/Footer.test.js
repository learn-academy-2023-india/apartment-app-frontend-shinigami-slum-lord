import React from "react";
import { render, screen } from  "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Footer from "../components/Footer";

test("renders footer content", () => {
  render(
    <BrowserRouter>
      <Footer />
    </BrowserRouter>
  );
  const footerText = screen.getByRole('contentinfo')

  expect(footerText).toBeInTheDocument();
});
