import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/mbbs.png";
import img2 from "../assets/ug.png";
import img3 from "../assets/pg.png";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import dental from "../assets/dental.jpg";
import nursing from "../assets/nursing.png";
import physiotherapy from "../assets/physiotherapy.png";
import paramedical from "../assets/paramedical.png";
import Crousel from "../components/Crousel";
import travel from "../assets/travel.jpg";
import info from "../assets/info/1.png";
import info2 from "../assets/info/2.png";
import info3 from "../assets/info/3.png";
import info4 from "../assets/info/4.png";
import info5 from "../assets/info/5.png";
import info6 from "../assets/info/6.png";
import antiRagging from "../assets/anti-raging.pdf";
import swami from "../assets/swami.jpeg";
import act1 from "../assets/activity/activity1.jpg";
import act2 from "../assets/activity/activity2.jpg";
import act3 from "../assets/activity/activity3.jpg";
import act4 from "../assets/activity/activity4.jpg";
import act5 from "../assets/activity/activity5.jpg";
import act6 from "../assets/activity/activity6.jpg";
import act7 from "../assets/activity/activity7.jpg";
import act8 from "../assets/activity/activity8.jpg";
import act9 from "../assets/activity/activity9.jpg";
import act10 from "../assets/activity/activity10.jpg";
import act11 from "../assets/activity/activity11.jpg";
import act12 from "../assets/activity/activity12.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import Marquee from "react-fast-marquee";
import {
  ShieldCheckIcon,
  AcademicCapIcon,
  BuildingOffice2Icon,
  PhotoIcon,
  CurrencyRupeeIcon,
  DocumentTextIcon,
  PencilSquareIcon,
  FingerPrintIcon,
  UserGroupIcon,
  HeartIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div className="bg-white">
      {/* 1. Hero Section (Parallax) */}
      <Crousel />
      {/* 2. Philosophy Section (Swami Vivekananda) - Premium Redesign */}
      <div className="relative py-24 bg-[#FFFBF5] overflow-hidden">
        {/* Abstract Background Patterns */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-royal-gold/5 rounded-full blur-3xl -mr-32 -mt-32 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-royal-navy/5 rounded-full blur-3xl -ml-20 -mb-20"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto bg-white/80 backdrop-blur-sm rounded-[3rem] p-8 md:p-16 shadow-2xl border border-white/20 flex flex-col md:flex-row items-center gap-16 transform transition-transform duration-500">
            {/* Image Frame */}
            <div className="md:w-1/3 relative group" data-aos="fade-right">
              <div className="absolute inset-0 bg-gradient-to-tr from-royal-gold to-yellow-300 rounded-full blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-500 animate-float"></div>
              <div className="relative w-56 h-56 md:w-72 md:h-72 mx-auto rounded-full p-1.5 bg-gradient-to-br from-royal-gold to-transparent shadow-2xl">
                <div className="w-full h-full rounded-full border-[6px] border-white overflow-hidden bg-white">
                  <img
                    src={swami}
                    alt="Swami Vivekananda"
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700 filter sepia-[0.1]"
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <div
              className="md:w-2/3 text-center md:text-left space-y-8"
              data-aos="fade-left"
            >
              <div className="inline-flex items-center gap-3 justify-center md:justify-start">
                <span className="h-px w-8 bg-royal-gold"></span>
                <span className="text-royal-gold font-bold tracking-[0.2em] uppercase text-sm">
                  Our Inspiration
                </span>
              </div>
              <h2 className="text-royal-navy text-3xl md:text-5xl font-serif italic font-medium leading-tight relative">
                <span className="absolute -top-6 -left-4 text-8xl text-royal-gold/10 font-serif">
                  "
                </span>
                We must also remember that the leaders of our societies have
                never been either generals or kings, but Rishis...
                <span className="absolute -bottom-12 -right-4 text-8xl text-royal-gold/10 font-serif rotate-180">
                  "
                </span>
              </h2>
              <div>
                <h4 className="text-royal-navy font-bold text-2xl font-serif">
                  Swami Vivekananda
                </h4>
                <p className="text-gray-500 text-sm mt-1 uppercase tracking-wider">
                  Visionary & Spiritual Leader
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. About / Vision Section */}
      <div className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div data-aos="fade-up" className="space-y-8 order-2 lg:order-1">
              <div className="inline-block px-4 py-1.5 bg-royal-navy/5 text-blue-300 font-bold text-sm rounded-full mb-2">
                About K.D. Medical College
              </div>
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-royal-navy leading-[1.1]">
                A Legacy of <br />
                <span className="text-blue-300 bg-clip-text text-blue-300">
                  Healing & Education
                </span>
              </h1>

              <p className="text-gray-600 text-lg leading-relaxed text-justify border-l-4 border-royal-navy/10 pl-6">
                With a noble and most generous aim of offering service to the
                sick and suffering of the community, RK Educational Group has
                established this Medical College and Nursing College in Mathura.
                Equipped with
                <strong className="text-royal-navy"> 1050+ beds</strong>,
                ultra-modern diagnostic services, and a commitment to bridging
                the gap in medical availability.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-xl shadow-gray-200/50 group hover:-translate-y-1 transition-all duration-300">
                  <div className="w-12 h-12 bg-royal-navy/5 rounded-xl flex items-center justify-center mb-4 group-hover:bg-royal-navy group-hover:text-white transition-colors">
                    <UserGroupIcon className="w-6 h-6 text-blue-500" />
                  </div>
                  <h3 className="font-bold text-royal-navy text-2xl">1050+</h3>
                  <p className="text-sm text-gray-500 font-medium">
                    Beds Available
                  </p>
                </div>
                <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-xl shadow-gray-200/50 group hover:-translate-y-1 transition-all duration-300">
                  <div className="w-12 h-12 bg-royal-blue/5 rounded-xl flex items-center justify-center mb-4 group-hover:bg-royal-blue group-hover:text-white transition-colors">
                    <HeartIcon className="w-6 h-6 text-blue-500" />
                  </div>
                  <h3 className="font-bold text-royal-navy text-2xl">24/7</h3>
                  <p className="text-sm text-gray-500 font-medium">
                    Emergency Care
                  </p>
                </div>
              </div>

              <Link to="/about" className="inline-block">
                <button className="cursor-pointer mt-4 px-8 py-4 bg-blue-300 text-black font-bold rounded-xl hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-lg shadow-blue-500/50">
                  Read Our Story
                </button>
              </Link>
            </div>

            {/* Right Images (Modern Grid) */}
            <div className="relative order-1 lg:order-2" data-aos="zoom-in">
              <div className="absolute inset-0 bg-gradient-to-tr from-royal-gold/20 to-transparent rounded-[2rem] transform rotate-3 scale-105 -z-10"></div>
              <img
                src={travel}
                alt="KD Campus"
                className="w-full h-[600px] object-cover rounded-[2rem] shadow-2xl"
              />

              {/* Badge */}
              <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/50 animate-bounce-slow">
                <div className="text-center">
                  <span className="block text-2xl font-bold text-royal-navy">
                    10+
                  </span>
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">
                    Years of Excellence
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*4. Doctors in Marquee */}
      <div className="py-24 bg-gray-50 text-gray-900 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-royal-gold/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-royal-navy/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="container mx-auto px-6 mb-16 relative z-10 text-center">
          <span className="text-royal-gold font-bold tracking-[0.2em] uppercase text-xs mb-3 block">
            Our Medical Experts
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-royal-navy mb-6">
            Meet Our Top Rated Doctors
          </h2>
          <div className="w-24 h-1 bg-royal-gold mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Experienced professionals dedicated to providing world-class
            healthcare with compassion.
          </p>
        </div>

        <Marquee
          gradient={true}
          gradientColor={[249, 250, 251]} // Matches bg-gray-50
          speed={50}
          pauseOnHover={true}
          className="py-4"
        >
          {[
            {
              name: "Dr. Shubham Dwivedi",
              specialty: "Pulmonology",
              degree: "MBBS, MD (Respiratory Medicine)",
              image:
                "https://kdhospitalmathura.org/images2/Shubham_dewivedi_1.1-removebg-preview.png",
            },
            {
              name: "Dr. Uma Sharma",
              specialty: "Surgical Oncology",
              degree: "MBBS, MS, DNB, MCH",
              image: "https://kdhospitalmathura.org/images/umasharma.jpeg",
            },
            {
              name: "Dr. Mohammad Zubair Jan",
              specialty: "Gastroenterology",
              degree: "MD, DM (Gastroenterology)",
              image: "https://kdhospitalmathura.org/images/drzubair.png",
            },
            {
              name: "Dr. B. Goswami",
              specialty: "Neurology",
              degree: "MD (Medicine), DM (Neurology)",
              image:
                "https://kdhospitalmathura.org/images2/Dr.%20B.%20GOSWAMI.png",
            },
            {
              name: "Dr. Prince Agrawal",
              specialty: "Neurology",
              degree: "DM Neurology (G.B. Pant Hospital)",
              image:
                "https://kdhospitalmathura.org/images2/Dr.%20Prince%20Agrawal.png",
            },
            {
              name: "Dr. Mukund Mundra",
              specialty: "Gastro Surgery",
              degree: "MBBS, DNB, MCH (Gastro Surgery)",
              image:
                "https://kdhospitalmathura.org/images2/Dr.%20Mukund%20Mundra.png",
            },
            {
              name: "Dr. Tariq Ahmad Mir",
              specialty: "Pediatrics",
              degree: "MCh (Paediatric Surgery)",
              image: "https://kdhospitalmathura.org/images2/Dr%20tariq.png",
            },
            {
              name: "Dr. Shyam Bihari Sharma",
              specialty: "Pediatric Surgery",
              degree: "MS, Mch (Pediatric Surgery)",
              image:
                "https://kdhospitalmathura.org/images2/DR.%20Shyam%20Bihari%20Sharma.png",
            },
            {
              name: "Dr. Gagandeep",
              specialty: "General Medicine",
              degree: "General Medicine Expert",
              image:
                "https://kdhospitalmathura.org/images2/Dr.%20Gagandeep%20General%20Medicine.png",
            },
            {
              name: "Dr. Manju Pandey",
              specialty: "General Medicine",
              degree: "HOD General Medicine",
              image:
                "https://kdhospitalmathura.org/images2/Dr.%20Manju%20Pandey.png",
            },
            {
              name: "Dr. Shilpa Gupta",
              specialty: "Ophthalmology",
              degree: "Asst. Prof - Ophthalmology",
              image:
                "https://kdhospitalmathura.org/images2/DR.%20SHILPA%20GUPTA.png",
            },
            {
              name: "Dr. Shweta Chauhan",
              specialty: "Psychiatry",
              degree: "MBBS, MD Psychiatry",
              image:
                "https://kdhospitalmathura.org/images2/DR.%20SHWETA%20CHAUHAN.png",
            },
            {
              name: "Dr. Amit Kumar Jain",
              specialty: "Ophthalmology",
              degree: "HOD - Ophthalmology",
              image:
                "https://kdhospitalmathura.org/images2/Dr.%20Amit%20Kumar%20Jain.png",
            },
            {
              name: "Dr. Naziya Hamid",
              specialty: "Emergency Medicine",
              degree: "Clinical Head Emergency",
              image:
                "https://kdhospitalmathura.org/images2/DR.%20NAZIYA%20HAMID.png",
            },
            {
              name: "Dr. Achal Sharma",
              specialty: "Cardiology",
              degree: "DM Cardiology (KEM Mumbai)",
              image:
                "https://kdhospitalmathura.org/images2/DR.%20ACHAL%20SHARMA.png",
            },
            {
              name: "Dr. Diyanshu Agrawal",
              specialty: "Pediatrics",
              degree: "MD(Pediatrics), Fellowship (Neonatology)",
              image:
                "https://kdhospitalmathura.org/images2/DR.%20DIYANSHU%20AGRAWAL.png",
            },
            {
              name: "Dr. Vikram Sharma",
              specialty: "Orthopedics",
              degree: "HOD Orthopedic Dept.",
              image:
                "https://kdhospitalmathura.org/images2/DR%20VIKRAM%20SHARMA.png",
            },
            {
              name: "Dr. Harsh Sharma",
              specialty: "Dermatology",
              degree: "MD Dermatology",
              image:
                "https://kdhospitalmathura.org/images2/DR.%20HARSH%20SHARMA.png",
            },
            {
              name: "Dr. Piyush Kant Singh",
              specialty: "ENT",
              degree: "M.B.B.S., M.S. ENT",
              image:
                "https://kdhospitalmathura.org/images2/DR.%20PIYUSH%20KANT%20SINGH.png",
            },
          ].map((doc, idx) => (
            <div
              key={idx}
              className="group relative w-72 mx-4 bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-royal-gold/20 transition-all duration-300"
            >
              <div className="h-72 bg-gray-100 relative overflow-hidden">
                {/* Decorative background circle inside image container */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-royal-gold/10 rounded-full group-hover:scale-125 transition-transform duration-500"></div>
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="w-full h-full object-contain object-bottom relative z-10 transform group-hover:scale-110 transition-transform duration-500 pt-4"
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/300x300?text=Doctor";
                  }}
                />
              </div>

              <div className="p-5 text-center relative bg-white">
                <h3 className="text-royal-navy font-bold text-lg mb-1 line-clamp-1 group-hover:text-royal-gold transition-colors">
                  {doc.name}
                </h3>
                <p className="text-primary font-bold text-xs uppercase tracking-wider mb-2">
                  {doc.specialty}
                </p>
                <div className="w-10 h-0.5 bg-gray-200 mx-auto mb-3"></div>
                <p className="text-gray-500 text-xs line-clamp-2 h-8 leading-tight">
                  {doc.degree}
                </p>

                <Link to="/contact">
                  <button className="cursor-pointer mt-4 w-full py-2 rounded-lg border border-royal-navy text-royal-navy text-xs font-bold uppercase hover:bg-blue-200 hover:text-black transition-all duration-300">
                    Book Appointment
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </Marquee>
      </div>

      {/* 6. Highlights (Glassmorphism) */}
      <div className="py-24 bg-[#F8F9FA] relative">
        <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20" data-aos="fade-up">
            <span className="text-royal-gold font-bold tracking-[0.2em] uppercase text-xs mb-2 block">
              Quick Highlights
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-royal-navy font-serif">
              Resources & Info
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Affiliation",
                icon: <AcademicCapIcon className="w-8 h-8" />,
                link: "/contact#affiliation",
              },
              {
                title: "Hospital Gallery",
                icon: <BuildingOffice2Icon className="w-8 h-8" />,
                link: "/infrastructure#hospital-gallery",
              },
              {
                title: "College Gallery",
                icon: <PhotoIcon className="w-8 h-8" />,
                link: "/infrastructure#college-gallery",
              },
              {
                title: "Fee Structure",
                icon: <CurrencyRupeeIcon className="w-8 h-8" />,
                link: "/highlights#fee-structure",
              },
              {
                title: "Anti-Ragging",
                icon: <ShieldCheckIcon className="w-8 h-8" />,
                link: antiRagging,
              },
              {
                title: "Student Undertaking",
                icon: <PencilSquareIcon className="w-8 h-8" />,
                link: "/course",
              },
              {
                title: "Policies",
                icon: <DocumentTextIcon className="w-8 h-8" />,
                link: "/highlights#anti-ragging",
              },
              {
                title: "Attendance",
                icon: <FingerPrintIcon className="w-8 h-8" />,
                link: "https://kmchrcmat.nmcindia.ac.in/",
              },
            ].map((item, index) => (
              <Link
                key={index}
                to={typeof item.link === "string" ? item.link : "#"}
                target={
                  typeof item.link === "string" && item.link.startsWith("http")
                    ? "_blank"
                    : "_self"
                }
                className="group relative"
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                <div className="bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 group-hover:border-transparent relative z-10 h-full flex flex-col items-center justify-center gap-6 overflow-hidden">
                  {/* Animated Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-royal-navy to-blue-900 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

                  {/* Circle */}
                  <div className="w-20 h-20 rounded-2xl bg-gray-50 flex items-center justify-center text-royal-navy group-hover:bg-white/10 group-hover:text-royal-gold transition-colors duration-300 relative z-10 transform group-hover:rotate-6">
                    {item.icon}
                  </div>

                  <h3 className="text-lg font-bold text-gray-800 group-hover:text-white relative z-10">
                    {item.title}
                  </h3>

                  <span className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    <ArrowLongRightIcon className="w-6 h-6 text-royal-gold" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* 7. Course Introduction */}
      <div className="py-32 bg-white relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-gray-100/50 to-white -z-10"></div>

        <div className="container mx-auto px-6">
          <div className="text-center mb-20 space-y-4" data-aos="fade-up">
            <h2 className="text-royal-navy text-4xl md:text-5xl font-serif font-bold">
              Academic Excellence
            </h2>
            <div className="w-24 h-1.5 bg-royal-gold mx-auto rounded-full"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
              Discover our world-class medical programs designed to shape the
              future leaders of healthcare.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Card 1: MBBS */}
            <div
              className="group relative bg-white rounded-[2rem] shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="aspect-[4/5] w-full overflow-hidden rounded-t-[2rem] relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity"></div>
                <img
                  src={img1}
                  alt="MBBS"
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
                  <h3 className="text-3xl font-bold text-white font-serif mb-2 filter drop-shadow-lg">
                    MBBS
                  </h3>
                  <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300">
                    <p className="text-gray-200 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                      Gain a strong foundation in medical sciences with our
                      comprehensive MBBS program.
                    </p>
                    <Link
                      to="/Course#mbbs"
                      className="inline-flex items-center gap-2 text-royal-gold font-bold text-sm uppercase tracking-wider hover:text-white transition-colors"
                    >
                      View Curriculum <ArrowLongRightIcon className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: UG */}
            <div
              className="group relative bg-white rounded-[2rem] shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="aspect-[4/5] w-full overflow-hidden rounded-t-[2rem] relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity"></div>
                <img
                  src={img2}
                  alt="UG Courses"
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
                  <h3 className="text-3xl font-bold text-white font-serif mb-2 filter drop-shadow-lg">
                    UG Courses
                  </h3>
                  <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300">
                    <p className="text-gray-200 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                      Advance your clinical skills with our structured
                      undergraduate programs.
                    </p>
                    <Link
                      to="/Course#ug"
                      className="inline-flex items-center gap-2 text-royal-gold font-bold text-sm uppercase tracking-wider hover:text-white transition-colors"
                    >
                      View Programs <ArrowLongRightIcon className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: PG */}
            <div
              className="group relative bg-white rounded-[2rem] shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="aspect-[4/5] w-full overflow-hidden rounded-t-[2rem] relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity"></div>
                <img
                  src={img3}
                  alt="PG Courses"
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
                  <h3 className="text-3xl font-bold text-white font-serif mb-2 filter drop-shadow-lg">
                    PG Courses
                  </h3>
                  <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300">
                    <p className="text-gray-200 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                      Specialized post-graduate research and clinical expertise
                      programs.
                    </p>
                    <Link
                      to="/Course#pg"
                      className="inline-flex items-center gap-2 text-royal-gold font-bold text-sm uppercase tracking-wider hover:text-white transition-colors"
                    >
                      Research opportunities{" "}
                      <ArrowLongRightIcon className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 8. Health Sciences */}
      <div className="py-32 bg-gradient-to-b from-[#001226] to-royal-navy relative overflow-hidden">
        {/* Background Patterns */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-royal-blue/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <span className="text-royal-gold font-bold tracking-[0.2em] uppercase text-xs">
              Healthcare Excellence
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-white font-bold mt-2">
              Allied Health Sciences
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Dental */}
            <div
              className="group bg-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              <div className="h-56 rounded-2xl overflow-hidden mb-6 relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img
                  src={dental}
                  alt="Dental"
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 font-sans group-hover:text-royal-gold transition-colors">
                Dental
              </h3>
              <p className="text-white text-sm leading-relaxed mb-6 h-16">
                Master oral health and dental care with our comprehensive dental
                program.
              </p>
              <button className="text-white hover:text-royal-gold font-bold flex items-center gap-2 transition-colors uppercase text-sm tracking-wider">
                Learn More <ArrowRightIcon className="w-4 h-4" />
              </button>
            </div>

            {/* Nursing */}
            <div
              className="group bg-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="h-56 rounded-2xl overflow-hidden mb-6 relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img
                  src={nursing}
                  alt="Nursing"
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 font-sans group-hover:text-royal-gold transition-colors">
                Nursing
              </h3>
              <p className="text-white text-sm leading-relaxed mb-6 h-16">
                Prepare for a vital role in healthcare with our hands-on nursing
                program.
              </p>
              <button className="text-white hover:text-royal-gold font-bold flex items-center gap-2 transition-colors uppercase text-sm tracking-wider">
                Learn More <ArrowRightIcon className="w-4 h-4" />
              </button>
            </div>

            {/* Physiotherapy */}
            <div
              className="group bg-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="h-56 rounded-2xl overflow-hidden mb-6 relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img
                  src={physiotherapy}
                  alt="Physiotherapy"
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 font-sans group-hover:text-royal-gold transition-colors">
                Physiotherapy
              </h3>
              <p className="text-white text-sm leading-relaxed mb-6 h-16">
                Learn advanced techniques in physical rehabilitation and
                therapy.
              </p>
              <button className="text-white hover:text-royal-gold font-bold flex items-center gap-2 transition-colors uppercase text-sm tracking-wider">
                Learn More <ArrowRightIcon className="w-4 h-4" />
              </button>
            </div>

            {/* Paramedical */}
            <div
              className="group bg-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="h-56 rounded-2xl overflow-hidden mb-6 relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img
                  src={paramedical}
                  alt="Paramedical"
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 font-sans group-hover:text-royal-gold transition-colors">
                Paramedical
              </h3>
              <p className="text-white text-sm leading-relaxed mb-6 h-16">
                Gain specialized training in emergency medical care.
              </p>
              <button className="text-white hover:text-royal-gold font-bold flex items-center gap-2 transition-colors uppercase text-sm tracking-wider">
                Learn More <ArrowRightIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 9. Campus Gallery */}
      <div className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-royal-navy text-4xl md:text-5xl font-serif font-bold mb-4">
              Campus <span className="text-royal-gold">Life & Activities</span>
            </h2>
            <div className="w-24 h-1.5 bg-royal-gold mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Experience the vibrant atmosphere and dynamic student life at KDH
              Medical College.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[250px] gap-4 p-4">
            {[
              {
                src: act1,
                span: "md:col-span-2 md:row-span-2",
                aos: "fade-right",
              }, // 1. Large Hero
              {
                src: act2,
                span: "md:col-span-1 md:row-span-1",
                aos: "fade-down",
              }, // 2. Standard
              {
                src: act3,
                span: "md:col-span-1 md:row-span-2",
                aos: "fade-left",
              }, // 3. Tall Portrait
              {
                src: act4,
                span: "md:col-span-1 md:row-span-1",
                aos: "zoom-in",
              }, // 4. Standard
              {
                src: act5,
                span: "md:col-span-2 md:row-span-1",
                aos: "flip-up",
              }, // 5. Wide Landscape
              {
                src: act6,
                span: "md:col-span-1 md:row-span-1",
                aos: "fade-up",
              }, // 6. Standard
              {
                src: act7,
                span: "md:col-span-1 md:row-span-2",
                aos: "fade-down-right",
              }, // 7. Tall Portrait
              {
                src: act8,
                span: "md:col-span-2 md:row-span-2",
                aos: "zoom-in-up",
              }, // 8. Large Hero
              {
                src: act9,
                span: "md:col-span-1 md:row-span-1",
                aos: "fade-left",
              }, // 9. Standard
              {
                src: act10,
                span: "md:col-span-1 md:row-span-1",
                aos: "flip-left",
              }, // 10. Standard
              {
                src: act11,
                span: "md:col-span-2 md:row-span-1",
                aos: "fade-up-right",
              }, // 11. Wide Landscape
              {
                src: act12,
                span: "md:col-span-2 md:row-span-1",
                aos: "fade-up-left",
              }, // 12. Wide Landscape
            ].map((item, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer ${item.span}`}
                data-aos={item.aos}
                data-aos-delay={index * 50}
              >
                <img
                  src={item.src}
                  alt={`Campus Activity ${index + 1}`}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-white/80 text-xs font-bold uppercase tracking-wider mb-1 block">
                      Campus Life
                    </span>
                    <span className="text-white font-bold text-lg">
                      Moment #{index + 1}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 10. Facilities Marquee (Premium Cards) */}
      <div className="py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6 mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-royal-navy mb-4">
            Better Diagnosis, Better Cure
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Explore our world-class facilities designed to provide comfort,
            care, and the best medical treatment.
          </p>
        </div>

        <Marquee
          gradient={true}
          gradientColor={[255, 255, 255]}
          speed={40}
          pauseOnHover={true}
          className="py-4"
        >
          {[
            {
              img: info,
              title: "Emergency Services",
              desc: "24x7 swift emergency response with advanced life support systems.",
              link: "/view#emergency",
            },
            {
              img: info2,
              title: "General Info",
              desc: "1050-bed multi-specialty hospital with over 250 expert doctors.",
              link: "/view#general-info",
            },
            {
              img: info3,
              title: "Indoor Services",
              desc: "Centralized AC wards with modern patient monitoring.",
              link: "/view#indoor-services",
            },
            {
              img: info4,
              title: "OPD Services",
              desc: "Consult with top specialists across various departments.",
              link: "/view#opd-services",
            },
            {
              img: info5,
              title: "Grievances",
              desc: "Patient-first approach with dedicated support systems.",
              link: "/view#complaints",
            },
            {
              img: info6,
              title: "Responsibilities",
              desc: "Ethical medical practices and patient rights guidelines.",
              link: "/view#responsibilities",
            },
          ].map((card, idx) => (
            <Link
              key={idx}
              to={card.link}
              className="block w-80 mx-6 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-royal-navy/20 group-hover:opacity-0 transition-opacity z-10"></div>
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-royal-navy mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4 line-clamp-2">
                  {card.desc}
                </p>
                <div className="text-royal-gold font-bold text-sm uppercase tracking-wider group-hover:text-royal-navy transition-colors flex items-center gap-1">
                  View Details <span>&rarr;</span>
                </div>
              </div>
            </Link>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Home;
