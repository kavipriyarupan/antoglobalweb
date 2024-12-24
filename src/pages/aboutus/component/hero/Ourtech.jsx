import React from "react";
import Industrial4 from "../../assets/Industrial4.jpg";
import legalimage from "../../assets/legalimage.png";
import traceabilityimage from "../../assets/traceabilityimage.png";
import sci from "../../assets/sci.jpg";

// New Hero Component
function HeroSection() {
  return (
    <div
      className="relative bg-cover bg-center h-[300px] flex items-center justify-center"
      style={{
        backgroundImage: `url(${sci})`, // Replace with your desired background image
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div> {/* Overlay */}
      <div className="relative text-center text-white px-4">
        <h1 className="text-4xl md:text-4xl font-italic mb-4">
          The Future belongs to those who dare to automate,innovate and embrace
          robotics
        </h1>
        <h2 className="text-xl md:text-3xl font-bold">
          - Joseph Frederick Engelberger
        </h2>
      </div>
    </div>
  );
}

function Ourtech() {
  const sections = [
    {
      id: 1,
      image: Industrial4, // Replace with actual image paths
      title: "Industrial IOT 4.0",
      description:
        "Industrial IoT 4.0 is revolutionizing how industries operate, combining AI, machine learning, and automation to create smarter, more efficient systems. By connecting machines and sensors, it enables real-time data collection, analysis, and actionable insights, driving productivity and profitability. IoT 4.0 empowers industries like Automotive, Pharmaceuticals, and Food & Beverage to optimize operations and enhance safety. Predictive maintenance reduces costs and minimizes downtime, ensuring seamless workflows. This transformative technology boosts efficiency while reshaping supply chains. IoT 4.0 isn’t just the future—it’s the now. Embrace the power of connected intelligence.",
    },
    {
      id: 2,
      image: legalimage, // Replace with actual image paths
      title: "21 CFR Complaints",
      description:
        "21 CFR compliance is essential for industries focused on quality, safety, and traceability. By adhering to FDA regulations, manufacturers ensure secure recordkeeping, validated processes, and accurate reporting. This framework supports traceability throughout the production lifecycle, enabling manufacturers to meet stringent quality standards and ensure product safety. Compliance fosters trust, facilitates audits, and reduces risks associated with recalls or non-conformance. Leveraging digital tools, businesses can streamline operations, maintain data integrity, and demonstrate regulatory adherence effortlessly. 21 CFR isn’t just about compliance—it’s about achieving operational excellence and customer confidence.",
    },
    {
      id: 3,
      image: traceabilityimage, // Replace with actual image paths
      title: "Traceability",
      description:
        "Traceability transforms manufacturing by offering real-time visibility into every stage of production, from raw materials to the final shipment. By digitizing and securing data, manufacturers can track and record inspection results, assembly details, and cycle times with precision. This end-to-end transparency enhances quality management, root cause analysis, and continuous improvement, ensuring efficient workflows. With modern automation tools, production lines are monitored seamlessly, enabling proactive decision-making. Industrial traceability isn’t just about tracking; it’s about empowering manufacturers to innovate, improve, and excel in an era of smart manufacturing.",
    },
  ];

  return (
    <div>
      {/* Add HeroSection at the top */}
      <HeroSection />

      {sections.map((section, index) => (
        <div
          key={section.id}
          className="flex items-center justify-between py-8"
        >
          {index % 2 === 0 ? (
            <>
              <div className="w-1/2 text-center mx-auto">
                <h2 className="text-2xl font-bold text-blue-600 ml-[30px]">
                  {section.title}
                </h2>
                <p className="mt-4 text-gray-600 ml-[30px]">
                  {section.description}
                </p>
              </div>
              <div className="w-1/2 ml-[120px]">
                <img src={section.image} alt={section.title} />
              </div>
            </>
          ) : (
            <>
              <div className="w-1/2 ml-[20px]">
                <img
                  src={section.image}
                  alt={section.title}
                  className="rounded-lg h-[450px]"
                />
              </div>
              <div className="w-1/2 text-center mx-auto">
                <h2 className="text-2xl font-bold text-blue-600 mr-[20px]">
                  {section.title}
                </h2>
                <p className="mt-4 text-gray-600 mr-[30px]">
                  {section.description}
                </p>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default Ourtech;
