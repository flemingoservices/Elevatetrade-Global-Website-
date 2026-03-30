"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function PremiumVideoHero() {
  const ref = useRef(null);

  // 🔥 Parallax effect
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section
      ref={ref}
      className="relative h-screen w-full overflow-hidden bg-black"
    >
      {/* 🎥 VIDEO BACKGROUND */}
      <motion.video
        autoPlay
        muted
        loop
        playsInline
        style={{ y }}
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/Hero.mp4" type="video/mp4" />
      </motion.video>

      {/* 🌑 Cinematic Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/30 to-black/80" />

      {/* ✨ Premium Light Glow */}
      <div className="absolute top-[-150px] left-[-100px] w-[500px] h-[500px] bg-[#caa24a]/20 blur-[120px] rounded-full" />

      {/* 🌫️ Grain Texture */}
      <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* CONTENT */}
      <div className="relative z-10 flex items-center h-full px-6 md:px-16 lg:px-24">

        <div className="max-w-4xl">

          {/* 🔥 HEADLINE */}
          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-white font-semibold leading-[1.05] tracking-tight text-[44px] sm:text-[60px] md:text-[80px]"
          >
            <span className="block">Making a difference</span>
            <span className="block">in the world of</span>
            <span className="block text-white/90">agribusiness.</span>
          </motion.h1>

          {/* ✨ SUBTEXT */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="mt-6 text-white/70 text-lg max-w-xl leading-relaxed"
          >
            Transforming agriculture through innovation, sustainability,
            and intelligent enterprise solutions.
          </motion.p>

          {/* 🚀 CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-12 flex items-center gap-6"
          >
            <button className="flex items-center gap-4 group">

              {/* Circle */}
              <div className="relative w-16 h-16 rounded-full bg-[#0b5d4b] flex items-center justify-center text-white text-2xl overflow-hidden">
                
                {/* Ripple */}
                <span className="absolute inset-0 rounded-full bg-white/20 scale-0 group-hover:scale-150 transition duration-500"></span>

                <span className="relative z-10 group-hover:rotate-90 transition duration-300">
                  +
                </span>
              </div>

              {/* Text */}
              <span className="text-white text-lg font-medium tracking-wide group-hover:tracking-wider transition-all duration-300">
                Contact Us
              </span>

            </button>
          </motion.div>

        </div>
      </div>

      {/* 🔥 Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}