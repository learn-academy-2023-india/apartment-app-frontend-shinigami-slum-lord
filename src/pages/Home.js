import React from "react"
import shinslum from "../assets/shinslum.png"

const Home = () => {
  return (
    <div>
      <header>
        <h1>Welcome to Shinigami Slums</h1>
      </header>
      <section>
        <img src={shinslum} alt="Shin Sumire's profile picture" />
        <p>
          <strong>Discover your Dream Living in the Heart of the Shadows</strong>
          <br />
          Are you seeking a place where the mystical allure of the shadows meets modern living? Look no further! At Shinigami Slums, we specialize in connecting you with the perfect home in the most desirable areas of the city.
        </p>
        <p>
          <strong>🏰 Our Offerings:</strong>
          <br />
          <strong>Shadow-Infused Residences:</strong> Immerse yourself in homes with a touch of the supernatural, where the echoes of history and mystery dance through the walls.
          <br />
          <strong>Whispering Alleys:</strong> Explore properties nestled in quiet corners, where the soft whispers of the city reveal its secrets.
          <br />
          <strong>Soulful Spaces:</strong> From cozy apartments to sprawling lofts, we have spaces that resonate with the essence of your soul. 
        </p>
        <p>
          <strong>Featured Property:</strong>
          <br />
          A spacious living space with a private entrance and elevator access.


          
        </p>
      </section>
    </div>
  )
}

export default Home
