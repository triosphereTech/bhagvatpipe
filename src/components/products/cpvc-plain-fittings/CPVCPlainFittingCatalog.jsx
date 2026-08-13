"use client";

import React, { useState } from "react";
import Image from "next/image";

import {
  HiOutlineArrowUpRight,
  HiOutlineSquares2X2,
  HiOutlineBars3,
} from "react-icons/hi2";

// Individual product image imports
import Img90D from "../../../../public/Images/products/cpvc/plain/90d.png";
import ImgTee from "../../../../public/Images/products/cpvc/plain/Tee.jpeg";
import ImgMTA from "../../../../public/Images/products/cpvc/plain/MTA.jpeg";
import ImgFTA from "../../../../public/Images/products/cpvc/plain/FTA.jpeg";
import ImgCoupler from "../../../../public/Images/products/cpvc/plain/Coupler.jpeg";
import ImgEndCap from "../../../../public/Images/products/cpvc/plain/EndCap.png";
import ImgUnion from "../../../../public/Images/products/cpvc/plain/Union.jpeg";
import Img45D from "../../../../public/Images/products/cpvc/plain/45D.jpeg";
import ImgReducerTee from "../../../../public/Images/products/cpvc/plain/REDUCERTEE.png";
import ImgBallValve from "../../../../public/Images/products/cpvc/plain/BALLVALVE.jpeg";
import ImgReducerCoupler from "../../../../public/Images/products/cpvc/plain/REDUCERCOUPLER.jpeg";
import ImgReducerBush from "../../../../public/Images/products/cpvc/plain/REDUCERBUSH.jpeg";
import Img3In1WallMixer from "../../../../public/Images/products/cpvc/plain/3IN1WALLMIXER.png";
import ImgConcealedValve from "../../../../public/Images/products/cpvc/plain/CONCEALEDVALVE.png";
import ImgCPVCSolvent from "../../../../public/Images/products/cpvc/plain/CPVCSOLVENT.png";
import ImgCrossTee from "../../../../public/Images/products/cpvc/plain/CROSSTEE.png";
import ImgEndPlug from "../../../../public/Images/products/cpvc/plain/ENDPLUG.png";
import ImgNRV from "../../../../public/Images/products/cpvc/plain/NRV.png";
import ImgPipeClamp from "../../../../public/Images/products/cpvc/plain/PIPECLAMP.jpeg";
import ImgReducerElbow from "../../../../public/Images/products/cpvc/plain/REDUCER90ELBOW.png";
import ImgSocketThreadedNipple from "../../../../public/Images/products/cpvc/plain/SOCKETTANKNIPPLE.png";
import ImgStepOverBend from "../../../../public/Images/products/cpvc/plain/STEPOVERBEND.png";

const products = 
[
  {
    "title": "90° Elbow",
    "desc": "Changes pipeline direction by 90° while maintaining smooth water flow.",
    "img": "/Images/products/cpvc/plain/90d.png"
  },
  {
    "title": "Tee",
    "desc": "Three-way fitting for distributing water flow in multiple directions.",
    "img": "/Images/products/cpvc/plain/Tee.jpeg"
  },
  {
    "title": "M.T.A.",
    "desc": "Connects C-PVC pipes with threaded metal or plastic fittings.",
    "img": "/Images/products/cpvc/plain/MTA.jpeg"
  },
  {
    "title": "F.T.A.",
    "desc": "Provides secure connection with male-threaded fittings.",
    "img": "/Images/products/cpvc/plain/FTA.jpeg"
  },
  {
    "title": "Coupler",
    "desc": "Used for joining two C-PVC pipes in a straight pipeline.",
    "img": "/Images/products/cpvc/plain/Coupler.jpeg"
  },
  {
    "title": "End Cap",
    "desc": "Seals the pipe end securely to prevent water leakage.",
    "img": "/Images/products/cpvc/plain/EndCap.png"
  },
  {
    "title": "Union",
    "desc": "Allows easy connection and disconnection without cutting pipes.",
    "img": "/Images/products/cpvc/plain/Union.jpeg"
  },
  {
    "title": "45 Degree Elbow",
    "desc": "Redirects pipeline flow at a 45° angle for smoother transitions.",
    "img": "/Images/products/cpvc/plain/45D.jpeg"
  },
  {
    "title": "Reducer Tee",
    "desc": "Connects pipes of different diameters with three-way flow.",
    "img": "/Images/products/cpvc/plain/REDUCERTEE.png"
  },
  {
    "title": "Ball Valve",
    "desc": "Controls water flow efficiently with reliable shut-off operation.",
    "img": "/Images/products/cpvc/plain/BALLVALVE.jpeg"
  },
  {
    "title": "Reducer Coupler",
    "desc": "Joins different pipe sizes while maintaining smooth flow.",
    "img": "/Images/products/cpvc/plain/REDUCERCOUPLER.jpeg"
  },
  {
    "title": "Reducer Bush",
    "desc": "Ensures seamless transition between varying pipe diameters.",
    "img": "/Images/products/cpvc/plain/REDUCERBUSH.jpeg"
  },
  {
    "title": "3 in 1 Wall Mixer",
    "desc": "Special fitting designed for wall mixer installations with multiple outlet connections.",
    "img": "/Images/products/cpvc/plain/3IN1WALLMIXER.png"
  },
  {
    "title": "Concealed Valve",
    "desc": "Controls water flow with a concealed installation for a clean and modern finish.",
    "img": "/Images/products/cpvc/plain/CONCEALEDVALVE.png"
  },
  {
    "title": "C-PVC Solvent Cement",
    "desc": "High-strength solvent cement for permanent and leak-proof C-PVC pipe joints.",
    "img": "/Images/products/cpvc/plain/CPVCSOLVENT.png"
  },
  {
    "title": "Cross Tee",
    "desc": "Four-way fitting used to distribute water flow in multiple directions.",
    "img": "/Images/products/cpvc/plain/CROSSTEE.png"
  },
  {
    "title": "End Plug",
    "desc": "Closes internally threaded fittings securely to prevent leakage.",
    "img": "/Images/products/cpvc/plain/ENDPLUG.png"
  },
  {
    "title": "Non Return Valve (NRV)",
    "desc": "Prevents reverse water flow, ensuring one-way movement through the pipeline.",
    "img": "/Images/products/cpvc/plain/NRV.png"
  },
  {
    "title": "Pipe Clamp",
    "desc": "Supports and secures C-PVC pipes firmly to walls and ceilings.",
    "img": "/Images/products/cpvc/plain/PIPECLAMP.jpeg"
  },
  {
    "title": "Reducer Elbow",
    "desc": "Combines a 90° bend with pipe size reduction in a single fitting.",
    "img": "/Images/products/cpvc/plain/REDUCER90ELBOW.png"
  },
  {
    "title": "Socket Threaded Nipple",
    "desc": "Provides a secure transition between solvent-weld and threaded pipe connections.",
    "img": "/Images/products/cpvc/plain/SOCKETTANKNIPPLE.png"
  },
  {
    "title": "Step Over Bend",
    "desc": "Allows the pipeline to bypass obstacles while maintaining uninterrupted flow.",
    "img": "/Images/products/cpvc/plain/STEPOVERBEND.png"
  }
];

const CPVCPlainFittingCatalog = () => {
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

export default CPVCPlainFittingCatalog;
