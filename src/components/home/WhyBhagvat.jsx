import React from "react";
import Image from "next/image";

import FactoryImg from "../../../public/Images/home/factory.webp";

const features = [
  {
    number: "12+",
    title: "Years Experience",
    desc: "Trusted manufacturing expertise in CPVC, UPVC, and SWR piping systems.",
  },
  {
    number: "ISO",
    title: "Certified Quality",
    desc: "ISO 9001:2015 and ISI certified manufacturing standards.",
  },
  {
    number: "PAN",
    title: "India Network",
    desc: "Serving dealers, distributors, and infrastructure projects across India.",
  },
  {
    number: "SCH",
    title: "Industrial Standards",
    desc: "Engineered with SDR 11, SDR 13.5, SCH 40 & SCH 80 specifications.",
  },
];

const WhyBhagvat = () => {
  return (
    <section className="w-full bg-linear-to-b from-white to-[#8a29660e] px-4 pb-20 md:pb-28 overflow-hidden">

      <div className="max-w-7xl mx-auto">

        {/* Top Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-14">

          {/* Left */}
          <div className="max-w-3xl">

            <div className="flex items-center gap-3 mb-6">

              <div className="w-10 h-[2px] bg-black/50 rounded-xl"></div>

              <p className="uppercase tracking-[0.22em] text-xs sm:text-sm text-black/50 font-medium">
                Why Bhagvat
              </p>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-normal text-black">

              Engineered For
              <br />

              Performance &
              <br />

            <span className="text-[#8a2967]">Long-Term Reliability</span>

            </h2>
          </div>

          {/* Right */}
          <div className="max-w-xl">

            <p className="text-base sm:text-lg leading-relaxed text-black/60">

              Bhagvat Pipes combines modern manufacturing,
              certified quality standards, and engineering precision
              to deliver durable piping systems trusted across
              residential, commercial, and industrial sectors.

            </p>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-6">

          {/* LEFT IMAGE PANEL */}
          <div className="relative bg-white rounded-2xl overflow-hidden min-h-[650px] border border-black/5">

            {/* Glow */}
            <div className="absolute -top-20 -right-20 w-[300px] h-[300px] bg-[#ebf1fd] rounded-xl blur-3xl opacity-70"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col h-full">

              {/* Top Content */}
              <div className="p-8 sm:p-10 lg:p-12">

                <div className="inline-flex items-center h-11 px-5 rounded-xl bg-[#EEF2FB] border border-black/5 text-sm font-medium text-black/70">

                  Industrial Manufacturing Excellence

                </div>

                <h3 className="mt-7 text-4xl sm:text-5xl font-semibold tracking-[-0.05em] text-black leading-[1.02] max-w-[520px]">

                  Trusted Infrastructure
                  Solutions Built For
                  Modern India

                </h3>

                <p className="mt-6 text-black/60 text-base leading-relaxed max-w-[560px]">

                  From plumbing systems to industrial drainage
                  networks, Bhagvat Pipes delivers precision-engineered
                  solutions backed by certified manufacturing,
                  technical expertise, and nationwide trust.

                </p>
              </div>

              {/* Image Area */}
              <div className="relative flex-1 flex items-end justify-center px-6">

                {/* White Circle */}
                <div className="absolute bottom-[-120px] w-[500px] h-[500px] bg-[#EEF2FB] rounded-full"></div>

                {/* Image */}
                <div className="relative z-10 w-full max-w-[650px] h-[420px] sm:h-[480px]">

                  <Image
                    src={FactoryImg}
                    alt="Bhagvat Manufacturing"
                    fill
                    className="object-contain object-bottom"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT TRUST CARDS */}
          <div className="flex flex-col gap-6">

            {features.map((item, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-xl p-7 sm:p-8 border border-black/5 overflow-hidden hover:-translate-y-1 transition-all duration-500"
              >

                {/* Glow */}
                <div className="absolute top-0 right-0 w-[180px] h-[180px] bg-[#EEF2FB] rounded-xl blur-3xl opacity-60"></div>

                <div className="relative z-10">

                  {/* Top */}
                  <div className="flex items-start justify-between">

                    <div>

                      <h3 className="text-5xl sm:text-6xl font-semibold tracking-[-0.05em] text-black">

                        {item.number}

                      </h3>

                      <h4 className="mt-5 text-2xl font-semibold tracking-[-0.03em] text-black">

                        {item.title}

                      </h4>
                    </div>

                    {/* Arrow */}
                    <div className="w-12 h-12 rounded-xl border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-300">

                      ↗

                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-5 text-black/60 leading-relaxed">

                    {item.desc}

                  </p>

                  {/* Bottom Line */}
                  <div className="mt-7 pt-5 border-t border-black/5 flex items-center justify-between">

                    <p className="text-sm text-black/40">
                      Bhagvat Pipes
                    </p>

                    <p className="text-sm font-medium text-black">
                      Certified Standards
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-6 bg-white rounded-[32px] border border-black/5 p-7 sm:p-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

          {/* Left */}
          <div>

            <p className="uppercase tracking-[0.2em] text-xs text-black/40 mb-3">
              Nationwide Industrial Trust
            </p>

            <h3 className="text-3xl sm:text-4xl font-semibold tracking-[-0.04em] text-black leading-tight">

              Delivering Durable Piping
              Solutions Across India

            </h3>
          </div>

          {/* Right */}
          <div className="flex flex-col sm:flex-row gap-4">

            <button className="h-14 px-8 rounded-xl bg-black text-white text-sm sm:text-base font-medium hover:scale-[1.03] transition-all duration-300">

              Explore Products

            </button>

            <button className="h-14 px-8 rounded-xl border border-black/10 bg-[#EEF2FB] text-black text-sm sm:text-base font-medium hover:bg-black hover:text-white transition-all duration-300">

              Download Brochure

            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyBhagvat;