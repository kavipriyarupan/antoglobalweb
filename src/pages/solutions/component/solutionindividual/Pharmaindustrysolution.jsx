import React from "react";
import SolutionCommon from "../SolutionCommon";
import Pharmaindustryimage from "../../assets/Pharmaindustryimage.jpg";
import Pharmaimage from "../../assets/Pharmaimage.jpg"; // Replace with actual image path for pharma industry

const Pharmaindustrysolution = () => {
  return (
    <SolutionCommon
      backgroundImage={Pharmaindustryimage}
      mainTitle="Innovative Pharmaceutical Solutions"
      mainDescription="AntoGlobal provides innovative solutions for the pharmaceutical industry that streamline production, enhance safety, and support regulatory compliance. Our automation and smart analytics optimize drug manufacturing, improving efficiency and ensuring quality."
      featureTitle="Key Features of Pharma Industry Solutions"
      features={[
        "Automated pharmaceutical production lines",
        "AI-driven drug quality testing",
        "Real-time manufacturing monitoring",
        "IoT-enabled pharmaceutical production tracking",
        "Sustainable pharmaceutical production processes",
        "Predictive maintenance for pharmaceutical equipment",
        "Advanced supply chain management for raw materials",
        "Data-driven process optimization",
        "Compliance with pharmaceutical regulations",
        "Robotic systems for packaging and labeling",
        "Enhanced safety in pharmaceutical manufacturing",
      ]}
      automationTitle="How Automation Works in the Pharma Industry"
      automationDescription="Automation in the pharmaceutical industry ensures consistent quality, increases production efficiency, and reduces human error. From automated mixing to precise packaging, our solutions ensure regulatory compliance and improve overall operational efficiency."
      thirdDivTitle="Optimizing Pharma Manufacturing"
      thirdDivDescription="AntoGlobal’s pharmaceutical solutions focus on improving production efficiency, ensuring product safety, and supporting regulatory compliance. With advanced technologies, we optimize the manufacturing process to deliver high-quality products while reducing costs."
      contentImage={Pharmaimage} // Replace with actual image for pharma industry
    />
  );
};

export default Pharmaindustrysolution;
