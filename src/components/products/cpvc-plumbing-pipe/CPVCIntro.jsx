import React from "react";
import Image from "next/image";

import CPVCPipeImg from "../../../../public/Images/products/one/hero.png";

const specifications = [
  "IS 15778",
  "SDR 11",
  "SDR 13.5",
  "SCH 40",
  "SCH 80",
  "Hot & Cold Water",
];

const CPVCIntro = () => {
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

                C-PVC Product Category

              </p>
            </div>

            {/* Right */}
            <p className="text-sm sm:text-base text-black/50">

              Hot & Cold Water Distribution Systems

            </p>
          </div>

          {/* MAIN CONTENT */}
          <div className="grid lg:grid-cols-[1.1fr_0.9fr]">

            {/* LEFT */}
            <div className="px-6 py-10 sm:px-8 lg:px-10 lg:py-12">

              {/* Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-none tracking-tight font-semibold text-black max-w-3xl">

                C-PVC
                <br />

                Plumbing
                <br />

                Pipe

              </h1>

              {/* Description */}
              <p className="mt-8 text-lg leading-8 text-black/60 max-w-2xl">

                Bhagvat C-PVC Plumbing Pipes are
                engineered for residential,
                commercial, and industrial water
                distribution systems with superior
                durability and corrosion resistance.

              </p>

              {/* Specs Strip */}
              <div className="mt-10 border-t border-black/10 pt-8">

                <div className="overflow-x-auto scrollbar-hide">

                  <div className="flex min-w-max gap-8 pr-6">

                    {specifications.map((item, index) => (
                      <div
                        key={index}
                        className="shrink-0"
                      >

                        <p className="text-sm text-black/40">

                          0{index + 1}

                        </p>

                        <h3 className="mt-2 text-lg font-semibold text-black whitespace-nowrap">

                          {item}

                        </h3>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Technical Row */}
              <div className="mt-12 grid sm:grid-cols-3 gap-6">

                <div>

                  <p className="text-sm text-black/45">

                    Material Type

                  </p>

                  <h3 className="mt-2 text-xl font-semibold text-black">

                    Chlorinated PVC

                  </h3>
                </div>

                <div>

                  <p className="text-sm text-black/45">

                    Working Temp

                  </p>

                  <h3 className="mt-2 text-xl font-semibold text-black">

                    Up To 93°C

                  </h3>
                </div>

                <div>

                  <p className="text-sm text-black/45">

                    Product Standard

                  </p>

                  <h3 className="mt-2 text-xl font-semibold text-black">

                    IS 15778

                  </h3>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative min-h-[420px] lg:min-h-full flex items-center justify-center overflow-hidden">

              {/* Large Background Text */}
              <h3 className="absolute text-7xl lg:text-[160px] font-semibold tracking-tight text-[#8a2967]/[0.05] whitespace-nowrap">

                CPVC

              </h3>

              {/* Pipe Image */}
              <div className="relative rounded-2xl z-10 w-[260px] sm:w-[320px] lg:w-[420px] aspect-square">

                <Image
                  src={CPVCPipeImg}
                  alt="C-PVC Plumbing Pipe"
                  fill
                  priority
                  className="object-contain rounded-xl"
                />
              </div>

              {/* Floating Technical Box */}
              <div className="absolute bottom-6 left-6 bg-white border border-black/10 rounded-[28px] px-5 py-4 shadow-sm">

                <p className="text-sm text-black/45">

                  Infrastructure Grade

                </p>

                <h3 className="mt-1 text-xl font-semibold text-black">

                  SDR • SCH • ISI

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