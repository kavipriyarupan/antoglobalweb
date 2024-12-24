import React from "react";
import were from "../../assets/were.png";
import { Link } from "react-router-dom";

// Component
function HiringBanner() {
  return (
    <div className="flex items-center justify-center bg-white py-[1px]">
      {/* Blue Box Container */}
      <div className="flex w-3/4 h-[330px] bg-blue-800 text-white rounded-xl shadow-xl overflow-hidden">
        {/* Left Content */}
        <div className="p-6 flex-1 flex flex-col justify-center">
          <h3 className="text-lg font-semibold mb-2">Want to join us?</h3>
          <h1 className="text-3xl font-extrabold mb-4">We’re Hiring</h1>
          <p className="text-base mb-6">
            We’d love to have you in our Team. Click the button below to view
            open positions.
          </p>
          <Link to="/careers">
            <button className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 w-fit rounded-lg shadow-md">
              VIEW OPEN POSITIONS →
            </button>
          </Link>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex items-center justify-center">
          <img
            src={were} // Replace with actual image
            alt="Team High Five"
            className="object-contain w-[280px] h-[380px] ml-[80px]"
          />
        </div>
      </div>
    </div>
  );
}

export default HiringBanner;
