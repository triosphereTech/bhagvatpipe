"use client";

import React, { useState } from "react";
import Image from "next/image";

import {
  HiOutlineArrowUpRight,
  HiOutlineSquares2X2,
  HiOutlineBars3,
} from "react-icons/hi2";

// SWR Ring Fit Images
import ImgBend875 from "../../../../public/Images/products/upvc/ringfit/BEND875.png";
import ImgCoupler from "../../../../public/Images/products/upvc/ringfit/COUPLER.png";
import ImgDoorBend875 from "../../../../public/Images/products/upvc/ringfit/DOORBEND875.png";
import ImgDoorSingleTee from "../../../../public/Images/products/upvc/ringfit/DOORSINGLETEE.png";
import ImgDoorSingleY from "../../../../public/Images/products/upvc/ringfit/DOORSINGLEY.png";
import ImgDoubleTee4Way from "../../../../public/Images/products/upvc/ringfit/DOUBLETEE4WAY.png";
import ImgReducer from "../../../../public/Images/products/upvc/ringfit/REDUCER.png";
import ImgReducerDoorTee from "../../../../public/Images/products/upvc/ringfit/REDUCERDOORTEE.png";
import ImgReducerTee from "../../../../public/Images/products/upvc/ringfit/REDUCERTEE.png";
import ImgShoeBend45 from "../../../../public/Images/products/upvc/ringfit/SHOEBEND45.png";
import ImgSingleTee from "../../../../public/Images/products/upvc/ringfit/SINGLETEE.png";
import ImgSingleY from "../../../../public/Images/products/upvc/ringfit/SINGLEY.png";

const products = [
  {
    title: "87.5° Bend",
    desc: "Changes the direction of the drainage pipeline by 87.5° for efficient waste flow.",
    img: ImgBend875,
  },
  {
    title: "Coupler",
    desc: "Connects two SWR pipes securely to create a continuous drainage line.",
    img: ImgCoupler,
  },
  {
    title: "87.5° Door Bend",
    desc: "Provides directional change with an inspection door for easy maintenance and cleaning.",
    img: ImgDoorBend875,
  },
  {
    title: "Door Single Tee",
    desc: "Three-way fitting with an inspection door for simplified drainage maintenance.",
    img: ImgDoorSingleTee,
  },
  {
    title: "Door Single Y",
    desc: "Y-branch fitting with an inspection door for smooth flow and easy access.",
    img: ImgDoorSingleY,
  },
  {
    title: "Double Tee 4 Way",
    desc: "Four-way junction fitting for connecting multiple drainage pipelines.",
    img: ImgDoubleTee4Way,
  },
  {
    title: "Reducer",
    desc: "Joins drainage pipes of different diameters while ensuring smooth water flow.",
    img: ImgReducer,
  },
  {
    title: "Reducer Door Tee",
    desc: "Reducer tee with an inspection door for connecting different pipe sizes and easy cleaning.",
    img: ImgReducerDoorTee,
  },
  {
    title: "Reducer Tee",
    desc: "Three-way fitting used to connect pipes of different diameters.",
    img: ImgReducerTee,
  },
  {
    title: "45° Shoe Bend",
    desc: "Provides a smooth 45° change in drainage direction, commonly used at the base of stacks.",
    img: ImgShoeBend45,
  },
  {
    title: "Single Tee",
    desc: "Creates a three-way branch connection in SWR drainage systems.",
    img: ImgSingleTee,
  },
  {
    title: "Single Y",
    desc: "Y-shaped fitting that provides efficient branch connections with minimal flow resistance.",
    img: ImgSingleY,
  },
];

