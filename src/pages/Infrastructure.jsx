import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useLocation } from "react-router-dom";
import {
  PhotoIcon,
  BuildingLibraryIcon,
  BeakerIcon,
  BuildingOffice2Icon,
  HomeIcon,
  HeartIcon,
  CpuChipIcon,
} from "@heroicons/react/24/outline";

const navLinks = [
  { title: "College", id: "college-gallery", icon: BuildingLibraryIcon },
  { title: "Hospital", id: "hospital-gallery", icon: BuildingOffice2Icon },
  { title: "Departments", id: "departments", icon: BeakerIcon },
  { title: "General", id: "general", icon: HomeIcon },
  { title: "RHTC", id: "rhtc", icon: HeartIcon },
  { title: "UHTC", id: "uhtc", icon: CpuChipIcon },
];

// Helper to load images using Vite's import.meta.glob
const loadImages = (glob) => {
  return Object.values(glob).map((module) => module.default);
};

const collegeImages = loadImages(
  import.meta.glob("../assets/Medical college/*.jpg", { eager: true }),
);
const hospitalImages = loadImages(
  import.meta.glob("../assets/hospital/*.jpg", { eager: true }),
);
const departmentImages = loadImages(
  import.meta.glob("../assets/department/*.jpg", { eager: true }),
);
const infraImages = loadImages(
  import.meta.glob("../assets/infrastructure/*.jpg", { eager: true }),
);
const rhtcImages = loadImages(
  import.meta.glob("../assets/infrastructure/RHTC/*.jpg", { eager: true }),
);
const uhtcImages = loadImages(
  import.meta.glob("../assets/infrastructure/UHTC/*.jpg", { eager: true }),
);

const Section = ({ title, images, id, subtitle, icon: Icon }) => (
  <div className="mb-24 relative" id={id}>
    {/* Decorative Background Element */}
    <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5 pointer-events-none"></div>

    <div
      className="relative text-center mb-16 max-w-4xl mx-auto"
      data-aos="fade-up"
    >
      <div className="flex justify-center mb-4">
        <div className="p-3 bg-royal-navy/5 rounded-full">
          {Icon && <Icon className="w-8 h-8 text-royal-navy" />}
        </div>
      </div>
      <h2 className="text-4xl md:text-5xl font-bold text-royal-navy mb-4 font-serif relative inline-block">
        {title}
        <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-royal-gold to-transparent opacity-80"></span>
      </h2>
      {subtitle && (
        <p className="text-gray-600 mt-6 text-lg italic font-light">
          {subtitle}
        </p>
      )}
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
      {images.map((img, index) => (
        <div
          key={index}
          className="group relative h-80 rounded-2xl overflow-hidden shadow-lg cursor-pointer transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
          data-aos="fade-up"
          data-aos-delay={index * 100}
        >
          <div className="absolute inset-0 bg-gray-900/20 group-hover:bg-gray-900/0 transition-colors duration-500 z-10"></div>

          {/* Image */}
          <img
            src={img}
            alt={`${title} ${index + 1}`}
            className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
          />

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex flex-col justify-end p-6">
            <span className="text-royal-gold font-bold text-sm tracking-widest uppercase mb-1">
              View
            </span>
            <span className="text-white font-serif text-xl">
              {title} Gallery {index + 1}
            </span>
          </div>

          {/* Border Accents */}
          <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-white/30 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-all duration-500 z-20"></div>
          <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-white/30 rounded-bl-xl opacity-0 group-hover:opacity-100 transition-all duration-500 z-20"></div>
        </div>
      ))}
    </div>
  </div>
);

const InfraStructure = () => {
  const { hash } = useLocation();

  useEffect(() => {
    AOS.init({ duration: 600, once: true });
  }, []);

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [hash]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Header */}
      <div className="bg-royal-navy pt-32 pb-20 px-4 text-center text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-royal-gold/20 rounded-full blur-[100px]"></div>

        <div className="relative z-10 max-w-4xl mx-auto" data-aos="zoom-in">
          <span className="text-royal-gold font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
            World Class Facilities
          </span>
          <h1 className="text-5xl md:text-7xl text-black font-serif font-bold mb-6">
            Our <span className="text-royal-gold">Infrastructure</span>
          </h1>
          <p className="text-xl text-black leading-relaxed font-light font-sans max-w-2xl mx-auto">
            Step into a campus designed for excellence. From advanced
            laboratories to sprawling architectural marvels, experience the
            environment where future healers are shaped.
          </p>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="sticky top-[70px] md:top-[80px] z-30 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 overflow-x-auto no-scrollbar">
          <div className="flex items-center justify-start md:justify-center gap-4 md:gap-8 py-4 min-w-max">
            {navLinks.map((item) => (
              <button
                key={item.title}
                onClick={() => {
                  const el = document.getElementById(item.id);
                  if (el) {
                    const offset = 180; // height of sticking header + some breathing room
                    const elementPosition = el.getBoundingClientRect().top;
                    const offsetPosition =
                      elementPosition + window.pageYOffset - offset;
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: "smooth",
                    });
                  }
                }}
                className="flex items-center gap-2 group cursor-pointer hover:bg-royal-gold/10 px-4 py-2 rounded-xl transition-all"
              >
                <item.icon className="w-5 h-5 text-gray-400 group-hover:text-royal-navy transition-colors" />
                <span className="font-semibold text-sm md:text-base text-gray-600 group-hover:text-royal-navy transition-colors">
                  {item.title}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-20 px-4">
        <Section
          title="College Campus"
          subtitle="An architectural masterpiece fostering academic excellence"
          images={collegeImages}
          id="college-gallery"
          icon={BuildingLibraryIcon}
        />

        <Section
          title="Hospital Complex"
          subtitle="Advanced medical care facilities serving the community"
          images={hospitalImages}
          id="hospital-gallery"
          icon={BeakerIcon}
        />

        <Section
          title="Departments"
          subtitle="Specialized wings for focused learning and research"
          images={departmentImages}
          id="departments"
          icon={PhotoIcon}
        />

        <Section
          title="General Infrastructure"
          subtitle="Amenities designed for comfort and convenience"
          images={infraImages}
          id="general"
          icon={BuildingLibraryIcon}
        />

        <Section
          title="Rural Health Training Centre"
          subtitle="Community-focused rural healthcare initiatives"
          images={rhtcImages}
          id="rhtc"
          icon={HeartIcon}
        />

        <Section
          title="Urban Health Training Centre"
          subtitle="Serving the urban population with dedicated care"
          images={uhtcImages}
          id="uhtc"
          icon={CpuChipIcon}
        />
      </div>
    </div>
  );
};

export default InfraStructure;
