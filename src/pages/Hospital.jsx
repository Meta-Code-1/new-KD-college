import React from "react";
import { motion } from "framer-motion";

const departments = [
  {
    name: "Cardiology",
    desc: "Advanced cardiac diagnostics, interventions, and rehab.",
    icon: "❤️",
  },
  {
    name: "Neurology",
    desc: "Expertise in stroke care, spinal surgery, and neuro-rehabilitation.",
    icon: "🧠",
  },
  {
    name: "Gastroenterology",
    desc: "Endoscopy, colonoscopy, liver disease management.",
    icon: "Digest",
  },
  {
    name: "Pediatrics",
    desc: "Compassionate care for children, including NICU support.",
    icon: "👶",
  },
  {
    name: "Nephrology",
    desc: "Dialysis, stone treatment, urological surgeries.",
    icon: "Kidney",
  },
  {
    name: "Orthopedics",
    desc: "Minimally invasive and complex orthopedic surgeries.",
    icon: "🦴",
  },
  {
    name: "Gynecology",
    desc: "Full spectrum women’s care, maternal and fertility services.",
    icon: "👩",
  },
  {
    name: "Emergency",
    desc: "24/7 trauma, ICU, and life support with rapid response.",
    icon: "🚑",
  },
];

const stats = [
  { count: "1000+", label: "Bed Hospital" },
  { count: "150+", label: "ICU/HDU/NICU Beds" },
  { count: "80+", label: "Bed ICU" },
  { count: "24/7", label: "Emergency Care" },
];

const Hospital = () => {
  return (
    <div className="pt-24 bg-background min-h-screen">
      {/* Hero / Intro */}
      <section className="bg-secondary text-white py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://kdhospitalmathura.org/images/kd%203.png')",
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-4xl text-white md:text-6xl font-bold mb-6"
          >
            World Class Infrastructure
          </motion.h1>
          <p className="text-xl max-w-3xl mx-auto text-blue-100">
            State-of-the-art facilities designed for your comfort and recovery.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 -mt-10 relative z-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-xl text-center border-b-4 border-primary"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2 font-display">
                  {stat.count}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Centers of Excellence
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {departments.map((dept, idx) => (
              <motion.div
                key={idx}
                whileHover={{
                  y: -5,
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
                className="bg-white p-8 rounded-xl border border-gray-100 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-3xl mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  {dept.icon === "Digest"
                    ? "🧬"
                    : dept.icon === "Kidney"
                      ? "🗳️"
                      : dept.icon}
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors">
                  {dept.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {dept.desc}
                </p>
                <a
                  href="#"
                  className="inline-block mt-4 text-primary font-semibold text-sm hover:underline group-hover:text-secondary"
                >
                  Learn more →
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities / Gallery Preview */}
      <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://kdhospitalmathura.org/images/kd%203.png')] bg-fixed bg-cover center"></div>
        <div className="container mx-auto px-4 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              24/7 Emergency & Trauma Care
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Our dedicated team is available round the clock to handle critical
              emergencies with rapid response protocols and advanced life
              support systems.
            </p>
            <button className="btn-primary">Contact Emergency</button>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-primary rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <img
              src="https://kdhospitalmathura.org/images2/Emergency%20medicine%20care1.png"
              alt="Emergency Care"
              className="relative z-10 rounded-xl shadow-2xl border-4 border-gray-800"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hospital;
