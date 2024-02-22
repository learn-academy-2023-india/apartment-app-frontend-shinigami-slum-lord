import React from "react"
import { NavLink } from "react-router-dom"
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap"

const ApartmentIndex = ( {apartments} ) => {
  return(
  <div className="catIndex">
      {apartments?.map((apartment) => {
        return(
          <Card key={apartment.id} className="apartment-Cards">
            <CardImg
              style={{
                width: "20rem"
              }}
              src={apartment.image}
              alt={`Apartment at ${apartment.street}`}
              className="apartimage"
            />
            <CardBody>
              <div className="textapartment">
                <CardTitle>${apartment.price} Per Month</CardTitle>
                <CardSubtitle>Street: {apartment.street}, {apartment.city}, {apartment.state}</CardSubtitle>
                <CardSubtitle>{apartment.bedrooms} Bedrooms, {apartment.bathrooms} Bathroom</CardSubtitle>
              </div>
              <NavLink to={`/apartmentshow/${apartment.id}`} className="navigation-link">
                <Button className="apartmentbutton">More Info</Button>
              </NavLink>
            </CardBody>
          </Card>
        )
      })}
    </div>
  )
}

export default ApartmentIndex