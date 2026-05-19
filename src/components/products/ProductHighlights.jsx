import React from "react";

import {
  HiOutlineShieldCheck,
  HiOutlineWrenchScrewdriver,
  HiOutlineSparkles,
  HiOutlineBolt,
  HiOutlineBeaker,
  HiOutlineBuildingOffice2,
  HiOutlineHomeModern,
  HiOutlineGlobeAsiaAustralia,
  HiOutlineArrowRight,
} from "react-icons/hi2";

const advantages = [
  {
    icon: <HiOutlineShieldCheck />,
    title: "Leak Resistant",
    desc: "Engineered for reliable sealing and long-term infrastructure performance.",
  },

  {
    icon: <HiOutlineBeaker />,
    title: "Corrosion Resistant",
    desc: "Built using durable materials designed for modern piping environments.",
  },

  {
    icon: <HiOutlineWrenchScrewdriver />,
    title: "Easy Installation",
    desc: "Simplified installation systems for residential and industrial projects.",
  },

  {
    icon: <HiOutlineBolt />,
    title: "Industrial Strength",
    desc: "Manufactured for high-performance infrastructure and pressure systems.",
  },

  {
    icon: <HiOutlineSparkles />,
    title: "Long Service Life",
    desc: "Designed for durability, stability, and long operational lifespan.",
  },
];

const applications = [
  {
    icon: <HiOutlineHomeModern />,
    title: "Residential",
    desc: "Reliable piping systems for homes and housing infrastructure.",
  },

  {
    icon: <HiOutlineBuildingOffice2 />,
    title: "Commercial",
    desc: "Engineered solutions for commercial and business applications.",
  },

  {
    icon: <HiOutlineGlobeAsiaAustralia />,
    title: "Industrial",
    desc: "Durable infrastructure systems for industrial environments.",
  },
];

const ProductHighlights = () => {
  return (
    <section className="w-full bg-white overflow-hidden">

      {/* ================= ADVANTAGES ================= */}
      <div className="px-4 py-20 sm:py-24 border-t border-black/8">

        <div className="max-w-7xl mx-auto">

          {/* Top */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">

            <div className="max-w-3xl">

              <div className="flex items-center gap-3">

                <div className="w-10 h-px bg-[#8a2967]/30"></div>

                <p className="text-sm font-medium tracking-wide uppercase text-[#8a2967]">

                  Technical Advantages

                </p>
              </div>

              <h2 className="mt-7 text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight font-semibold text-black">

                Built For
                <span className="text-[#8a2967]">
                  {" "}Performance
                </span>

                {" "}And Reliability

              </h2>
            </div>

            <p className="max-w-lg text-lg leading-8 text-black/60">

              Bhagvat Pipes are engineered with
              durability-focused materials and
              infrastructure-grade manufacturing
              standards for long-term performance.

            </p>
          </div>

          {/* Horizontal Advantages */}
          <div className="relative mt-20 overflow-hidden">

          {/* Left Fade */}
          <div className="absolute left-0 top-0 z-20 h-full w-24 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>

          {/* Right Fade */}
          <div className="absolute right-0 top-0 z-20 h-full w-24 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>

          {/* Marquee */}
          <div className="flex w-max animate-marquee gap-6">

            {[...advantages, ...advantages].map((item, index) => (
              <div
                key={index}
                className="relative w-[320px] rounded-[36px] border border-black/10 bg-[#8a29660e] p-7 overflow-hidden shrink-0"
              >

                {/* Top Icon */}
                <div className="w-16 h-16 rounded-2xl bg-white border border-black/10 flex items-center justify-center text-3xl text-[#8a2967]">

                  {item.icon}

                </div>

                {/* Content */}
                <h3 className="mt-4 text-2xl font-semibold text-black">

                  {item.title}

                </h3>

                <p className="mt-4 text-base leading-7 text-black/60 max-w-[250px]">

                  {item.desc}

                </p>

                {/* Bottom Decorative Icon */}
                {/* <div className="absolute -bottom-5 -right-5 text-[150px] opacity-5 hover:opacity-50 text-[#8a2967]/5">

                  {item.icon}

                </div> */}
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>

      {/* ================= APPLICATIONS ================= */}
      <div className="px-4 py-20 sm:py-24 bg-[#8a29660e]">

        <div className="max-w-7xl mx-auto">

          {/* Top */}
          <div className="text-center max-w-4xl mx-auto">

            <div className="flex items-center justify-center gap-3">

              <div className="w-10 h-px bg-[#8a2967]/30"></div>

              <p className="text-sm font-medium tracking-wide uppercase text-[#8a2967]">

                Product Applications

              </p>

              <div className="w-10 h-px bg-[#8a2967]/30"></div>
            </div>

            <h2 className="mt-7 text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight font-semibold text-black">

              Infrastructure Solutions
              <br />

              Across
              <span className="text-[#8a2967]">
                {" "}Multiple Sectors
              </span>

            </h2>
          </div>

          {/* Application Grid */}
          <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {applications.map((item, index) => (
              <div
                key={index}
                className="group rounded-[36px] border border-black/10 bg-white p-8 hover:-translate-y-2 transition-all duration-500"
              >

                {/* Icon */}
                <div className="w-18 h-18 rounded-3xl bg-[#8a29660e] border border-black/10 flex items-center justify-center text-4xl text-[#8a2967]">

                  {item.icon}

                </div>

                {/* Content */}
                <h3 className="mt-8 text-3xl font-semibold text-black">

                  {item.title}

                </h3>

                <p className="mt-5 text-base leading-7 text-black/60">

                  {item.desc}

                </p>

                {/* Arrow */}
                <button className="group/btn mt-8 flex items-center gap-3 text-[#8a2967] font-medium">

                  Explore Applications

                  <HiOutlineArrowRight className="text-lg group-hover/btn:translate-x-1 transition-all duration-300" />

                </button>
              </div>
            ))}
          </div>

          {/* Bottom Typography */}
          <div className="mt-20 overflow-hidden">

            <h3 className="text-5xl sm:text-7xl lg:text-7xl font-semibold tracking-tight text-black/[0.04] whitespace-nowrap text-center">

              MODERN INFRASTRUCTURE

            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHighlights;