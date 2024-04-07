import Hero from "../components/Hero";
import AboutImg from "../assets/1.jpg";
import Footer from "../components/Footer";
import ContactForm from "../components/Contactform";
import Navbar from "../components/navbar/Navbar";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Contact"
        btnClass="hide"
      />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Contact;
