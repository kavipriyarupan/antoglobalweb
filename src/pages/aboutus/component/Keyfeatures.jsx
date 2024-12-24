import React from "react";
import Allin1place from "../assets/Allin1place.png";
import customizablesolutions from "../assets/customizablesolutions.png";
import Innovation from "../assets/Innovation.png";
import Quality from "../assets/Quality.png";
import cuttingedgeautomation from "../assets/cuttingedgeautomation.png";
import Customersupport from "../assets/Customersupport.png";

const KeyFeatures = () => {
  const features = [
    { image: Allin1place, title: "All under 1 roof" },
    { image: customizablesolutions, title: "Customizable Solutions" },
    { image: cuttingedgeautomation, title: "Cuttingedge Automation" },
    { image: Innovation, title: "Innovative Solutions" },
    { image: Quality, title: "Best Quaity" },
    { image: Customersupport, title: "24/7 Customer Support" },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="text-center mb-8 ">
        <h2 className="text-4xl font-bold text-blue-700">Key Features</h2>
        <p className="mt-[12px] text-gray-600 text-center max-w-3xl mx-auto">
          Unlock the power of advanced automation solutions. Enhance
          productivity, optimize processes, and drive sustainable growth.Lets
          create something great together!
        </p>
      </div>
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-center border-2 border-blue-400 rounded-md p-4 hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={feature.image}
              alt={feature.title}
              className="w-16 h-16 object-contain mr-4"
            />
            <h3 className="text-lg font-semibold text-gray-800">
              {feature.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KeyFeatures;
