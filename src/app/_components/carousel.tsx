"use client";

import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import Image from "next/image";

/* ================= PRODUCTS DATA ================= */

const products = [
  {
    name: "1121 Basmati Rice",
    image: "/1121 Basmati Rice.jpg",
    category: "Rice",
  },
  {
    name: "1718 Basmati Rice",
    image: "/1718 Basmati Rice.jpg",
    category: "Rice",
  },
  {
    name: "1509 Basmati Rice",
    image: "/1509.jpg",
    category: "Rice",
  },
  {
    name: "PR11 / Parmal Rice 11",
    image: "/PR11.jpg",
    category: "Rice",
  },
  {
    name: "IR64 Rice",
    image: "/1R64.jpg",
    category: "Rice",
  },
  {
    name: "Sugandha Rice",
    image: "/Suganda.jpg",
    category: "Rice",
  },
  {
    name: "Sharbati Rice",
    image: "/Sharbati.jpg",
    category: "Rice",
  },
  {
    name: "Premium Pulses",
    image: "/Pulses.jpg",
    category: "Pulses",
  },
  {
    name: "Maize",
    image: "/Maize.jpg",
    category: "Maize",
  },
  {
    name: "Beverages",
    image: "/Beverages.jpg",
    category: "Beverages",
  },
];

/* ================= COMPONENT ================= */

export default function PremiumAgriCarousel() {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
    },
    [
      AutoScroll({
        speed: 0.8,
        playOnInit: true,
        stopOnInteraction: false,
      }),
    ]
  );

  return (
    <section className="w-full py-16 bg-gradient-to-b from-white to-green-50">

      {/* HEADER */}

      <div className="text-center mb-12">

        <h2 className="text-4xl md:text-5xl font-bold text-[#0B5D4B]">
          Our Premium Agricultural Products
        </h2>

        <p className="mt-4 text-gray-600 text-lg">
          Export Quality Rice, Pulses, Maize & Beverages
        </p>

      </div>

      {/* CAROUSEL */}

      <div
        className="overflow-hidden max-w-7xl mx-auto px-6"
        ref={emblaRef}
      >

        <div className="flex gap-8">

          {products.map((product, index) => (
            <div
              key={index}
              className="
                min-w-[260px]
                bg-white
                rounded-2xl
                shadow-lg
                hover:shadow-2xl
                transition-all
                duration-300
                border
                border-gray-100
                group
              "
            >
              {/* IMAGE */}

              <div className="relative h-48 overflow-hidden rounded-t-2xl">

                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="
                    object-cover
                    group-hover:scale-110
                    transition-transform
                    duration-500
                  "
                  sizes="260px"
                />

              </div>

              {/* CONTENT */}

              <div className="p-6 text-center">

                <h3 className="text-lg font-semibold text-gray-900">
                  {product.name}
                </h3>

                <span
                  className="
                    inline-block
                    mt-3
                    px-4
                    py-1
                    text-sm
                    rounded-full
                    bg-[#0B5D4B]
                    text-white
                  "
                >
                  {product.category}
                </span>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}