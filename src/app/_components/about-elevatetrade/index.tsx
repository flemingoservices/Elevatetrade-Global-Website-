"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function TradersSection() {
  const ref = useRef(null);

  // Parallax
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);

  return (
    <>
      {/* ✅ ABOUT SECTION (FIXED WITH SCROLL OFFSET) */}
      <section
        id="about-elevatetrade"
        className="py-20 bg-gray-50 text-center scroll-mt-28"
      >
        <h2 className="text-3xl font-semibold text-[#0b5d4b] mb-4">
          About Elevatetrade Global 
        </h2>
      </section>

      {/* MAIN TRADERS SECTION */}
      <section
        ref={ref}
        className="relative bg-white py-28 px-6 md:px-16 lg:px-24 overflow-hidden"
      >
        {/* Akriti Theme Glow */}
        <div className="absolute -top-32 -left-32 w-[420px] h-[420px] bg-[#0b5d4b]/10 blur-[130px] rounded-full" />
        <div className="absolute -bottom-32 -right-32 w-[420px] h-[420px] bg-[#caa24a]/10 blur-[130px] rounded-full" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-sm text-[#0b5d4b] uppercase tracking-[0.32em] mb-4 font-semibold">
              Global Agribusiness Solutions
            </p>

            <h2 className="text-[42px] md:text-[60px] font-semibold text-[#0b5d4b] leading-[1.1] mb-6">
              Trusted Global <br /> Agri Trading Partner
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed max-w-lg mb-6">
              <span className="font-semibold text-[#0b5d4b]">
                Elevatetrade Global
              </span>{" "}
              is a trusted global agribusiness company specializing in
              agricultural trading, export solutions, and supply chain
              optimization.
            </p>

            <p className="text-gray-600 leading-relaxed max-w-lg mb-10">
              Our expertise in agri exports, commodity sourcing, and logistics
              management ensures seamless delivery across international markets.
            </p>

            <div className="grid grid-cols-2 gap-8 mb-12">
              <div className="border-l-4 border-[#0b5d4b] pl-4">
                <h4 className="text-[#0b5d4b] font-semibold text-lg">
                  Global Export Network
                </h4>
                <p className="text-gray-600 text-sm mt-1">
                  Strong international presence.
                </p>
              </div>

              <div className="border-l-4 border-[#caa24a] pl-4">
                <h4 className="text-[#0b5d4b] font-semibold text-lg">
                  Verified Suppliers
                </h4>
                <p className="text-gray-600 text-sm mt-1">
                  Trusted sourcing network.
                </p>
              </div>

              <div className="border-l-4 border-[#0b5d4b] pl-4">
                <h4 className="text-[#0b5d4b] font-semibold text-lg">
                  Efficient Logistics
                </h4>
                <p className="text-gray-600 text-sm mt-1">
                  Fast global delivery.
                </p>
              </div>

              <div className="border-l-4 border-[#caa24a] pl-4">
                <h4 className="text-[#0b5d4b] font-semibold text-lg">
                  Sustainable Practices
                </h4>
                <p className="text-gray-600 text-sm mt-1">
                  Eco-friendly operations.
                </p>
              </div>
            </div>

       
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            style={{ y }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <div className="relative w-full max-w-[540px] h-[420px]">
              <div className="absolute inset-0 rounded-xl bg-white border border-gray-200 shadow-[0_25px_80px_rgba(0,0,0,0.08)]" />
              <div className="absolute inset-0 rounded-xl border-2 border-[#0b5d4b]/20" />

              <div className="absolute inset-3 overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1500382017468-9049fed747ef"
                  alt="Agriculture Trade and Farming"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
}