import React, { useState } from "react";

// Import images
import techie from "../../assets/techie.jpg";
import Ourteam from "../../assets/Ourteam.jpg";
import char from "../../assets/char.jpg";
import team from "../../assets/team.png";
import heart from "../../assets/heart.png";
import cpu from "../../assets/cpu.png";

function FullComponent() {
  const [currentContent, setCurrentContent] = useState("vision");

  // Sidebar menu items with images
  const menuItems = [
    { id: "vision", label: "Our Team", image: team },

    { id: "mission", label: "Our Tech", image: cpu },
    { id: "staff", label: "CSR", image: heart },
  ];

  // Content data for dynamic rendering
  const contentData = {
    vision: {
      image: Ourteam,
      title: (
        <>
          Our Team is the <span className="text-blue-500">driving force</span>{" "}
          behind our success
        </>
      ),
      description:
        "We are a dynamic team of innovators, united to deliver excellence and shape a better future together.",
    },
    mission: {
      image: techie,
      title: (
        <>
          Technology built to{" "}
          <span className="text-blue-500">inspire and perform</span>
        </>
      ),
      description:
        "Our technology is designed to make a lasting impact, enabling businesses to thrive and succeed in the digital age.",
    },
    staff: {
      image: char,
      title: (
        <>
          Empowering life through{" "}
          <span className="text-blue-500">kindness </span>and compassion
        </>
      ),
      description:
        "When we give from the heart, we provide more than support—we offer strength, hope, and the belief that a better tomorrow is possible.",
    },
  };

  return (
    <div className="flex h-[800px] bg-white items-center justify-center ml-[80px]">
      <div className="flex w-4/5 h-4/5 bg-white rounded-lg ">
        {/* Sidebar */}
        <div className="flex flex-col items-center bg-white w-1/5 py-8 mt-[40px]">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className={`flex flex-col items-center justify-center p-4 cursor-pointer rounded-md ${
                currentContent === item.id
                  ? "bg-white text-blue-500 font-semibold shadow-md"
                  : "text-gray-600 hover:text-blue-400 opacity-50"
              }`}
              onClick={() => setCurrentContent(item.id)}
              style={{ width: "60%" }} // Reduced box width
            >
              <img
                src={item.image}
                alt={item.label}
                className="w-16 h-16 mb-2" // Increased image size
              />
              <div className="text-lg text-bold text-black">{item.label}</div>
            </div>
          ))}
        </div>

        {/* Content Display */}
        <div className="flex-1 flex bg-white p-8 rounded-r-lg">
          {/* Image Section */}
          <div className="flex-shrink-0">
            <img
              src={contentData[currentContent].image}
              alt="Content"
              className="w-96 h-[500px] rounded-lg mb-[80px]"
            />
          </div>

          {/* Text Section */}
          <div className="ml-8 flex flex-col justify-center items-center text-center">
            {/* Icon */}
            <img
              src={menuItems.find((item) => item.id === currentContent).image}
              alt={contentData[currentContent].title}
              className="w-[40px] h-[50px] mb-4 mr-[222px]" // Adjusted icon size and spacing
            />
            {/* Title */}
            <h2 className="text-3xl font-bold text-black mb-4">
              {contentData[currentContent].title}
            </h2>
            {/* Description */}
            <p className="text-lg text-gray-700">
              {contentData[currentContent].description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FullComponent;
