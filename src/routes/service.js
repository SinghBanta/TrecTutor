import Hero from "../components/Hero";
import Navbar from "../components/navbar/Navbar";
import ServiceImg from "../assets/7.jpg";
import Footer from "../components/Footer";
import Trip from "../components/Trip";

function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={ServiceImg}
        title="Services of Trectutor"
        btnClass="hide"
      />
      <Trip />
      <Footer />
    </>
  );
}
export default Service;
