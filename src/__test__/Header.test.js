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
  // expect(myApartmentsLink).toBeInTheDocument();
  // expect(addAListingLink).toBeInTheDocument();

  const logOutLink = screen.queryByText(/log out/i);
  expect(logOutLink).toBeNull();
});

// test("renders Log Out link", () => {
//   render(
//     <BrowserRouter>
//       <Header currentUser="someUser" />
//     </BrowserRouter>
//   );

//   const myApartmentsLink = screen.getByText(/my apartments/i);
//   const addAListingLink = screen.getByText(/add a listing/i);
//   const logOutLink = screen.getByText(/log out/i);

//   expect(myApartmentsLink).toBeInTheDocument();
//   expect(addAListingLink).toBeInTheDocument();
//   expect(logOutLink).toBeInTheDocument();
// });
