import { useState } from "react";
import "../css/client.css";
import clientimg from "../assets/clientimg.png";

const Client = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="client-section">
      {/* Header */}
      <div className="client-header">
        <h1 className="client-title">Clients’ reviews</h1>
      </div>

      {/* Client Card */}
      <div className="client-card">
        {/* Client Info */}
        <div className="client-info">
          <p className="client-name">Karman Ventures</p>
          <button
            className="client-read-btn"
            onClick={() => setOpen(!open)}
          >
            {open ? "Close" : "Read"}
          </button>
        </div>

        {/* Accordion Content */}
        {open && (
          <div className="accordion-content">
            {/* Services */}
            <div className="client-services">
              <p className="services-label">Services :</p>
              <div className="services-list">
                <p className="service-item">Invester deck</p>
                <p className="service-item">Sales deck</p>
              </div>
            </div>

            {/* Review */}
            <div className="client-review">
              <img className="client-img" src={clientimg} alt="Client Review" />
              <p className="review-text">
                They were transparent about the time and the stages of the
                project. The end product is high quality, and I feel confident
                about how they were handholding the client through the process.
                I feel like I can introduce them to someone who needs to put a
                sales deck together from scratch, and they would be able to
                handhold the client experience from 0 to 100 very effectively
                from story to design.{" "}
              </p>
               <div className="review-rating">5/5</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Client;
