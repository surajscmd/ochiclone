import React from "react";
import "../css/footer.css";
import mainlogo from "../assets/mainlogo.svg";

const Footer = () => {
  return (
    <section className="footer">
      {/* Left Section */}
      <div className="footer-left">
        <p className="footer-title">Eye-</p>
        <p className="footer-title">Opening</p>
        <p className="footer-title">Presentations</p>
      </div>

      {/* Middle Section */}
      <div className="footer-middle">
        <div className="footer-social">
          <p className="footer-label">S:</p>
          <p className="footer-link">Instagram</p>
          <p className="footer-link">Behance</p>
          <p className="footer-link">Facebook</p>
          <p className="footer-link">LinkedIn</p>
        </div>

        <div className="footer-location">
          <p className="footer-label">L:</p>
          <div className="footer-address">
            <p className="add-one">202-1965 W 4th Ave</p>
            <p className="add-one">Vancouver, Canada</p>
          </div>
          <div className="footer-address margin-top">
            <p className="add-one">30 Chukarina St</p>
            <p className="add-one">Lviv, Ukraine</p>
          </div>
        </div>

        <div className="footer-email">
          <p className="footer-label">E:</p>
          <p>hello@ochidesign</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <img src={mainlogo} alt="Main Logo" className="footer-logo" />
        <p className="footer-copy">© 2025 Ochi Design</p>
        <p className="footer-clone">Website cloned by Suraj S</p>
      </div>
    </section>
  );
};

export default Footer;
