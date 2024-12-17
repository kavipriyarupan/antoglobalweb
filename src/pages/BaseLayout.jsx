
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";

const BaseLayout = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <Outlet />
      <div>
        <Footer />
      </div>
    </>
  );
};

export default BaseLayout;