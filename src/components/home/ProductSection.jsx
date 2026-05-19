import React from "react";
import Image from "next/image";

import CPVCImg from "../../../public/Images/home/cpvc.png";
import UPVCImg from "../../../public/Images/home/Upvcpipe.png";
import SWRImg from "../../../public/Images/home/Swrfittings.png";
import FittingImg from "../../../public/Images/home/fitting.png";

const products = [
  {
    title: "CPVC Pipes",
    desc: "High-performance hot & cold water piping systems engineered for durability and pressure resistance.",
    image: CPVCImg,
    tag: "SDR 11 • SDR 13.5",
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
    <section className="w-full bg-linear-to-b from-[#8e2f6d0c] to-white px-4 pb-20 md:pb-28 overflow-hidden">

      <div className="max-w-7xl mx-auto">

        {/* Top Area */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-14">

          {/* Left */}
          <div className="max-w-2xl">

            <div className="flex items-center gap-3 mb-6">

              <div className="w-10 h-[2px] bg-black/50 rounded-full"></div>

              <p className="uppercase tracking-[0.22em] text-xs sm:text-sm text-black/50 font-medium">
                Product Ecosystem
              </p>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-normal text-black">

              Built For
             {" "}

            <span className="text-[#8a2967]">Every Pipeline</span>  
              <br />

              Requirement

            </h2>
          </div>

          {/* Right */}
          <div className="max-w-xl">

            <p className="text-base sm:text-lg leading-relaxed text-black/60">

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

                  <h3 className="mt-6 text-3xl sm:text-4xl font-semibold tracking-[-0.04em] text-black">

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
        <div className="mt-14 flex flex-col md:flex-row md:items-center md:justify-between gap-6 bg-white rounded-[32px] p-7 sm:p-10 border border-black/5">

          <div>

            <p className="uppercase tracking-[0.2em] text-xs text-black/40 mb-3">
              Industrial Grade Quality
            </p>

            <h3 className="text-3xl sm:text-4xl font-semibold tracking-[-0.04em] text-black">

              Trusted Piping Systems
              <br className="hidden sm:block" />

              Built For Modern Infrastructure

            </h3>
          </div>

          <button className="h-14 px-8 rounded-full bg-black text-white text-sm sm:text-base font-medium hover:scale-[1.03] transition-all duration-300 w-fit">

            Download Catalogue

          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;