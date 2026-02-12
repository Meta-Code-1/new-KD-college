import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  BookOpenIcon,
  AcademicCapIcon,
  ClockIcon,
  UserGroupIcon,
  ClipboardDocumentCheckIcon,
  CheckCircleIcon,
  BeakerIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/outline";

const CURRICULUM_DATA = [
  {
    title: "UG Curriculum 2022-2023 (Phase- 1)",
    links: [
      "Subject Wise Distribution of Hours",
      "TIMETABLES FOR THE ACADEMIC YEAR 2020-21",
      "Foundation Course",
    ],
  },
  {
    title: "UG Curriculum Phase -2 Batch 2020",
    links: [
      "Section 18A",
      "Section 18B",
      "Section 18C",
      "Section 18D",
      "Section 18E",
      "Check List",
    ],
  },
  {
    title: "UG Curriculum Phase -2 Batch 2019",
    links: [
      "Section 18A",
      "Section 18B",
      "Section 18C",
      "Section 18D",
      "Section 18E",
    ],
  },
  {
    title: "UG Curriculum Phase -3 (Part 1) Batch 2019",
    links: [
      "Section 18A",
      "Section 18B",
      "Section 18C",
      "Section 18D",
      "Section 18E",
    ],
  },
  {
    title: "UG Curriculum 2020-2021",
    links: ["Foundation Course", "Master Time Table", "Undertaking"],
  },
  {
    title: "UG Curriculum 2019-2020",
    links: [
      "Foundation Course",
      "Monitoring Checklist of Foundation Course",
      "Time Table for MBBS Batch 2019-20",
      "Monitoring Checklist of Master Time Table",
    ],
  },
];

const PG_CURRICULUM = [
  {
    title: "MD/MS Programs",
    description:
      "3-year comprehensive postgraduate training in various specialities.",
    specs: [
      "General Medicine",
      "General Surgery",
      "Paediatrics",
      "Orthopaedics",
      "Anaesthesia",
    ],
  },
  {
    title: "Research Syllabus",
    description: "Advanced research methodology and thesis work structure.",
    specs: ["Thesis Submission", "Journal Club", "Clinical Seminars"],
  },
];

