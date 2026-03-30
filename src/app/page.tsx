import { Metadata } from "next";
import Hero from "./_components/hero";
import Carousel from "./_components/carousel";
import OurExpertise from "./_components/our-expertise";
import TrustUs from "./_components/trust-us";
import OurServices from "./_components/our-services";
import Initiatives from "./_components/initiatives";
import Products from "./_components/products";
import IndustryExpertise from "./_components/industries";

export const metadata: Metadata = {
  title: 'Elevatetrade Global ',
  description: 'Elevatetrade Global is a trusted global agribusiness company specializing in agricultural trading, export solutions, and supply chain optimization.',
}

export default function Home() {
  return (
    <>
      <Hero />
       <Carousel /> 
      <OurExpertise />
      <TrustUs />
      <OurServices />
      <Initiatives />
      <Products />
      <IndustryExpertise />
     
    </>
  );
}