import React from "react"
import { useParams } from "react-router-dom"

const ApartmentShow = ({ apartments }) => {
  const { id } = useParams()
  let currentApartment = apartments.find((apartment) => apartment.id === +id)

  return (
    <div>
      {/* <h3>ApartmentShow</h3> */}
    </div>
  )
}

export default ApartmentShow