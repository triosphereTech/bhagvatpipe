import React from "react";
import {
  HiOutlineArrowUpRight,
  HiOutlinePhone,
} from "react-icons/hi2";

const CTASection = () => {
  return (
    <section className="w-full bg-linear-to-b from-white to-[#8a29660e] px-4 py-10 md:py-20 overflow-hidden">

      <div className="max-w-7xl mx-auto">

        {/* Main Container */}
        <div className="relative overflow-hidden rounded-[40px] border border-[#8a2967]/10 bg-white">

          {/* Background Glow */}
          <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-[#8a2967]/5 blur-3xl"></div>

          <div className="absolute -bottom-40 -left-32 w-[420px] h-[420px] rounded-full bg-[#8a2967]/5 blur-3xl"></div>

          {/* Grid */}
          <div className="relative z-10 grid lg:grid-cols-[1fr_0.6fr] gap-3 lg:gap-12 px-7 sm:px-10 lg:px-16 py-12 sm:py-16 lg:py-20">

            {/* LEFT */}
            <div>

              {/* Label */}
              <div className="flex items-center gap-3 mb-7">

                <div className="w-5 h-[2px] bg-[#8a2967]/40 rounded-full"></div>

                <p className="uppercase tracking-[0.22em] text-xs sm:text-sm text-[#8a2967]/60 font-medium">

                  Distribution Partnership

                </p>
              </div>

              {/* Heading */}
              <h2 className="text-[26px] md:text-[34px] lg:text-[44px] leading-[1.02] font-semibold tracking-wide text-black">

                Become a
                <br />

                Bhagvat
               

                Partner

              </h2>

              {/* Description */}
              <p className="mt-6 max-w-2xl text-[14px] md:text-[16px] lg:text-[18px] leading-relaxed text-black/60">

                Join Bhagvat’s growing distribution network and
                deliver premium CPVC, UPVC, and SWR piping
                solutions trusted across residential, commercial,
                and industrial infrastructure sectors.

              </p>

              {/* Bottom Tags */}
              <div className="hidden lg:flex mt-8 flex-wrap gap-3">

                {[
                  "PAN India Supply",
                  "Industrial Standards",
                  "Dealer Support",
                  "Trusted Manufacturing",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="h-12 px-5 rounded-full border border-[#8a2967]/10 bg-[#8a29660e] flex items-center text-sm font-medium text-[#8a2967]"
                  >

                    {item}

                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex flex-col justify-between">

              {/* Top Text */}
              <div>

                <p className="hidden lg:block uppercase tracking-[0.2em] text-xs text-[#8a2967]/50 mb-5">

                  Start Collaboration

                </p>

                <h3 className="hidden lg:block text-2xl sm:text-3xl lg:text-4xl leading-tight font-semibold text-black">

                  Let’s Build
                  Reliable
                  Infrastructure
                  Together

                </h3>
              </div>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-col gap-4">

                {/* Main Button */}
                <button className="group h-14 px-7 rounded-full bg-[#8a2967] text-white flex items-center justify-between hover:scale-[1.02] transition-all duration-300">

                  <span className="text-sm sm:text-base font-medium tracking-wide">

                    Become Distributor

                  </span>

                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:rotate-45 transition-all duration-300">

                    <HiOutlineArrowUpRight className="text-lg" />

                  </div>
                </button>

                {/* Secondary */}
                <button className="group h-14 px-7 rounded-full border border-[#8a2967]/10 bg-[#8a29660e] text-[#8a2967] flex items-center justify-between hover:bg-[#8a2967] hover:text-white transition-all duration-300">

                  <span className="text-sm sm:text-base font-medium tracking-wide">

                    Download Catalogue

                  </span>

                  <div className="w-8 h-8 rounded-full border border-current/20 flex items-center justify-center">

                    <HiOutlineArrowUpRight className="text-lg" />

                  </div>
                </button>
              </div>

              {/* Contact Strip */}
              <div className="mt-8 pt-6 border-t border-[#8a2967]/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">

                {/* Left */}
                <div className="flex items-center gap-4">

                  <div className="w-10 h-10 rounded-full bg-[#8a29660e] border border-[#8a2967]/10 flex items-center justify-center text-[#8a2967]">

                    <HiOutlinePhone className="text-xl" />

                  </div>

                  <div>

                    <p className="text-sm text-black/40">
                      Contact Us
                    </p>

                    <h4 className="text-lg font-semibold text-black">

                      +91 98765 43210

                    </h4>
                  </div>
                </div>

                {/* Right */}
                <div className="text-left sm:text-right">

                  <p className="text-sm text-black/40">
                    Manufacturing Location
                  </p>

                  <h4 className="text-lg font-semibold text-black">

                    Ahmedabad, Gujarat

                  </h4>
                </div>
              </div>
            </div>
          </div>

          {/* Huge Background Typography */}
          {/* <div className="absolute bottom-[-25px] left-0 w-full overflow-hidden pointer-events-none">

            <h3 className="text-[90px] sm:text-[140px] lg:text-[220px] font-semibold leading-none text-[#8a2967]/[0.03] whitespace-nowrap">

              BHAGVAT PIPES

            </h3>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default CTASection;
