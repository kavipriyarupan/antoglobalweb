import React from "react";
import SolutionCommon from "../SolutionCommon";
import Electronicindustryimage from "../../assets/Electronicindustryimage.png";
import Electronicimage from "../../assets/Electronicimage.jpg"; // Replace with actual image path for electronics industry

const Electronicsindustrysolution = () => {
  return (
    <SolutionCommon
      backgroundImage={Electronicindustryimage}
      mainTitle="Electronics Industry Solution"
      mainDescription="AntoGlobal’s electronics industry solutions drive automation, enhance quality control, and support innovation. Our technology ensures precision manufacturing, sustainable practices, and real-time analytics to improve your electronics production. We focus on reducing costs and improving efficiency in every phase of your production line, empowering your business to stay ahead of the competition. With our cutting-edge solutions, you can confidently meet evolving industry demands while maintaining high standards of quality and sustainability."
      featureTitle="Our Specializations"
      features={[
        "Circuit Breakers assembly line",
        "Magnetic Starters assembly line",
        "Lighting assembly line",
        "Panel Boards assembly line",
        "Transformers assembly line",
        "Contactors assembly line",
        "Enclosures assembly line",
      ]}
      automationTitle="How Automation Works in Electronics Manufacturing"
      automationDescription="Automation in the electronics industry increases production speed, enhances precision, and ensures quality control. Robotic systems handle assembly, while AI tools monitor processes in real time to identify potential issues early, reducing defects and improving throughput. This ensures your production line operates seamlessly, with minimal downtime and maximum efficiency."
      thirdDivTitle="Optimizing Electronics Production"
      thirdDivDescription="AntoGlobal’s solutions for the electronics industry streamline operations, improve product quality, and increase efficiency. Our tailored automation systems support sustainability goals, reduce energy usage, and enhance your ability to meet market demands. With our expertise, you can embrace the future of electronics manufacturing with confidence, optimizing both cost-effectiveness and output. Our solutions are designed to scale, offering adaptability to future technological advancements and market shifts."
      contentImage={Electronicimage} // Replace with actual image for electronics industry
    />
  );
};

export default Electronicsindustrysolution;
