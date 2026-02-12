import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Home from "./pages/Home";
import Infrastructure from "./pages/Infrastructure";
import Course from "./pages/Course";
import Highlights from "./pages/Highlights";
import Contact from "./pages/Contact";
import View from "./pages/View";
import ScrollToTop from "./components/ScrollToTop";
import Information from "./pages/Information";
import AdmissionApply from "./pages/AdmissionApply";

import Hospital from "./pages/Hospital";
import Blogs from "./pages/Blogs";
import Preloader from "./components/Preloader";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
      offset: 100,
    });
  }, []);
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Preloader />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />

            <Route path="/hospital" element={<Hospital />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/course" element={<Course />} />
            <Route path="/highlights" element={<Highlights />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/infrastructure" element={<Infrastructure />} />
            <Route path="/information" element={<Information />} />
            <Route path="/view" element={<View />} />
            <Route path="/apply" element={<AdmissionApply />} />
          </Routes>
          <Footer />
          <ScrollToTop />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
