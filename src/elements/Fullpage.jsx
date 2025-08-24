import React from "react";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import Help from "../components/Help";
import Eyesection from "../components/Eyesection";
import Featured from "../components/Featured";
import Cards from "../components/Cards";
import Ready from "../components/Ready";
import Footer from "../components/Footer";
import Client from "../components/Client";
import Navbar from "./Navbar";
import StickyStack from "./StickyStack";


const Fullpage = () => {
  return (
    <>
    <div className="landing-page">
      <Navbar/>
      <Hero />
      <Marquee />
      <Help/>
      <Eyesection />
      <Featured/>
      <Client/>    
    </div>
      <StickyStack/>
      </>
  );
};

export default Fullpage;
