import FAQSection from "@/components/global/FAQSection";
import ApplicationsSection from "@/components/home/ApplicationsSection";
import CTASection from "@/components/home/CTASection";
import Hero from "@/components/home/hero";
import ProductSection from "@/components/home/ProductSection";
import TechnicalSection from "@/components/home/TechnicalSection";
import WhyBhagvat from "@/components/home/WhyBhagvat";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="pt-20">

    <Hero/>
    <ProductSection/>
    <WhyBhagvat/>
    <ApplicationsSection/>
    <TechnicalSection/>
    <FAQSection/>
    <CTASection/>
    </div>
    </>
  );
}
