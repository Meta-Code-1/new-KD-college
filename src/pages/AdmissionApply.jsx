import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  CheckCircleIcon,
  UserIcon,
  AcademicCapIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  BookOpenIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

const AdmissionApply = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const [formData, setFormData] = useState({
    courseLevel: "",
    course: "",
    fullName: "",
    dob: "",
    gender: "",
    category: "",
    email: "",
    mobile: "",
    guardianName: "",
    guardianPhone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    lastSchool: "",
    marksPercentage: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate submission
    console.log("Form Submitted", formData);
    setSubmitted(true);
    setTimeout(() => {
      alert(
        "Application Submitted Successfully! Our team will contact you shortly.",
      );
      setSubmitted(false);
    }, 1000);
  };

  const courseOptions = {
    UG: [
      "MBBS",
      "B.Sc. Nursing",
      "BPT (Physiotherapy)",
      "B.Sc. MLT",
      "B.Sc. Optometry",
    ],
    PG: [
      "MD - General Medicine",
      "MS - General Surgery",
      "MD - Paediatrics",
      "MS - Orthopaedics",
      "MD - Anaesthesia",
      "Other MD/MS",
    ],
  };

  return (
    <div className="min-h-screen bg-gray-200 pt-20 pb-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16" data-aos="fade-down">
          <span className="text-royal-gold font-bold tracking-[0.3em] uppercase text-sm mb-3 block">
            Start Your Journey
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-royal-navy mb-4 font-serif">
            Admission <span className="text-royal-gold">Application</span>
          </h1>
          <div className="h-1.5 w-24 bg-royal-gold mx-auto rounded-full shadow-sm mb-6"></div>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
            Secure your future with KD Medical College. Fill out the form below
            to book your seat for the upcoming academic session.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Column: Benefits/Info */}
          <div className="lg:col-span-1 space-y-8" data-aos="fade-right">
            <div className="bg-royal-navy rounded-[2rem] p-8 text-white shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-royal-gold/10 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-royal-gold/20 transition-colors"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-black/20 rounded-full -ml-12 -mb-12 blur-xl"></div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-8 font-serif">
                  Why Choose Us?
                </h3>
                <ul className="space-y-6">
                  {[
                    "State-of-the-art Infrastructure & Labs",
                    "Experienced Clinical Faculty",
                    "Separate Hostels for Boys & Girls",
                    "100% Internship Assistance",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <CheckCircleIcon className="w-6 h-6 text-royal-gold flex-shrink-0" />
                      <span className="text-black font-semibold">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-10 pt-8 border-t border-white/10 text-center">
                  <p className="text-royal-gold text-xs uppercase tracking-[0.2em] mb-3 font-bold">
                    Need Help?
                  </p>
                  <div className="flex items-center justify-center gap-3 text-2xl font-bold font-serif">
                    <PhoneIcon className="w-6 h-6 text-royal-gold" />
                    <span>7055 400 400</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[2rem] p-8 shadow-lg border border-gray-100">
              <h4 className="font-bold text-royal-navy flex items-center gap-3 mb-4 text-lg">
                <UsersIcon className="w-6 h-6 text-royal-gold" /> Admission
                Guidelines
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Admission is strictly based on merit and availability of seats.
                Please ensure all details entered are correct as they will be
                used for official records.
              </p>
              <a
                href="#"
                className="text-royal-navy text-sm font-bold hover:text-royal-gold transition-colors flex items-center gap-2 group"
              >
                Download Brochure{" "}
                <span className="group-hover:translate-x-1 transition-transform">
                  &rarr;
                </span>
              </a>
            </div>
          </div>

          {/* Right Column: Application Form */}
          <div className="lg:col-span-2" data-aos="fade-up">
            <form
              onSubmit={handleSubmit}
              className="bg-[#898990] rounded-[2.5rem] shadow-xl overflow-hidden border border-gray-100 relative"
            >
              <div className="h-2 bg-gradient-to-r from-royal-navy to-royal-gold w-full"></div>
              <div className="p-8 md:p-12 space-y-10">
                {/* Course Selection */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-royal-navy border-b border-gray-100 pb-4 flex items-center gap-3 font-serif">
                    <BookOpenIcon className="w-6 h-6 text-royal-gold" /> Course
                    Details
                  </h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                        Course Level <span className="text-red-500">*</span>
                      </label>
                      <select
                        required
                        name="courseLevel"
                        value={formData.courseLevel}
                        onChange={handleChange}
                        className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-royal-gold/50 focus:border-royal-gold outline-none transition-all bg-gray-50 hover:bg-white text-gray-700"
                      >
                        <option value="">Select Level</option>
                        <option value="UG">Undergraduate (UG)</option>
                        <option value="PG">Postgraduate (PG)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                        Select Course <span className="text-red-500">*</span>
                      </label>
                      <select
                        required
                        name="course"
                        value={formData.course}
                        onChange={handleChange}
                        disabled={!formData.courseLevel}
                        className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-royal-gold/50 focus:border-royal-gold outline-none transition-all bg-gray-50 hover:bg-white text-gray-700 disabled:bg-gray-100 disabled:cursor-not-allowed"
                      >
                        <option value="">Select Course</option>
                        {formData.courseLevel &&
                          courseOptions[formData.courseLevel].map((c) => (
                            <option key={c} value={c}>
                              {c}
                            </option>
                          ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Personal Details */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-royal-navy border-b border-gray-100 pb-4 flex items-center gap-3 font-serif">
                    <UserIcon className="w-6 h-6 text-royal-gold" /> Personal
                    Details
                  </h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                        Full Name{" "}
                        <span className="text-gray-400 text-xs normal-case font-normal ml-2">
                          (as per 10th marksheet)
                        </span>{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Adarsh Sharma"
                        className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-royal-gold/50 focus:border-royal-gold outline-none transition-all bg-gray-50 hover:bg-white text-gray-700 placeholder-gray-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                        Date of Birth <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="date"
                        required
                        name="dob"
                        value={formData.dob}
                        onChange={handleChange}
                        className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-royal-gold/50 focus:border-royal-gold outline-none transition-all bg-gray-50 hover:bg-white text-gray-700"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                        Gender <span className="text-red-500">*</span>
                      </label>
                      <select
                        required
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-royal-gold/50 focus:border-royal-gold outline-none transition-all bg-gray-50 hover:bg-white text-gray-700"
                      >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <EnvelopeIcon className="w-5 h-5 text-gray-400 absolute left-4 top-4" />
                        <input
                          type="email"
                          required
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="student@example.com"
                          className="w-full pl-12 pr-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-royal-gold/50 focus:border-royal-gold outline-none transition-all bg-gray-50 hover:bg-white text-gray-700"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                        Mobile Number <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <PhoneIcon className="w-5 h-5 text-gray-400 absolute left-4 top-4" />
                        <input
                          type="tel"
                          required
                          name="mobile"
                          value={formData.mobile}
                          onChange={handleChange}
                          placeholder="98765 43210"
                          className="w-full pl-12 pr-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-royal-gold/50 focus:border-royal-gold outline-none transition-all bg-gray-50 hover:bg-white text-gray-700"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                        Category <span className="text-red-500">*</span>
                      </label>
                      <select
                        required
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-royal-gold/50 focus:border-royal-gold outline-none transition-all bg-gray-50 hover:bg-white text-gray-700"
                      >
                        <option value="">Select Category</option>
                        <option value="General">General</option>
                        <option value="OBC">OBC</option>
                        <option value="SC">SC</option>
                        <option value="ST">ST</option>
                        <option value="EWS">EWS</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Contact & Address */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-royal-navy border-b border-gray-100 pb-4 flex items-center gap-3 font-serif">
                    <MapPinIcon className="w-6 h-6 text-royal-gold" /> Address
                    Details
                  </h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                        Full Address <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        rows="2"
                        required
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="House No., Street Area, Landmark"
                        className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-royal-gold/50 focus:border-royal-gold outline-none transition-all bg-gray-50 hover:bg-white text-gray-700"
                      ></textarea>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                        City <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-royal-gold/50 focus:border-royal-gold outline-none transition-all bg-gray-50 hover:bg-white text-gray-700"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                        State <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-royal-gold/50 focus:border-royal-gold outline-none transition-all bg-gray-50 hover:bg-white text-gray-700"
                      />
                    </div>
                  </div>
                </div>

                {/* Last Section: Academic */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-royal-navy border-b border-gray-100 pb-4 flex items-center gap-3 font-serif">
                    <AcademicCapIcon className="w-6 h-6 text-royal-gold" />{" "}
                    Previous Education
                  </h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                        Last School/College Name{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        name="lastSchool"
                        value={formData.lastSchool}
                        onChange={handleChange}
                        className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-royal-gold/50 focus:border-royal-gold outline-none transition-all bg-gray-50 hover:bg-white text-gray-700"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                        Marks/CGPA (%) <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        name="marksPercentage"
                        value={formData.marksPercentage}
                        onChange={handleChange}
                        placeholder="e.g. 85%"
                        className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-royal-gold/50 focus:border-royal-gold outline-none transition-all bg-gray-50 hover:bg-white text-gray-700"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <button
                    type="submit"
                    className="w-full bg-[#6366f1] text-white font-bold text-lg py-5 rounded-xl hover:bg-[#6366f1]/80 hover:shadow-lg transform transition-all active:scale-[0.98] flex items-center justify-center gap-3 group"
                  >
                    {submitted ? (
                      <>
                        <CheckCircleIcon className="w-6 h-6 text-green-400" />{" "}
                        Application Sent
                      </>
                    ) : (
                      <>
                        Submit Application{" "}
                        <span className="text-white group-hover:translate-x-1 transition-transform">
                          &rarr;
                        </span>
                      </>
                    )}
                  </button>
                  <p className="text-center text-xs text-black mt-6 font-medium">
                    By clicking Submit, you agree to our Terms & Conditions and
                    Privacy Policy.
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionApply;
