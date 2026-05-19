import React from "react";
import {
  HiOutlineArrowUpRight,
  HiOutlinePhone,
} from "react-icons/hi2";

const CTASection = () => {
  return (
    <section className="w-full bg-linear-to-b from-white to-[#8a29660e] px-4 py-20 md:py-28 overflow-hidden">

      <div className="max-w-7xl mx-auto">

        {/* Main Container */}
        <div className="relative overflow-hidden rounded-[40px] border border-[#8a2967]/10 bg-white">

          {/* Background Glow */}
          <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-[#8a2967]/5 blur-3xl"></div>

          <div className="absolute -bottom-40 -left-32 w-[420px] h-[420px] rounded-full bg-[#8a2967]/5 blur-3xl"></div>

          {/* Grid */}
          <div className="relative z-10 grid lg:grid-cols-[1fr_0.6fr] gap-16 px-7 sm:px-10 lg:px-16 py-16 sm:py-20 lg:py-24">

            {/* LEFT */}
            <div>

              {/* Label */}
              <div className="flex items-center gap-3 mb-7">

                <div className="w-10 h-[2px] bg-[#8a2967]/40 rounded-full"></div>

                <p className="uppercase tracking-[0.22em] text-xs sm:text-sm text-[#8a2967]/60 font-medium">

                  Distribution Partnership

                </p>
              </div>

              {/* Heading */}
              <h2 className="text-[46px] leading-[0.92] sm:text-[68px] md:text-[86px] lg:text-[100px] font-semibold tracking-wide text-black">

                Become A
                <br />

                Bhagvat
                <br />

                Partner

              </h2>

              {/* Description */}
              <p className="mt-10 max-w-2xl text-base sm:text-lg leading-relaxed text-black/60">

                Join Bhagvat’s growing distribution network and
                deliver premium CPVC, UPVC, and SWR piping
                solutions trusted across residential, commercial,
                and industrial infrastructure sectors.

              </p>

              {/* Bottom Tags */}
              <div className="mt-12 flex flex-wrap gap-3">

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

                <p className="uppercase tracking-[0.2em] text-xs text-[#8a2967]/50 mb-5">

                  Start Collaboration

                </p>

                <h3 className="text-3xl sm:text-4xl lg:text-5xl leading-[1] tracking-[-0.05em] font-semibold text-black">

                  Let’s Build
                  Reliable
                  Infrastructure
                  Together

                </h3>
              </div>

              {/* CTA Buttons */}
              <div className="mt-12 flex flex-col gap-4">

                {/* Main Button */}
                <button className="group h-16 px-7 rounded-full bg-[#8a2967] text-white flex items-center justify-between hover:scale-[1.02] transition-all duration-300">

                  <span className="text-sm sm:text-base font-medium tracking-wide">

                    Become Distributor

                  </span>

                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:rotate-45 transition-all duration-300">

                    <HiOutlineArrowUpRight className="text-xl" />

                  </div>
                </button>

                {/* Secondary */}
                <button className="group h-16 px-7 rounded-full border border-[#8a2967]/10 bg-[#8a29660e] text-[#8a2967] flex items-center justify-between hover:bg-[#8a2967] hover:text-white transition-all duration-300">

                  <span className="text-sm sm:text-base font-medium tracking-wide">

                    Download Catalogue

                  </span>

                  <div className="w-10 h-10 rounded-full border border-current/20 flex items-center justify-center">

                    <HiOutlineArrowUpRight className="text-xl" />

                  </div>
                </button>
              </div>

              {/* Contact Strip */}
              <div className="mt-12 pt-8 border-t border-[#8a2967]/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">

                {/* Left */}
                <div className="flex items-center gap-4">

                  <div className="w-14 h-14 rounded-full bg-[#8a29660e] border border-[#8a2967]/10 flex items-center justify-center text-[#8a2967]">

                    <HiOutlinePhone className="text-2xl" />

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

            <h3 className="text-[90px] sm:text-[140px] lg:text-[220px] font-semibold tracking-[-0.08em] leading-none text-[#8a2967]/[0.03] whitespace-nowrap">

              BHAGVAT PIPES

            </h3>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default CTASection;