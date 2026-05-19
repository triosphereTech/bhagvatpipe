import React from "react";
import Image from "next/image";

import ProductCTAImg from "../../../public/Images/home/fitting.png";

import {
  HiOutlineArrowRight,
  HiOutlineArrowDownTray,
} from "react-icons/hi2";

const ProductCTA = () => {
  return (
    <section className="w-full bg-white px-4 pb-20 sm:pb-24 lg:pb-28 overflow-hidden">

      <div className="max-w-7xl mx-auto">

        {/* Main Container */}
        <div className="relative rounded-[40px] border border-black/10 bg-[#8a29660e] overflow-hidden">

          {/* Background Typography */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">

            <h3 className="text-5xl sm:text-7xl lg:text-[170px] font-semibold tracking-tight text-[#8a2967]/[0.04] whitespace-nowrap">

              CPVC • UPVC • SWR

            </h3>
          </div>

          {/* Content */}
          <div className="relative z-10 grid lg:grid-cols-[1fr_0.9fr] gap-10 items-center px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-20">

            {/* LEFT */}
            <div>

              {/* Label */}
              <div className="flex items-center gap-3">

                <div className="w-10 h-px bg-[#8a2967]/30"></div>

                <p className="text-sm font-medium tracking-wide uppercase text-[#8a2967]">

                  Product Inquiry

                </p>
              </div>

              {/* Heading */}
              <h2 className="mt-8 text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight font-semibold text-black max-w-4xl">

                Reliable Piping Systems
                <br />

                For Every
                <span className="text-[#8a2967]">
                  {" "}Infrastructure Need
                </span>

              </h2>

              {/* Description */}
              <p className="mt-8 text-lg leading-8 text-black/60 max-w-2xl">

                Explore Bhagvat’s premium piping
                solutions engineered for residential,
                commercial, and industrial infrastructure
                applications across India.

              </p>

              {/* Buttons */}
              <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4">

                {/* Contact */}
                <button className="group h-14 px-7 rounded-full bg-[#8a2967] text-white text-base font-medium flex items-center gap-3 hover:scale-[1.02] transition-all duration-300">

                  Contact Sales

                  <HiOutlineArrowRight className="text-lg group-hover:translate-x-1 transition-all duration-300" />

                </button>

                {/* Download */}
                <button className="group h-14 px-7 rounded-full border border-black/10 bg-white text-black text-base font-medium flex items-center gap-3 hover:bg-black hover:text-white transition-all duration-300">

                  Download Brochure

                  <HiOutlineArrowDownTray className="text-lg" />

                </button>
              </div>
            </div>

            {/* RIGHT VISUAL */}
            <div className="relative flex justify-center lg:justify-end">

              {/* Circle Background */}
              <div className="absolute w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] bg-white rounded-full"></div>

              {/* Product Image */}
              <div className="relative z-10 w-[300px] sm:w-[420px] lg:w-[500px] aspect-square">

                <Image
                  src={ProductCTAImg}
                  alt="Bhagvat Products"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Floating Card */}
              <div className="absolute bottom-6 left-0 sm:left-10 bg-white border border-black/10 rounded-[28px] px-5 py-4 shadow-sm">

                <p className="text-sm text-black/45">

                  Infrastructure Solutions

                </p>

                <h3 className="mt-1 text-xl font-semibold text-black">

                  Engineered For Reliability

                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCTA;