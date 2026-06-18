import React from "react";
import Image from "next/image";

import ProductHeroImg from "../../../public/Images/products/allproducts.png";

const ProductHero = () => {
  return (
    <section className="w-full bg-linear-to-b from-white to-[#8a29660e] overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 ">

        {/* Top Strip */}
        {/* <div className="flex flex-wrap items-center justify-between gap-6 border-b border-dotted border-black/10 pb-6">

        
          <div className="flex items-center gap-3">

            <div className="w-10 h-px bg-[#8a2967]/30"></div>

            <p className="text-sm font-medium tracking-wide uppercase text-[#8a2967]">

              Bhagvat Product Range

            </p>
          </div>

          
          <p className="text-sm sm:text-base text-black/50">

            CPVC • UPVC • SWR • Industrial Solutions

          </p>
        </div> */}

        {/* Main Layout */}
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-end pt-12">

          {/* LEFT CONTENT */}
          <div>

            {/* Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl leading-none tracking-wide font-semibold text-black">

              Engineered
              <br />

              Piping
              <br />

              Systems

            </h1>

            {/* Description */}
            <p className="mt-8 text-lg leading-8 text-black/60 max-w-lg">

              Explore Bhagvat’s premium range of
              CPVC, UPVC, and SWR piping systems
              designed for residential, commercial,
              and industrial infrastructure projects.

            </p>

            {/* Bottom Row */}
            <div className="mt-12 flex flex-wrap gap-10">

              <div>

                <h3 className="text-3xl font-semibold text-black">

                  20+

                </h3>

                <p className="mt-2 text-black/50">

                  Product Categories

                </p>
              </div>

              <div>

                <h3 className="text-3xl font-semibold text-black">

                  ISO

                </h3>

                <p className="mt-2 text-black/50">

                  Certified Standards

                </p>
              </div>

              <div>

                <h3 className="text-3xl font-semibold text-black">

                  PAN India

                </h3>

                <p className="mt-2 text-black/50">

                  Supply Network

                </p>
              </div>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative">

            {/* Main Image */}
            <div className="relative overflow-hidden rounded-[40px] border border-black/10 bg-white">

              <div className="aspect-[16/10] relative">

                <Image
                  src={ProductHeroImg}
                  alt="Bhagvat Products"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>

            {/* Floating Bottom Strip */}
            <div className="relative z-10 -mt-8 mx-6 sm:mx-10 bg-white border border-black/10 rounded-[28px] px-6 py-5 shadow-sm">

              <div className="flex flex-wrap items-center justify-between gap-6">

                {/* Left */}
                <div>

                  <p className="text-sm text-black/45">

                    Infrastructure Solutions

                  </p>

                  <h3 className="mt-1 text-xl font-semibold text-black">

                    Reliable Industrial Performance

                  </h3>
                </div>

                {/* Right Tags */}
                <div className="flex flex-wrap gap-3">

                  {[
                    "SDR",
                    "SCH",
                    "CPVC",
                    "UPVC",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="px-4 py-2 rounded-full bg-[#8a29660e] border border-black/10"
                    >

                      <p className="text-sm font-medium text-black">

                        {item}

                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProductHero;