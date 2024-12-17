import React from "react";
import SolutionCommon from "../SolutionCommon";
import Agrosindustryimages from "../../assets/Agroindustryimages.jpg";
import Agroimage from "../../assets/Agroimage.jpg"; // Replace with actual image path for agro industry

const Agroindustrysolution = () => {
  return (
    <SolutionCommon
      backgroundImage={Agrosindustryimages}
      mainTitle=" Agro Industry Solutions"
      mainDescription="Automation in the agro industry revolutionizes efficiency, cuts down resource consumption, and boosts crop yields. Our advanced solutions, from automated irrigation to precision farming, ensure farmers achieve peak productivity. By reducing waste and optimizing resource use, we promote sustainability across the industry. Our technology empowers farmers with the tools to increase yields while preserving the environment. Automation paves the way for smarter, eco-friendly farming practices. With our innovations, farmers can meet the growing demand for food in an efficient and sustainable way. Together, we are creating a more sustainable and productive future for agriculture"
      featureTitle="Our Specializations"
      features={["Pump System", "Irrigation System"]}
      automationTitle="How Automation Works in the Agro Industry"
      automationDescription="Automation in agriculture boosts efficiency, minimizes resource waste, and maximizes crop yields. With advanced tools like automated irrigation and precision farming, we help farmers enhance productivity and sustainability. Empowering the future of farming through cutting-edge automation."
      thirdDivTitle="Optimizing Agricultural Operations"
      thirdDivDescription="At AntoGlobal, we lead the way in smart, sustainable agriculture solutions. Our technology empowers farmers to optimize operations and increase productivity. With intelligent irrigation systems and advanced crop management tools, we drive efficiency at every step. We prioritize eco-friendly practices, reducing waste while maximizing yield. Our solutions ensure that agriculture meets the future's needs for both innovation and sustainability. By embracing automation, we enhance farming operations for better results. Together, we are shaping a new era in agriculture, where technology and nature thrive. Let’s grow smarter, not harder, for a sustainable future."
      contentImage={Agroimage} // Replace with actual image for agro industry
    />
  );
};

export default Agroindustrysolution;
