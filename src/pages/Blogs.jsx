import React from "react";
import { motion } from "framer-motion";

const blogPosts = [
  {
    title: "AIDS Treatment in Mathura – KD Super Speciality Hospital",
    date: "February 7, 2026",
    image:
      "https://kdhospitalmathura.org/Blogs/wp-content/uploads/2026/02/AIDS.jpg",
    excerpt:
      "AIDS (Acquired Immunodeficiency Syndrome) is a serious stage of HIV infection that weakens the body’s immune system...",
    link: "https://kdhospitalmathura.org/Blogs/aids-treatment-in-mathura-kd-super-speciality-hospital/index.php.html",
  },
  {
    title: "BCME Training for Faculty at KD Medical College",
    date: "February 6, 2026",
    image:
      "https://kdhospitalmathura.org/Blogs/wp-content/uploads/2026/02/BCME-Training-in-Mathura.jpeg",
    excerpt:
      "30 faculty members of KD Medical College received training on Competency-Based Medical Education (BCME) under the supervision of NMC observer...",
    link: "#",
  },
  {
    title: "Parkinson’s Disease Treatment in Mathura",
    date: "February 6, 2026",
    image:
      "https://kdhospitalmathura.org/Blogs/wp-content/uploads/2026/02/Parkinsons-Disease-Treatment-in-Mathura.jpeg",
    excerpt:
      "Parkinson's disease is a growing neurological disorder that primarily impacts movement, balance, and coordination...",
    link: "#",
  },
  {
    title: "Cancer Awareness Seminar on World Cancer Day",
    date: "February 4, 2026",
    image:
      "https://kdhospitalmathura.org/Blogs/wp-content/uploads/2026/02/Cancer-Awareness-Seminar.jpeg",
    excerpt:
      "On World Cancer Day, the Oncology Department organized a special awareness seminar led by Dr. Uma Sharma...",
    link: "#",
  },
  {
    title: "COPD Treatment in Mathura",
    date: "February 3, 2026",
    image:
      "https://kdhospitalmathura.org/Blogs/wp-content/uploads/2026/02/COPD-Treatment-in-Mathura.png",
    excerpt:
      "Chronic Obstructive Pulmonary Disease (COPD) is a long-term lung condition that makes breathing difficult...",
    link: "#",
  },
  {
    title: "11th Foundation Day Celebration",
    date: "January 30, 2026",
    image:
      "https://kdhospitalmathura.org/Blogs/wp-content/uploads/2026/01/K.D.-Medical-College-Celebrate-11th-Foundation-Day.jpg",
    excerpt:
      "KD Medical College celebrated its 11th Foundation Day with Vedic chants and rituals at Shri Akhileshwar Mahadev Temple...",
    link: "#",
  },
  {
    title: "77th Republic Day Celebration",
    date: "January 27, 2026",
    image:
      "https://kdhospitalmathura.org/Blogs/wp-content/uploads/2026/01/Tiranga-flag-was-proudly-hoisted-at-KD-University-on-Republic-Day.jpg",
    excerpt:
      "The tricolor was proudly hoisted at KD University, and students took a pledge of unity and integrity...",
    link: "#",
  },
  {
    title: "Vasant Panchami Celebration",
    date: "January 23, 2026",
    image:
      "https://kdhospitalmathura.org/Blogs/wp-content/uploads/2026/01/Basant-Pachmi-2026.jpg",
    excerpt:
      "Faculty and students worshiped Maa Saraswati with devotion on the occasion of Vasant Panchami...",
    link: "#",
  },
  {
    title: "Modern Prosthodontic Treatment",
    date: "January 22, 2026",
    image:
      "https://kdhospitalmathura.org/Blogs/wp-content/uploads/2026/01/Prosthodontic-treatment.jpg",
    excerpt:
      "Prosthodontists are specialists who treat broken, worn, or missing teeth, restoring smiles and function...",
    link: "#",
  },
];

const Blogs = () => {
  return (
    <div className="pt-24 pb-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4 font-display">
            Latest News & Blogs
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest health tips, hospital news, and success
            stories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group flex flex-col"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/400x250?text=No+Image";
                  }}
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm">
                  {post.date}
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">
                  {post.excerpt}
                </p>
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary font-semibold hover:text-secondary transition-colors mt-auto"
                >
                  Read Full Story
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
