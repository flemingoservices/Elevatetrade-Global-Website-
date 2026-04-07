"use client";

import Image from "next/image";

export default function PremiumHeroLayout() {
  return (
    <section className="w-full min-h-screen flex flex-col lg:flex-row overflow-hidden">

      {/* LEFT SIDE — PREMIUM IMAGE */}
      <div className="relative w-full lg:w-[80%] h-[900px] lg:h-screen">
        
        {/* Background Image */}
        <Image
          src="/hero-image.jpg"
          alt="International Trade"
          fill
          priority
          className="object-cover"
        />

        {/* Premium Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent"></div>
      </div>

      {/* RIGHT SIDE — PREMIUM GREEN PANEL */}
      <div
        className="
        relative
        w-full
        lg:w-[55%]
        bg-[#0b5d4b]
        border-[8px]
        border-white
        flex
        flex-col
        justify-center
        px-8
        lg:px-24
        py-20
        text-white
        overflow-hidden
      "
      >
        {/* Accent Line */}
        <div className="w-14 h-[3px] bg-white/70 mb-6 rounded-full"></div>

        {/* Small Label */}
        <p className="text-sm tracking-[0.2em] uppercase text-white/80 mb-4">
          Global Business
        </p>

        {/* Heading */}
        <h1 className="text-5xl lg:text-5xl font-semibold leading-tight mb-6">
          International Trader
        </h1>

        {/* Description */}
        <p className="text-white leading-loose text-lg lg:text-xl max-w-lg mb-8">
          Delivering trusted global trade solutions with operational excellence,
          transparency, and scalable logistics for modern enterprises.
        </p>

        {/* Extended Paragraph */}
        <p className="text-white/95 leading-loose text-lg lg:text-xl max-w-xl">
          We specialize in connecting global markets through a robust network of suppliers, 
          distributors, and logistics partners. Our expertise spans across sourcing, procurement, 
          and seamless delivery, ensuring that businesses receive high-quality products on time 
          and at competitive prices.
        </p>
      </div>
    </section>
  );
}