import React from "react"
import { NavLink } from "react-router-dom"
import { Card, CardGroup, CardImg, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap"


const ApartmentProtectedIndex = ({ currentUser, apartments }) => {
  const myApartments = apartments?.filter(apartment => apartment.user_id === currentUser.id)
  return (
    <div>
      <CardGroup>
        {myApartments?.map((apartment, index) =>{
          return(
            <Card key={index} className="apartment-cards">
              <CardImg
              alt="a space you need to experience"
              src={apartment.image}
              top
              width="100%"
              />
              <CardBody>
                <CardTitle><b>${apartment.price} Per Month</b></CardTitle>
                <CardSubtitle>
                  Located in {apartment.city}, {apartment.state}
                </CardSubtitle>
                <CardSubtitle>{apartment.bedrooms} Bedroom, {apartment.bathrooms} Bathroom
                </CardSubtitle>
                <NavLink to={`/apartmentshow/${apartment.id}`} className="nav-link"> 
                </NavLink>
                <Button>
                  More Details
                </Button>
              </CardBody>
            </Card>
          )
        })}
        </CardGroup>
    </div>
  )
}

export default ApartmentProtectedIndex