const Course = () => {
  useEffect(() => {
    AOS.init({ duration: 600, once: true });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 mt-13 md:mt-20 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Header */}
        <div className="text-center" data-aos="fade-down">
          <span className="text-royal-gold font-bold tracking-[0.3em] uppercase text-sm mb-3 block">
            Academic Excellence
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-royal-navy mb-6 font-serif">
            Curriculum & <span className="text-royal-gold">Syllabus</span>
          </h1>
          <div className="h-1.5 w-24 bg-royal-gold mx-auto border-2 border-royal-gold rounded-full shadow-sm mb-6"></div>
          <p className="mt-4 text-black text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Excellence in medical education with state-of-the-art facilities and
            comprehensive curriculum designed to shape the future of healthcare.
          </p>
        </div>

        {/* ==================== MBBS SECTION ==================== */}
        <div id="mbbs" className="scroll-mt-32">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content Column */}
            <div className="lg:col-span-2 space-y-12">
              {/* Intro Section */}
              <div
                className="bg-white p-10 rounded-[2rem] shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
                data-aos="fade-up"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-royal-gold/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none group-hover:bg-royal-gold/10 transition-colors"></div>

                <div className="flex items-center gap-6 mb-8 relative z-10">
                  <div className="p-4 bg-royal-navy text-black rounded-2xl shadow-lg ring-4 ring-royal-navy/10">
                    <AcademicCapIcon className="w-10 h-10" />
                  </div>
                  <h2 className="text-3xl font-bold text-royal-navy font-serif">
                    MBBS Programme
                  </h2>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg relative z-10">
                  KD Medical College is widely recognized as one of the premier
                  <strong className="text-royal-navy">
                    {" "}
                    Private Medical Colleges in India
                  </strong>
                  . We offer affordable and transparent admission processes for
                  our MBBS program in Mathura. Our institution strictly adheres
                  to all regulatory guidelines regarding
                  <strong className="text-royal-navy">
                    {" "}
                    MBBS Fee Structure
                  </strong>
                  , duration, and eligibility. Admissions are conducted
                  exclusively through NEET, ensuring merit-based selection.
                </p>
              </div>

              {/* Curriculum Grid */}
              <div className="space-y-8" data-aos="fade-up">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-royal-gold/10 rounded-lg">
                    <BookOpenIcon className="w-6 h-6 text-royal-gold" />
                  </div>
                  <h3 className="text-2xl font-bold text-royal-navy font-serif">
                    MBBS Curriculum
                  </h3>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {CURRICULUM_DATA.map((item, idx) => (
                    <div
                      key={idx}
                      className="group bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-royal-gold/30 transition-all duration-300 relative overflow-hidden"
                    >
                      <div className="absolute top-0 left-0 w-1.5 h-full bg-royal-gold transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom"></div>
                      <div className="absolute top-0 right-0 w-24 h-24 bg-gray-50 rounded-bl-[4rem] -mr-4 -mt-4 transition-colors group-hover:bg-royal-gold/5"></div>

                      <h4 className="text-lg font-bold text-royal-navy mb-6 group-hover:text-royal-gold transition-colors pr-4 relative z-10">
                        {item.title}
                      </h4>
                      <ul className="space-y-3 relative z-10">
                        {item.links.map((link, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-sm group/link"
                          >
                            <CheckCircleIcon className="w-5 h-5 text-gray-300 group-hover/link:text-royal-gold mt-0.5 flex-shrink-0 transition-colors" />
                            <a
                              href="#"
                              className="text-gray-600 group-hover/link:text-royal-navy font-medium hover:underline transition-colors"
                            >
                              {link}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar / Course Details */}
            <div className="lg:col-span-1">
              <div
                className="bg-white rounded-[2rem] shadow-xl border border-gray-100 sticky top-28 overflow-hidden"
                data-aos="fade-left"
              >
                <div className="bg-royal-navy p-8 text-white relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                  <h2 className="text-xl font-bold flex items-center gap-3 relative z-10 font-serif">
                    <ClipboardDocumentCheckIcon className="w-6 h-6 text-royal-gold" />
                    Course Overview
                  </h2>
                  <p className="text-gray-300 text-sm mt-2 relative z-10">
                    Under Graduation Programme
                  </p>
                </div>

                <div className="p-8 space-y-8">
                  <div className="flex gap-5 items-start group">
                    <div className="flex-shrink-0 p-3 bg-gray-50 rounded-xl group-hover:bg-royal-gold/10 transition-colors">
                      <BookOpenIcon className="w-6 h-6 text-royal-navy group-hover:text-royal-gold transition-colors" />
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
                        Programme
                      </h5>
                      <p className="font-bold text-royal-navy text-lg">MBBS</p>
                      <p className="text-xs text-gray-500 mt-1">
                        Bachelor of Medicine & Bachelor of Surgery
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 items-start group">
                    <div className="flex-shrink-0 p-3 bg-gray-50 rounded-xl group-hover:bg-royal-gold/10 transition-colors">
                      <UserGroupIcon className="w-6 h-6 text-royal-navy group-hover:text-royal-gold transition-colors" />
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
                        Mode
                      </h5>
                      <p className="font-bold text-royal-navy text-lg">
                        Full Time
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 items-start group">
                    <div className="flex-shrink-0 p-3 bg-gray-50 rounded-xl group-hover:bg-royal-gold/10 transition-colors">
                      <ClockIcon className="w-6 h-6 text-royal-navy group-hover:text-royal-gold transition-colors" />
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
                        Duration
                      </h5>
                      <p className="font-bold text-royal-navy text-lg">
                        4.5 Years
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        + 1 Year Compulsory Rotatory Internship
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-gray-100 pt-8">
                    <h5 className="text-xs font-bold text-royal-navy uppercase tracking-widest mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-royal-gold"></span>
                      Eligibility Criteria
                    </h5>
                    <div className="bg-gray-50 rounded-xl p-5 space-y-4 border border-gray-100">
                      <div>
                        <span className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">
                          Age Limit
                        </span>
                        <p className="text-sm font-semibold text-royal-navy">
                          17+ years by Dec 31st of admission year
                        </p>
                      </div>
                      <div className="h-px bg-gray-200"></div>
                      <div>
                        <span className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">
                          Qualifying Exam
                        </span>
                        <p className="text-sm font-semibold text-royal-navy">
                          10+2 with PCB & English (Min 50%)
                        </p>
                      </div>
                      <div className="h-px bg-gray-200"></div>
                      <div>
                        <span className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">
                          Entrance Test
                        </span>
                        <p className="text-sm font-bold text-royal-gold">
                          NEET-UG Qualified
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ==================== UG SECTION (Generic/Allied) ==================== */}
        <div id="ug" className="scroll-mt-32 border-t border-gray-200 pt-20">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-1/3" data-aos="fade-right">
              <div className="bg-royal-navy rounded-[2.5rem] p-10 text-black sticky top-28 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-royal-gold/20 rounded-full blur-2xl -mr-10 -mt-10"></div>

                <span className="inline-block bg-royal-gold text-royal-navy px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
                  Undergraduate
                </span>
                <h2 className="text-4xl font-bold font-serif mb-6 leading-tight">
                  Allied Health <br /> Sciences
                </h2>
                <p className="text-black mb-8 leading-relaxed font-light">
                  Beyond MBBS, we offer paramedical and nursing undergraduate
                  courses designed to create skilled healthcare support
                  professionals.
                </p>
                <button className="w-full bg-white/10 backdrop-blur-md text-black border border-white/20 font-bold py-4 rounded-xl hover:bg-white hover:text-royal-navy transition-all duration-300 shadow-lg flex items-center justify-center gap-2 group">
                  Download Brochure
                  <ArrowLongRightIcon className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
            <div className="lg:w-2/3" data-aos="fade-up">
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  { name: "B.Sc. Nursing", duration: "4 Years", seats: "100" },
                  {
                    name: "BPT (Physiotherapy)",
                    duration: "4.5 Years",
                    seats: "50",
                  },
                  { name: "B.Sc. MLT", duration: "3 Years", seats: "60" },
                  { name: "B.Sc. Optometry", duration: "3 Years", seats: "40" },
                ].map((course, i) => (
                  <div
                    key={i}
                    className="bg-white p-8 rounded-[2rem] border border-gray-100 hover:border-royal-gold hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gray-50 rounded-bl-[3rem] transition-colors group-hover:bg-royal-gold/10"></div>

                    <div className="flex justify-between items-start mb-6 relative z-10">
                      <div className="p-4 bg-gray-50 rounded-2xl group-hover:bg-royal-navy group-hover:text-black transition-colors shadow-sm">
                        <UserGroupIcon className="w-6 h-6" />
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-royal-navy mb-4 font-serif group-hover:text-royal-gold transition-colors">
                      {course.name}
                    </h3>

                    <div className="space-y-3 pt-4 border-t border-gray-100">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-500">Duration</span>
                        <span className="font-bold text-royal-navy">
                          {course.duration}
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-500">Intake</span>
                        <span className="font-bold text-royal-navy">
                          {course.seats} Seats
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ==================== PG SECTION ==================== */}
        <div id="pg" className="scroll-mt-32 pt-16">
          <div
            className="bg-gradient-to-br from-black to-royal-navy rounded-[3rem] p-8 md:p-16 text-white overflow-hidden relative shadow-2xl"
            data-aos="fade-up"
          >
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-royal-gold/10 rounded-full blur-[120px] -mr-32 -mt-32 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-royal-blue/10 rounded-full blur-[100px] -ml-20 -mb-20 pointer-events-none"></div>
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>

            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div>
                  <span className="text-royal-gold font-bold tracking-[0.3em] uppercase text-xs mb-2 block">
                    Post Graduate
                  </span>
                  <h2 className="text-5xl font-serif font-bold mb-6">
                    MD / MS Programs
                  </h2>
                </div>

                <p className="text-gray-400 text-lg leading-relaxed font-light border-l-2 border-royal-gold/30 pl-6">
                  Elevate your medical career with our specialized postgraduate
                  programs. We offer advanced training in clinical and
                  non-clinical disciplines under the guidance of expert mentors.
                </p>

                <div className="flex flex-wrap gap-3">
                  {["Clinical", "Non-Clinical", "Para-Clinical"].map(
                    (tag, i) => (
                      <span
                        key={i}
                        className="px-5 py-2 bg-white/5 rounded-full text-sm font-medium border border-white/10 hover:bg-white/10 hover:border-royal-gold/50 transition-colors cursor-default"
                      >
                        {tag}
                      </span>
                    ),
                  )}
                </div>
              </div>

              <div className="space-y-6">
                {PG_CURRICULUM.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:bg-white/10 hover:border-royal-gold/30 transition-all duration-300 group"
                  >
                    <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-3 font-serif">
                      <span className="p-2 bg-royal-gold/20 rounded-lg text-royal-gold group-hover:bg-royal-gold group-hover:text-royal-navy transition-colors">
                        <BeakerIcon className="w-5 h-5" />
                      </span>
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-400 mb-6 leading-relaxed ml-12">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2 ml-12">
                      {item.specs.map((spec, sidx) => (
                        <span
                          key={sidx}
                          className="text-xs bg-black/40 px-3 py-1.5 rounded-lg text-gray-300 border border-white/5"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
