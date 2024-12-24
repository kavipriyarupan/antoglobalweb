import React from "react";

import buisness from "../../assets/business.png";
import openbook from "../../assets/openbook.png";
import people from "../../assets/people.png";

const aboutData = [
  {
    icon: buisness,
    title: "Our Story",
    description:
      "Founded in 2017, AntoGlobal is a leading provider of automation solutions, serving diverse industries worldwide. We specialize in driving efficiency and sustainability through cutting-edge technology. Our commitment to excellence has helped businesses optimize their operations and stay competitive.",
  },
  {
    icon: openbook,
    title: "Our Mission",
    description:
      "Our mission is to empower businesses by providing innovative automation solutions that enhance operational efficiency and sustainability. We strive to deliver reliable, cost-effective technology that helps businesses achieve their goals. We are dedicated to driving progress across industries.",
  },
  {
    icon: people,
    title: "Our Team",
    description:
      "With skilled professionals, AntoGlobal’s team is driven by expertise and passion. We bring together diverse talent to create solutions that meet the unique needs of each industry. Our collaborative approach ensures we deliver outstanding results for our clients.",
  },
];

function AboutSection() {
  return (
    <div className="flex flex-col justify-center items-center px-8 py-14 bg-sky-50 max-md:px-5 font-lato">
      {/* Header Section */}
      <div className="flex flex-col justify-center py-7 max-w-full text-center w-[1080px]">
        <div className="flex flex-col px-10 w-full min-h-[1px] max-md:px-5 max-md:max-w-full">
          <div className="pb-2.5 w-full text-4xl font-bold leading-10 text-zinc-800 max-md:text-3xl">
            Leading Innovator of{" "}
            <span className="text-blue-700">Automated Solutions</span>
          </div>
          <div className="px-8 pb-px w-full text-base font-light leading-6 text-stone-500 max-md:px-5">
            With a wide range of automation services, we meet every need for
            enhancing efficiency and productivity
          </div>
        </div>
      </div>
      {/* Info Cards Section */}
      <div className="flex justify-between py-7 w-full max-w-[1728px] max-md:flex-col max-md:max-w-full gap-5">
        {aboutData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-5 w-[30%] min-h-[200px] bg-white shadow-md rounded-lg text-center max-md:w-full"
          >
            <img src={item.icon} alt={item.title} className="w-12 h-12 mb-4" />
            <h3 className="text-lg font-semibold text-zinc-800 mb-2">
              {item.title}
            </h3>
            <p className="text-sm text-stone-500 leading-5">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutSection;
