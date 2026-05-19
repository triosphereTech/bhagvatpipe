import React from "react";
import Image from "next/image";

import CPVCImg from "../../../public/Images/home/cpvc.png";
import UPVCImg from "../../../public/Images/home/upvc.png";
import SWRImg from "../../../public/Images/home/fitting.png";

import {
  HiOutlineArrowRight,
} from "react-icons/hi2";

const products = [
  {
    title: "CPVC Pipes",
    image: CPVCImg,
    desc: "Engineered for hot and cold water applications with high durability and corrosion resistance.",
    tags: ["SDR 11", "SCH 80", "Industrial Grade"],
  },

  {
    title: "UPVC Pipes",
    image: UPVCImg,
    desc: "Reliable piping systems for pressure handling, water distribution, and infrastructure projects.",
    tags: ["Pressure Systems", "Long Service Life", "ISI Standards"],
  },

  {
    title: "SWR Systems",
    image: SWRImg,
    desc: "Smooth drainage and waste management solutions designed for modern infrastructure environments.",
    tags: ["Leak Resistant", "Drainage Systems", "Easy Installation"],
  },
];

const ProductCategories = () => {
  return (
    <section className="w-full bg-[#8a29660e] px-4 py-20 sm:py-24 lg:py-28 overflow-hidden">

      <div className="max-w-7xl mx-auto">

        {/* Top */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">

          {/* Left */}
          <div className="max-w-3xl">

            <div className="flex items-center gap-3">

              <div className="w-10 h-px bg-[#8a2967]/30"></div>

              <p className="text-sm font-medium tracking-wide uppercase text-[#8a2967]">

                Product Categories

              </p>
            </div>

            <h2 className="mt-7 text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight font-semibold text-black">

              Infrastructure
              <span className="text-[#8a2967]">
                {" "}Focused
              </span>

              <br />

              Product Ecosystem

            </h2>
          </div>

          {/* Right */}
          <p className="max-w-lg text-lg leading-8 text-black/60">

            Bhagvat Pipes manufactures premium piping
            systems engineered for residential,
            commercial, and industrial infrastructure
            applications across India.

          </p>
        </div>

        {/* Product Panels */}
        <div className="mt-20 grid lg:grid-cols-3 gap-6">

          {products.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-[36px] border border-black/10 bg-white overflow-hidden hover:-translate-y-2 transition-all duration-500 flex flex-col"
            >

              {/* Top Number */}
              <div className="absolute top-6 left-6 z-20 w-12 h-12 rounded-full bg-white/90 backdrop-blur-md border border-black/10 flex items-center justify-center">

                <p className="text-sm font-semibold text-black">

                  0{index + 1}

                </p>
              </div>

              {/* Image */}
              <div className="relative overflow-hidden">

                <div className="aspect-[4/4.2] relative">

                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-all duration-700"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>

                {/* Title */}
                <div className="absolute bottom-6 left-6 right-6">

                  <h3 className="text-3xl font-semibold text-white">

                    {item.title}

                  </h3>
                </div>
              </div>

              {/* Bottom Content */}
              <div className="flex flex-col flex-1 p-6 sm:p-7">

                {/* Description */}
                <p className="text-base leading-7 text-black/60">

                  {item.desc}

                </p>

                {/* Scrollable Tags */}
                {/* Scrollable Tags */}
<div className="relative mt-7">

  {/* Left Fade */}
  <div className="absolute left-0 top-0 z-10 h-full w-10 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>

  {/* Right Fade */}
  <div className="absolute right-0 top-0 z-10 h-full w-10 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>

  {/* Scroll Area */}
  <div className="overflow-x-auto scrollbar-hide">

    <div className="flex gap-3 min-w-max pr-10 pl-2">

      {item.tags.map((tag, tagIndex) => (
        <div
          key={tagIndex}
          className="px-4 py-2 rounded-full bg-[#8a29660e] border border-black/10 shrink-0"
        >

          <p className="text-sm font-medium text-black whitespace-nowrap">

            {tag}

          </p>
        </div>
      ))}
    </div>
  </div>
</div>

                {/* Button Bottom */}
                <div className="mt-auto pt-8">

                  <button className="group/btn flex items-center gap-3 text-[#8a2967] font-medium">

                    View Products

                    <HiOutlineArrowRight className="text-lg group-hover/btn:translate-x-1 transition-all duration-300" />

                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Typography */}
        {/* <div className="mt-20 overflow-hidden">

          <h3 className="text-5xl sm:text-7xl lg:text-9xl font-semibold tracking-tight text-black/[0.04] whitespace-nowrap">

            ENGINEERED PIPE SYSTEMS

          </h3>
        </div> */}
      </div>
    </section>
  );
};

export default ProductCategories;