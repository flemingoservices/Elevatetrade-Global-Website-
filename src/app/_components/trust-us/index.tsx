"use client";

import Image from "next/image";

/*
Ensure images are placed inside the /public folder
Example:
public/
  Cote d'Ivoire.png
  Benin.png
  Sierra Leone.png
  togo.png
  Morocco.png
  United Kingdom.png
  Portugal.png
  Gulf Contries.jpg
  Durban.png
*/

/* ================= TYPES ================= */

interface Country {
  name: string;
  image: string;
}

interface CountryCardProps {
  country: Country;
  index: number;
}

/* ================= DATA ================= */

const currentCountries: Country[] = [
  {
    name: "Côte d'Ivoire",
    image: "/Côte d'Ivoire.png",
  },
  {
    name: "Benin",
    image: "/Benin.png",
  },
  {
    name: "Sierra Leone",
    image: "/Sierra Leone.png",
  },
  {
    name: "Togo",
    image: "/togo.png",
  },
];

const futureCountries: Country[] = [
  {
    name: "Morocco",
    image: "/Morocco.png",
  },
  {
    name: "United Kingdom",
    image: "/United Kingdom.png",
  },
  {
    name: "Portugal",
    image: "/Portugal.png",
  },
  {
    name: "Gulf Countries",
    image: "/Gulf Contries.jpg",
  },
  {
    name: "Durban (South Africa)",
    image: "/Durban.png",
  },
];

/* ================= CARD COMPONENT ================= */

function CountryCard({ country }: CountryCardProps) {
  return (
    <div>
      {/* Premium Animated Border Wrapper */}
      <div
        className="
        rounded-2xl
        p-[2px]
        bg-gradient-to-r
        from-[#0b5d4b]
        via-green-500
        to-[#0b5d4b]
        shadow-md
        "
      >
        {/* Card */}
        <div
          className="
          bg-white
          rounded-2xl
          overflow-hidden
          border border-gray-200
          shadow-sm
          transition-all
          duration-300
          hover:shadow-lg
          hover:-translate-y-1
          "
        >
          {/* Image */}
          <div className="relative h-[170px] flex items-center justify-center p-6 bg-gray-50">
            <Image
              src={country.image}
              alt={country.name}
              fill
              sizes="220px"
              className="object-contain"
              priority
            />
          </div>

          {/* Country Name */}
          <div className="px-5 py-4 text-center">
            <h3 className="text-base font-semibold text-[#0b5d4b]">
              {country.name}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ================= MAIN SECTION ================= */

export default function GlobalPresencePremiumSection() {
  return (
    <section className="bg-gray-50 py-28 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-2xl mb-20">
          <div className="w-16 h-[3px] bg-[#0b5d4b] mb-6 rounded-full" />

          <h2 className="text-4xl md:text-5xl font-bold text-[#0b5d4b] leading-tight">
            Our Global Presence
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed">
            We are building strong international partnerships and expanding our
            presence across key global markets through reliable trade and
            long-term collaboration.
          </p>
        </div>

        {/* CURRENT COUNTRIES */}
        <div className="mb-24">
          <h3 className="text-xl font-semibold text-[#0b5d4b] mb-10">
            Currently Working With Countries
          </h3>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {currentCountries.map((country, i) => (
              <CountryCard
                key={country.name}
                country={country}
                index={i}
              />
            ))}
          </div>
        </div>

        {/* FUTURE COUNTRIES */}
        <div>
          <h3 className="text-xl font-semibold text-[#0b5d4b] mb-10">
            Future Expansion Markets
          </h3>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {futureCountries.map((country, i) => (
              <CountryCard
                key={country.name}
                country={country}
                index={i}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}