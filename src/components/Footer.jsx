import React from "react";
import logo from "../assets/kdmchrc.png";
import { Link } from "react-router-dom";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

const Footer = () => {
  return (
    <footer className="relative bg-royal-navy text-white pt-32 pb-12 overflow-hidden font-sans">
      {/* 2. BACKGROUND EFFECTS */}
      <div className="absolute inset-0 bg-gradient-to-b from-royal-navy to-[#001226] z-0"></div>
      <div className="absolute top-[-50%] left-[-20%] w-[1000px] h-[1000px] bg-royal-blue/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-royal-gold/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-20">
        {/* 3. FLOATING CTA BANNER */}
        <div className="bg-blue-200 backdrop-blur-xl rounded-2xl p-8 md:p-12 border border-white/10 mb-20 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-royal-gold/10 rounded-full blur-3xl -mr-16 -mt-16 transition-all duration-700 group-hover:bg-royal-gold/20"></div>

          <div className=" relative z-10 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-3">
              Ready to begin your journey?
            </h2>
            <p className="text-white text-lg max-w-xl">
              Join K.D. Medical College today and take the first step towards a
              prestigious career in healthcare.
            </p>
          </div>
          <Link
            to="/apply"
            className="relative z-10 group/btn flex items-center gap-3 bg-gradient-to-r from-royal-gold to-yellow-500 text-royal-navy px-8 py-4 rounded-full font-bold text-lg shadow-lg shadow-royal-gold/20 hover:shadow-royal-gold/40 hover:scale-105 transition-all duration-300"
          >
            Apply Now
            <ArrowRightIcon className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16 border-b border-white/10 pb-16">
          {/* COL 1: BRAND IDENTITY */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-white p-4 rounded-2xl inline-block shadow-2xl shadow-black/30 transform hover:scale-105 transition-transform duration-300">
              <img src={logo} alt="KD College" className="h-20 w-auto" />
            </div>
            <p className="text-white leading-relaxed text-lg max-w-sm">
              Empowering the next generation of medical professionals with
              world-class education, cutting-edge research, and compassionate
              patient care.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 pt-2">
              {[
                {
                  icon: "facebook",
                  url: "https://www.facebook.com/kdmchrc/",
                  color: "#1877F2",
                },
                {
                  icon: "twitter",
                  url: "https://twitter.com/kd_medical",
                  color: "#1DA1F2",
                },
                {
                  icon: "instagram",
                  url: "https://www.instagram.com/kdmedical.mtr/",
                  color: "#E4405F",
                },
                {
                  icon: "linkedin",
                  url: "https://www.linkedin.com/company/13603905/",
                  color: "#0A66C2",
                },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 border border-white/5 hover:border-white/20 hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-lg"
                  style={{ hover: { backgroundColor: social.color } }} // Inline logic simplified for Tailwind
                >
                  {/* Simple SVG Icons matching previous ones or Generic */}
                  {social.icon === "facebook" && (
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  )}
                  {social.icon === "twitter" && (
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  )}
                  {social.icon === "instagram" && (
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204 013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  )}
                  {social.icon === "linkedin" && (
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* COL 2: MAIN LINKS */}
          <div className="lg:col-span-2 lg:col-start-6 space-y-8">
            <h3 className="text-xl font-bold font-serif text-white flex items-center gap-3">
              <span className="w-8 h-0.5 bg-royal-gold"></span>
              Explore
            </h3>
            <ul className="space-y-4">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Academic Courses", path: "/course" },
                { name: "Infrastructure", path: "/infrastructure" },
                { name: "Gallery", path: "/infrastructure#college-gallery" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-white hover:text-royal-gold hover:pl-2 transition-all duration-300 flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-royal-gold opacity-0 group-hover:opacity-100"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COL 3: LEGAL & SUPPORT */}
          <div className="lg:col-span-2 space-y-8">
            <h3 className="text-xl font-bold font-serif text-white flex items-center gap-3">
              <span className="w-8 h-0.5 bg-royal-gold"></span>
              Support
            </h3>
            <ul className="space-y-4">
              {[
                { name: "Admissions", path: "/apply" },
                { name: "Student Portal", path: "/student-portal" },
                {
                  name: "Privacy Policy",
                  path: "/terms-of-use-privacy-policy",
                },
                {
                  name: "Terms of Service",
                  path: "/terms-of-use-privacy-policy",
                },
                { name: "Anti-Ragging", path: "/highlights#anti-ragging" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-white hover:text-royal-gold hover:pl-2 transition-all duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COL 4: CONTACT INFO */}
          <div className="lg:col-span-3 space-y-8">
            <h3 className="text-xl font-bold font-serif text-white flex items-center gap-3">
              <span className="w-8 h-0.5 bg-royal-gold"></span>
              Contact Us
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPinIcon className="w-6 h-6 text-royal-gold shrink-0 mt-1" />
                <p className="text-white text-sm leading-relaxed">
                  National Highway #2, Akbarpur, <br />
                  Mathura, Uttar Pradesh 281406
                </p>
              </div>
              <div className="flex items-center gap-4">
                <PhoneIcon className="w-6 h-6 text-royal-gold shrink-0" />
                <a
                  href="tel:18002704121"
                  className="text-white text-sm hover:text-white transition-colors"
                >
                  1800 270 4121
                </a>
              </div>
              <div className="flex items-center gap-4">
                <EnvelopeIcon className="w-6 h-6 text-royal-gold shrink-0" />
                <a
                  href="mailto:ikdmchrc@gmail.com"
                  className="text-white text-sm hover:text-white transition-colors"
                >
                  ikdmchrc@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 5. BOTTOM COPYRIGHT BAR */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white pt-8 border-t border-white/5">
          <div className="flex flex-col items-center md:items-start">
            <p>
              &copy; {new Date().getFullYear()} K.D. Medical College. All rights
              reserved.
            </p>
            <p className="text-gray-500/60 text-xs mt-1">
              Designed & Developed by{" "}
              <a
                href="https://github.com/AmanRai1221"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400/80 hover:text-cyan-400 transition-colors"
              >
                Aman Rai
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
