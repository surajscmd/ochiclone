import React from "react";
import "../css/marquee.css";
import { motion } from "motion/react";

const Marquee = () => {
  
  return (
    <section data-scroll data-scroll-speed="0" className="marquee-section"> 
    <div className="marquee">
      <div className="marquee-inner">
        <motion.p initial={{x: 0}} animate={{x:"-100%"}}  transition ={{repeat: Infinity , ease: "linear", duration : 10}} className="marquee-text">WE ARE OCHI</motion.p>
        <motion.p initial={{x: 0}} animate={{x:"-100%"}}  transition ={{repeat:Infinity , ease: "linear", duration : 10}} className="marquee-text">WE ARE OCHI</motion.p>
          <motion.p initial={{x: 0}} animate={{x:"-100%"}}  transition ={{repeat:Infinity , ease: "linear", duration : 10}} className="marquee-text">WE ARE OCHI</motion.p>
      </div>
    </div>
    </section>
  );
};

export default Marquee;
