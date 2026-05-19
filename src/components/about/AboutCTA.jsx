import React from "react";

import {
  HiArrowRight,
  HiOutlineArrowDownTray,
} from "react-icons/hi2";

const AboutCTA = () => {
  return (
    <section className="w-full bg-white px-4 py-20 sm:py-24 lg:py-28 overflow-hidden">

      <div className="max-w-6xl mx-auto">

        {/* Main Container */}
        <div className="relative rounded-[40px] border border-black/10 bg-[#8a29660e] overflow-hidden">

          {/* Background Typography */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">

            <h3 className="text-5xl sm:text-7xl lg:text-9xl font-semibold tracking-tight text-[#8a2967]/[0.04] whitespace-nowrap">

              BHAGVAT PIPE

            </h3>
          </div>

          {/* Content */}
          <div className="relative z-10 px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24 text-center">

            {/* Small Label */}
            <div className="flex items-center justify-center gap-3">

              <div className="w-10 h-px bg-[#8a2967]/30"></div>

              <p className="text-sm font-medium tracking-wide uppercase text-[#8a2967]">

                Connect With Bhagvat

              </p>

              <div className="w-10 h-px bg-[#8a2967]/30"></div>
            </div>

            {/* Heading */}
            <h2 className="mt-8 text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight font-semibold text-black max-w-4xl mx-auto">

              Reliable Piping Systems
              <br />

              For
              <span className="text-[#8a2967]">
                {" "}Modern Infrastructure
              </span>

            </h2>

            {/* Description */}
            <p className="mt-8 text-lg leading-8 text-black/60 max-w-2xl mx-auto">

              Bhagvat Pipes continues to deliver
              dependable CPVC, UPVC, and SWR
              piping systems engineered for
              long-term infrastructure reliability.

            </p>

            {/* Buttons */}
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">

              {/* Contact Button */}
              <button className="h-14 px-8 rounded-full bg-[#8a2967] text-white text-base font-medium flex items-center gap-2 hover:scale-[1.02] transition-all duration-300">

                Contact Us

                <HiArrowRight className="text-lg" />

              </button>

              {/* Brochure Button */}
              <button className="h-14 px-8 rounded-full border border-black/10 bg-white text-black text-base font-medium flex items-center gap-2 hover:bg-black hover:text-white transition-all duration-300">

                Download Brochure

                <HiOutlineArrowDownTray className="text-lg" />

              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;