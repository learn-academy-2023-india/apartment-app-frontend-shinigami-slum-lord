import { render, screen } from "@testing-library/react"
import { MemoryRouter, Routes, Route } from "react-router-dom";
import ApartmentShow from "../pages/ApartmentShow"
import mockApartments from '../mockApartments'

describe("<ApartmentShow />", () => {
  it("renders one apartment", () => {
    render(
      <MemoryRouter initialEntries={["/apartmentshow/1"]}>
        <Routes>
          <Route path="apartmentshow/:id" element={<ApartmentShow apartments={mockApartments}/>} />
        </Routes>
      </MemoryRouter>
    )
    const apartmentInfo = screen.getByRole('img', {
      name: /preview of an apartment 9a/i
    })
    expect(apartmentInfo).toBeInTheDocument()
  })
})
