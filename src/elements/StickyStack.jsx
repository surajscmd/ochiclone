import Cards from "../components/Cards";
import Footer from "../components/Footer";
import Ready from "../components/Ready";


const StickyStack = () => {
  return (
    <section className="sticky-stack">
      <div className="sticky-item">
        <Cards />
      </div>
      <div className="sticky-item topminus">
        <Ready />
      </div>
      <div className="sticky-item topminus">
        <Footer />
      </div>
    </section>
  );
};

export default StickyStack;
