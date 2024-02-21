import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "../components/Header";

test("renders header navigation links", () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );

  const homeLink = screen.getByRole('link', {
    name: /home/i
  })
  const viewApartmentsLink = screen.getByRole('link', {
    name: /view apartments/i
  })


  expect(homeLink).toBeInTheDocument();
  expect(viewApartmentsLink).toBeInTheDocument();


  const logOutLink = screen.queryByText(/log out/i);
  expect(logOutLink).toBeNull();
});
