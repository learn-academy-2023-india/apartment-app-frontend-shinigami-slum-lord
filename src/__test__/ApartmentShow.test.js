import { render } from "@testing-library/react"
import { MemoryRouter, Routes, Route } from "react-router-dom";
import ApartmentShow from "../pages/ApartmentShow"
import mockApartments from '../mockApartments'

describe("<ApartmentShow />", () => {
  it("renders without crashing", () => {})
  it("renders apartment cards", () => {
    render(
      <MemoryRouter initialEntries={["/apartmentshow/1"]}>
        <Routes>
          <Route path="apartmentshow/:id" element={<ApartmentShow apartments={mockApartments}/>} />
        </Routes>
      </MemoryRouter>
    )
  })
})
