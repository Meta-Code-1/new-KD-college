import React, { useState, useEffect } from "react";
import logo from "../assets/kdmchrc.png";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  // { name: "Home", to: "/" },
  { name: "About Us", to: "/about" },
  { name: "Hospital", to: "/hospital" },
  { name: "Blogs", to: "/blogs" },
  { name: "Course", to: "/Course" },
  {
    name: "Infrastructure",
    to: "/Infrastructure",
    dropdown: [{ name: "Information as per NMC", to: "/Information" }],
  },
  { name: "Contact Us", to: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Scroll Handler for Glass Effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`fixed z-50 transition-all duration-500 ease-in-out ${
          isScrolled
            ? "top-2 left-2 right-2 md:top-6 md:left-1/2 md:-translate-x-1/2 md:w-[95%] md:max-w-7xl rounded-full bg-white/90 backdrop-blur-xl shadow-2xl border border-white/20 py-2 px-6"
            : "top-0 left-0 right-0 w-full bg-gradient-to-b from-secondary/90 to-transparent py-4"
        }`}
      >
        <nav className="container mx-auto flex items-center justify-between">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-4 group">
            <img
              src={logo}
              alt="Logo"
              className={`transition-all duration-500 object-contain ${
                isScrolled ? "h-10 md:h-12" : "h-14 md:h-16"
              }`}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.to}
                  className={`relative px-4 py-2 text-xs md:text-sm uppercase tracking-wider font-bold transition-all duration-300 rounded-full flex items-center gap-1 group
                    ${
                      isScrolled
                        ? location.pathname === item.to
                          ? "text-primary bg-primary/10"
                          : "text-secondary hover:text-primary hover:bg-gray-50"
                        : location.pathname === item.to
                          ? "text-primary-hover"
                          : "text-white/90 hover:text-white"
                    }
                  `}
                >
                  <span className="relative z-10">{item.name}</span>
                  {item.dropdown && (
                    <ChevronDownIcon className="w-3 h-3 md:w-4 md:h-4 z-10 transition-transform duration-300 group-hover:rotate-180" />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item.dropdown && (
                  <div className="absolute top-full left-0 pt-4 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                    <div className="bg-white/95 backdrop-blur-md border-t-4 border-primary shadow-xl rounded-xl overflow-hidden py-2">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.to}
                          className="block px-6 py-3 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 transition-all duration-200 border-l-2 border-transparent hover:border-primary font-medium"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* CTA Button */}
            <Link
              to="/apply"
              className={`ml-4 px-6 py-2.5 rounded-full font-bold shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95 hidden xl:block
                ${isScrolled ? "bg-primary text-white hover:bg-secondary" : "bg-white text-secondary hover:bg-primary hover:text-white"}
              `}
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className={`lg:hidden p-2 focus:outline-none transition-colors ${isScrolled ? "text-secondary" : "text-white"}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <XMarkIcon className="w-8 h-8" />
            ) : (
              <Bars3Icon className="w-8 h-8" />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-secondary/95 backdrop-blur-xl transform transition-transform duration-500 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-6 p-4">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
          >
            <XMarkIcon className="w-10 h-10" />
          </button>

          {navItems.map((item) => (
            <div key={item.name} className="flex flex-col items-center w-full">
              <Link
                to={item.to}
                onClick={() => !item.dropdown && setIsOpen(false)}
                className={`text-2xl font-display font-bold tracking-widest transition-all duration-300 ${
                  location.pathname === item.to
                    ? "text-primary-hover scale-110"
                    : "text-white hover:text-primary-hover hover:scale-105"
                }`}
              >
                {item.name}
              </Link>

              {/* Mobile Submenu */}
              {item.dropdown && (
                <div className="flex flex-col items-center mt-3 space-y-3 w-full bg-white/5 py-4 rounded-xl">
                  {item.dropdown.map((subItem) => (
                    <Link
                      key={subItem.name}
                      to={subItem.to}
                      onClick={() => setIsOpen(false)}
                      className="text-lg text-gray-300 hover:text-primary-hover font-medium"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <Link
            to="/apply"
            onClick={() => setIsOpen(false)}
            className="mt-8 px-10 py-4 bg-primary text-white font-bold rounded-full shadow-xl hover:bg-white hover:text-primary transition-colors text-xl"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </>
  );
}
