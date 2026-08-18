"use client";

import React from "react";
import Image from "next/image";

const highlightedStates = [
  {
    state: "Jammu and Kashmir",
    code: "JK",
  },
  {
    state: "Punjab",
    code: "PB",
  },
  {
    state: "Delhi",
    code: "DL",
  },
  {
    state: "Rajasthan",
    code: "RJ",
  },
  {
    state: "Madhya Pradesh",
    code: "MP",
  },
  {
    state: "Chhattisgarh",
    code: "CT",
  },
  {
    state: "Maharashtra",
    code: "MH",
  },
  {
    state: "Telangana",
    code: "TG",
  },
  {
    state: "Karnataka",
    code: "KA",
  },
  {
    state: "Tamil Nadu",
    code: "TN",
  },
  {
    state: "Assam",
    code: "AS",
  },
];

const IndiaPresence = () => {
  return (
    <section className="w-full bg-white px-4 py-14 sm:py-16 lg:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Top */}
        <div className="max-w-4xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-px bg-[#8a2967]/30"></div>

            <p className="text-sm font-medium tracking-wide uppercase text-[#8a2967]">
              PAN India Presence
            </p>
          </div>

          <h2 className="mt-6 text-[26px] md:text-[34px] lg:text-[44px] leading-tight tracking-tight font-semibold text-black text-left md:text-center">
            Supplying Reliable
            <span className="text-[#8a2967]">
              {" "}Pipeline Solutions
            </span>

            <br />

            Across India
          </h2>

          <p className="mt-6 text-[14px] md:text-[16px] lg:text-[18px] leading-relaxed text-black/60 max-w-3xl">
            Bhagvat Pipes continues to support residential,
            commercial, and industrial infrastructure projects
            through a growing distribution and supply network
            across multiple regions of India.
          </p>
        </div>

        {/* Map Container */}
        <div className="mt-12 md:mt-14 rounded-[40px] border border-black/10  p-4 sm:p-8 lg:p-12 overflow-hidden">

          <div className="relative flex items-center justify-center min-h-[400px] sm:min-h-[500px] lg:min-h-[650px]">

    

            {/* Map Image */}
            <div className="relative z-10 w-full max-w-[850px]">
              <Image
                src="/Images/about/BhagvatpipeMap.png"
                alt="Bhagvat Pipes Pan India Presence"
                width={1340}
                height={1340}
                priority
                className="
                  w-full
                  h-auto
                  object-contain
                  drop-shadow-[0_15px_35px_rgba(138,41,103,0.08)]
                "
              />
            </div>
          </div>

          {/* Bottom States */}
          <div className="mt-8 sm:mt-12 flex flex-wrap gap-2 sm:gap-3 justify-center">
            {highlightedStates.map((item) => (
              <div
                key={item.code}
                className="
                  px-4
                  py-2.5
                  sm:px-5
                  sm:py-3
                  rounded-full
                  bg-white
                  border
                  border-black/10
                  shadow-sm
                "
              >
                <p className="text-xs sm:text-sm font-medium text-black">
                  {item.state}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default IndiaPresence;