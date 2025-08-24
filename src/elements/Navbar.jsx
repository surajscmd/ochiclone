import React, { useEffect, useState } from "react";
import logo from "../assets/mainlogo.svg";
import { motion, useInView } from "motion/react";

const Navbar = () => {
   const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // scrolling down
        setShow(false);
      } else {
        // scrolling up
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.div
       initial={{ y: 0 }}
      animate={show ? { y: 0 } : { y: -100 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="navbar"
    >
      <div className="navbar-container">
        {/* Logo */}
        <img src={logo} alt="Logo" className="navbar-logo" />

        {/* Tagline */}
        <p className="navbar-tagline">Design. Build. Scale.</p>
      </div>
    </motion.div>
  );
};

export default Navbar;
