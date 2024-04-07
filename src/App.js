import React from "react";
// import Navbar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/home";
import "./styles.css";
import Contact from "./routes/contact";
import Service from "./routes/service";
import About from "./routes/About";
import MainPage from "./routes/Mainpage";

export default function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<App />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
