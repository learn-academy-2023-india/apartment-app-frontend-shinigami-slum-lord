import React from "react";
import { render, screen } from  "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ApartmentIndex from "../pages/ApartmentIndex";
import mockApartments from "../mockApartments";

describe("<apartmentIndex />", () =>{
    it("renders apartment cards", () => {

        render(
            <BrowserRouter>
                <ApartmentIndex apartments={mockApartments} />
            </BrowserRouter>
        )
        mockApartments.forEach((apartment) =>{
            screen.logTestingPlaygroundURL()
            const apartmentStreet = screen.getByText(/street: 101 rimrock, san diego, ca/i)
            expect(apartmentStreet).toBeInTheDocument()
        })
    }) 
})

