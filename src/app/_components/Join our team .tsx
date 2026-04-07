"use client";

import Image from "next/image";
import { Plus } from "lucide-react";

export default function PremiumJoinTeamSection() {

  const handleEmailClick = () => {
    window.location.href =
      "mailto:dhanashri@elevatetradeglobal.com?subject=Job Application&body=Hello, I would like to apply for a position.";
  };

  return (
    <section
      id="industries"
      className="w-full min-h-screen flex flex-col lg:flex-row overflow-hidden scroll-mt-28"
    >

      {/* LEFT SIDE — CONTENT */}
      <div
        className="
        relative
        w-full
        lg:w-[55%]
        bg-[#0b5d4b]
        border-[8px] border-white
        flex
        flex-col
        justify-center
        px-8
        lg:px-24
        py-20
        text-white
      "
      >
        {/* Accent Line */}
        <div className="w-14 h-[3px] bg-white/70 mb-6 rounded-full"></div>

        {/* Small Intro */}
        <p className="text-lg lg:text-xl leading-loose text-white/90 max-w-md mb-12">
          We are always looking for talented people that share our values.
        </p>

        {/* Heading */}
        <h1 className="text-5xl lg:text-6xl font-semibold mb-10 leading-tight">
          Join our team
        </h1>

        {/* Button */}
        <button
          onClick={handleEmailClick}
          className="
          flex items-center gap-3
          w-fit
          px-8 py-4
          rounded-full
          bg-white
          text-[#0b5d4b]
          text-lg
          font-semibold
          transition-all duration-300
          hover:-translate-y-1 hover:shadow-xl
        "
        >
          <span>Send Your Resume</span>

          <div className="w-9 h-9 rounded-full bg-[#0b5d4b] text-white flex items-center justify-center">
            <Plus size={18} />
          </div>
        </button>
      </div>

      {/* RIGHT SIDE — IMAGE */}
      <div className="relative w-full lg:w-[45%] h-[500px] lg:h-screen">
        <Image
          src="/team-member.jpg"
          alt="Team Member"
          fill
          priority
          className="object-cover"
        />
      </div>

    </section>
  );
}