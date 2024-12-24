import React from "react";
import careersimage from "../../assets/careersimage.png";
import Background from "../../assets/Background.png";
import robot from "../../assets/robot.png"; // Replace with your image path
import { MdOutlinePlace } from "react-icons/md";
import { MdStarBorderPurple500 } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { IoMailOpenOutline } from "react-icons/io5";
import { LuGraduationCap } from "react-icons/lu";
import { Link } from "react-router-dom";

const Careers = () => {
  return (
    <div>
      {/* Careers Section */}
      <div
        className="relative bg-cover bg-center h-[400px] flex items-center"
        style={{
          backgroundImage: `url(${Background})`, // Correctly set background image
        }}
      >
        <div className="absolute inset-0 "></div> {/* Overlay */}
        <div className="relative flex items-center w-full px-8 lg:px-16">
          {/* Text Section */}
          <div className="w-1/2 text-left text-white">
            <h2 className="text-2xl font-bold mb-4 text-center mx-auto text-blue-700">
              Careers
            </h2>
            <h2 className="text-3xl font-bold mb-4 text-center mx-auto text-black">
              Join our Team at <span className="text-blue-700">AntoGlobal</span>
            </h2>
            <p className="text-xl font-normal text-center mx-auto text-gray-500">
              If you’re passionate about innovation, collaboration, and making a
              difference, we invite you to be part of our journey. Together,
              we’ll build a future powered by creativity, cutting-edge
              technology, and teamwork.
            </p>
          </div>

          {/* Image Section */}
          <div className="w-1/2 flex">
            <img
              src={careersimage} // Correctly used imported image
              alt="Empowering Industries"
              className="rounded-lg ml-[60px]"
            />
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="flex items-center justify-center bg-white py-12 px-8 lg:px-16">
        {/* Image Section */}
        <div className="w-1/2 flex justify-center">
          <img
            src={robot} // Replace with the image path
            alt="Why Choose Us"
            className="rounded-lg w-[400px] h-[560px]"
          />
        </div>

        {/* Text Section */}
        <div className="w-1/2 pl-8">
          <h2 className="text-3xl font-bold text-gray-800 border-l-4 border-blue-500 pl-4 mb-8">
            Why Choose Us
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-gray-700">Career Growth</h3>
              <p className="text-gray-600">
                We are constantly growing, and so will you. Personal development
                is a top priority with us.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-700">
                Health Insurance
              </h3>
              <p className="text-gray-600">
                Protect your well-being and financial security with
                comprehensive coverage for medical expenses and unforeseen
                health emergencies.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-700">
                Provident Fund
              </h3>
              <p className="text-gray-600">
                Secure your future with regular savings, as both you and your
                employer contribute towards a financially stable retirement.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-700">
                Performance bonus
              </h3>
              <p className="text-gray-600">
                Your hard work deserves a reward—unlock extra earnings for your
                exceptional contributions and achievements!
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-700">Yearly bonus</h3>
              <p className="text-gray-600">
                A celebration of your dedication—earn a well-deserved reward for
                a year of hard work and success!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-sky-50 h-[450px]">
        <h2 className="text-3xl font-bold text-center mt-12 text-gray-800 p-4">
          Current Openings
        </h2>
        <div className="p-4 mt-6 border border-gray-300 rounded-md shadow-md w-[900px] mx-auto hover:ring-2 hover:ring-blue-500 transition duration-300 hover:shadow-lg bg-white">
          {/* Header Section with Button */}
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-gray-800">
              AUTOMATION ENGINEER
            </h3>
            <Link to="/careerone">
              {" "}
              <button className="bg-blue-500 text-white px-6 py-2 rounded-full shadow-md hover:bg-blue-700">
                Apply Now
              </button>
            </Link>
          </div>

          {/* Job Details Section */}
          <div className="flex items-center mt-3 space-x-4 text-sm text-gray-600 ">
            {/* Location */}
            <div className="flex items-center space-x-1">
              <span className="text-xl text-blue-700">
                <MdOutlinePlace />
              </span>
              <span>SP KOIL, Chennai</span>
            </div>
            {/* Industry */}
            <div className="flex items-center space-x-1">
              <span className="text-xl text-blue-700">
                <MdStarBorderPurple500 />
              </span>
              <span>Exp: 2-5 years</span>
            </div>
            {/* Salary */}
            <div className="flex items-center space-x-1">
              <span className="text-xl text-blue-700">
                <IoMdTime />
              </span>
              <span>Fulltime</span>
            </div>
            {/* Date */}
            <div className="flex items-center space-x-1">
              <span className="text-xl text-blue-700">
                <IoMailOpenOutline />
              </span>
              <span>No. of openings: 2</span>
            </div>
            {/* Job Type */}
            <div className="flex items-center space-x-1">
              <span className="text-xl text-blue-700">
                <LuGraduationCap />
              </span>
              <span>EEE, ECE, E&I, ICE, or other electrical disciplines</span>
            </div>
          </div>
        </div>

        <div className="p-4 mt-6 border border-gray-300 rounded-md shadow-md w-[900px] mx-auto hover:ring-2 hover:ring-blue-500 transition duration-300 hover:shadow-lg bg-white">
          {/* Header Section with Button */}
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-gray-800">
              AUTOMATION ENGINEER
            </h3>
            <Link to="/careertwo">
              {" "}
              <button className="bg-blue-500 text-white px-6 py-2 rounded-full shadow-md hover:bg-blue-700">
                Apply Now
              </button>
            </Link>
          </div>

          {/* Job Details Section */}
          <div className="flex items-center mt-3 space-x-4 text-sm text-gray-600 ">
            {/* Location */}
            <div className="flex items-center space-x-1">
              <span className="text-xl text-blue-700">
                <MdOutlinePlace />
              </span>
              <span>SP KOIL, Chennai</span>
            </div>
            {/* Industry */}
            <div className="flex items-center space-x-1">
              <span className="text-xl text-blue-700">
                <MdStarBorderPurple500 />
              </span>
              <span>Exp: 2-5 years</span>
            </div>
            {/* Salary */}
            <div className="flex items-center space-x-1">
              <span className="text-xl text-blue-700">
                <IoMdTime />
              </span>
              <span>Fulltime</span>
            </div>
            {/* Date */}
            <div className="flex items-center space-x-1">
              <span className="text-xl text-blue-700">
                <IoMailOpenOutline />
              </span>
              <span>No. of openings: 2</span>
            </div>
            {/* Job Type */}
            <div className="flex items-center space-x-1">
              <span className="text-xl text-blue-700">
                <LuGraduationCap />
              </span>
              <span>EEE, ECE, E&I, ICE, or other electrical disciplines</span>
            </div>
          </div>
        </div>
      </div>
      {/* Current Openings Section */}
    </div>
  );
};

export default Careers;
