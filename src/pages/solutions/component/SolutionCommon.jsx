import React, { useEffect, useRef } from "react";

const SolutionCommon = ({
  backgroundImage,
  mainTitle,
  mainDescription,
  featureTitle,
  features,
  automationTitle,
  automationDescription,
  thirdDivTitle,
  thirdDivDescription,
  contentImage,
}) => {
  const cardRef = useRef([]);

  // Use IntersectionObserver to detect when feature cards come into view
  useEffect(() => {
    const options = {
      rootMargin: "0px",
      threshold: 0.5, // Trigger when 50% of the card is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-slide-up"); // Add animation class when visible
          observer.unobserve(entry.target); // Stop observing after animation trigger
        }
      });
    }, options);

    cardRef.current.forEach((card) => {
      if (card) observer.observe(card); // Observe each card
    });

    return () => {
      observer.disconnect(); // Clean up observer when component unmounts
    };
  }, []);

  return (
    <div className="font-lato">
      {/* Background Section */}
      <div className="relative py-20 px-10 h-[300px]">
        <img
          src={backgroundImage}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
      </div>

      {/* Main Title Section */}
      <div className="py-12 px-8 text-center">
        <h2 className="text-2xl font-bold mb-6">
          {mainTitle}
          <span className="block w-[100px] h-[3px] bg-blue-600 mt-2 mx-auto"></span>
        </h2>
        <p className="text-lg text-gray-600">{mainDescription}</p>
      </div>

      {/* Automation Section */}
      <div className="py-12 px-8 bg-blue-600 text-center">
        <h2 className="text-3xl text-white font-bold mb-6">
          {automationTitle}
          <span className="block w-[100px] h-[3px] bg-yellow-400 mt-2 mx-auto"></span>
        </h2>
        <p className="text-lg text-white">{automationDescription}</p>
      </div>

      {/* Image and Text Section */}
      <div className="flex flex-col md:flex-row items-center py-12 px-8 space-y-6 md:space-y-0">
        <div className="md:w-1/2 md:pr-6">
          <img
            src={contentImage}
            alt="Industry Content"
            className="object-contain h-[400px] w-[800px] rounded-xl"
          />
        </div>
        <div className="md:w-1/2 md:pl-6 text-center mx-auto">
          <h3 className="text-2xl font-semibold mb-4">
            {thirdDivTitle}
            <span className="block w-[100px] h-[3px] bg-blue-600 mt-2 mx-auto"></span>
          </h3>
          <p className="text-lg text-gray-600">{thirdDivDescription}</p>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 px-8 bg-white text-center">
        <h2 className="text-3xl font-bold mb-6">
          {featureTitle}
          <span className="block w-[100px] h-[3px] bg-blue-600 mt-2 mx-auto"></span>
        </h2>
        <div
          className={`grid gap-6 text-lg text-gray-600 max-w-4xl mx-auto ${
            features.length % 2 === 0
              ? "md:grid-cols-2"
              : "md:grid-cols-2 grid-cols-1"
          }`}
        >
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => (cardRef.current[index] = el)}
              className={`bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all opacity-0 transform translate-y-10 hover:border-2 hover:border-blue-500 hover:scale-105 hover:transition-all ${
                features.length % 2 !== 0 && index === features.length - 1
                  ? "md:col-span-2 mx-auto"
                  : ""
              }`}
            >
              <h3 className="text-xl font-semibold text-gray-800">{feature}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SolutionCommon;
