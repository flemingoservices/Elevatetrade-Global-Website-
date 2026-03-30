"use client";

import {
  MapPin,
  Mail,
  Phone,
  Linkedin,
  Facebook,
  Instagram,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function PremiumFooter() {
  return (
    <footer
  id="footer"
  className="
    bg-[#0b5d4b]
    text-white
    w-full
    py-16
  "
>
      {/* TOP FOOTER */}

      <div className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* BRAND */}

        <div className="flex flex-col items-start max-w-xs">

          <h2 className="text-2xl lg:text-2xl font-semibold text-[#d4a64a]">
            🌿Elevatetrade Global
          </h2>

          <p className="font-semibold text-white mt-1">
            Powered by Akriti Sky Morph
          </p>

          <div className="mt-6 space-y-3 text-sm text-white/80">

            <p className="font-semibold text-white">
              India
            </p>

            <div className="flex items-start gap-3">

              <MapPin
                size={18}
                className="mt-[3px] flex-shrink-0 text-[#d4a64a]"
              />

              <p className="leading-relaxed">
                5th floor, Imperial plaza,
                <br />
                near Anand talkies, Sitabuldi,
                <br />
                Nagpur-440012 ,Maharashtra
              </p>

            </div>

          </div>

          <button className="mt-6 text-[#d4a64a] font-medium underline underline-offset-4 transition hover:text-white">
            View our locations
          </button>

        </div>

        {/* COMPANY */}

        <div>

          <h3 className="font-semibold mb-4">
            Company
          </h3>

          <ul className="space-y-2 text-white/80">

            <li className="hover:text-white cursor-pointer">
              About Us
            </li>

            <li className="hover:text-white cursor-pointer">
              What We Do
            </li>

            <li className="hover:text-white cursor-pointer">
              Join Us
            </li>

            <li className="hover:text-white cursor-pointer">
              Locations
            </li>

            <li className="hover:text-white cursor-pointer">
              Contact Us
            </li>

          </ul>

        </div>

        {/* SERVICES */}

        <div>

          <h3 className="font-semibold mb-4">
            Services
          </h3>

          <ul className="space-y-3 text-white/80">

            <li className="hover:text-white">
              Agriculture Trading
            </li>

            <li className="hover:text-white">
              Logistics & Supply
            </li>

            <li className="hover:text-white">
              Sustainable Farming
            </li>

          </ul>

        </div>

        {/* CONTACT + SOCIAL */}

        <div>

          <h3 className="font-semibold mb-4">
            Contact Us
          </h3>

          {/* EMAIL — aligned like phone */}

          <a
            href="mailto:dhanashri@elevatetradeglobal.com"
            className="flex items-center gap-3 text-white/80 mb-3 hover:text-white transition leading-none"
          >
            <Mail
              size={18}
              className="flex-shrink-0"
            />

            <span>
              dhanashri@elevatetradeglobal.com
            </span>

          </a>

          {/* PHONE */}

          <a
            href="tel:+919049317063"
            className="flex items-center gap-3 text-white/80 mb-6 hover:text-white transition leading-none"
          >
            <Phone
              size={18}
              className="flex-shrink-0"
            />

            <span>
              +91 9049317063
            </span>

          </a>

          {/* SOCIAL ICONS */}

          <div className="flex items-center gap-4">

            <a
              href="https://wa.me/919049317063"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#25D366] transition"
            >
              <FaWhatsapp size={18} />
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#E4405F] transition"
            >
              <Instagram size={18} />
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#1877F2] transition"
            >
              <Facebook size={18} />
            </a>

            <a
              href="mailto:dhanashri@elevatetradeglobal.com"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#EA4335] transition"
            >
              <Mail size={18} />
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#0A66C2] transition"
            >
              <Linkedin size={18} />
            </a>

          </div>

        </div>

      </div>

      {/* DIVIDER */}

      <div className="border-t border-white/100"></div>

      {/* BOTTOM */}

      <div className="max-w-7xl mx-auto px-8 py-10 flex flex-col lg:flex-row justify-between items-center gap-6">

        <h2 className="text-xl lg:text-2xl font-semibold text-center lg:text-left">
          Making a difference in the world of agribusiness.
        </h2>

        <p className="text-sm text-white/70 text-center lg:text-right">
          Copyright © {new Date().getFullYear()} Akriti Sky Morph.
          All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}