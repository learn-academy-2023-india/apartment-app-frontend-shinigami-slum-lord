import { render } from "@testing-library/react"
import { MemoryRouter, Routes, Route } from "react-router-dom";
import ApartmentShow from "../pages/ApartmentShow"
import mockApartments from '../mockApartments'

describe("<ApartmentShow />", () => {
  it("renders without crashing", () => {})
  it("renders cat cards", () => {
    render(
      <MemoryRouter initialEntries={["/catshow/1"]}>
        <Routes>
          <Route path="catshow/:id" element={<CatShow cats={mockCats}/>} />
        </Routes>
      </MemoryRouter>
    )
  })
})
