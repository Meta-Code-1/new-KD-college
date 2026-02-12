import React from "react";
import introVideo from "../assets/intro.mp4";
import { Link } from "react-router-dom";

const Crousel = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          src={introVideo}
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Dark Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-royal-navy/40 via-transparent to-royal-navy/70 mix-blend-multiply"></div>
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-end text-center px-4 pb-24">
        <div data-aos="fade-up" data-aos-delay="800" className="flex gap-4">
          <Link
            to="/apply"
            className="px-8 py-3 bg-royal-gold text-royal-navy font-bold text-lg rounded-full hover:bg-white hover:text-royal-navy transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
          >
            Apply Now
          </Link>
          <Link
            to="/about"
            className="px-8 py-3 border-2 border-white text-white font-bold text-lg rounded-full hover:bg-white hover:text-royal-navy transition-all duration-300 shadow-xl hover:shadow-2xl"
          >
            Discover More
          </Link>
        </div>
      </div>

      {/* Scroll Down Hint */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 animate-bounce text-white/70 hidden md:block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
    </div>
  );
};

export default Crousel;
