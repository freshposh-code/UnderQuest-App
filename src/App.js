import React from "react";
import HeroSection from "./Component/HeroSection";
import Navbar from "./Component/Navbar";
import Usage from "./Component/Usage";
import Development from "./Component/Development";
import Context from "./Component/Context";
import GetStarted from "./Component/GetStarted";
import Footer from "./Component/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Usage />
      <Development/>
      <Context/>
      <GetStarted/>
      <Footer/>
    </div>
  );
};

export default App;
