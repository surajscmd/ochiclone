import { useState } from "react";
import "../css/client.css";
import clientimg from "../assets/clientimg.png";
import { AnimatePresence, motion } from "motion/react";

const clientsData = [
  {
    name: "Karman Ventures",
    services: ["Investor deck", "Sales deck"],
    review: `They were transparent about the time and the stages of the project. The end product is high quality, and I feel confident about how they were handholding the client through the process. I feel like I can introduce them to someone who needs to put a sales deck together from scratch, and they would be able to handhold the client experience from 0 to 100 very effectively from story to design. Their communication was clear, and they delivered ahead of schedule while maintaining high standards.`,
    rating: "5/5",
    img: clientimg,
  },
  {
    name: "Alpha Tech",
    services: ["Product Deck", "Brand Presentation"],
    review:
      "Alpha Tech was impressed by the creativity and speed of delivery. They understood our vision and translated it into a visually stunning deck. Each slide was thoughtfully designed with attention to detail, and the storytelling element made it easy to engage our stakeholders. The team was responsive to feedback and provided helpful suggestions throughout.",
    rating: "4.8/5",
    img: clientimg,
  },
  {
    name: "Beta Solutions",
    services: ["Pitch Deck", "Company Overview"],
    review:
      "The team was professional and supportive throughout the process. The final product exceeded our expectations. They offered valuable guidance on structuring the content, used modern visuals that aligned with our brand, and ensured every slide was polished. Our investors were highly impressed with the presentation, and we received positive feedback from multiple stakeholders.",
    rating: "5/5",
    img: clientimg,
  },
  {
    name: "Gamma Innovations",
    services: ["Investor Pitch", "Sales Deck"],
    review:
      "Gamma Innovations appreciated the clarity and quality of the storytelling. Highly recommend their services. The team transformed complex information into an engaging and concise narrative, used creative graphics effectively, and maintained a professional tone throughout. Their attention to detail and ability to meet tight deadlines was exceptional.",
    rating: "4.9/5",
    img: clientimg,
  },
  {
    name: "Delta Corp",
    services: ["Marketing Deck", "Investor Presentation"],
    review:
      "Delta Corp loved the attention to detail and visual appeal. The team delivered on time and was very collaborative. They incorporated our feedback seamlessly, provided creative insights, and ensured that the deck clearly communicated our value proposition. We were very pleased with the level of professionalism and creativity demonstrated throughout the project.",
    rating: "5/5",
    img: clientimg,
  },
];

const Client = () => {
  const [open, setOpen] = useState(null);

  const toggleOpen = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <div className="client-section">
      <div className="client-header">
        <h1 className="client-title">Clients’ reviews</h1>
      </div>

      {clientsData.map((client, index) => (
        <div className="client-card" key={index}>
          <div className="client-info">
            <p className="client-name">{client.name}</p>
            <button
              className="client-read-btn"
              onClick={() => toggleOpen(index)}
            >
              {open === index ? "Close" : "Read"}
            </button>
          </div>

          <AnimatePresence>
            {open === index && (
              <motion.div
                className="accordion-content"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                style={{ overflow: "hidden" }}
              >
                <div className="client-services">
                  <p className="services-label">Services :</p>
                  <div className="services-list">
                    {client.services.map((service, i) => (
                      <p className="service-item" key={i}>
                        {service}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="client-review">
                  <img
                    className="client-img"
                    src={client.img}
                    alt={`${client.name} Review`}
                  />
                  <p className="review-text">{client.review}</p>
                  <div className="review-rating">{client.rating}</div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default Client;
