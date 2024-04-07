import Footer from "../components/Footer";
import Destination from "../components/Destination";
import Hero from "../components/Hero";
import Navbar from "../components/navbar/Navbar";
import Trip from "../components/Trip";
import HomeImg from "../assets/home.jpg";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={HomeImg}
        title="Complete your journey with TrecTutor"
        text="Search admires near you"
        buttonText="Explore Now for Free"
        url="/main"
        btnClass="show"
      />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
}

export default Home;
