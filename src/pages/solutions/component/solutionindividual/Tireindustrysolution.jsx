import React from "react";
import SolutionCommon from "../SolutionCommon";
import Tireimage from "../../assets/Tireimage.jpg"; // Replace with actual image path for tire industry
import Tireindustryimage from "../../assets/Tireindustryimage.jpg"; // Optional, if you want a secondary image for comparison

const TireIndustrySolution = () => {
  return (
    <SolutionCommon
      backgroundImage={Tireindustryimage} // Optional, can use a unique image for tire industry
      mainTitle="Innovative Solutions for the Tire Industry"
      mainDescription="AntoGlobal delivers state-of-the-art solutions to optimize tire manufacturing processes. Our technology enhances precision, boosts productivity, and ensures that your operations stay ahead in a highly competitive market. With a focus on automation, sustainability, and advanced analytics, we streamline production systems while reducing waste and improving quality."
      featureTitle="Key Features of Tire Industry Solutions"
      features={[
        "Automated tire production systems",
        "Enhanced quality control through advanced testing",
        "Real-time data monitoring and analytics",
        "Predictive maintenance for tire manufacturing equipment",
        "Eco-friendly production techniques",
        "Optimized tire assembly lines",
        "Advanced robotics integration",
        "IoT-enabled tracking systems for tire production",
        "Energy-efficient manufacturing processes",
        "Minimized operational downtime",
        "Customized production solutions for scalability",
        "Sustainability and regulatory compliance",
        "Improved workforce safety with automated solutions",
        "Data-driven decision making",
        "Optimized supply chain and logistics",
      ]}
      automationTitle="How Automation Works in the Tire Industry"
      automationDescription="Automation in the tire industry enhances production efficiency, accuracy, and consistency by integrating robotics, AI, and IoT technologies. Robotic systems manage tire molding, inspection, and testing, while AI analyzes production data for predictive maintenance and optimization. Automation helps meet sustainability goals and ensures consistent quality in every tire produced, improving supply chain management and operational efficiency."
      thirdDivTitle="Optimized Tire Manufacturing Solutions"
      thirdDivDescription="AntoGlobal delivers advanced tire industry solutions to revolutionize your operations. Our technology enhances efficiency and automates manufacturing processes for improved productivity. We prioritize sustainability, helping you meet environmental regulations while reducing costs. With a focus on precision and innovation, we optimize your production systems. Our solutions are designed to be adaptable, ensuring seamless integration with existing systems and allowing for future growth. We work alongside you to create tailored solutions that meet your unique needs and ensure long-term success."
      contentImage={Tireimage} // Replace with actual image for tire industry
    />
  );
};

export default TireIndustrySolution;
