import React from "react";
import SolutionCommon from "../SolutionCommon";
import Waterindustryimage from "../../assets/Waterindustryimage.jpg"; // Replace with actual image path for water industry
import Waterimage from "../../assets/Waterimage.jpg";
const Waterindustrysolution = () => {
  return (
    <SolutionCommon
      backgroundImage={Waterindustryimage}
      mainTitle="Innovative Water Industry Solutions"
      mainDescription="AntoGlobal offers sustainable solutions for the water industry, enhancing water treatment, distribution, and management. Our technology optimizes operations, reduces energy consumption, and improves water quality for both industrial and municipal uses."
      featureTitle="Key Features of Water Industry Solutions"
      features={[
        "Automated water treatment systems",
        "AI-driven water quality monitoring",
        "IoT-enabled water distribution tracking",
        "Energy-efficient water management solutions",
        "Real-time water usage monitoring",
        "Advanced filtration and purification technologies",
        "Sustainable water management practices",
        "Predictive maintenance for water infrastructure",
        "Customized solutions for water utilities",
        "Data-driven water resource optimization",
      ]}
      automationTitle="How Automation Works in the Water Industry"
      automationDescription="Automation in the water industry ensures efficient management of water resources, optimizes treatment processes, and reduces operational costs. From automated filtration and purification systems to real-time monitoring of water quality, automation ensures clean, safe water for consumption and industrial use."
      thirdDivTitle="Optimizing Water Management"
      thirdDivDescription="AntoGlobal’s solutions for the water industry optimize water treatment, reduce waste, and enhance resource management. Our automated systems ensure sustainability, improve operational efficiency, and help meet the growing demand for clean water across industries and municipalities."
      contentImage={Waterimage} // Replace with actual image for water industry
    />
  );
};

export default Waterindustrysolution;