const SwrRingFitCatalog = () => {
  const [view, setView] = useState("grid");

  return (
    <section className="w-full bg-white px-4 pb-14 sm:pb-16 lg:pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* TOP */}
        <div className="flex flex-col xl:flex-row xl:items-end xl:justify-between gap-8">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-px bg-[#8a2967]/30"></div>

              <p className="text-sm font-medium tracking-wide uppercase text-[#8a2967]">
                Product Catalog
              </p>
            </div>

            <h2 className="mt-6 text-[26px] md:text-[34px] lg:text-[44px] leading-tight tracking-tight font-semibold text-black text-left md:text-center">
              C-PVC Plain
              <span className="text-[#8a2967]"> Fittings Range</span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-6">

  {/* Toggle */}
  <div className="relative flex items-center rounded-full border border-black/10 bg-[#8a29660e] p-1 w-full lg:w-fit overflow-hidden">

    {/* Sliding Pill */}
    <div
      className={`absolute top-1 bottom-1 w-[calc(50%-4px)] lg:w-[92px] rounded-full bg-[#8a2967] transition-all duration-300 ${
        view === "grid"
          ? "left-1"
          : "left-[calc(50%+2px)] lg:left-[93px]"
      }`}
    />

    <button
      onClick={() => setView("grid")}
      className={`relative z-10 cursor-pointer h-11 flex-1 lg:w-[92px] rounded-full flex items-center justify-center gap-2 text-sm font-medium transition-all duration-300 ${
        view === "grid" ? "text-white" : "text-black"
      }`}
    >
      <HiOutlineSquares2X2 className="text-lg" />
      Grid
    </button>

    <button
      onClick={() => setView("list")}
      className={`relative z-10 cursor-pointer h-11 flex-1 lg:w-[92px] rounded-full flex items-center justify-center gap-2 text-sm font-medium transition-all duration-300 ${
        view === "list" ? "text-white" : "text-black"
      }`}
    >
      <HiOutlineBars3 className="text-lg" />
      List
    </button>

  </div>

</div>
        </div>

        {/* GRID VIEW */}
        {view === "grid" && (
          <div className="mt-10 md:mt-12 grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
            {products.map((item, index) => (
              <div
                key={index}
                className="group relative rounded-[30px] border border-black/10 overflow-hidden bg-white hover:border-[#8a2967]/20 transition-all duration-500"
              >
                {/* Image Area */}
                <div className="relative h-[260px] overflow-hidden">
                  <h3 className="absolute inset-0 flex items-center justify-center text-[70px] font-semibold tracking-tight text-[#8a2967]/[0.04] pointer-events-none">
                    CPVC
                  </h3>

                  <div className="relative z-10 w-full h-full p-10">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-contain group-hover:scale-[1.04] transition-all duration-700"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-sm text-black/35">
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  <h3 className="mt-4 text-[24px] leading-tight tracking-tight font-semibold text-black">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-base leading-7 text-black/60">
                    {item.desc}
                  </p>

                  <div className="mt-8 flex items-center justify-between">
                    <div className="h-px flex-1 bg-black/10"></div>

                    <button className="ml-5 w-12 h-12 rounded-full border border-black/10 flex items-center justify-center text-black hover:bg-[#8a2967] hover:text-white hover:border-[#8a2967] transition-all duration-300">
                      <HiOutlineArrowUpRight className="text-lg" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* LIST VIEW */}
        {view === "list" && (
          <div className="mt-10 md:mt-12 flex flex-col gap-4">
            {products.map((item, index) => (
              <div
                key={index}
                className="group rounded-[28px] border border-black/10 bg-white overflow-hidden hover:border-[#8a2967]/20 transition-all duration-500"
              >
                <div className="flex flex-row items-center h-full">
                  {/* Image */}
                  <div className="relative w-[70px] h-[70px] md:w-[140px] md:h-[140px] shrink-0 overflow-hidden">
                    <h3 className="absolute inset-0 flex items-center justify-center text-3xl font-semibold tracking-tight text-[#8a2967]/[0.04] pointer-events-none">
                      CPVC
                    </h3>

                    <div className="relative z-10 w-full h-full p-5">
                      <Image
                        src={item.img}
                        alt={item.title}
                        fill
                        className="object-contain group-hover:scale-[1.04] transition-all duration-700"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 items-center justify-between gap-4 px-6 py-4">
                    <div className="flex items-center gap-6">
                      <div>
                        <div className="flex justify-between items-center">
                          <p className="text-sm text-black/35 shrink-0">
                            {String(index + 1).padStart(2, "0")}
                          </p>

                          <button className="w-11 h-11 rounded-full border border-black/10 flex lg:hidden items-center justify-center text-black hover:bg-[#8a2967] hover:text-white hover:border-[#8a2967] transition-all duration-300 shrink-0">
                            <HiOutlineArrowUpRight className="text-lg" />
                          </button>
                        </div>

                        <h3 className="text-xl leading-tight tracking-tight font-semibold text-black">
                          {item.title}
                        </h3>

                        <p className="mt-1 text-sm lg:text-lg leading-6 text-black/60 max-w-lg">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                    <button className="hidden w-11 h-11 rounded-full border border-black/10 lg:flex items-center justify-center text-black hover:bg-[#8a2967] hover:text-white hover:border-[#8a2967] transition-all duration-300 shrink-0">
                      <HiOutlineArrowUpRight className="text-lg" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default SwrRingFitCatalog;
