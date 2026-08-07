"use client";

import React from "react";

import India from "@react-map/india";

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
        <div className="mt-12 md:mt-14 rounded-[40px] border border-black/10 bg-[#8a29660e] p-6 sm:p-10 lg:p-12 overflow-hidden">

          <div className="relative flex items-center justify-center">

            {/* Background Typography */}
            <h3 className="absolute text-5xl sm:text-7xl lg:text-9xl font-semibold tracking-tight text-[#8a2967]/[0.04] whitespace-nowrap pointer-events-none">

              INDIA NETWORK

            </h3>

            {/* Map */}
            <div className="relative z-10 w-full max-w-[700px]">

              <India
                size={800}
                type="select-multiple"
                color="#ead7e2"
                hoverColor="#b04382"
                selectColor="#8a2967"
                stateData={highlightedStates}
                mapLayout={{
                  backgroundColor: "transparent",
                  hoverTitle: true,
                  noDataColor: "#ead7e2",
                  borderColor: "#ffffff",
                }}
              />

            </div>
          </div>

          {/* Bottom States */}
          <div className="mt-12 flex flex-wrap gap-3 justify-center">

            {highlightedStates.map((item, index) => (
              <div
                key={index}
                className="px-5 py-3 rounded-full bg-white border border-black/10"
              >

                <p className="text-sm font-medium text-black">

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
