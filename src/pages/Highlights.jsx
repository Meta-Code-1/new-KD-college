import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import mbbsFee from "../assets/MBBS-Fee-Structure-2025.pdf";
import pgFee from "../assets/Fee-Struture-PG-2025-26-1.pdf";
import antiRaggingUG from "../assets/anti-raging-affidavit-ug.pdf";
import antiRaggingPG from "../assets/Anti-Ragging-Affidavit-PG.pdf";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  CurrencyRupeeIcon,
  ShieldCheckIcon,
  DocumentArrowDownIcon,
  AcademicCapIcon,
  PhoneIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/outline";

const Highlights = () => {
  const { hash } = useLocation();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

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

  const DownloadCard = ({ title, file, label, badge }) => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col md:flex-row items-center justify-between gap-4 group hover:shadow-lg transition-all duration-300 hover:border-royal-gold/30">
      <div className="flex items-start gap-4">
        <div className="p-3 bg-royal-navy/5 rounded-full group-hover:bg-royal-navy group-hover:text-white transition-colors">
          <DocumentArrowDownIcon className="w-6 h-6 text-royal-navy group-hover:text-royal-gold" />
        </div>
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-bold text-gray-800 text-lg">{title}</h3>
            {badge && (
              <span className="bg-red-500 text-white text-[10px] uppercase font-bold px-2 py-0.5 rounded-full animate-pulse">
                {badge}
              </span>
            )}
          </div>
          <p className="text-gray-500 text-sm">{label}</p>
        </div>
      </div>
      <a
        href={file}
        target="_blank"
        rel="noopener noreferrer"
        download
        className="px-6 py-2 bg-gray-50 text-royal-navy font-bold rounded-lg border border-gray-200 hover:bg-royal-navy hover:text-white hover:border-royal-navy transition-all duration-300 flex items-center gap-2 whitespace-nowrap"
      >
        <span>Download PDF</span>
        <DocumentArrowDownIcon className="w-4 h-4" />
      </a>
    </div>
  );

  return (
    <div className="min-h-screen bg-white py-20 mt-16 md:mt-24 font-sans">
      <div className="max-w-6xl mx-auto px-4 space-y-12">
        {/* Header */}
        <div className="text-center" data-aos="fade-down">
          <span className="text-royal-gold font-bold tracking-[0.3em] uppercase text-sm mb-3 block">
            Important Updates
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-royal-navy mb-4 font-serif">
            Key <span className="text-royal-gold">Highlights</span>
          </h1>
          <div className="h-1.5 w-24 bg-royal-gold mx-auto rounded-full shadow-sm mb-6"></div>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Essential information regarding fee structures, approvals, and
            institutional policies.
          </p>
        </div>

        {/* 1. Fee Structure Section */}
        <section id="fee-structure" className="scroll-mt-32" data-aos="fade-up">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-royal-navy/5 rounded-xl">
              <CurrencyRupeeIcon className="w-8 h-8 text-royal-navy" />
            </div>
            <h2 className="text-3xl font-bold text-royal-navy font-serif">
              Fee Structures & Approvals
            </h2>
          </div>

          <div className="grid gap-6 mb-8">
            <DownloadCard
              title="MBBS Fee Structure"
              label="For Academic Session 2025-26"
              file={mbbsFee}
              badge="New"
            />
            <DownloadCard
              title="PG (MD/MS) Fee Structure"
              label="For Batch 2025-26"
              file={pgFee}
              badge="New"
            />
          </div>

          {/* Stipend Info */}
          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden group hover:shadow-xl transition-all duration-300">
            <div className="bg-royal-navy p-6 text-white border-b border-royal-navy/10 relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
              <h3 className="font-bold text-xl flex items-center gap-3 relative z-10 font-serif">
                <AcademicCapIcon className="w-6 h-6 text-royal-gold" /> PG
                Junior Resident (JR) Stipend
              </h3>
            </div>
            <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
              {[
                { year: "1st Year", amount: "32,000" },
                { year: "2nd Year", amount: "34,000" },
                { year: "3rd Year", amount: "36,000" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-8 text-center hover:bg-royal-gold/5 transition-colors group/item"
                >
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-2 group-hover/item:text-royal-navy transition-colors">
                    PG JR {item.year}
                  </p>
                  <p className="text-3xl font-bold text-royal-navy font-serif">
                    ₹ {item.amount}/-{" "}
                  </p>
                  <span className="text-xs font-medium text-gray-400 uppercase tracking-widest mt-1 block">
                    Per Month
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 2. Anti-Ragging Section */}
        <section id="anti-ragging" className="scroll-mt-32" data-aos="fade-up">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-green-50 rounded-xl">
              <ShieldCheckIcon className="w-8 h-8 text-green-700" />
            </div>
            <h2 className="text-3xl font-bold text-royal-navy font-serif">
              Anti-Ragging Committee
            </h2>
          </div>

          <div className="bg-white rounded-[2rem] shadow-xl border border-gray-100 p-8 md:p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-bl-full -mr-4 -mt-4 opacity-50"></div>

            <div className="flex flex-col md:flex-row gap-12 items-start relative z-10">
              {/* Left: Downloads & Reporting */}
              <div className="flex-1 space-y-8 w-full">
                <div>
                  <h3 className="font-bold text-royal-navy mb-6 flex items-center gap-2 text-lg">
                    Mandatory Affidavits
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <a
                      href={antiRaggingUG}
                      target="_blank"
                      className="flex items-center gap-4 p-5 border border-gray-200 rounded-2xl hover:border-royal-gold hover:shadow-lg hover:bg-white transition-all group bg-gray-50/50"
                    >
                      <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center group-hover:bg-royal-navy group-hover:text-white transition-colors border border-gray-100">
                        <AcademicCapIcon className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <p className="font-bold text-royal-navy text-base">
                          UG Affidavit
                        </p>
                        <p className="text-xs text-gray-500 font-medium group-hover:text-royal-gold uppercase tracking-wider mt-1">
                          Download PDF
                        </p>
                      </div>
                    </a>
                    <a
                      href={antiRaggingPG}
                      target="_blank"
                      className="flex items-center gap-4 p-5 border border-gray-200 rounded-2xl hover:border-royal-gold hover:shadow-lg hover:bg-white transition-all group bg-gray-50/50"
                    >
                      <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center group-hover:bg-royal-navy group-hover:text-white transition-colors border border-gray-100">
                        <AcademicCapIcon className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <p className="font-bold text-royal-navy text-base">
                          PG Affidavit
                        </p>
                        <p className="text-xs text-gray-500 font-medium group-hover:text-royal-gold uppercase tracking-wider mt-1">
                          Download PDF
                        </p>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="bg-red-50/80 border border-red-100 rounded-2xl p-6 flex items-center gap-6">
                  <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center text-red-600 shrink-0">
                    <PhoneIcon className="w-7 h-7" />
                  </div>

                  <div>
                    <p className="text-xs font-bold text-red-400 uppercase tracking-widest mb-1">
                      To Report Ragging
                    </p>
                    <p className="text-2xl md:text-3xl font-bold text-red-700 font-mono">
                      1800-270-4121
                    </p>
                    <p className="text-xs font-bold text-red-400 uppercase tracking-widest mt-1">
                      Toll Free Number
                    </p>
                  </div>
                </div>
              </div>

              {/* Right: Status */}
              <div className="w-full md:w-80 bg-royal-navy text-white rounded-[2rem] p-8 shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

                <h3 className="font-bold text-royal-gold mb-6 text-xs uppercase tracking-[0.2em]">
                  Current Status
                </h3>
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/10">
                  <span className="text-gray-300 text-sm">
                    Reporting Period
                  </span>
                  <span className="font-mono text-xs bg-white/10 border border-white/20 px-3 py-1 rounded-full">
                    2024-25
                  </span>
                </div>

                <div className="mt-4 text-center">
                  <div className="w-16 h-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/30">
                    <CheckBadgeIcon className="w-8 h-8" />
                  </div>
                  <p className="text-5xl font-bold text-white mb-2 font-serif">
                    0
                  </p>
                  <p className="text-sm text-green-400 font-bold uppercase tracking-wider">
                    Ragging Cases
                  </p>
                  <p className="text-[10px] text-gray-400 mt-4 uppercase tracking-widest border-t border-white/10 pt-4">
                    Zero Tolerance Policy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Highlights;
