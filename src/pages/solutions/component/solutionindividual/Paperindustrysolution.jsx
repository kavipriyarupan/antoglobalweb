import React from "react";
import SolutionCommon from "../SolutionCommon";
import Paperindustryimage from "../../assets/Paperindustryimage.jpg";
import Paperimage from "../../assets/Paperimage.jpg"; // Replace with actual image path for paper industry

const Paperindustrysolution = () => {
  return (
    <SolutionCommon
      backgroundImage={Paperindustryimage}
      mainTitle="Advanced Paper Industry Solutions"
      mainDescription="AntoGlobal’s paper industry solutions optimize production, enhance quality control, and promote sustainability. Our technology helps reduce waste, increase efficiency, and improve the overall quality of paper products, driving operational excellence."
      featureTitle="Key Features of Paper Industry Solutions"
      features={[
        "Automated paper production lines",
        "AI-driven quality control systems",
        "Energy-efficient paper manufacturing",
        "Real-time process monitoring",
        "Predictive maintenance for paper mills",
        "Sustainable paper production processes",
        "IoT-enabled tracking of raw materials",
        "Optimized paper pulp processing",
        "Waste reduction technologies",
        "Customizable paper production solutions",
        "Improved safety protocols through automation",
      ]}
      automationTitle="How Automation Works in the Paper Industry"
      automationDescription="Automation in the paper industry reduces manual intervention, optimizes production flow, and ensures consistent product quality. Robotic systems assist in paper handling and packaging, while AI-powered analytics monitor and control every stage of the manufacturing process for enhanced efficiency."
      thirdDivTitle="Revolutionizing Paper Manufacturing"
      thirdDivDescription="AntoGlobal’s advanced paper industry solutions enhance production efficiency, reduce energy consumption, and promote sustainability. Our tailored solutions meet the unique needs of the paper production process, ensuring improved productivity and reduced environmental impact."
      contentImage={Paperimage} // Replace with actual image for paper industry
    />
  );
};

export default Paperindustrysolution;
