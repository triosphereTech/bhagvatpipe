import React from "react";
import Image from "next/image";

import CPVCBrassImg from "../../../../public/Images/home/cpvc.png";

const specifications = [
  "Brass Reinforced",
  "Corrosion Resistant",
  "High Pressure",
  "Heat Resistant",
  "Leak-Proof Joints",
  "Industrial Grade",
];

const CPVCBrassIntro = () => {
  return (
    <section className="w-full bg-white px-4 py-5 lg:py-2 overflow-hidden">

      <div className="max-w-7xl mx-auto">

        {/* Main Layout */}
        <div className="border border-black/10 rounded-[10px] overflow-hidden">

          {/* TOP STRIP */}
          <div className="flex flex-wrap items-center justify-between gap-5 px-6 sm:px-8 lg:px-10 py-5 border-b border-black/10 bg-[#8a29660e]">



            {/* Right */}
            <p className="text-sm sm:text-base text-black/50">

              High-Strength Plumbing Connections

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

                Brass
                

                Fittings

              </h1>

              <div className="relative lg:hidden min-h-auto lg:min-h-full flex items-center justify-center overflow-hidden ">

              {/* Product Image */}
              <div className="relative z-10 w-[300px] aspect-square">

                <Image
                  src={CPVCBrassImg}
                  alt="C-PVC Brass Fittings"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </div>

              {/* Description */}
              <p className="mt-4 text-[14px] md:text-[16px] lg:text-[18px] leading-relaxed text-black/60 max-w-2xl">

                Bhagvat C-PVC Brass Fittings combine
                the corrosion resistance of C-PVC with
                the strength and durability of brass,
                delivering secure and long-lasting
                plumbing connections for residential,
                commercial, and industrial systems.

              </p>

              {/* Specs Strip */}
              <div className="mt-8 border-t border-black/10 pt-6">

                <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-6">

                  {specifications.map((item, index) => (
                    <div key={index}>

                      <p className="text-sm text-black/40">

                        0{index + 1}

                      </p>

                      <h3 className="mt-2 text-md font-semibold text-black leading-snug">

                        {item}

                      </h3>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Technical Row */}
              <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-6">

                <div>

                  <p className="text-sm text-black/45">

                    Material Type

                  </p>

                  <h3 className="mt-2 text-md font-semibold text-black">

                    C-PVC + Brass

                  </h3>
                </div>

                <div>

                  <p className="text-sm text-black/45">

                    Temperature

                  </p>

                  <h3 className="mt-2 text-md font-semibold text-black">

                    Up To 93°C

                  </h3>
                </div>

                <div>

                  <p className="text-sm text-black/45">

                    Applications

                  </p>

                  <h3 className="mt-2 text-md font-semibold text-black">

                    High Pressure

                  </h3>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="hidden lg:flex relative min-h-[520px] lg:min-h-full items-center justify-center overflow-hidden ">

              {/* Product Image */}
              <div className="relative z-10 w-[420px] sm:w-[520px] lg:w-[680px] aspect-square">

                <Image
                  src={CPVCBrassImg}
                  alt="C-PVC Brass Fittings"
                  fill
                  priority
                  className="object-contain"
                />
              </div>

              {/* Floating Technical Box */}
            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CPVCBrassIntro;
