import React from "react";
import chairman from "../assets/chairman.jpg";
import vc from "../assets/pankaj.jpg";
import md from "../assets/manojagarwal-md.jpg";
import dean from "../assets/dean-img2.jpg";

const profiles = [
  { img: chairman, title: "Chairman", name: "Dr. R.K. Agarwal" },
  { img: vc, title: "Vice Chairman", name: "Mr. Pankaj Agarwal" },
  { img: md, title: "Managing Director", name: "Mr. Manoj Agarwal" },
  { img: dean, title: "Dean", name: "Prof. (Dr.) A.K. Singh" },
];

export default function Profile() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-royal-navy mb-4">
            Leadership
          </h2>
          <div className="w-24 h-1.5 bg-royal-gold mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
            Meeting the visionaries guiding our institution towards excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {profiles.map((profile, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="relative overflow-hidden aspect-[3/4]">
                <div className="absolute inset-0 bg-royal-navy/20 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                <img
                  src={profile.img}
                  alt={profile.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-royal-navy to-transparent md:h-1/2 opacity-60"></div>
              </div>
              <div className="p-6 text-center relative">
                <h3 className="text-xl font-bold text-royal-navy mb-1 font-serif group-hover:text-royal-gold transition-colors">
                  {profile.name}
                </h3>
                <p className="text-royal-gold font-medium text-sm tracking-wider uppercase">
                  {profile.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
