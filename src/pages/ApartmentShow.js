import React from "react"
import { useParams } from "react-router-dom"

const ApartmentShow = ({ apartments }) => {
  const { id } = useParams()
  let currentApartment = apartments?.find((apartment) => apartment.id === +id)

  return (
    <main className="apartment-show-cards">
      {currentApartment && (
        <>
         <img
            alt={`Preview of an apartment ${currentApartment.unit}`}
            src={currentApartment.image}
            className="apartment-show-img"
          />
        </>
      )}
    </main>
  )
}

export default ApartmentShow