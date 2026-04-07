"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Plus } from "lucide-react";

const services = [
  { title: "Sales", image: "/Sales.jpg" },
  { title: "Sourcing", image: "/sourcing.jpg" },
  { title: "Operations", image: "/operation.jpg" },
  { title: "Logistics", image: "/logistics.webp" },
  { title: "Procurement", image: "/procurement.webp" },
];

const extendedServices = [...services, ...services];

export default function AkritiUltraPremiumCarousel() {
  const [index, setIndex] = useState(0);
  const slideWidth = 300;

  const nextSlide = () => setIndex((prev) => prev + 1);
  const prevSlide = () => setIndex((prev) => prev - 1);

  useEffect(() => {
    if (index >= services.length) {
      const timer = setTimeout(() => setIndex(0), 500);
      return () => clearTimeout(timer);
    }

    if (index < 0) {
      const timer = setTimeout(() => setIndex(services.length - 1), 500);
      return () => clearTimeout(timer);
    }
  }, [index]);

  return (
    <section
      id="initiatives"  // ✅ IMPORTANT (Navbar Link)
      className="relative py-32 px-6 md:px-16 lg:px-24 overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white scroll-mt-28"
    >
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#0b5d4b]/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#0b5d4b]/10 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT CONTENT */}
        <div className="text-[#0b5d4b]">

          <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full bg-[#0b5d4b]/10 border border-[#0b5d4b]/20 text-sm font-medium">
            <span className="w-2 h-2 bg-[#0b5d4b] rounded-full animate-pulse" />
            Premium Services
          </div>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Facilitating smoother,
            <br /> stress-free negotiations
            <br /> is our specialty.
          </h1>

          <p className="mt-6 text-lg text-[#0b5d4b]/80 max-w-lg">
            Delivering excellence across sourcing, operations, and supply chain
            management with precision and trust.
          </p>

          

        </div>

        {/* RIGHT CAROUSEL */}
        <div className="relative">

          {/* Arrows */}
          <div className="absolute -top-16 right-0 flex gap-4 z-10">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border border-[#0b5d4b]/30 flex items-center justify-center bg-white shadow-md"
            >
              <ArrowLeft size={18} />
            </button>

            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border border-[#0b5d4b]/30 flex items-center justify-center bg-white shadow-md"
            >
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Carousel */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-10"
              animate={{ x: `-${index * slideWidth}px` }}
              transition={{ duration: 0.5 }}
            >
              {extendedServices.map((item, i) => (
                <div key={i} className="min-w-[280px]">

                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={280}
                      height={360}
                      className="w-[280px] h-[360px] object-cover"
                    />
                  </div>

                  <div className="mt-4 text-[#0b5d4b] font-semibold text-lg">
                    {item.title} →
                  </div>

                </div>
              ))}
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}