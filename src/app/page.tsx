import { Metadata } from "next";
import Hero from "./_components/hero";
import Carousel from "./_components/carousel";
import AboutElevatetrade from "./_components/about-elevatetrade";
import TrustUs from "./_components/trust-us";
import OurServices from "./_components/our-services";
import Whatwedo  from "./_components/What we do ";
import Products from "./_components/products";
import Joinourteam  from "./_components/Join our team ";

export const metadata: Metadata = {
  title: 'Elevatetrade Global ',
  description: 'Elevatetrade Global is a trusted global agribusiness company specializing in agricultural trading, export solutions, and supply chain optimization.',
}

export default function Home() {
  return (
    <>
      <Hero />
       <Carousel /> 
    < AboutElevatetrade />
      <TrustUs />
      <OurServices />
      <Whatwedo  />
      <Products />
      <Joinourteam />
     
    </>
  );
}