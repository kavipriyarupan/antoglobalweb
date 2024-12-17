import React from "react";
import Ranelogo from "../assets/Ranelogo.png";
import Mothersonimage from "../assets/Mothersonimage.png";
import Magnaimage from "../assets/Magnaimage.png";
import TVSimage from "../assets/TVSimage.png";
import MRF from "../assets/MRF.png";
import SaintGobain from "../assets/SaintGobain.png";
import HLmando from "../assets/HLmando.png";
import Madraspharma from "../assets/Madraspharma.png";
import Koseiunomida from "../assets/Koseiunomida.png";

const HappyClients = () => {
  const clients = [
    { name: "mediaspectrum", logo: Ranelogo },
    { name: "Global", logo: TVSimage },
    { name: "SpiralScout", logo: Mothersonimage },
    { name: "AOG", logo: Magnaimage },
    { name: "MYLAPS", logo: Madraspharma },
    { name: "PageSuite", logo: SaintGobain },
    { name: "DCV", logo: HLmando },
    { name: "FASHOM", logo: MRF },
    { name: "GRAPE", logo: Koseiunomida },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="text-center">
        <p className="text-sm text-blue-400 mb-2 font-medium">
          We're working with
        </p>
        <h1 className="text-4xl font-bold mb-8 text-gray-900">
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

      {/* Button */}
      <div className="flex justify-center mt-8">
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md font-medium transition">
          ALL CLIENTS →
        </button>
      </div>
    </section>
  );
};

export default HappyClients;
