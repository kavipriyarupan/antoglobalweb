import React, { useState, useEffect, useMemo } from "react";
import Boxsolutionimage from "../assets/Boxsolutionimage.png";

const SolutionBox = () => {
  const industries = useMemo(
    () => [
      "Automotive",
      "Pharma",
      "Healthcare",
      "Chemical",
      "Food and Beverage",
      "and so on!",
    ],
    []
  );

  const [currentIndustry, setCurrentIndustry] = useState(industries[0]);
  const intervalDuration = 1700;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndustry(
        (prev) => industries[(industries.indexOf(prev) + 1) % industries.length]
      );
    }, intervalDuration);

    return () => clearInterval(interval);
  }, [industries]);

  return (
    <div className="trust-box flex flex-col font-lato md:flex-row items-center py-4 px-4 md:px-8 rounded-lg shadow-lg bg-blue-600 h-[250px]">
      <div className="md:w-1/2 text-center md:text-left mb-4 md:mb-0 ml-10">
        <h2 className="text-lg md:text-4xl font-bold text-white">
          Your vision,Our Passion
        </h2>
        <p className="mt-2 text-white leading-relaxed text-xl md:text-2xl">
          Trusted Solutions for{" "}
          <span className="font-bold text-yellow-300 animate-text">
            {currentIndustry}
          </span>
        </p>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <img
          src={Boxsolutionimage}
          alt="Trust"
          className="w-32 h-32 md:w-[280px] md:h-[250px] object-contain ml-20"
        />
      </div>
    </div>
  );
};

export default SolutionBox;
