import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

import chairman from "../assets/chairman.jpg";
import vc from "../assets/pankaj.jpg";
import md from "../assets/manoj.jpg";
import dean from "../assets/dean-img2.jpg";

const cardData = [
  {
    id: "Chairman",
    title: "Chairman",
    name: "Dr. Ram Kishore Agarwal",
    role: "Chairman",
    description: [
      "Dr. Ram Kishore Agarwal's journey from a humble background to an esteemed educational leader exemplifies his unwavering belief in the transformative power of education. Holding multiple degrees, he is deeply committed to making high-quality education accessible to all.",
      "As the founder of the RK Group, Dr. Agarwal's vision of a self-reliant and empowered nation has led to the establishment of educational institutions that set benchmarks in excellence. From schools to medical colleges, his leadership has created a legacy of accessible, high-quality learning that inspires future generations.",
    ],
    image: chairman,
  },
  {
    id: "Vice Chairman",
    title: "Vice Chairman",
    name: "Mr. Pankaj Agarwal",
    role: "Vice Chairman",
    description: [
      "Mr. Pankaj Agarwal believes that the hands that serve are holier than the lips that pray. His strategic guidance has been instrumental in shaping the modern infrastructure and student-centric approach of KD Medical College.",
      "He emphasizes holistic development, ensuring that students not only excel in academics but also imbibe values of compassion and integrity. His focus on innovation helps the institution stay ahead in the rapidly evolving medical landscape.",
    ],
    image: vc,
  },
  {
    id: "Managing Director",
    title: "Managing Director",
    name: "Mr. Manoj Agrawal",
    role: "Managing Director",
    description: [
      "Mr. Manoj Agrawal brings operational excellence and a dynamic vision to the administration. He ensures that the institution runs efficiently, providing the best facilities for both students and patients.",
      "His dedication to the 'Service to Humanity' motto drives the hospital's initiatives to reach the underprivileged. He believes in creating an ecosystem where medical professionals can thrive and deliver their best.",
    ],
    image: md,
  },
  {
    id: "Dean",
    title: "Dean/ Principal",
    name: "Dr. Ram Kumar Ashoka",
    role: "Dean / Principal",
    description: [
      "The educational program at Kanti Devi Medical College is designed to help you realize your great potential. As Dean, I am committed to maintaining the highest standards of academic rigor and clinical training.",
      "We strive to kindle the flame of curiosity in every student. Our faculty is dedicated to mentoring the next generation of doctors who are not only skilled but also empathetic healers.",
    ],
    image: dean,
  },
];

const MessageCards = () => {
  const [activeTab, setActiveTab] = useState("Chairman");

  // Find the data for the active tab
  const activeData =
    cardData.find((card) => card.id === activeTab) || cardData[0];

  useEffect(() => {
    AOS.init({ duration: 600, once: true });
  }, []);

  return (
    <div className="py-20 bg-background flex flex-col items-center">
      <div className="container mx-auto px-4">
        {/* Navigation Tabs */}
        <div
          className="flex flex-wrap justify-center gap-4 mb-16"
          data-aos="fade-down"
        >
          {cardData.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm md:text-base font-semibold transition-all duration-300 shadow-sm border ${
                activeTab === tab.id
                  ? "bg-primary text-white border-primary shadow-lg transform scale-105"
                  : "bg-white text-secondary border-gray-200 hover:border-primary hover:text-primary"
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* Content Card */}
        <div className="max-w-5xl mx-auto relative group">
          <div className="flex flex-col md:flex-row items-stretch bg-white rounded-3xl shadow-2xl overflow-hidden min-h-[320px]">
            {/* Image Section (Left) */}
            <div
              className="md:w-2/5 relative h-[250px] md:h-auto w-full overflow-hidden"
              data-aos="fade-right"
            >
              {/* Gradient Overlay for style */}
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent mix-blend-multiply z-10 opacity-30"></div>

              <img
                src={activeData.image}
                alt={activeData.name}
                key={activeData.image} // Force re-render for animation
                className="w-full h-full object-cover animate-fade-in md:scale-105 group-hover:scale-100 transition-transform duration-700"
              />
            </div>

            {/* Text Content Section (Right) */}
            <div
              className="md:w-3/5 relative bg-secondary text-white p-6 md:p-8 lg:p-10 flex flex-col justify-center"
              data-aos="fade-left"
            >
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-[80px] -mr-20 -mt-20 pointer-events-none"></div>
              <div className="absolute bottom-10 left-10 text-9xl font-serif text-white/5 pointer-events-none leading-none">
                "
              </div>

              {/* Content */}
              <div className="relative z-10">
                <span className="inline-block py-1 px-3 rounded bg-primary/20 text-primary-hover text-[10px] font-bold tracking-widest uppercase mb-3 border border-primary/20">
                  Key Leadership
                </span>

                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-display mb-2 drop-shadow-md text-white">
                  {activeData.name}
                </h2>

                <div className="flex items-center gap-4 mb-4">
                  <p className="text-gray-300 font-medium tracking-wide text-xs uppercase">
                    {activeData.role}
                  </p>
                  <div className="h-px bg-gradient-to-r from-primary to-transparent flex-1"></div>
                </div>

                {/* Description */}
                <div className="space-y-3 text-gray-200 text-sm md:text-base leading-relaxed font-body text-justify/80 relative">
                  {/* Quote line */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary/30 -ml-4 rounded-full hidden md:block"></div>

                  {activeData.description.map((paragraph, idx) => (
                    <p key={idx} className="opacity-90">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Signature or footer element could go here */}
                <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-white/40 text-xs font-serif italic">
                    KD Medical College & Research Center
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Simple Inline Animation Styles */}
      <style>{`
        @keyframes fadeIn {
            from { opacity: 0; transform: scale(1.05); }
            to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
            animation: fadeIn 0.7s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default MessageCards;
