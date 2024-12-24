import React from "react";
import clientsimage from "../../assets/clientsimage.png";
import Background from "../../assets/Background.png";
import Ranelogo from "../../assets/Ranelogo.png";
import TVSimage from "../../assets/TVSimage.png";

import Magnaimage from "../../assets/Magnaimage.png";
import Madraspharma from "../../assets/Madraspharma.png";
import SaintGobain from "../../assets/SaintGobain.png";
import HLmando from "../../assets/HLmando.png";
import MRF from "../../assets/MRF.png";
import Koseiunomida from "../../assets/Koseiunomida.png";
import Godrejimage from "../../assets/Godrejimage.png";
import Milkymistimage from "../../assets/Milkymistimage.png";
import motherson from "../../assets/motherson.png";
import fourtts from "../../assets/fourtts.png";
import delphi from "../../assets/delphi.png";
import Cavincare from "../../assets/Cavincareimage.png";
import Bontazimage from "../../assets/Bontazimage.png";
import Aachimasalaimage from "../../assets/Aachimasalaimage.png";
import Kwansungimage from "../../assets/Kwangsungimge.png";
import yorozu from "../../assets/yorozu.png";

const Clients = () => {
  const clients = [
    { name: "mediaspectrum", logo: Ranelogo },
    { name: "Global", logo: TVSimage },

    { name: "AOG", logo: Magnaimage },
    { name: "MYLAPS", logo: Madraspharma },
    { name: "PageSuite", logo: SaintGobain },
    { name: "DCV", logo: HLmando },
    { name: "FASHOM", logo: MRF },
    { name: "GRAPE", logo: Koseiunomida },
    { name: "GRAPE", logo: Godrejimage },
    { name: "GRAPE", logo: Milkymistimage },
    { name: "GRAPE", logo: motherson },
    { name: "GRAPE", logo: fourtts },

    { name: "GRAPE", logo: Cavincare },
    { name: "GRAPE", logo: Bontazimage },
    { name: "GRAPE", logo: delphi },

    { name: "GRAPE", logo: Aachimasalaimage },
    { name: "GRAPE", logo: Kwansungimage },
    { name: "GRAPE", logo: yorozu },
  ];
  return (
    <div>
      {/* Careers Section */}
      <div
        className="relative bg-cover bg-center h-[400px] flex items-center"
        style={{
          backgroundImage: `url(${Background})`, // Correctly set background image
        }}
      >
        <div className="absolute inset-0"></div> {/* Overlay */}
        <div className="relative flex items-center w-full px-8 lg:px-16">
          {/* Text Section */}
          <div className="w-1/2 text-left text-white">
            <h2 className="text-2xl font-bold mb-4 text-center mx-auto text-blue-700">
              Our Clients
            </h2>
            <h2 className="text-3xl font-bold mb-4 text-center mx-auto text-black">
              Where your vision meets{" "}
              <span className="text-blue-700">our expertise</span>
            </h2>
            <p className="text-xl font-medium text-center mx-auto text-gray-500">
              Building meaningful partnerships is at the heart of what we do. At
              AntoGlobal, we collaborate with businesses of all sizes,
              delivering innovative solutions that drive growth and measurable
              success.
            </p>
          </div>

          {/* Image Section */}
          <div className="w-1/2 flex">
            <img
              src={clientsimage} // Correctly used imported image
              alt="Empowering Industries"
              className="rounded-lg ml-[60px]"
            />
          </div>
        </div>
      </div>
      <section className="py-12 bg-white">
        <div className="text-center">
          <p className="text-lg text-blue-400 mb-2 font-medium">
            We're working with
          </p>
          <h1 className="text-5xl font-bold mb-8 text-gray-900">
            Our Happy Clients
          </h1>
        </div>

        {/* Grid */}
        <div className="max-w-2xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-5">
          {clients.map((client, index) => (
            <div key={index} className="flex justify-center items-center">
              <img
                src={client.logo}
                alt={client.name}
                className="max-w-[100px] h-auto object-contain"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Clients;
