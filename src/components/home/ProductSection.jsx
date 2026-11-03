import React from "react";
import Image from "next/image";
import Link from "next/link";
import ProductCTAVideo from "./ProductCTAVideo";

import CPVCImg from "../../../public/Images/home/cpvc.png";
import UPVCImg from "../../../public/Images/home/Upvcpipe.png";
import SWRImg from "../../../public/Images/home/Swrfittings.png";
import FittingImg from "../../../public/Images/home/fitting.png";

const products = [
  {
    title: "CPVC Pipes",
    desc: "High-performance hot & cold water piping systems engineered for durability and pressure resistance.",
    image: CPVCImg,
    tag: "SDR 11 • SDR 13.5, SDR 9, SDR 7",
  },
  {
    title: "UPVC Pipes",
    desc: "Lightweight and corrosion-resistant piping solutions for residential and industrial applications.",
    image: UPVCImg,
    tag: "SCH 40 • SCH 80",
  },
  {
    title: "SWR Systems",
    desc: "Advanced drainage and waste management systems with leak-proof fitting technology.",
    image: SWRImg,
    tag: "Ring Fit • Self Fit",
  },
  {
    title: "Pipe Fittings",
    desc: "Precision-engineered elbows, tees, couplers, reducers, valves, and plumbing accessories.",
    image: FittingImg,
    tag: "Industrial Grade",
  },
];

