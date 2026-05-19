import React from "react";

import {
  HiOutlineBolt,
  HiOutlineShieldCheck,
  HiOutlineFire,
  HiOutlineGlobeAlt,
} from "react-icons/hi2";

import {
  PiPipe,
  PiDrop,
  PiGauge,
} from "react-icons/pi";

const specs = [
  {
    icon: <HiOutlineFire />,
    value: "82°C",
    title: "Heat Resistance",
    desc: "Designed to withstand high-temperature water flow for residential and industrial systems.",
  },
  {
    icon: <PiGauge />,
    value: "SDR 11",
    title: "Pressure Grade",
    desc: "Engineered for superior pressure handling and long-term structural stability.",
  },
  {
    icon: <PiPipe />,
    value: "SCH 80",
    title: "Industrial Strength",
    desc: "Heavy-duty pipe specifications built for demanding infrastructure applications.",
  },
  {
    icon: <HiOutlineShieldCheck />,
    value: "Leak Proof",
    title: "Reliable Performance",
    desc: "Precision manufacturing ensures secure fitting and consistent flow management.",
  },
];

const strips = [
  "Corrosion Resistant",
  "Pressure Tested",
  "Industrial Grade",
  "Heat Stable",
  "Long Lifecycle",
];

const TechnicalSection = () => {
  return (
    <section className="w-full bg-linear-to-b from-white via-[#8a29660e] to-white px-4 py-24 md:py-32 overflow-hidden">

      <div className="max-w-7xl mx-auto">

        {/* TOP */}
        <div className="grid lg:grid-cols-[1fr_0.9fr] gap-16 items-start">

          {/* LEFT */}
          <div>

            {/* Label */}
            <div className="flex items-center gap-3 mb-7">

              <div className="w-10 h-[2px] bg-[#8a2967]/40 rounded-full"></div>

              <p className="uppercase tracking-[0.22em] text-xs sm:text-sm text-[#8a2967]/60 font-medium">

                Technical Excellence

              </p>
            </div>

            {/* Heading */}
            <h2 className="text-[46px] leading-[0.92] sm:text-[68px] md:text-[88px] lg:text-[95px] font-semibold tracking-2 text-[#0e0e0e]">

              Built To
              <br />

              Handle
              <br />

             <span className="text-[#8a2967]">  Pressure,
              <br />

              Heat &
              <br />

              Time</span>

            </h2>

            {/* Description */}
            <p className="mt-10 max-w-xl text-base sm:text-lg leading-relaxed text-black/60">

              Bhagvat piping systems are engineered using
              advanced manufacturing standards to deliver
              exceptional pressure resistance, thermal stability,
              and long-term infrastructure reliability.

            </p>
          </div>

          {/* RIGHT */}
          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-14 lg:pt-10">

            {specs.map((item, index) => (
              <div
                key={index}
                className="group"
              >

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-white border border-[#8a2967]/10 flex items-center justify-center text-[#8a2967] text-3xl transition-all duration-300 group-hover:scale-105">

                  {item.icon}

                </div>

                {/* Value */}
                <h3 className="mt-7 text-[42px] sm:text-[52px] font-semibold tracking-[-0.06em] text-[#8a2967] leading-none">

                  {item.value}

                </h3>

                {/* Title */}
                <h4 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-black">

                  {item.title}

                </h4>

                {/* Desc */}
                <p className="mt-4 text-black/60 leading-relaxed">

                  {item.desc}

                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CENTER TECH LINE */}
        <div className="mt-24 relative">

          {/* Line */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-px bg-[#8a2967]/10"></div>

          {/* Center Badge */}
          <div className="relative z-10 mx-auto w-fit px-8 h-14 rounded-full bg-white border border-[#8a2967]/10 flex items-center gap-3 text-[#8a2967]">

            <PiDrop className="text-2xl" />

            <span className="text-sm font-medium tracking-wide">

              Precision Engineered Piping Systems

            </span>
          </div>
        </div>

        {/* BOTTOM STRIPS */}
        <div className="mt-24 flex flex-wrap justify-center gap-4">

          {strips.map((item, index) => (
            <div
              key={index}
              className="h-14 px-7 rounded-full bg-white border border-[#8a2967]/10 flex items-center gap-3 text-[#8a2967]"
            >

              <HiOutlineBolt className="text-xl" />

              <span className="text-sm sm:text-base font-medium tracking-wide">

                {item}

              </span>
            </div>
          ))}
        </div>

        {/* LARGE TYPOGRAPHY STRIP */}
        <div className="mt-24 text-center overflow-hidden">

          <h3 className="text-[52px] sm:text-[90px] md:text-[130px] lg:text-[80px] font-semibold leading-none tracking-[-0.08em] text-[#8a2967]/8 whitespace-nowrap">

            SDR 11 • SCH 80 • CPVC • UPVC • SWR

          </h3>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSection;