import FAQSection from "@/components/global/FAQSection";
import ApplicationsSection from "@/components/home/ApplicationsSection";
import CTASection from "@/components/home/CTASection";
import Hero from "@/components/home/hero"; // backup hero
import Hero2 from "@/components/home/Hero2"; // Design B
import Hero3 from "@/components/home/Hero3"; // Design C
import ProductSection from "@/components/home/ProductSection";
import TechnicalSection from "@/components/home/TechnicalSection";
import WhyBhagvat from "@/components/home/WhyBhagvat";
import CPVCSEOSection from "@/components/home/CPVCSEOSection";
import VideoSection from "@/components/home/VideoSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div>
    {/* <Hero/> */}
    <Hero2/>
    {/* <Hero3/> */}
    <ProductSection/>
    
    <WhyBhagvat/>

    <ApplicationsSection/>
    <CPVCSEOSection/>
    <TechnicalSection/>
    <FAQSection/>
    <CTASection/>
    </div>
    </>
  );
}