const ProductSection = () => {
  return (
    <section className="w-full pt-10 bg-linear-to-b from-[#8e2f6d0c] to-white px-4 pb-14 md:pb-12 overflow-hidden">

      <div className="max-w-7xl mx-auto">

        {/* Top Area */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-10 md:mb-12">

          {/* Left */}
          <div className="max-w-2xl">

            <div className="flex items-center gap-3 mb-6">

              <div className="w-5 h-[2px] bg-black/50 rounded-full"></div>

              <p className="uppercase tracking-[0.22em] text-xs sm:text-sm text-black/50 font-medium">
                Product Ecosystem
              </p>
            </div>

            <h2 className="text-[26px] md:text-[34px] lg:text-[44px] leading-tight font-semibold tracking-normal text-black">

              Built For
             {" "}

            <span className="text-[#8a2967]">Every Pipeline</span>  
              <br />

              Requirement

            </h2>
          </div>

          {/* Right */}
          <div className="max-w-xl">

            <p className="text-[14px] md:text-[16px] lg:text-[18px] leading-relaxed text-black/60">

              Bhagvat Pipes manufactures premium CPVC, UPVC,
              and SWR piping systems designed for residential,
              commercial, and industrial infrastructure with
              superior reliability and long-term performance.

            </p>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {products.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl p-7 sm:p-9 overflow-hidden border border-black/5 hover:-translate-y-1 transition-all duration-500"
            >

              {/* Glow */}
              <div className="absolute top-0 right-0 w-[220px] h-[220px] bg-[#EEF2FB] rounded-full blur-3xl opacity-60"></div>

              {/* Top */}
              <div className="relative z-10 flex items-start justify-between gap-6">

                <div>

                  <div className="inline-flex h-10 items-center rounded-full bg-[#EEF2FB] px-4 text-xs font-medium tracking-wide text-black/70 border border-black/5">

                    {item.tag}

                  </div>

                  <h3 className="mt-6 text-2xl lg:text-3xl font-semibold text-black">

                    {item.title}

                  </h3>

                  <p className="mt-4 text-black/60 leading-relaxed max-w-md">

                    {item.desc}

                  </p>
                </div>

                {/* Arrow */}
                <div className="hidden sm:flex w-12 h-12 rounded-full border border-black/10 items-center justify-center shrink-0 group-hover:bg-black group-hover:text-white transition-all duration-300">

                  ↗

                </div>
              </div>

              {/* Product Image */}
              <div className="relative z-10 mt-10 flex justify-center">

                <div className="relative w-[420px] h-[220px] xl:h-[380px]">

                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Bottom Line */}
              <div className="relative z-10 mt-8 pt-5 border-t border-black/5 flex items-center justify-between">

                <p className="text-sm text-black/40">
                  Bhagvat Industrial Solutions
                </p>

                <button className="text-sm font-medium text-black">
                  Explore
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="relative mt-12 lg:mt-28 rounded-[32px] bg-linear-to-br from-[#fbf4f8] via-white to-[#f5edf2] border border-[#8a2967]/10 p-4 sm:p-6 lg:p-10 overflow-hidden lg:overflow-visible">

          {/* Decorative */}
          <div className="absolute inset-0 rounded-[32px] overflow-hidden pointer-events-none">
            <div className="absolute -top-24 right-10 w-[360px] h-[360px] rounded-full bg-[#8a2967]/8 blur-3xl"></div>
            <div className="absolute -bottom-32 left-1/3 w-[300px] h-[300px] rounded-full bg-[#e08bc2]/15 blur-3xl"></div>
            <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#8a2967_1px,transparent_1px),linear-gradient(to_bottom,#8a2967_1px,transparent_1px)] bg-size-[40px_40px]"></div>
          </div>

          <div className="relative grid lg:grid-cols-[260px_1fr] xl:grid-cols-[280px_1fr] gap-8 lg:gap-12 items-end">

            {/* Left: Video (pops out of the card on desktop) */}
            <div className="relative lg:-mt-28">
              <ProductCTAVideo
                src="/videos/Bhagvat_F6.mp4"
                className="w-full aspect-4/5 sm:aspect-video lg:aspect-9/16 rounded-3xl ring-4 ring-white shadow-[0_30px_60px_rgba(138,41,103,0.25)]"
              />
            </div>

            {/* Right: Content */}
            <div className="text-black px-2 sm:px-0 pb-2">

              {/* Heading row */}
              <div className="grid xl:grid-cols-[1.2fr_1fr] gap-4 xl:gap-10 xl:items-end">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-6 h-px bg-[#8a2967]/50"></div>
                    <p className="uppercase tracking-[0.2em] text-xs text-[#8a2967] font-medium">
                      Industrial Grade Quality
                    </p>
                  </div>
                  <h3 className="text-[26px] sm:text-3xl lg:text-[38px] leading-[1.12] font-semibold">
                    Trusted Piping Systems
                    <br className="hidden sm:block" />
                    {" "}Built For <span className="text-[#8a2967]">Modern Infrastructure</span>
                  </h3>
                </div>

                <p className="text-[14px] md:text-[15px] leading-relaxed text-black/60">
                  Our complete range of CPVC, UPVC and SWR pipes and fittings
                  with sizes, pressure classes and technical specifications,
                  all in one catalogue.
                </p>
              </div>

              {/* Product spec tiles */}
              <div className="mt-8 grid grid-cols-2 xl:grid-cols-4 gap-3">
                {products.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl bg-white border border-black/5 p-4 hover:border-[#8a2967]/25 hover:shadow-[0_10px_30px_rgba(138,41,103,0.08)] transition-all duration-300"
                  >
                    <p className="text-sm font-semibold">{item.title}</p>
                    <p className="mt-1 text-[11px] leading-snug text-black/50">{item.tag}</p>
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="/Doc/Bhagvat.pdf"
                  download="Bhagvat-Pipes-Catalogue.pdf"
                  className="inline-flex h-12 w-fit items-center justify-center gap-2 rounded-full bg-[#8a2967] px-7 sm:px-8 text-sm sm:text-base font-medium text-white hover:bg-[#722055] whitespace-nowrap shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m0 0l-5-5m5 5l5-5M5 20h14" />
                  </svg>
                  Download Catalogue
                </a>

                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center rounded-full border border-black/10 bg-white px-6 text-sm sm:text-base font-medium text-black hover:bg-black hover:text-white transition-all duration-300"
                >
                  Talk to Our Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
