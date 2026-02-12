import React from "react";
import { motion } from "framer-motion";
import MessageCards from "../components/MessageCards";

const About = () => {
  return (
    <div className="pt-24 pb-16 bg-background">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center text-center text-white mb-16 overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://kdhospitalmathura.org/images/kd%203.png')",
            filter: "brightness(0.4)",
          }}
        />
        <div className="relative z-10 container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl text-white md:text-6xl font-bold mb-4 font-display"
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl max-w-2xl mx-auto"
          >
            Super Speciality Hospital | Caring for Life, Every Step of the Way
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center mb-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-secondary font-display border-l-4 border-primary pl-4">
            Who We Are
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed font-body text-justify">
            <p>
              KD Super Speciality Hospital is the best hospital in Mathura
              dedicated to delivering world-class medical care with compassion,
              precision, and advanced technology. Our hospital was established
              with a vision to provide comprehensive healthcare services to the
              people of Western Uttar Pradesh, ensuring that patients no longer
              need to travel to Delhi, Noida, or Agra for specialized treatment.
            </p>
            <p>
              We are committed to offering high-quality medical care under one
              roof, making advanced healthcare accessible and affordable for
              everyone, including health insurance policy holders.
            </p>
            <p>
              At KD Super Speciality Hospital, we offer comprehensive medical
              care across multiple specialties. Our services include Emergency &
              Trauma Care, General Medicine, Cardiology, Orthopedics,
              Pediatrics, Obstetrics & Gynecology, Neurology, Nephrology,
              Pulmonology, ENT, Dentistry, Dermatology, Ophthalmology,
              Psychiatry, Oncology, and advanced surgical specialties.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="rounded-2xl overflow-hidden premium-shadow transform rotate-2 hover:rotate-0 transition-transform duration-500">
            <img
              src="https://kdhospitalmathura.org/images/images.png"
              alt="KD Hospital Building"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent rounded-full -z-10 blur-3xl opacity-50"></div>
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary rounded-full -z-10 blur-3xl opacity-30"></div>
        </motion.div>
      </section>

      {/* Leadership Cards */}
      <MessageCards />

      {/* Infrastructure & Mission */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-panel p-8 rounded-xl text-center hover:shadow-xl transition-shadow border-t-4 border-primary"
            >
              <div className="text-4xl text-primary mb-4 bg-red-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <i className="fas fa-stethoscope"></i>{" "}
                {/* Assuming font-awesome or similar icons are available, otherwise reuse heroicons/emojis */}
                🏥
              </div>
              <h3 className="text-xl font-bold mb-3 font-display">
                Advanced Tech
              </h3>
              <p className="text-gray-600 text-sm">
                Equipped with ICU, MICU, fully equipped Path Labs, MRI, CT Scan,
                X-Ray, and advanced diagnostic facilities.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-panel p-8 rounded-xl text-center hover:shadow-xl transition-shadow border-t-4 border-primary"
            >
              <div className="text-4xl text-primary mb-4 bg-red-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                🎯
              </div>
              <h3 className="text-xl font-bold mb-3 font-display">
                Our Mission
              </h3>
              <p className="text-gray-600 text-sm">
                To bring world-class healthcare to Mathura and surrounding
                regions, making advanced treatment available locally.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="glass-panel p-8 rounded-xl text-center hover:shadow-xl transition-shadow border-t-4 border-primary"
            >
              <div className="text-4xl text-primary mb-4 bg-red-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                ❤️
              </div>
              <h3 className="text-xl font-bold mb-3 font-display">
                Patient Care
              </h3>
              <p className="text-gray-600 text-sm">
                We believe in healing with empathy—because your health is our
                greatest responsibility.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      {/* <section className="container mx-auto px-4 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-[#0c0c3f] text-white p-12 rounded-3xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#de3a2b] opacity-20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <h2 className="text-3xl md:text-4xl text-white font-bold mb-6 font-display relative z-10">
            Your Health, Our Priority
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-white/90 relative z-10">
            At KD Super Speciality Hospital, we are committed to improving lives
            through compassionate, expert, and technologically advanced medical
            care.
          </p>
        </motion.div>
      </section> */}
    </div>
  );
};

export default About;
