"use client";

import Image from "next/image";
import { Plus } from "lucide-react";

export default function PremiumJoinTeamSection() {
  return (
    <section className="w-full min-h-screen flex flex-col lg:flex-row overflow-hidden">

      {/* LEFT SIDE — CONTENT */}

      <div
        className="
        relative
        w-full
        lg:w-[55%]
        bg-[#0b5d4b] border-[8px] border-white
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

        {/* Small Intro Text */}

        <p
          className="
          text-sm
          text-[#ffffff]
          max-w-xs
          mb-14
          leading-relaxed
          tracking-wide
        "
        >
          We are always looking for talented people
          that share our values.
        </p>

        {/* Heading */}

        <h1
          className="
          text-4xl
          lg:text-6xl
          font-bold
          text-[#ffffff]
          mb-10
          tracking-tight
          leading-[1.1]
        "
        >
          Join our team
        </h1>

        {/* Premium Button */}

         <button className="
          relative
          w-fit
          px-8
          py-3
          rounded-full
          bg-white
          text-[#0b5d4b]
          font-semibold
          transition-all
          duration-300
          hover:-translate-y-1
          hover:shadow-xl
        ">
          {/* Icon Circle */}
          View job openings
        </button>
      </div>

      {/* RIGHT SIDE — IMAGE */}

      <div className="relative w-full lg:w-[45%] h-[500px] lg:h-screen">

        <Image
          src="/team-member.jpg"   // put image in public folder
          alt="Team Member"
          fill
          priority
          className="object-cover"
        />

      </div>
    </section>
  );
}