import React, { useState } from "react";
import Automotiveindustry from "../assets/Automotiveindustry.png";
import Glassindustry from "../assets/Glassindustry.png";
import Tireindustry from "../assets/Tireindustry.png";
import Pharmaindustry from "../assets/Pharmaindustry.png";
import Cementindustry from "../assets/Cementindustry.png";
import Chemicalindustry from "../assets/Chemicalindustry.png";
import Healthcareindustry from "../assets/Healthcareindustry.png";
import Paperindustry from "../assets/Paperindustry.png";
import Electronicsindustry from "../assets/Electronicsindustry.png";
import Foodbeverageindustry from "../assets/Foodbeverageindustry.png";
import Waterindustry from "../assets/Waterindustry.png";
import Agroindustry from "../assets/Agroindustry.png";
import { Link } from "react-router-dom";

const CardGrid = () => {
  const cardData = [
    {
      id: 1,
      title: "Automotive Industry",
      image: Automotiveindustry,
      path: "/automotive",
    },
    { id: 2, title: "Tire Industry", image: Tireindustry, path: "/tire" },
    { id: 3, title: "Glass Industry", image: Glassindustry, path: "/glass" },
    { id: 4, title: "Pharma Industry", image: Pharmaindustry, path: "/pharma" },
    { id: 5, title: "Cement Industry", image: Cementindustry, path: "/cement" },
    {
      id: 6,
      title: "Chemical Industry",
      image: Chemicalindustry,
      path: "/chemical",
    },
    {
      id: 7,
      title: "Healthcare Industry",
      image: Healthcareindustry,
      path: "/healthcare",
    },
    { id: 8, title: "Paper Industry", image: Paperindustry, path: "/paper" },
    {
      id: 9,
      title: "Electronics Industry",
      image: Electronicsindustry,
      path: "/electronics",
    },
    {
      id: 10,
      title: "Food & Beverage Industry",
      image: Foodbeverageindustry,
      path: "/food-beverage",
    },
    { id: 11, title: "Agro Industry", image: Agroindustry, path: "/agro" },
    { id: 12, title: "Water Industry", image: Waterindustry, path: "/water" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const cardsPerRow = 3;
  const totalRows = Math.ceil(cardData.length / cardsPerRow);

  const currentCards = cardData.slice(
    activeIndex * cardsPerRow,
    (activeIndex + 1) * cardsPerRow
  );

  return (
    <div className="py-8 px-2 md:px-16 font-lato">
      <h2 className="text-lg md:text-4xl font-bold text-center mb-8">
        Bridging gaps, driving results—because your goals matter.
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
        {currentCards.map((card) => (
          <Link to={card.path}>
            <div
              key={card.id}
              className="bg-white h-[260px] rounded-lg shadow-md transition-shadow hover:shadow-lg border border-2 border-transparent hover:border-blue-500"
            >
              <div className="flex justify-center items-center pt-6">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-[160px] h-[130px] object-contain"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-center mt-6">
                  {card.title}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex justify-center mt-6 space-x-4">
        {Array.from({ length: totalRows }).map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`h-[4px] w-[24px] rounded-full ${
              activeIndex === index ? "bg-blue-600" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
