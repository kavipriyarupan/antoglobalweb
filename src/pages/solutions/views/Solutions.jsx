import React from "react";
import Solutionpik from "../assets/Solutionpik.png";
import Background from "../assets/Background.png";
import Solutioncontact from "../component/Solutioncontact";
import Cardgrid from "../component/Cardgrid";
import SolutionBox from "../component/Solutionbox";
import DetailSolutions from "../component/Detailsolutions";

const Solutions = () => {
  return (
    <>
      <div className="relative h-[400px] font-lato">
        <img
          src={Background}
          alt="Background"
          className="absolute inset-0 h-[360px] w-full object-cover"
        />

        <div className="relative z-10 flex h-full items-center justify-between px-10 mb-[4px]">
          <div className="h-[400px] w-[500px] text-white space-y-4 text-center ml-[50px] mt-[50px]">
            <h1 className="text-3xl font-medium text-black mr-[80px]">
              Challenges inspire, <br />
              <span className="text-blue-800  text-3xl font-semi-bold ml-[160px]">
                Solutions
              </span>{" "}
              define..!
            </h1>
            <p className="text-lg ml-8 text-gray-500 mb-4">
              Revolutionizing industries with smart automation solutions that
              boost efficiency and precision. Our innovative systems streamline
              workflows, cut costs, and adapt to your unique needs. From
              intelligent robotics to seamless integration, we help you stay
              ahead in a competitive market. Partner with us to create a
              smarter, automated future.
            </p>
          </div>

          <div className="h-[1000px] w-[350px] mr-[50px] mb-[40px]">
            <img
              src={Solutionpik}
              alt="Solutions"
              className="object-contain w-full h-full"
            />
          </div>
        </div>
      </div>

      <DetailSolutions />
      <SolutionBox />

      <Cardgrid />
      <Solutioncontact />
    </>
  );
};

export default Solutions;
