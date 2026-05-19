
"use client";

import React, { useState } from "react";
import Image from "next/image";

import {
  HiOutlineArrowUpRight,
  HiOutlineSquares2X2,
  HiOutlineBars3,
} from "react-icons/hi2";

import ProductImg from "../../../../public/Images/home/fitting.png";

const products = [
  {
    title: "CPVC 90 Degree Elbow",
    desc: "Changes pipeline direction by 90° while maintaining smooth water flow.",
  },
  {
    title: "CPVC Tee",
    desc: "Three-way fitting for distributing water flow in multiple directions.",
  },
  {
    title: "CPVC M.T.A.",
    desc: "Connects C-PVC pipes with threaded metal or plastic fittings.",
  },
  {
    title: "CPVC F.T.A.",
    desc: "Provides secure connection with male-threaded fittings.",
  },
  {
    title: "CPVC Coupler",
    desc: "Used for joining two C-PVC pipes in a straight pipeline.",
  },
  {
    title: "CPVC End Cap",
    desc: "Seals the pipe end securely to prevent water leakage.",
  },
  {
    title: "CPVC Union",
    desc: "Allows easy connection and disconnection without cutting pipes.",
  },
  {
    title: "CPVC 45 Degree Elbow",
    desc: "Redirects pipeline flow at a 45° angle for smoother transitions.",
  },
  {
    title: "CPVC Reducer Tee",
    desc: "Connects pipes of different diameters with three-way flow.",
  },
  {
    title: "CPVC Ball Valve",
    desc: "Controls water flow efficiently with reliable shut-off operation.",
  },
  {
    title: "CPVC Reducer Coupler",
    desc: "Joins different pipe sizes while maintaining smooth flow.",
  },
  {
    title: "CPVC Reducer Bush",
    desc: "Ensures seamless transition between varying pipe diameters.",
  },
];

const CPVCPlainFittingCatalog = () => {
  const [view, setView] = useState("grid");

  return (
    <section className="w-full bg-white px-4 pb-20 sm:pb-24 overflow-hidden">

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

            <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight font-semibold text-black">

              C-PVC Plain
              <span className="text-[#8a2967]">
                {" "}Fittings Range
              </span>

            </h2>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-6">

            {/* <p className="max-w-xl text-lg leading-8 text-black/60">

              Engineered for reliable plumbing
              performance with strong connectivity,
              smooth water flow, and long-term durability.

            </p> */}

            {/* Toggle */}
            <div className="relative flex items-center rounded-full border border-black/10 bg-[#8a29660e] p-1 w-fit overflow-hidden">

              {/* Sliding Pill */}
              <div
                className={`absolute top-1 bottom-1 w-[92px] rounded-full bg-[#8a2967] transition-all duration-300 ${
                  view === "grid"
                    ? "left-1"
                    : "left-[93px]"
                }`}
              />

              <button
                onClick={() => setView("grid")}
                className={`relative cursor-pointer z-10 h-11 w-[92px] rounded-full flex items-center justify-center gap-2 text-sm font-medium transition-all duration-300 ${
                  view === "grid"
                    ? "text-white"
                    : "text-black"
                }`}
              >

                <HiOutlineSquares2X2 className="text-lg" />

                Grid

              </button>

              <button
                onClick={() => setView("list")}
                className={`relative cursor-pointer z-10 h-11 w-[92px] rounded-full flex items-center justify-center gap-2 text-sm font-medium transition-all duration-300 ${
                  view === "list"
                    ? "text-white"
                    : "text-black"
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

          <div className="mt-16 grid sm:grid-cols-2 xl:grid-cols-3 gap-5">

            {products.map((item, index) => (
              <div
                key={index}
                className="group relative rounded-[30px] border border-black/10 overflow-hidden bg-white hover:border-[#8a2967]/20 transition-all duration-500"
              >

                {/* Image Area */}
                <div className="relative h-[260px]  overflow-hidden">

                  <h3 className="absolute inset-0 flex items-center justify-center text-[70px] font-semibold tracking-tight text-[#8a2967]/[0.04] pointer-events-none">

                    CPVC

                  </h3>

                  <div className="relative z-10 w-full h-full p-10">

                    <Image
                      src={ProductImg}
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

                  <h3 className="mt-4 text-[28px] leading-[1.1] tracking-tight font-semibold text-black">

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

          <div className="mt-16 grid lg:grid-cols-2 gap-5">

            {products.map((item, index) => (
              <div
                key={index}
                className="group rounded-[28px] border border-black/10 bg-white overflow-hidden hover:border-[#8a2967]/20 transition-all duration-500"
              >

                <div className="flex flex-col sm:flex-row h-full">

                  {/* Image */}
                  <div className="relative sm:w-[220px] h-[220px] shrink-0  overflow-hidden">

                    <h3 className="absolute inset-0 flex items-center justify-center text-5xl font-semibold tracking-tight text-[#8a2967]/[0.04] pointer-events-none">

                      CPVC

                    </h3>

                    <div className="relative z-10 w-full h-full p-8">

                      <Image
                        src={ProductImg}
                        alt={item.title}
                        fill
                        className="object-contain group-hover:scale-[1.04] transition-all duration-700"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-6">

                    <div className="flex items-start justify-between gap-5">

                      <div>

                        <p className="text-sm text-black/35">

                          {String(index + 1).padStart(2, "0")}

                        </p>

                        <h3 className="mt-4 text-[30px] leading-[1.1] tracking-tight font-semibold text-black">

                          {item.title}

                        </h3>
                      </div>

                      <button className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center text-black hover:bg-[#8a2967] hover:text-white hover:border-[#8a2967] transition-all duration-300 shrink-0">

                        <HiOutlineArrowUpRight className="text-lg" />

                      </button>
                    </div>

                    <p className="mt-5 text-base leading-7 text-black/60 max-w-lg">

                      {item.desc}

                    </p>

                    <div className="mt-auto pt-8 flex items-center gap-3 flex-wrap">

                      <div className="px-4 py-2 rounded-full border border-black/10 bg-[#8a29660e]">

                        <p className="text-sm font-medium text-black">

                          Industrial Grade

                        </p>
                      </div>

                      <div className="px-4 py-2 rounded-full border border-black/10 bg-[#8a29660e]">

                        <p className="text-sm font-medium text-black">

                          Leak-Proof

                        </p>
                      </div>
                    </div>
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

export default CPVCPlainFittingCatalog;