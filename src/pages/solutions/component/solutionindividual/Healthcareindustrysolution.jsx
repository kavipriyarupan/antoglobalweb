import React from "react";
import SolutionCommon from "../SolutionCommon";
import Healthcareindustryimage from "../../assets/Healthcareindustryimage.jpg";
import Healthcareimage from "../../assets/Healthcareimage.jpg"; // Replace with actual image path for healthcare

const Healthcareindustrysolution = () => {
  return (
    <SolutionCommon
      backgroundImage={Healthcareindustryimage}
      mainTitle="Advanced Healthcare Industry Solutions"
      mainDescription="AntoGlobal’s healthcare solutions improve patient care, enhance operational efficiency, and support healthcare providers in delivering high-quality services. From automation to predictive analytics, our solutions optimize healthcare systems for better outcomes."
      featureTitle="Key Features of Healthcare Industry Solutions"
      features={[
        "Automated patient management systems",
        "AI-driven diagnostic tools",
        "Predictive healthcare analytics",
        "IoT-enabled medical equipment",
        "Telemedicine integration",
        "Cloud-based patient records",
        "Real-time patient monitoring systems",
        "Healthcare data security and compliance",
        "Customizable solutions for healthcare providers",
        "Robotic systems for surgical procedures",
        "Enhanced supply chain management for pharmaceuticals",
        "Sustainability in healthcare operations",
      ]}
      automationTitle="How Automation Works in Healthcare"
      automationDescription="Automation in healthcare improves patient care by reducing administrative workload, optimizing resource allocation, and enabling real-time data access. From patient management systems to robotic-assisted surgeries, automation enhances efficiency, accuracy, and safety, leading to better outcomes and more personalized care."
      thirdDivTitle="Optimizing Healthcare Operations"
      thirdDivDescription="AntoGlobal's healthcare solutions streamline workflows, enhance diagnostic accuracy, and improve patient care. Our tailored automation and data-driven solutions address the challenges of modern healthcare, promoting efficiency and supporting better decision-making across healthcare providers."
      contentImage={Healthcareimage} // Replace with actual image for healthcare industry
    />
  );
};

export default Healthcareindustrysolution;
