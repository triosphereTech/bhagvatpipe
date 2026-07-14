import React from "react";
import Image from "next/image";

import CPVCPipeImg from "../../../../public/Images/home/cpvc.png";

const specifications = [
  "Leak-Proof Joints",
  "Chemical Resistant",
  "High Strength",
  "Easy Installation",
  "Hot & Cold Water",
  "Long Service Life",
];

const CPVCIntro = () => {
  return (
    <section className="w-full bg-white px-4 py-5 lg:py-2 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Main Layout */}
        <div className="border border-black/10 rounded-[10px] overflow-hidden">

          {/* ================= TOP STRIP ================= */}
           <div className="flex flex-wrap items-center justify-between gap-5 px-6 sm:px-8 lg:px-10 py-5 border-b border-black/10 bg-[#8a29660e]">

            {/* Right */}
           <p className="text-sm sm:text-base text-black/50">

              Strong & Leak-Proof Plumbing Systems

            </p>

          </div>

          {/* MAIN CONTENT */}
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">

            {/* LEFT */}
            <div className="px-6 py-7 sm:px-8 lg:px-10 lg:py-12">

              {/* Heading */}
              <h1 className="text-[26px] md:text-[34px] lg:text-[44px] leading-tight tracking-tight font-semibold text-black max-w-3xl">

                C-PVC
                <br />
                Plain
             
                Fittings

              </h1>

              {/* Mobile Image */}
              <div className="relative lg:hidden flex justify-center items-center mt-10 mb-10">

                <div className="relative w-[240px] sm:w-[300px] md:w-[360px] aspect-square">

                  <Image
                    src={CPVCPipeImg}
                    alt="C-PVC Plain Fittings"
                    fill
                    priority
                    className="object-contain"
                  />

                </div>

              </div>

              {/* Description */}
              <p className="mt-4 text-base sm:text-lg lg:text-xl leading-relaxed text-black/60 max-w-2xl">

                Bhagvat C-PVC Plain Fittings are
                engineered for secure plumbing
                connectivity, smooth water flow,
                and long-lasting durability across
                residential, commercial, and industrial
                water systems.

              </p>

              {/* ================= Specifications ================= */}
              <div className="mt-12 border-t border-black/10 pt-8">

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-8 gap-x-8">

                  {specifications.map((item, index) => (

                    <div key={index}>

                      <p className="text-sm text-black/35">

                        0{index + 1}

                      </p>

                      <h3 className="mt-3 text-base sm:text-lg font-semibold leading-snug text-black">

                        {item}

                      </h3>

                    </div>

                  ))}

                </div>

              </div>

              {/* ================= Bottom Technical Row ================= */}
              <div className="mt-12 grid grid-cols-2 lg:grid-cols-3 gap-8">

                <div>

                  <p className="text-sm text-black/45">

                    Material Type

                  </p>

                  <h3 className="mt-3 text-lg sm:text-xl font-semibold text-black leading-snug">

                    High-Grade C-PVC

                  </h3>

                </div>

                <div>

                  <p className="text-sm text-black/45">

                    Joint Type

                  </p>

                  <h3 className="mt-3 text-lg sm:text-xl font-semibold text-black leading-snug">

                    Solvent Weld

                  </h3>

                </div>

                <div>

                  <p className="text-sm text-black/45">

                    Applications

                  </p>

                  <h3 className="mt-3 text-lg sm:text-xl font-semibold text-black leading-snug">

                    Hot & Cold Water

                  </h3>

                </div>

              </div>

            </div>

            {/* ================= RIGHT ================= */}

                        {/* ================= RIGHT ================= */}
            <div className="hidden lg:flex relative min-h-[620px] xl:min-h-[720px] items-center justify-center overflow-hidden">

              {/* Large Background Text */}
              <h3
                className="
                  absolute
                  select-none
                  pointer-events-none
                  font-semibold
                  tracking-tight
                  whitespace-nowrap
                  text-[#8a2967]/[0.05]
                  text-[120px]
                  xl:text-[160px]
                  2xl:text-[190px]
                "
              >
                FITTINGS
              </h3>

              {/* Product Image */}
              <div
                className="
                  relative
                  z-10
                  w-[320px]
                  md:w-[420px]
                  lg:w-[520px]
                  xl:w-[640px]
                  2xl:w-[720px]
                  aspect-square
                "
              >
                <Image
                  src={CPVCPipeImg}
                  alt="C-PVC Plain Fittings"
                  fill
                  priority
                  className="object-contain"
                />
              </div>

              {/* Floating Technical Box */}
              <div
                className="
                  absolute
                  left-8
                  bottom-8
                  xl:left-10
                  xl:bottom-10
                  bg-white
                  border
                  border-black/10
                  rounded-[24px]
                  xl:rounded-[30px]
                  px-6
                  py-5
                  shadow-lg
                  backdrop-blur-sm
                "
              >
                <p className="text-sm text-black/45">

                  Infrastructure Grade

                </p>

                <h3 className="mt-2 text-xl xl:text-2xl font-semibold text-black leading-tight">

                  Leak-Proof • Durable

                </h3>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CPVCIntro;