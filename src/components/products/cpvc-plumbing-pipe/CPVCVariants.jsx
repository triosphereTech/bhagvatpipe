import React from "react";
import Image from "next/image";

import SDR11Img from "../../../../public/Images/home/cpvc.png";
import SDR135Img from "../../../../public/Images/home/cpvc.png";

import {
  HiOutlineArrowRight,
} from "react-icons/hi2";

const variants = [
  {
    title: "C-PVC SDR 11 Pipe",
    image: SDR11Img,
    desc: "Engineered for high-performance hot and cold water distribution systems with superior pressure resistance and long-term durability.",
    tags: [
      "IS 15778",
      "Hot & Cold Water",
      "High Pressure",
      "Industrial Grade",
    ],
    application: "Residential • Commercial • Industrial",
    reverse: false,
  },

  {
    title: "C-PVC SDR 13.5 Pipe",
    image: SDR135Img,
    desc: "Reliable plumbing infrastructure solution designed for corrosion resistance, smooth water flow, and dependable long service life.",
    tags: [
      "Corrosion Resistant",
      "Leak Resistant",
      "SDR 13.5",
      "Long Service Life",
    ],
    application: "Water Distribution • Infrastructure Projects",
    reverse: true,
  },
];

const CPVCVariants = () => {
  return (
    <section className="w-full bg-white px-4 py-20 sm:py-24 overflow-hidden">

      <div className="max-w-7xl mx-auto">

        {/* Top */}
        <div className="max-w-3xl">

          <div className="flex items-center gap-3">

            <div className="w-10 h-px bg-[#8a2967]/30"></div>

            <p className="text-sm font-medium tracking-wide uppercase text-[#8a2967]">

              Available Variants

            </p>
          </div>

          <h2 className="mt-7 text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight font-semibold text-black">

            Industrial Grade
            <span className="text-[#8a2967]">
              {" "}C-PVC Solutions
            </span>

          </h2>
        </div>

        {/* Variant Panels */}
        <div className="mt-20 space-y-10">

          {variants.map((item, index) => (
            <div
              key={index}
              className={`group relative rounded-[15px] border border-black/10 overflow-hidden ${
                item.reverse
                  ? "bg-white"
                  : "bg-white"
              }`}
            >

              <div className={`grid lg:grid-cols-[0.85fr_1.15fr] items-center ${
                item.reverse
                  ? "lg:[&>*:first-child]:order-2"
                  : ""
              }`}>

                {/* IMAGE SIDE */}
                <div className="relative min-h-[380px] sm:min-h-[460px] flex items-center justify-center overflow-hidden">

                  {/* Background */}
                  <div className={`absolute inset-0 ${
                    item.reverse
                      ? "bg-white"
                      : "bg-white"
                  }`} />

                  {/* Background Text */}
                  <h3 className="absolute text-7xl sm:text-8xl lg:text-[140px] font-semibold tracking-tight text-[#8a2967]/[0.05] whitespace-nowrap">

                    SDR

                  </h3>

                  {/* Product Image */}
                  <div className="relative z-10 w-[260px] sm:w-[320px] lg:w-[400px] aspect-square">

                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain group-hover:scale-[1.03] transition-all duration-700"
                    />
                  </div>
                </div>

                {/* CONTENT SIDE */}
                <div className="px-6 py-10 sm:px-8 lg:px-12 lg:py-12">

                  {/* Number */}
                  <p className="text-sm text-[#8a2967]/50 font-medium">

                    0{index + 1}

                  </p>

                  {/* Title */}
                  <h3 className="mt-5 text-4xl sm:text-5xl leading-tight tracking-tight font-semibold text-black max-w-2xl">

                    {item.title}

                  </h3>

                  {/* Description */}
                  <p className="mt-7 text-lg leading-8 text-black/60 max-w-2xl">

                    {item.desc}

                  </p>

                  {/* Application */}
                  <div className="mt-8 border-l-2 border-[#8a2967]/20 pl-5">

                    <p className="text-sm text-black/45">

                      Applications

                    </p>

                    <h4 className="mt-2 text-xl font-semibold text-black leading-relaxed">

                      {item.application}

                    </h4>
                  </div>

                  {/* Tags */}
                  <div className="relative mt-10">

                    {/* Left Fade */}
                    <div className="absolute left-0 top-0 z-10 h-full w-10 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>

                    {/* Right Fade */}
                    <div className="absolute right-0 top-0 z-10 h-full w-10 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>

                    {/* Scroll */}
                    <div className="overflow-x-auto scrollbar-hide">

                      <div className="flex gap-3 min-w-max pr-10 pl-2">

                        {item.tags.map((tag, tagIndex) => (
                          <div
                            key={tagIndex}
                            className="px-5 py-3 rounded-full border border-black/10 bg-white shrink-0"
                          >

                            <p className="text-sm font-medium text-black whitespace-nowrap">

                              {tag}

                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Button */}
                  <button className="group/btn mt-10 flex items-center gap-3 text-[#8a2967] font-medium text-base">

                    View Technical Details

                    <HiOutlineArrowRight className="text-lg group-hover/btn:translate-x-1 transition-all duration-300" />

                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CPVCVariants;