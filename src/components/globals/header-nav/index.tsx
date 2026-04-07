"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ✅ SCROLL FUNCTION */
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      const navbar = document.querySelector("header");
      const navbarHeight = navbar ? navbar.clientHeight : 80;

      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;

      const offsetPosition = elementPosition - navbarHeight - 10;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  /* ✅ EMAIL FUNCTION */
  const handleEmailClick = () => {
    window.location.href =
      "mailto:dhanashri@elevatetradeglobal.com?subject=Inquiry&body=Hello, I would like to connect with you.";
  };

  /* ✅ NAV ITEM */
  const navItem = (label: string, sectionId: string) => (
    <motion.div whileHover={{ y: -2 }}>
      <button
        onClick={() => scrollToSection(sectionId)}
        className="relative text-[13px] tracking-[2px] font-medium uppercase group bg-transparent"
      >
        {label}
        <span className="absolute left-0 -bottom-1 h-[1.5px] w-0 bg-[#fbc02d] transition-all duration-300 group-hover:w-full"></span>
      </button>
    </motion.div>
  );

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md text-black shadow-md"
          : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between relative">

        {/* LEFT */}
        <div className="hidden md:flex gap-8">
          {navItem("Home", "home")}
          {navItem("About Us", "about-elevatetrade")}
          {navItem("What We Do", "initiatives")}
          {navItem("Join Us", "industries")}
        </div>

        {/* CENTER LOGO */}
        <div
          onClick={() => scrollToSection("home")}
          className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2 cursor-pointer"
        >
          <div className="text-xl">🌿</div>
          <h1 className="text-lg font-semibold tracking-wide">
            Elevatetrade Global
          </h1>
        </div>

        {/* RIGHT */}
        <div className="hidden md:flex gap-8">
          {navItem("Locations", "footer")}

          {/* ✅ UPDATED CONTACT BUTTON */}
          <motion.div whileHover={{ y: -2 }}>
            <button
              onClick={handleEmailClick}
              className="relative text-[13px] tracking-[2px] font-medium uppercase group"
            >
              Contact Us
              <span className="absolute left-0 -bottom-1 h-[1.5px] w-0 bg-[#fbc02d] transition-all duration-300 group-hover:w-full"></span>
            </button>
          </motion.div>
        </div>

        {/* MOBILE MENU ICON */}
        <div className="md:hidden text-2xl cursor-pointer">
          ☰
        </div>

      </div>
    </header>
  );
};

export default Navbar;