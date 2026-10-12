import React from "react";
import Image from "next/image";

import AboutImg from "../../../public/Images/about/heroab.png";

const AboutHero = () => {
  return (
    <section className="w-full bg-white px-4 py-10 sm:py-14 overflow-hidden">

      <div className="max-w-7xl mx-auto">

        {/* Main Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT */}
          <div>

            {/* Small Label */}
            <div className="flex items-center gap-3 mb-6">

              <div className="w-10 h-px bg-[#8a2967]/30"></div>

              <p className="text-sm font-medium tracking-wide text-[#8a2967] uppercase">

                About Bhagvat Pipes

              </p>
            </div>

            {/* Heading */}
            <h1 className="text-[26px] md:text-[34px] lg:text-[44px] font-semibold leading-tight tracking-tight text-black">

              Building Strong &
              Reliable

              <span className="text-[#8a2967]">
                {" "}Pipeline Solutions
              </span>

              {" "}For Modern Infrastructure

            </h1>

            {/* Description */}
            <p className="mt-6 text-[14px] md:text-[16px] lg:text-[18px] leading-relaxed text-black/60 max-w-xl">

              Bhagvat Pipes manufactures premium CPVC,
              UPVC, and SWR piping systems designed for
              residential, commercial, and industrial
              infrastructure with long-term durability and
              engineering reliability.

            </p>

            {/* Bottom Info */}
            <div className="mt-10 flex flex-wrap gap-4">

              <div className="px-5 py-3 rounded-full bg-[#8a29660e] border border-[#8a2967]/10">

                <p className="text-sm font-medium text-black">

                  ISI Certified Manufacturing

                </p>
              </div>

              <div className="px-5 py-3 rounded-full bg-[#8a29660e] border border-[#8a2967]/10">

                <p className="text-sm font-medium text-black">

                  PAN India Supply

                </p>
              </div>

              <div className="px-5 py-3 rounded-full bg-[#8a29660e] border border-[#8a2967]/10">

                <p className="text-sm font-medium text-black">

                  Industrial Standards

                </p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">

            {/* Background Shape */}
            <div className="absolute inset-0 bg-[#8a29660e] rounded-[40px] rotate-3"></div>

            {/* Image Container */}
            <div className="relative overflow-hidden rounded-[40px] bg-[#8a29660e] border border-[#8a2967]/10">

              <div className="aspect-[4/3] relative">

                <Image
                  src={AboutImg}
                  alt="Bhagvat Pipes"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute bottom-6 left-6 bg-white border border-[#8a2967]/10 rounded-2xl px-5 py-4 shadow-sm">

              <p className="text-sm text-black/50">
                Trusted Infrastructure Partner
              </p>

              <h3 className="mt-1 text-xl font-semibold text-black">

                13+ Years Experience

              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
