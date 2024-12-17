import React from "react";
import SolutionCommon from "../SolutionCommon";
import Foodbeverageindustryimage from "../../assets/Foodbeverageindustryimage.jpg"; // Replace with actual image path for food & beverage industry
import foodbeverageimage from "../../assets/foodbeverageimage.jpg";

const Foodbeverageindustrysolution = () => {
  return (
    <SolutionCommon
      backgroundImage={Foodbeverageindustryimage}
      mainTitle="Food-Beverage Industry Solutions"
      mainDescription="AntoGlobal offers innovative solutions for the food and beverage industry, improving production efficiency, product consistency, and compliance with health standards. Our technologies drive automation, enhance supply chain management, and reduce waste in food manufacturing. From optimizing energy usage to ensuring quality at every stage, we provide sustainable and efficient solutions that help meet the growing demand in the food and beverage sector."
      featureTitle="Key Features of Food & Beverage Industry Solutions"
      features={[
        "Processing Machine",
        "Mixing Machine",
        "Line Filling Machine",
        "Conveyor Line",
        "Rotary Filling Machine",
        "Automatic Packing Machine",
        "Storage System",
        "HVAC System",
        "Cooling / Oven System",
        "Conveyor System",
        "Multi Packing System",
        "Measuring System",
      ]}
      automationTitle="How Automation Works in the Food & Beverage Industry"
      automationDescription="Automation in the food and beverage industry ensures consistent product quality, reduces waste, and improves overall production efficiency. From automated processing and packaging to real-time quality checks, our solutions streamline every part of the food manufacturing process, ensuring sustainability and reducing operational costs."
      thirdDivTitle="Optimizing Food & Beverage Production"
      thirdDivDescription="AntoGlobal’s solutions optimize food and beverage manufacturing by automating processes, ensuring product consistency, and promoting sustainability. Our data-driven approach enhances efficiency, reduces waste, and ensures compliance with health and safety standards. We focus on integrating advanced technologies to create an agile and future-ready production environment for the food and beverage industry. From improving supply chain logistics to reducing environmental impact, we prioritize innovation at every level. Let AntoGlobal help you revolutionize your food manufacturing process with cutting-edge solutions tailored to your needs."
      contentImage={foodbeverageimage} // Replace with actual image for food & beverage industry
    />
  );
};

export default Foodbeverageindustrysolution;
