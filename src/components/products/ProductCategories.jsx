import React from "react";
import Image from "next/image";
import {
  HiOutlineArrowRight,
} from "react-icons/hi2";

import CPVCImg from "../../../public/Images/home/cpvc.png";
import UPVCImg from "../../../public/Images/home/upvc.png";
import SWRImg from "../../../public/Images/home/fitting.png";

const products = [
  {
    title: "CPVC Pipes",
    image: CPVCImg,
    desc: "Hot & cold water piping systems engineered for strength, durability, and long-term performance.",
    tags: ["SDR 11", "SDR 13.5", "SCH 40", "SCH 80"],
  },
  {
    title: "CPVC Plain Fittings",
    image: SWRImg,
    desc: "Comprehensive range of elbows, tees, couplers, unions, reducers, and connectors.",
    tags: ["Elbow", "Tee", "Coupler", "Union"],
  },
  {
    title: "CPVC Brass Fittings",
    image: SWRImg,
    desc: "Premium brass-threaded fittings designed for secure and leak-proof plumbing connections.",
    tags: ["Brass MTA", "Brass FTA", "Brass Tee"],
  },
  {
    title: "UPVC Pipes",
    image: UPVCImg,
    desc: "High-performance pressure piping systems for water distribution and infrastructure projects.",
    tags: ["SCH 40", "SCH 80", "ISI Standard"],
  },
  {
    title: "SWR Pipes",
    image: SWRImg,
    desc: "Efficient soil, waste and rainwater drainage pipes for residential and commercial projects.",
    tags: ["75mm", "90mm", "110mm"],
  },
  {
    title: "Ring Fit SWR Fittings",
    image: SWRImg,
    desc: "Leak-resistant drainage fittings engineered with secure ring-fit technology.",
    tags: ["Bend", "Coupler", "Tee", "Vent Cowl"],
  },
  {
    title: "Self Fit SWR Fittings",
    image: SWRImg,
    desc: "Quick-install drainage fittings designed for hassle-free and reliable connections.",
    tags: ["P Trap", "N Trap", "Reducer", "Clamp"],
  },
];

const ProductCategories = () => {
  return (
    <section className="w-full bg-[#8a29660e] px-4 py-20 sm:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-px bg-[#8a2967]/30"></div>

              <p className="text-sm font-medium tracking-wide uppercase text-[#8a2967]">
                Product Categories
              </p>
            </div>

            <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight font-semibold text-black">
              Complete
              <span className="text-[#8a2967]"> Pipe & Fittings</span>
              <br />
              Product Range
            </h2>
          </div>

          <p className="max-w-xl text-base sm:text-lg leading-8 text-black/60">
            Bhagvat Pipes offers a complete ecosystem of CPVC, UPVC and SWR
            piping systems engineered for residential, commercial and industrial
            infrastructure projects.
          </p>
        </div>

        {/* Products */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {products.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-[28px] border border-black/10 bg-white overflow-hidden hover:-translate-y-1 transition-all duration-500 flex flex-col"
            >
              {/* Number */}
              <div className="absolute top-4 left-4 z-20 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md border border-black/10 flex items-center justify-center">
                <p className="text-xs font-semibold text-black">
                  {String(index + 1).padStart(2, "0")}
                </p>
              </div>

              {/* Image */}
              <div className="relative overflow-hidden">
                <div className="aspect-[4/2.8] relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-all duration-700"
                  />
                </div>

                <div className="absolute inset-0 bg-linear-to-t from-white via-white/10 to-transparent" />

                {/* <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-semibold text-white leading-tight">
                    {item.title}
                  </h3>
                </div> */}
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-5">
                 <h3 className="text-xl font-semibold text-black leading-tight">
                    {item.title}
                  </h3>
                <p className="text-sm leading-6 text-black/60 line-clamp-2 mt-3">
                  {item.desc}
                </p>

                {/* Tags */}
                <div className="relative mt-5">
                  <div className="absolute left-0 top-0 z-10 h-full w-8 bg-gradient-to-r from-white to-transparent pointer-events-none" />

                  <div className="absolute right-0 top-0 z-10 h-full w-8 bg-gradient-to-l from-white to-transparent pointer-events-none" />

                  <div className="overflow-x-auto scrollbar-hide">
                    <div className="flex gap-2 min-w-max pr-8 pl-1">
                      {item.tags.map((tag, tagIndex) => (
                        <div
                          key={tagIndex}
                          className="px-3 py-1.5 rounded-full bg-[#8a29660e] border border-black/10 shrink-0"
                        >
                          <p className="text-xs font-medium text-black whitespace-nowrap">
                            {tag}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Button */}
                <div className="mt-auto pt-5">
                  <button className="group/btn flex items-center gap-2 text-sm font-medium text-[#8a2967]">
                    View Products

                    <HiOutlineArrowRight className="text-base group-hover/btn:translate-x-1 transition-all duration-300" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Optional Background Typography */}
        {/* 
        <div className="mt-20 overflow-hidden">
          <h3 className="text-5xl sm:text-7xl lg:text-8xl font-semibold tracking-tight text-black/[0.03] whitespace-nowrap">
            CPVC • UPVC • SWR • FITTINGS
          </h3>
        </div> 
        */}
      </div>
    </section>
  );
};

export default ProductCategories;