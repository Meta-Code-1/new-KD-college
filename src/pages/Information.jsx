import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import pankaj from "../assets/pankaj.jpg";
import {
  UserIcon,
  DocumentArrowDownIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

export default function Information() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-out-cubic" });
  }, []);

  // Dynamically load committee assets
  const committeeAssets = import.meta.glob(
    "../assets/variouscommittee/*.{webp,jpg,jpeg,png,pdf}",
    { eager: true },
  );

  const committees = [];
  const downloads = [];

  for (const path in committeeAssets) {
    const fileName = path.split("/").pop();
    const assetUrl = committeeAssets[path].default;

    // Convert camelCase or dashes to spaces and remove extension for title
    const title = fileName
      .replace(/\.(webp|jpg|jpeg|png|pdf)$/, "")
      .replace(/[-_]/g, " ")
      .replace(/([A-Z])/g, " $1")
      .trim();

    if (fileName.endsWith(".pdf")) {
      downloads.push({ title, url: assetUrl });
    } else {
      committees.push({ title, url: assetUrl });
    }
  }

  const teacher = [
    { name: "Dr. Pankaj", role: "Dean of Faculty", imageUrl: pankaj },
    { name: "Dr. Pankaj", role: "Dean of Faculty", imageUrl: pankaj },
    { name: "Dr. Pankaj", role: "Dean of Faculty", imageUrl: pankaj },
    { name: "Dr. Pankaj", role: "Dean of Faculty", imageUrl: pankaj },
  ];

  // Placeholder data for other staff
  const staffList = [
    { name: "Dr. Pankaj", role: "Dean of Faculty", imageUrl: pankaj },
    { name: "Dr. Pankaj", role: "Dean of Faculty", imageUrl: pankaj },
    { name: "Dr. Pankaj", role: "Dean of Faculty", imageUrl: pankaj },
    { name: "Dr. Pankaj", role: "Dean of Faculty", imageUrl: pankaj },
  ];

  const Section = ({ title, items, isImage = false }) => (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-24 flex flex-col gap-12">
      <div className="max-w-3xl" data-aos="fade-right">
        <h2 className="text-3xl font-serif font-bold tracking-tight text-royal-navy sm:text-4xl relative inline-block">
          {title}
          <span className="absolute -bottom-3 left-0 w-1/3 h-1 bg-royal-gold rounded-full"></span>
        </h2>
      </div>

      {title === "Downloads" ? (
        <div className="">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {items.map((item, idx) => (
              <a
                key={idx}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-between p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
                data-aos="fade-up"
                data-aos-delay={idx * 50}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-royal-navy to-royal-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                <div className="w-16 h-16 bg-royal-navy/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-royal-navy group-hover:text-white transition-colors">
                  <DocumentArrowDownIcon className="w-8 h-8 text-royal-navy group-hover:text-white transition-colors" />
                </div>
                <span className="font-bold text-gray-700 group-hover:text-royal-navy transition-colors text-center text-lg mb-4 line-clamp-2">
                  {item.title}
                </span>
                <span className="text-royal-gold font-bold text-xs uppercase tracking-wider bg-royal-gold/10 px-4 py-2 rounded-full group-hover:bg-royal-gold group-hover:text-white transition-colors">
                  Download PDF
                </span>
              </a>
            ))}
          </div>
        </div>
      ) : isImage ? (
        <ul role="list" className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, idx) => (
            <li
              key={idx}
              data-aos="fade-up"
              className="group bg-white rounded-2xl p-4 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-gray-100 relative">
                <div className="absolute inset-0 bg-royal-navy/20 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                <img
                  src={item.url}
                  alt={item.title}
                  className="h-full w-full object-contain object-center group-hover:scale-110 transition-transform duration-500 p-2"
                />
              </div>
              <h3 className="mt-6 text-lg font-bold text-royal-navy group-hover:text-royal-gold transition-colors text-center font-serif">
                {item.title}
              </h3>
            </li>
          ))}
        </ul>
      ) : (
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 sm:gap-y-16"
        >
          {items.map((person, idx) => (
            <li
              key={idx}
              data-aos="fade-up"
              className="group bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 text-center"
            >
              <div className="relative mx-auto w-32 h-32 mb-6">
                <div className="absolute inset-0 bg-royal-gold/20 rounded-full blur-xl group-hover:blur-2xl transition-all"></div>
                <img
                  alt={person.name}
                  src={person.imageUrl}
                  className="relative w-full h-full rounded-full object-cover border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold tracking-tight text-royal-navy font-serif">
                {person.name}
              </h3>
              <p className="text-sm font-semibold text-royal-gold uppercase tracking-wider mt-1">
                {person.role}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  return (
    <div className="bg-gray-50 py-28 sm:py-32 font-sans">
      <div className="relative mb-20">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-200"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="bg-gray-50 px-6 text-sm text-gray-500 uppercase tracking-widest font-semibold">
            Faculty & Resources
          </span>
        </div>
      </div>

      {/* Staff Sections */}
      <Section title="Teaching Staff" items={teacher} />
      <Section title="Nursing Staff" items={staffList} />
      <Section title="Non-Nursing Staff" items={staffList} />

      {/* Committee Sections - Dynamically Loaded */}
      {committees.length > 0 && (
        <Section title="Committees & Cells" items={committees} isImage={true} />
      )}

      {/* Downloads Section */}
      {downloads.length > 0 && <Section title="Downloads" items={downloads} />}
    </div>
  );
}
