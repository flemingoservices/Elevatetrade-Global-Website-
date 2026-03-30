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

          {/* Tagline */}
          <p className="text-sm text-[#0b5d4b] uppercase tracking-[0.32em] mb-4 font-semibold">
            Global Agribusiness Solutions
          </p>

          {/* Heading */}
          <h2 className="text-[42px] md:text-[60px] font-semibold text-[#0b5d4b] leading-[1.1] mb-6">
            Trusted Global <br /> Agri Trading Partner
          </h2>

          {/* Description */}
          <p className="text-gray-700 text-lg leading-relaxed max-w-lg mb-6">
            <span className="font-semibold text-[#0b5d4b]">
              Akriti Sky Morph
            </span>{" "}
            is a trusted global agribusiness company specializing in
            agricultural trading, export solutions, and supply chain
            optimization. We connect farmers, suppliers, and enterprises
            through a reliable and scalable international trade network.
          </p>

          <p className="text-gray-600 leading-relaxed max-w-lg mb-10">
            Our expertise in agri exports, commodity sourcing, and logistics
            management ensures seamless delivery of high-quality products
            across international markets with transparency and efficiency.
          </p>

          {/* Features */}
          <div className="grid grid-cols-2 gap-8 mb-12">

            <div className="border-l-4 border-[#0b5d4b] pl-4">
              <h4 className="text-[#0b5d4b] font-semibold text-lg">
                Global Export Network
              </h4>
              <p className="text-gray-600 text-sm mt-1">
                Strong international presence in agricultural exports.
              </p>
            </div>

            <div className="border-l-4 border-[#caa24a] pl-4">
              <h4 className="text-[#0b5d4b] font-semibold text-lg">
                Verified Suppliers
              </h4>
              <p className="text-gray-600 text-sm mt-1">
                Trusted sourcing from certified farmers and producers.
              </p>
            </div>

            <div className="border-l-4 border-[#0b5d4b] pl-4">
              <h4 className="text-[#0b5d4b] font-semibold text-lg">
                Efficient Logistics
              </h4>
              <p className="text-gray-600 text-sm mt-1">
                Optimized supply chain and fast global delivery.
              </p>
            </div>

            <div className="border-l-4 border-[#caa24a] pl-4">
              <h4 className="text-[#0b5d4b] font-semibold text-lg">
                Sustainable Practices
              </h4>
              <p className="text-gray-600 text-sm mt-1">
                Focused on responsible and eco‑friendly operations.
              </p>
            </div>

          </div>

          {/* CTA */}
          <button className="flex items-center gap-5">

            <div className="w-14 h-14 rounded-full bg-[#0b5d4b] flex items-center justify-center text-white text-xl shadow-md">
              +
            </div>

            <span className="text-[#0b5d4b] text-lg font-semibold tracking-wide">
              Explore More
            </span>

          </button>

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

            {/* Premium Frame */}
            <div className="absolute inset-0 rounded-xl bg-white border border-gray-200 shadow-[0_25px_80px_rgba(0,0,0,0.08)]" />

            {/* Accent Border */}
            <div className="absolute inset-0 rounded-xl border-2 border-[#0b5d4b]/20" />

            {/* Image */}
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
  );
}
