import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  AcademicCapIcon,
  GlobeAltIcon,
  BuildingOffice2Icon,
} from "@heroicons/react/24/solid";

const Contact = () => {
  const { hash } = useLocation();

  useEffect(() => {
    AOS.init({ duration: 600, once: true });
  }, []);

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        setTimeout(() => element.scrollIntoView({ behavior: "smooth" }), 100);
      }
    }
  }, [hash]);

  return (
    <div className="min-h-screen bg-background font-body mt-20">
      {/* --- AFFILIATION HEADER (Retained from College Project but Styled to Match Hospital) --- */}
      <div className="relative py-24 bg-secondary overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[100px] -mr-32 -mt-32 pointer-events-none"></div>

        <div
          className="container mx-auto px-4 relative z-10 text-center"
          data-aos="zoom-in"
        >
          <span className="text-primary-hover font-bold tracking-[0.3em] uppercase text-sm mb-4 block">
            Accreditations & Recognitions
          </span>
          <h1 className="text-4xl md:text-7xl font-display font-bold text-white mb-6">
            Affiliated <span className="text-primary">Universities</span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-300 text-lg font-light leading-relaxed">
            Partnered with prestigious institutions to ensure the highest
            standards of medical education and academic integrity.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-16 mb-24 relative z-20">
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Card 1: DBRAU */}
          <div
            className="bg-white rounded-[2rem] p-10 shadow-xl border-t-8 border-secondary hover:shadow-2xl transition-all duration-300 group premium-shadow"
            data-aos="fade-right"
          >
            <div className="flex items-start gap-6 mb-8">
              <div className="p-5 bg-secondary/5 rounded-2xl group-hover:bg-secondary group-hover:text-white transition-colors">
                <AcademicCapIcon className="w-10 h-10 text-secondary group-hover:text-primary-hover transition-colors" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-secondary font-display leading-tight">
                  DR. BHIM RAO AMBEDKAR UNIVERSITY
                </h2>
                <span className="inline-block bg-primary/10 text-secondary/80 text-xs font-bold px-3 py-1.5 rounded-full mt-3 uppercase tracking-wider">
                  Batch 2015 Onwards
                </span>
              </div>
            </div>

            <div className="space-y-6 pl-4 border-l-2 border-gray-100 group-hover:border-primary/30 transition-colors">
              <div>
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-1">
                  Vice Chancellor
                </h3>
                <p className="text-lg font-bold text-gray-800">
                  Prof. Ashok Mittal
                </p>
              </div>
              <div>
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-1">
                  Registrar
                </h3>
                <p className="text-lg font-bold text-gray-800">
                  Shri Sanjeev Kumar Singh
                </p>
              </div>
              <div className="pt-4 flex gap-6 text-sm font-medium">
                <a
                  href="tel:05652858668"
                  className="flex items-center gap-2 text-gray-500 hover:text-primary transition-colors"
                >
                  <PhoneIcon className="w-5 h-5" /> 0565-2858668
                </a>
                <a
                  href="mailto:vc@dbrau.org.in"
                  className="flex items-center gap-2 text-gray-500 hover:text-primary transition-colors"
                >
                  <EnvelopeIcon className="w-5 h-5" /> vc@dbrau.org.in
                </a>
              </div>
            </div>
          </div>

          {/* Card 2: ABVMU */}
          <div
            className="bg-white rounded-[2rem] p-10 shadow-xl border-t-8 border-primary hover:shadow-2xl transition-all duration-300 group premium-shadow"
            data-aos="fade-left"
          >
            <div className="flex items-start gap-6 mb-8">
              <div className="p-5 bg-primary/10 rounded-2xl group-hover:bg-primary group-hover:text-white transition-colors">
                <BuildingOffice2Icon className="w-10 h-10 text-primary group-hover:text-white transition-colors" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-secondary font-display leading-tight">
                  ATAL BIHARI VAJPAYEE MEDICAL UNIVERSITY
                </h2>
                <span className="inline-block bg-primary/10 text-secondary/80 text-xs font-bold px-3 py-1.5 rounded-full mt-3 uppercase tracking-wider">
                  Batch 2021-22 Onwards
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 pl-4 border-l-2 border-gray-100 group-hover:border-primary/30 transition-colors">
              <div>
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-1">
                  Vice Chancellor
                </h3>
                <p className="text-base font-bold text-gray-800">
                  Dr. Sanjeev Misra
                </p>
              </div>
              <div>
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-1">
                  Registrar
                </h3>
                <p className="text-base font-bold text-gray-800">
                  Dr. Sanjeev Kumar
                </p>
              </div>
              <div className="col-span-2 pt-2">
                <a
                  href="http://www.abvmuup.edu.in"
                  target="_blank"
                  className="inline-flex items-center gap-2 text-primary font-bold hover:text-secondary transition-colors group/link"
                >
                  <GlobeAltIcon className="w-5 h-5" /> Visit Official Website
                  <span className="group-hover/link:translate-x-1 transition-transform">
                    &rarr;
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- CONTACT SECTION (Updated with Hospital Data) --- */}
      <div className="bg-gray-50 py-24 relative overflow-hidden">
        {/* Decorative BG */}
        <div className="absolute top-0 left-0 w-full h-full bg-white opacity-50"></div>
        <div className="absolute right-0 top-0 w-1/3 h-full bg-secondary/5 skew-x-12 transform origin-top-right"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Info */}
            <div className="space-y-12 pt-8" data-aos="fade-right">
              <div>
                <span className="text-primary font-bold tracking-[0.3em] uppercase mb-4 block text-sm">
                  Get in Touch
                </span>
                <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 text-secondary">
                  We'd Love to <br />
                  Hear From You
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
                  Have questions about admissions, hospital services, or
                  careers? Our team is here to assist you.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: MapPinIcon,
                    title: "Location",
                    desc: "Akbarpur, NH-19, Mathura, Uttar Pradesh 281406",
                  },
                  {
                    icon: PhoneIcon,
                    title: "Phone",
                    desc: "+91 70554 00400",
                  },
                  {
                    icon: EnvelopeIcon,
                    title: "Email",
                    desc: "kdmchrc@gmail.com",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-6 p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="p-4 bg-secondary/5 rounded-xl group-hover:bg-primary group-hover:text-white transition-colors">
                      <item.icon className="w-6 h-6 text-secondary group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-secondary mb-2 font-display">
                        {item.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div
              className="bg-secondary text-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden"
              data-aos="fade-left"
            >
              {/* Background Glow */}
              <div className="absolute -top-32 -right-32 w-80 h-80 bg-primary/20 rounded-full blur-3xl pointer-events-none"></div>

              <h3 className="text-3xl font-bold text-white mb-8 font-display relative z-10">
                Send us a Message
              </h3>
              <form className="space-y-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-primary-hover uppercase tracking-wider">
                      Your Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-white/20"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-primary-hover uppercase tracking-wider">
                      Phone
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-white/20"
                      placeholder="+91"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-primary-hover uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-white/20"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-primary-hover uppercase tracking-wider">
                    Subject
                  </label>
                  <select className="w-full px-4 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all [&>option]:text-secondary cursor-pointer">
                    <option>Admission Inquiry</option>
                    <option>General Support</option>
                    <option>Careers / HR</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-primary-hover uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    className="w-full px-4 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-white/20 resize-none"
                    placeholder="How can we help?"
                  ></textarea>
                </div>

                <button className="w-full bg-linear-to-r from-primary to-red-600 text-white font-bold py-5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-lg cursor-pointer border-none">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="grid md:grid-cols-2 bg-white">
        <div className="h-[500px] md:h-auto w-full overflow-hidden relative">
          <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14138.397635678008!2d77.5310619!3d27.6372119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39736ce47bffc039%3A0xfe5fc3da9228d536!2sK.D.%20Medical%20College%2C%20Hospital%20and%20Research%20Center!5e0!3m2!1sen!2sin!4v1708450000000!5m2!1sen!2sin"
            className="w-full h-full border-0 relative z-10 transition-all duration-500"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="KD Medical College Location"
          ></iframe>
        </div>
        <div className="flex items-center justify-center p-16 md:p-32 bg-secondary relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="text-center max-w-sm relative z-10">
            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-8 text-primary border border-white/10 backdrop-blur-sm shadow-xl">
              <MapPinIcon className="w-10 h-10" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-6 font-display">
              Visit Our Campus
            </h3>
            <p className="text-gray-300 mb-10 leading-relaxed">
              Experience our state-of-the-art facilities firsthand.
              <br />
              Located conveniently on NH-19, Mathura.
            </p>
            <a
              href="https://www.google.com/maps?q=KD+Super+Speciality+Hospital,+Mathura"
              target="_blank"
              rel="noreferrer"
              className="inline-block px-10 py-4 border border-primary text-primary font-bold rounded-full hover:bg-primary hover:text-white transition-all duration-300 uppercase tracking-widest text-sm"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
