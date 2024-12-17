import React from "react";
import SolutionCommon from "../SolutionCommon";
import Glassindustryimage from "../../assets/Glassindustryimage.jpg"; // Replace with actual image path for glass industry
import Glassimage from "../../assets/Glassimage.jpg";

const Glassindustrysolution = () => {
  return (
    <SolutionCommon
      backgroundImage={Glassindustryimage}
      mainTitle="Innovative Glass Industry Solutions"
      mainDescription="AntoGlobal provides cutting-edge solutions for the glass manufacturing industry. Our advanced technologies enhance production efficiency, improve product quality, and support sustainability initiatives. From automation to predictive maintenance, we optimize your glass production processes for superior outcomes. By integrating smart systems, we help you meet evolving market demands and environmental standards seamlessly."
      featureTitle="Key Features of Glass Industry Solutions"
      features={[
        "Glass Processing Machine",
        "Glass Bevelling Machine",
        "Glass Washing Machine",
        "Glass Tempering Machine",
        "Forming Machine",
        "Glass Bending Machine",
        "Fitting Machines",
        "End of Life (EoL) Machine",
      ]}
      automationTitle="How Automation Works in the Glass Industry"
      automationDescription="Automation in the glass industry enhances precision, quality, and speed. Robotic systems handle glass molding, cutting, and inspection, while AI-powered analytics monitor production data in real time. Automated systems improve energy efficiency, reduce waste, and ensure consistency, enabling higher throughput and better-quality products. Sustainability is at the heart of our approach, making production eco-friendly."
      thirdDivTitle="Revolutionizing Glass Manufacturing"
      thirdDivDescription="AntoGlobal's solutions revolutionize the glass industry by optimizing production lines, enhancing quality control, and promoting sustainability. Our automation and advanced data analytics reduce costs, increase throughput, and ensure the highest product standards. Tailored solutions meet the unique needs of your operations, driving efficiency and scalability. With innovative technology at your fingertips, you can embrace the future of glass manufacturing confidently. AntoGlobal’s focus on safety, precision, and environmental compliance ensures a competitive edge in the global market."
      contentImage={Glassimage} // Replace with actual image for glass industry
    />
  );
};

export default Glassindustrysolution;
