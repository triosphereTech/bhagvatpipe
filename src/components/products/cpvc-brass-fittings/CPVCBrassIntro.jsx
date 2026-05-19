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
    <section className="w-full bg-white px-4 py-10 sm:py-12 lg:py-14 overflow-hidden">

      <div className="max-w-7xl mx-auto">

        {/* Main Layout */}
        <div className="border border-black/10 rounded-[10px] overflow-hidden">

          {/* TOP STRIP */}
          <div className="flex flex-wrap items-center justify-between gap-5 px-6 sm:px-8 lg:px-10 py-5 border-b border-black/10 bg-[#8a29660e]">

            {/* Left */}
            <div className="flex items-center gap-3">

              <div className="w-10 h-px bg-[#8a2967]/30"></div>

              <p className="text-sm font-medium tracking-wide uppercase text-[#8a2967]">

                C-PVC Brass Fitting Category

              </p>
            </div>

            {/* Right */}
            <p className="text-sm sm:text-base text-black/50">

              High-Strength Plumbing Connections

            </p>
          </div>

          {/* MAIN CONTENT */}
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">

            {/* LEFT */}
            <div className="px-6 py-10 sm:px-8 lg:px-10 lg:py-12">

              {/* Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-none tracking-tight font-semibold text-black max-w-3xl">

                C-PVC
                <br />

                Brass
                <br />

                Fittings

              </h1>

              {/* Description */}
              <p className="mt-8 text-lg leading-8 text-black/60 max-w-2xl">

                Bhagvat C-PVC Brass Fittings combine
                the corrosion resistance of C-PVC with
                the strength and durability of brass,
                delivering secure and long-lasting
                plumbing connections for residential,
                commercial, and industrial systems.

              </p>

              {/* Specs Strip */}
              <div className="mt-10 border-t border-black/10 pt-8">

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-8 gap-x-6">

                  {specifications.map((item, index) => (
                    <div key={index}>

                      <p className="text-sm text-black/40">

                        0{index + 1}

                      </p>

                      <h3 className="mt-2 text-lg font-semibold text-black leading-snug">

                        {item}

                      </h3>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Technical Row */}
              <div className="mt-12 grid sm:grid-cols-3 gap-6">

                <div>

                  <p className="text-sm text-black/45">

                    Material Type

                  </p>

                  <h3 className="mt-2 text-xl font-semibold text-black">

                    C-PVC + Brass

                  </h3>
                </div>

                <div>

                  <p className="text-sm text-black/45">

                    Temperature

                  </p>

                  <h3 className="mt-2 text-xl font-semibold text-black">

                    Up To 93°C

                  </h3>
                </div>

                <div>

                  <p className="text-sm text-black/45">

                    Applications

                  </p>

                  <h3 className="mt-2 text-xl font-semibold text-black">

                    High Pressure Systems

                  </h3>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative min-h-[520px] lg:min-h-full flex items-center justify-center overflow-hidden ">

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
              <div className="absolute bottom-6 left-6 bg-white border border-black/10 rounded-[28px] px-5 py-4 shadow-sm">

                <p className="text-sm text-black/45">

                  Infrastructure Grade

                </p>

                <h3 className="mt-1 text-xl font-semibold text-black">

                  Brass Reinforced

                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CPVCBrassIntro;