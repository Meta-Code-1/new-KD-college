import React, { useEffect, useState } from "react";
import logo from "../assets/kdmchrc2.png"; // Ensure this path is correct

const Preloader = ({ onFinish }) => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Simulate initial loading time (or wait for actual assets)
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setLoading(false);
        if (onFinish) onFinish();
      }, 800); // Wait for fade-out animation to complete
    }, 2000); // 2 seconds minimum show time

    return () => clearTimeout(timer);
  }, [onFinish]);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white transition-opacity duration-700 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="relative flex flex-col items-center">
        {/* Animation Container */}
        <div className="relative w-32 h-32 flex items-center justify-center mb-8">
          {/* Pulsing Outer Ring */}
          <div className="absolute w-full h-full rounded-full border-4 border-royal-gold/20 animate-ping"></div>
          <div className="absolute w-full h-full rounded-full border-4 border-t-royal-gold border-r-transparent border-b-royal-gold border-l-transparent animate-spin z-10"></div>

          {/* Logo */}
          <div className="relative z-20 w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center animate-pulse">
            <img
              src={logo}
              alt="KD College"
              className="w-16 h-16 object-contain"
            />
          </div>
        </div>

        {/* Text Animation */}
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-serif font-bold text-royal-navy tracking-widest animate-fade-in-up">
            K.D. MEDICAL COLLEGE
          </h2>
          <p className="text-sm text-royal-gold font-medium uppercase tracking-[0.3em] animate-fade-in-up delay-100">
            Mathura
          </p>
        </div>

        {/* Loading Bar */}
        <div className="w-48 h-1 bg-gray-100 rounded-full mt-6 overflow-hidden">
          <div className="h-full bg-royal-navy animate-progress-bar"></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
