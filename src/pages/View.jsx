import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  PhoneIcon,
  ClockIcon,
  MapPinIcon,
  UserGroupIcon,
  BuildingOffice2Icon,
  ShieldCheckIcon,
  ExclamationTriangleIcon,
  ChatBubbleLeftRightIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  BuildingLibraryIcon,
  BeakerIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";

const View = () => {
  const { hash } = useLocation();
  const [activeSection, setActiveSection] = useState("");

  const sections = [
    {
      id: "emergency",
      title: "Casualty & Emergency",
      icon: ExclamationTriangleIcon,
    },
    {
      id: "general-info",
      title: "General Information",
      icon: BuildingLibraryIcon,
    },
    {
      id: "indoor-services",
      title: "Indoor Services",
      icon: BuildingOffice2Icon,
    },
    { id: "opd-services", title: "OPD Services", icon: UserGroupIcon },
    {
      id: "complaints",
      title: "Complaints & Grievances",
      icon: ChatBubbleLeftRightIcon,
    },
    {
      id: "responsibilities",
      title: "User Responsibilities",
      icon: ShieldCheckIcon,
    },
  ];

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

  // Scroll spy to highlight active section in sidebar
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-100px 0px -50% 0px" },
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(id);
    }
  };

  return (
    <div className="min-h-screen bg-white pt-28 pb-20 font-sans">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 relative">
          {/* Sidebar Navigation - Sticky on Desktop */}
          <div className="hidden lg:block w-80 flex-shrink-0">
            <div className="sticky top-32 space-y-3 bg-white p-6 rounded-[2rem] shadow-xl border border-gray-100">
              <h3 className="text-royal-gold text-xs font-bold uppercase tracking-[0.2em] px-4 mb-4">
                Hospital Services
              </h3>
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full flex items-center gap-4 px-5 py-4 rounded-xl transition-all duration-300 text-sm font-bold group border border-transparent
                     ${
                       activeSection === section.id
                         ? "bg-royal-navy text-white shadow-lg border-royal-navy/10 transform scale-105"
                         : "text-gray-500 hover:bg-gray-50 hover:text-royal-navy hover:border-gray-100"
                     }`}
                >
                  <section.icon
                    className={`w-5 h-5 transition-colors ${
                      activeSection === section.id
                        ? "text-royal-gold"
                        : "text-gray-400 group-hover:text-royal-navy"
                    }`}
                  />
                  {section.title}
                </button>
              ))}
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 space-y-16">
            {/* 1. Casualty & Emergency Services */}
            <section
              id="emergency"
              className="scroll-mt-32 bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-gray-100 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none group-hover:bg-red-500/10 transition-colors"></div>

              <div className="flex items-center gap-6 mb-10 relative z-10">
                <div className="p-4 bg-red-50 text-red-600 rounded-2xl ring-1 ring-red-100 shadow-sm">
                  <ExclamationTriangleIcon className="w-8 h-8" />
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-royal-navy">
                  Casualty & Emergency
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-10 relative z-10">
                <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-3xl border border-red-100 shadow-sm">
                  <h4 className="font-bold text-red-700 mb-4 flex items-center gap-2 uppercase tracking-wider text-sm">
                    <PhoneIcon className="w-5 h-5" /> Emergency Contacts
                  </h4>
                  <div className="flex flex-col gap-3">
                    <a
                      href="tel:7055400400"
                      className="text-3xl font-bold text-royal-navy hover:text-red-600 transition-colors font-serif"
                    >
                      7055 400 400
                    </a>
                    <a
                      href="tel:7500036669"
                      className="text-xl font-bold text-gray-500 hover:text-red-600 transition-colors font-serif"
                    >
                      7500 036 669
                    </a>
                  </div>
                  <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 bg-red-100 text-red-600 text-xs font-bold rounded-full uppercase tracking-wide">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                    </span>
                    Available 24x7
                  </div>
                </div>
                <div className="border border-gray-100 rounded-3xl p-8 hover:border-royal-gold/30 transition-colors bg-white">
                  <h4 className="font-bold text-royal-navy mb-4 flex items-center gap-2 uppercase tracking-wider text-sm">
                    <MapPinIcon className="w-5 h-5 text-royal-gold" /> Location
                  </h4>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Ground Floor, Emergency Block
                    <br />
                    <span className="text-sm text-gray-400 font-medium">
                      Room No. 1055, Gate No. 2
                    </span>
                  </p>
                </div>
              </div>

              <div className="space-y-8 relative z-10">
                <div>
                  <h3 className="text-lg font-bold text-royal-navy border-l-4 border-royal-gold pl-4 mb-6">
                    Key Features
                  </h3>
                  <ul className="grid md:grid-cols-2 gap-x-6 gap-y-4">
                    {[
                      "24-hour availability throughout the year",
                      "No registration fee for urgent intervention",
                      "Dedicated team of Doctors, Nurses & Paramedics",
                      "Fully equipped Operation Theatre",
                      "Modern life-saving gadgets (Ventilators, Defibrillators)",
                      "All urgent investigations (ECG, USG, X-ray) 24x7",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-gray-600 text-sm group/list"
                      >
                        <CheckCircleIcon className="w-5 h-5 text-gray-300 group-hover/list:text-royal-gold flex-shrink-0 transition-colors" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl border border-dashed border-gray-300">
                  <p className="text-gray-500 text-sm leading-relaxed italic text-center">
                    "In serious cases, treatment/management gets priority over
                    paperwork like registration/Medico-Legal requirements. Our
                    endeavor is to provide medical care at the earliest possible
                    time."
                  </p>
                </div>
              </div>
            </section>

            {/* 2. General Information */}
            <section
              id="general-info"
              className="scroll-mt-32 bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-gray-100"
            >
              <div className="flex items-center gap-6 mb-10">
                <div className="p-4 bg-royal-navy/5 text-royal-navy rounded-2xl">
                  <BuildingLibraryIcon className="w-8 h-8" />
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-royal-navy">
                  General Information
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-10">
                <div className="bg-royal-navy p-6 rounded-3xl text-center text-white relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-royal-gold/20 transition-colors"></div>
                  <div className="bg-white/10 w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm border border-white/10">
                    <BuildingOffice2Icon className="w-7 h-7 text-royal-gold" />
                  </div>
                  <h3 className="text-3xl font-bold font-serif mb-1">300+</h3>
                  <p className="text-sm text-gray-300 font-medium uppercase tracking-wide">
                    Multispecialty Beds
                  </p>
                </div>
                <div className="bg-white border border-gray-100 p-6 rounded-3xl text-center hover:shadow-lg transition-shadow group">
                  <div className="bg-gray-50 w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-royal-navy group-hover:text-white transition-colors">
                    <UserGroupIcon className="w-7 h-7 text-gray-400 group-hover:text-royal-gold transition-colors" />
                  </div>
                  <h3 className="text-3xl font-bold text-royal-navy font-serif mb-1">
                    110+
                  </h3>
                  <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">
                    Doctors & Faculty
                  </p>
                </div>
                <div className="bg-white border border-gray-100 p-6 rounded-3xl text-center hover:shadow-lg transition-shadow group">
                  <div className="bg-gray-50 w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-royal-navy group-hover:text-white transition-colors">
                    <HeartIcon className="w-7 h-7 text-gray-400 group-hover:text-royal-gold transition-colors" />
                  </div>
                  <h3 className="text-3xl font-bold text-royal-navy font-serif mb-1">
                    180+
                  </h3>
                  <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">
                    Nursing Staff
                  </p>
                </div>
              </div>

              <div className="border border-gray-100 rounded-3xl overflow-hidden shadow-sm">
                <div className="bg-gray-50 px-8 py-4 border-b border-gray-100 font-bold text-royal-navy uppercase tracking-widest text-sm">
                  Enquiry & Information
                </div>
                <div className="p-8 grid md:grid-cols-2 gap-10">
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                      Location
                    </h4>
                    <p className="text-gray-700 leading-relaxed font-medium">
                      Central Enquiry & Registration Office is located just
                      inside main entrance of the OPD Block.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                      Contact
                    </h4>
                    <div className="space-y-2">
                      <a
                        href="tel:18002704121"
                        className="flex items-center justify-between text-royal-navy font-bold hover:text-royal-gold transition-colors group"
                      >
                        <span>Toll Free</span>
                        <span className="font-mono text-lg group-hover:translate-x-1 transition-transform">
                          1800-270-4121
                        </span>
                      </a>
                      <div className="h-px bg-gray-100"></div>
                      <a
                        href="tel:7055400400"
                        className="flex items-center justify-between text-gray-600 font-medium hover:text-royal-navy transition-colors group"
                      >
                        <span>General Enquiry</span>
                        <span className="font-mono group-hover:translate-x-1 transition-transform">
                          7055 400 400
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 3. Indoor Services */}
            <section
              id="indoor-services"
              className="scroll-mt-32 bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-gray-100"
            >
              <div className="flex items-center gap-6 mb-10">
                <div className="p-4 bg-royal-gold/10 text-royal-navy rounded-2xl">
                  <BuildingOffice2Icon className="w-8 h-8 text-royal-gold" />
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-royal-navy">
                  Indoor Services
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-6">
                  <h3 className="font-bold text-royal-navy flex items-center gap-2 text-lg">
                    Facilities Overview
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "24/7 Treatment by Resident Doctors & Nurses",
                      "Central AC, Hot/Cold water, Generator backup",
                      "Portable X-Ray, ECG services at bedside",
                      "3 Meals/day + Morning Tea provided",
                      "Two attendant passes per patient",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-gray-600 bg-gray-50 p-3 rounded-xl border border-transparent hover:border-gray-200 transition-colors"
                      >
                        <span className="w-2 h-2 rounded-full bg-royal-gold"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-royal-navy rounded-3xl p-8 text-white relative overflow-hidden flex flex-col justify-center">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-royal-gold/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
                  <h3 className="font-bold text-royal-gold mb-2 flex items-center gap-2 uppercase tracking-widest text-sm">
                    <ClockIcon className="w-5 h-5" /> Visiting Hours
                  </h3>
                  <p className="text-4xl font-bold font-serif mb-4">
                    4:00 PM - 6:00 PM
                  </p>
                  <p className="text-sm text-gray-400 leading-relaxed border-t border-white/10 pt-4">
                    Visitors are allowed only during notified hours to ensure
                    adequate rest and care for patients.
                  </p>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-gray-100">
                <h3 className="font-bold text-royal-navy mb-6 text-lg">
                  Patient Care & Support Guidelines
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Free treatment opportunities for indigent patients (on assessment)",
                    "Cleanliness maintained as per Biomedical Waste rules",
                    "Fully equipped ICUs at Emergency Block (1st Floor)",
                    "Day care facility for minor surgeries & chemotherapy",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-4 p-4 border border-gray-100 rounded-2xl hover:bg-gray-50 transition-colors"
                    >
                      <CheckCircleIcon className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                      <p className="text-sm text-gray-600 font-medium">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 4. OPD Services */}
            <section
              id="opd-services"
              className="scroll-mt-32 bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-gray-100"
            >
              <div className="flex items-center gap-6 mb-10">
                <div className="p-4 bg-royal-navy/5 rounded-2xl">
                  <UserGroupIcon className="w-8 h-8 text-royal-navy" />
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-royal-navy">
                  Out Patient Services (OPD)
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-10">
                <div className="border border-gray-100 rounded-3xl p-8 bg-gray-50/50 hover:bg-white hover:shadow-lg transition-all duration-300 group">
                  <h4 className="font-bold text-gray-400 mb-4 flex items-center gap-2 text-xs uppercase tracking-widest group-hover:text-royal-gold transition-colors">
                    <ClockIcon className="w-5 h-5" /> Registration Time
                  </h4>
                  <p className="text-3xl font-bold text-royal-navy font-serif">
                    09:00{" "}
                    <span className="text-lg text-gray-400 font-sans">AM</span>{" "}
                    - 03:00{" "}
                    <span className="text-lg text-gray-400 font-sans">PM</span>
                  </p>
                  <p className="text-sm text-gray-500 mt-2 font-medium">
                    General OPD (Mon - Sat)
                  </p>
                </div>
                <div className="border border-gray-100 rounded-3xl p-8 bg-gray-50/50 hover:bg-white hover:shadow-lg transition-all duration-300 group">
                  <h4 className="font-bold text-gray-400 mb-4 flex items-center gap-2 text-xs uppercase tracking-widest group-hover:text-royal-gold transition-colors">
                    <BeakerIcon className="w-5 h-5" /> Consultation Time
                  </h4>
                  <p className="text-3xl font-bold text-royal-navy font-serif">
                    09:00{" "}
                    <span className="text-lg text-gray-400 font-sans">AM</span>{" "}
                    - 04:00{" "}
                    <span className="text-lg text-gray-400 font-sans">PM</span>
                  </p>
                  <p className="text-sm text-gray-500 mt-2 font-medium">
                    General OPD (Mon - Sat)
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="font-bold text-royal-navy mb-4 flex items-center gap-2">
                    <span className="w-8 h-1 bg-royal-gold rounded-full"></span>
                    Process & Guidelines
                  </h3>
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <ul className="space-y-4 text-sm text-gray-700">
                      {[
                        "OPD Card (Rs. 20/-) required from Ground Floor counter.",
                        "Consultation on First Come First Serve basis (Priority for Seniors/Emergency).",
                        "Wheelchairs & Trolleys available free of charge at entrance.",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <ArrowRightIcon className="w-4 h-4 text-royal-gold mt-1 shrink-0" />
                          <span className="font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-royal-navy mb-4 flex items-center gap-2">
                    <span className="w-8 h-1 bg-royal-gold rounded-full"></span>
                    Investigations & Labs
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 ml-1">
                    Sample Collection Centre:{" "}
                    <span className="font-bold text-royal-navy">
                      Diagnostic Block, Ground Floor
                    </span>
                  </p>
                  <div className="bg-royal-navy text-white rounded-2xl p-6 flex flex-col md:flex-row justify-between items-center gap-6 shadow-lg relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-royal-gold/10 rounded-fullblur-2xl -mr-16 -mt-16"></div>
                    <div>
                      <p className="font-bold text-royal-gold uppercase text-xs tracking-[0.2em] mb-1">
                        Lab Timings
                      </p>
                      <p className="text-2xl font-bold font-serif">
                        09:00 AM - 04:00 PM
                      </p>
                    </div>
                    <div className="h-px w-full md:w-px md:h-12 bg-white/20"></div>
                    <div className="text-right md:text-left">
                      <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">
                        Report Availability
                      </p>
                      <p className="font-bold text-lg">Next OPD Day</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 5. Complaints */}
            <section
              id="complaints"
              className="scroll-mt-32 bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-gray-100"
            >
              <div className="flex items-center gap-6 mb-8">
                <div className="p-4 bg-gray-100 text-gray-600 rounded-2xl">
                  <ChatBubbleLeftRightIcon className="w-8 h-8" />
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-royal-navy">
                  Complaints & Grievances
                </h2>
              </div>

              <p className="text-gray-600 leading-relaxed mb-8 text-lg font-light">
                We strive for excellence, but if our services fall short, please
                let us know. Your feedback helps us serve you better.
              </p>

              <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-royal-navy/5 rounded-bl-[3rem]"></div>

                <h4 className="font-bold text-royal-navy mb-4 text-xl">
                  How to lodge a complaint?
                </h4>
                <p className="text-sm text-gray-600 mb-6 font-medium">
                  You may lodge your complaints directly to the{" "}
                  <span className="font-bold text-royal-navy border-b-2 border-royal-gold/50">
                    Medical Superintendent (M.S. Office)
                  </span>
                  .
                </p>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex items-center gap-3 px-4 py-3 bg-white rounded-xl shadow-sm border border-gray-100">
                    <CheckCircleIcon className="w-5 h-5 text-green-600" />
                    <span className="text-sm font-bold text-gray-700">
                      Duly Acknowledged
                    </span>
                  </div>
                  <div className="flex items-center gap-3 px-4 py-3 bg-white rounded-xl shadow-sm border border-gray-100">
                    <CheckCircleIcon className="w-5 h-5 text-green-600" />
                    <span className="text-sm font-bold text-gray-700">
                      Prompt Resolution
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* 6. Responsibilities */}
            <section
              id="responsibilities"
              className="scroll-mt-32 bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-gray-100"
            >
              <div className="flex items-center gap-6 mb-10">
                <div className="p-4 bg-royal-navy text-white rounded-2xl">
                  <ShieldCheckIcon className="w-8 h-8" />
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-royal-navy">
                  Responsibilities of Users
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "Please appreciate the constraints under which the hospital functions.",
                  "Follow all hospital rules and regulations.",
                  "Do not cause inconvenience to other patients (noise/crowding).",
                  "Keep the hospital and surroundings clean.",
                  "Do not argue with security staff - show passes when asked.",
                  "Use hospital facilities with care.",
                  "Beware of touts - Do not indulge in unauthorized money transactions.",
                  "Refrain from demanding undue favors from staff.",
                ].map((rule, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-5 border border-gray-100 rounded-2xl hover:border-royal-gold/50 hover:shadow-md transition-all duration-300 bg-white group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-gray-50 text-gray-400 flex items-center justify-center flex-shrink-0 text-xs font-bold font-mono group-hover:bg-royal-navy group-hover:text-royal-gold transition-colors">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <p className="text-sm text-gray-600 font-medium leading-relaxed group-hover:text-gray-900">
                      {rule}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;
