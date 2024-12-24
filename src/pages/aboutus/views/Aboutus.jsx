import React from "react";
import AboutSection from "../component/hero/aboutsection";
import HappyClients from "../component/Happyclients";
import KeyFeatures from "../component/Keyfeatures";
import FullComponent from "../component/hero/FullComponent";
import HiringBanner from "../component/hero/HiringBanner";

const Aboutus = () => {
  return (
    <div>
      <AboutSection />

      <KeyFeatures />
      <HappyClients />
      <FullComponent />
      <HiringBanner />
    </div>
  );
};

export default Aboutus;
