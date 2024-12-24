import React from "react";
import "../Charity/Charity.css"; // Custom CSS for styling
import Trustkids from "../../assets/Trustkids.jpg";
import Windmill from "../../assets/Windmill.jpg";
import Planet from "../../assets/Planet.jpg";
import Csrimage from "../../assets/Csrimage.png";

function FlipCards() {
  const cards = [
    {
      id: 1,
      image: Windmill, // Front image
      title: "Wind Energy", // Front title
      description:
        "At Anto, we are dedicated to preserving the natural beauty of our planet for future generations. In our ongoing efforts to maintain a balanced ecosystem, we have invested in wind power, reinforcing our mission to create a cleaner, greener world for all to enjoy. Together, we are working towards a better, more eco-friendly future.", // Back description
    },
    {
      id: 2,
      image: Trustkids, // Front image
      title: "Anto Charitable Trust", // Front title
      description:
        "Anto Charitable Trust is dedicated to empowering communities through education and healthcare. We support the families of our employees and extend our efforts to those in need. The Trust also focuses on enhancing rural schools with better infrastructure and resources. Together, we’re building a brighter, healthier future for all.", // Back description
    },
    {
      id: 3,
      image: Planet, // Front image
      title: "Protect our Earth", // Front title
      description:
        "Our planet faces significant threats from carbon emissions and climate change. By promoting the use of recyclable products, we help reduce these harmful effects. We take immense pride in offering technology that drives the production of eco-friendly products, contributing to a greener, safer world for future generations.", // Back description
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between py-8 bg-sky-50 h-[300px]">
        <div className="w-1/2 ml-[60px] ">
          <h2 className="text-2xl font-semibold text-blue-600 text-center mx-auto">
            Innovating for a Better Future
          </h2>
          <p className="mt-4 text-gray-600 text-center mx-auto">
            At AntoGlobal, our CSR efforts are rooted in innovation and
            responsibility. We leverage our expertise to develop solutions that
            benefit both the planet and people. From reducing our carbon
            footprint to enhancing access to education, we are committed to
            fostering a sustainable future. Our initiatives aim to bridge the
            gap between business and social responsibility, ensuring a better
            world for generations to come.Through innovative and ethical
            practices, we are ensuring a positive legacy for future generations.
            Our focus on sustainability and social responsibility drives us to
            lead by example in our industry. Together, we are paving the way for
            a more sustainable and inclusive society.
          </p>
        </div>
        <div className="w-1/2">
          <img
            src={Csrimage} // Replace with actual image path
            alt="An automation system"
            className="rounded-lg "
          />
        </div>
      </div>
      {/* Flip Cards Section */}
      <div className="cards-container mt-[20px]">
        {cards.map((card) => (
          <div key={card.id} className="card">
            <div className="card-inner">
              {/* Front Side with Image and Title */}
              <div className="card-front">
                <img
                  src={card.image}
                  alt={`Card ${card.id}`}
                  className="card-image"
                />
                <h3 className="card-title">{card.title}</h3>
              </div>
              {/* Back Side with Title and Description */}
              <div className="card-back">
                <h3 className="back-title">{card.title}</h3>
                <p>{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Second Section - Title, Description, Image */}
    </div>
  );
}

export default FlipCards;
