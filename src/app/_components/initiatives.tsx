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
    <section className="relative py-32 px-6 md:px-16 lg:px-24 overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white">

      {/* Premium Background Effects */}

      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#0b5d4b]/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#0b5d4b]/10 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT CONTENT */}

        <div className="text-[#0b5d4b]">

          {/* Premium Label */}

          <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full bg-[#0b5d4b]/10 border border-[#0b5d4b]/20 text-sm font-medium">
            <span className="w-2 h-2 bg-[#0b5d4b] rounded-full animate-pulse" />
            Premium Services
          </div>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight">
            Facilitating smoother,
            <br /> stress-free negotiations
            <br /> is our specialty.
          </h1>

          <p className="mt-6 text-lg text-[#0b5d4b]/80 max-w-lg leading-relaxed">
            Delivering excellence across sourcing, operations, and supply chain
            management with precision, transparency, and trusted execution.
          </p>

          <button className="flex items-center gap-4 mt-12 group">

            <div
              className="
              w-14 h-14
              rounded-full
              bg-[#0b5d4b]
              text-white
              flex items-center
              justify-center
              shadow-xl
              transition-all duration-300
              
              
              "
            >
              <Plus />
            </div>

            <span className="text-lg font-semibold  transition">
              View all services
            </span>

          </button>

        </div>

        {/* RIGHT CAROUSEL */}

        <div className="relative">

          {/* Arrows */}

          <div className="absolute -top-16 right-0 flex gap-4 z-10">

            <button
              onClick={prevSlide}
              className="
              w-12 h-12
              rounded-full
              border border-[#0b5d4b]/30
              text-[#0b5d4b]
              flex items-center
              justify-center
              bg-white
              shadow-md
              
              
              
              transition-all duration-300
              "
            >
              <ArrowLeft size={18} />
            </button>

            <button
              onClick={nextSlide}
              className="
              w-12 h-12
              rounded-full
              border border-[#0b5d4b]/30
              text-[#0b5d4b]
              flex items-center
              justify-center
              bg-white
              shadow-md
              
              
              
              transition-all duration-300
              "
            >
              <ArrowRight size={18} />
            </button>

          </div>

          {/* Carousel */}

          <div className="overflow-hidden">

            <motion.div
              className="flex gap-10"
              animate={{ x: `-${index * slideWidth}px` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >

              {extendedServices.map((item, i) => (

                <motion.div
                  key={i}
                  
                  transition={{ duration: 0.3 }}
                  className="min-w-[280px] group"
                >

                  <div
                    className="
                    relative
                    rounded-2xl
                    p-[1px]
                    bg-gradient-to-b
                    from-[#0b5d4b]/40
                    to-transparent
                    transition duration-500
                    
                    
                    "
                  >

                    <div
                      className="
                      relative
                      bg-white
                      rounded-2xl
                      overflow-hidden
                      shadow-lg
                      transition-all duration-500
                      
                      "
                    >

                      <Image
                        src={item.image}
                        alt={item.title}
                        width={280}
                        height={360}
                        className="
                        object-cover
                        w-[280px]
                        h-[360px]
                        transition duration-700
                        
                        "
                        priority
                      />

                      {/* Premium Overlay */}

                      <div
                        className="
                        absolute inset-0
                        bg-gradient-to-t
                        from-[#0b5d4b]/80
                        to-transparent
                        opacity-0
                        
                        transition duration-500
                        flex flex-col justify-end
                        p-6
                        "
                      >

                        <div className="flex items-center justify-between">

                          <span className="text-white font-semibold text-lg">
                            Explore Service
                          </span>

                          <div
                            className="
                            w-10 h-10
                            rounded-full
                            bg-white
                            text-[#0b5d4b]
                            flex items-center
                            justify-center
                            transition
                            duration-300
                            
                            "
                          >
                            <Plus size={16} />
                          </div>

                        </div>

                      </div>

                    </div>

                  </div>

                  <div
                    className="
                    flex items-center
                    gap-2
                    mt-5
                    text-[#0b5d4b]
                    font-semibold
                    text-lg
                    transition
                    
                    "
                  >
                    {item.title}
                    <span className="transition ">
                      →
                    </span>
                  </div>

                </motion.div>

              ))}

            </motion.div>

          </div>

        </div>

      </div>

    </section>
  );
}
