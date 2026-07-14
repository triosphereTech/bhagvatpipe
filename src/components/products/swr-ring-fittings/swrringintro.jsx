import React from "react";
import { HiOutlineArrowRight } from "react-icons/hi2";

const SwrRingIntro = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-28 md:pt-32 pb-16 lg:pb-20">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#8a2967]/5 blur-3xl" />

        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[#8a2967]/5 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-px bg-[#8a2967]/30" />

              <p className="text-sm uppercase tracking-[0.2em] text-[#8a2967] font-medium">
                SWR Ring Fit System
              </p>
            </div>

            <h1 className="mt-6 text-[26px] md:text-[34px] lg:text-[44px] font-semibold tracking-tight text-black leading-tight">
              Ring Fit
              <span className="text-[#8a2967]"> SWR</span>
              <br />
              Fittings
            </h1>

            <p className="mt-6 max-w-xl text-[14px] md:text-[16px] lg:text-[18px] leading-relaxed text-black/60">
              Engineered for efficient soil, waste and rainwater
              drainage applications. Bhagvat Ring Fit SWR
              fittings ensure leak-resistant performance,
              durability and easy installation across residential,
              commercial and industrial projects.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="h-12 px-7 rounded-full bg-[#8a2967] text-white flex items-center gap-2">
                Explore Products

                <HiOutlineArrowRight className="text-lg" />
              </button>

              <button className="h-12 px-7 rounded-full border border-black/10">
                Download Catalogue
              </button>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-4 max-w-xl">
              <div className="rounded-2xl border border-black/10 p-4">
                <h3 className="text-2xl font-semibold text-black">
                  12+
                </h3>

                <p className="text-sm text-black/50 mt-1">
                  Ring Fit Products
                </p>
              </div>

              <div className="rounded-2xl border border-black/10 p-4">
                <h3 className="text-2xl font-semibold text-black">
                  75-110mm
                </h3>

                <p className="text-sm text-black/50 mt-1">
                  Available Sizes
                </p>
              </div>

              <div className="rounded-2xl border border-black/10 p-4">
                <h3 className="text-2xl font-semibold text-black">
                  Leak Safe
                </h3>

                <p className="text-sm text-black/50 mt-1">
                  Ring Seal Joint
                </p>
              </div>
            </div>
          </div>

          {/* Product Showcase */}
          <div className="relative">
            <div className="relative h-[600px]">
              {/* Main Circle */}
              <div className="absolute inset-0 rounded-full border border-black/5 bg-gradient-to-br from-[#8a2967]/5 to-transparent" />

              {/* Center Product */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 rounded-[32px] bg-white border border-black/10 shadow-xl flex items-center justify-center">
                <span className="text-lg font-semibold">
                  Ring Fit Tee
                </span>
              </div>

              {/* Floating Cards */}
              <div className="absolute top-8 left-10 w-36 h-36 rounded-[28px] bg-white border border-black/10 shadow-lg flex items-center justify-center">
                Bend 87.5°
              </div>

              <div className="absolute top-16 right-8 w-40 h-40 rounded-[28px] bg-white border border-black/10 shadow-lg flex items-center justify-center">
                Coupler
              </div>

              <div className="absolute bottom-16 left-8 w-40 h-40 rounded-[28px] bg-white border border-black/10 shadow-lg flex items-center justify-center">
                Reducer
              </div>

              <div className="absolute bottom-10 right-12 w-36 h-36 rounded-[28px] bg-white border border-black/10 shadow-lg flex items-center justify-center">
                Vent Cowl
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SwrRingIntro;
