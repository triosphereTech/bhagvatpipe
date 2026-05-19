import React from "react";
import Image from "next/image";

import AboutImg from "../../../public/Images/about/heroab.png";

const AboutHero = () => {
  return (
    <section className="w-full bg-white px-4 py-14 sm:py-16 overflow-hidden">

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
            <h1 className="text-5xl md:text-6xl xl:text-5xl font-semibold leading-tight tracking-tight text-black">

              Building Strong &
              Reliable

              <span className="text-[#8a2967]">
                {" "}Pipeline Solutions
              </span>

              {" "}For Modern Infrastructure

            </h1>

            {/* Description */}
            <p className="mt-7 text-lg leading-8 text-black/60 max-w-xl">

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

                  ISO Certified Manufacturing

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

                12+ Years Experience

              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;