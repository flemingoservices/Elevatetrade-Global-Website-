import type { Metadata } from "next";
import { Golos_Text, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Footer from "@/components/globals/footer";
import Navbar from "@/components/globals/header-nav";

/* Fonts */

const golosText = Golos_Text({
  weight: ["400", "500", "600", "700"],
  variable: "--font-primary",
  subsets: ["latin"],
});

const inter = Inter({
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-secondary",
  subsets: ["latin"],
});

/* SEO Metadata for Import / Export Industry */

export const metadata: Metadata = {
  metadataBase: new URL("http://elevatetradeglobal.com/"),

  title: {
    default: "Elevatetradeglobal | Global Import Export & Agri Commodity Trading Company",
    template: "%s | elevatetradeglobal",
  },

  description:
    "Elevatetradeglobal is a globally recognized import export and agribusiness company providing agricultural commodity trading, international logistics, and supply chain solutions across Africa, Europe, Gulf Countries, and worldwide markets.",

  keywords: [
    "Global Import Export Company",
    "Worldwide Export Company",
    "International Trade Company",
    "Global Agribusiness Company",
    "Agricultural Commodity Exporter",
    "Import Export Company in India",
    "Export Company to Africa",
    "Export Company to Gulf Countries",
    "Export Company to Europe",
    "Export Company to United Kingdom",
    "Export Company to Morocco",
    "Export Company to West Africa",
    "Rice Exporter Worldwide",
    "Wheat Export Company Global",
    "Food Grain Exporter International",
    "Commodity Trading Company Global",
    "Bulk Agricultural Supplier",
    "Global Supply Chain Management",
    "International Shipping and Logistics",
    "Global Trade Network",
    "Worldwide Import Export Services",
    "Agriculture Export Business",
    "Export Business Company Worldwide",
    "Trusted Global Exporter",
    "International Export Solutions",
    "Global Export Partner",
    "Import Export Company Website",
    "Global Trading Company India",
    "Export Business to Africa and Europe",
    "International Commodity Supplier",
    "Elevatetrade Global",
  ],

  openGraph: {
    title:
      "Elevatetrade Global | Global Import Export & Commodity Trading Company",

    description:
      "Leading global import export company delivering agricultural commodities, logistics, and supply chain solutions across international markets.",

    url: "elevatetradeglobal",

    siteName: "Elevatetrade Global",

    locale: "en_US",

    type: "website",
  },

  alternates: {
    canonical: "/",
    languages: {
      "en-IN": "/",
      "en-US": "/",
      "en-GB": "/",
      "fr-FR": "/",
      "ar-AE": "/"
    }
  },

  twitter: {
    card: "summary_large_image",
    title: "Elevatetrade Global | Global Import Export Company",
    description:
      "Global agribusiness and commodity export company connecting suppliers and buyers worldwide.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  /* Organization Schema for SEO Ranking */

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",

    name: "Elevatetradeglobal",

    url: "http://elevatetradeglobal.com/",

    logo: "http://elevatetradeglobal.com/logo.png",

    description:
      "Global import export and agribusiness company specializing in agricultural commodities, international trade, and logistics management.",

    address: {
      "@type": "PostalAddress",
      addressLocality: "Noida",
      addressRegion: "Uttar Pradesh",
      addressCountry: "India",
    },

    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91 9049317063",
      contactType: "Customer Service",
      areaServed: "Worldwide",
      availableLanguage: ["English", "Hindi"],
    },

    sameAs: [
      "https://www.linkedin.com",
      "https://www.facebook.com",
      "https://www.instagram.com"
    ],
  };

  return (
    <html lang="en">
      <body
        className={`${golosText.variable} ${inter.variable} antialiased font-secondary`}
      >
        <Navbar />

        {children}

        <Footer />

        {/* Organization Schema */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </body>
    </html>
  );
}
