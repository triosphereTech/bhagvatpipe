import React from "react";
import Image from "next/image";

import ResidentialImg from "../../../public/Images/home/cpvc.png";
import IndustrialImg from "../../../public/Images/home/cpvc.png";
import DrainageImg from "../../../public/Images/home/cardbg.png";

const ApplicationsSection = () => {
  return (
    <section className="w-full bg-linear-to-b from-[#8a29660e] to-white px-4  overflow-hidden">

      <div className="max-w-7xl mx-auto">

        {/* TOP HEADING */}
        <div className="text-center max-w-5xl mx-auto">

        
          <h2 className="text-5xl md:text-6xl xl:text-6xl font-semibold tracking-normal text-black ">

            Built For
            <br />

          <span className="text-[#8a2967]">Modern
            Infrastructure </span>  

          </h2>

          <p className="mt-8 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed text-black/60">

            Bhagvat piping systems are engineered for residential,
            industrial, commercial, and water infrastructure
            applications requiring durability and long-term reliability.

          </p>
        </div>

        {/* ROW 1 */}
        <div className="mt-24 grid lg:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <div className="relative overflow-hidden rounded-[40px] h-[500px]">

            <Image
              src={ResidentialImg}
              alt="Residential"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div>

            <p className="uppercase tracking-[0.2em] text-xs text-[#8a2967]/50 mb-5">

              Residential Systems

            </p>

            <h3 className="text-3xl md:text-4xl xl:text-5xl leading-[0.95] font-semibold ">

              Smart Plumbing
              Solutions For
              Modern Living

            </h3>

            <p className="mt-7 text-lg leading-relaxed text-black/60 max-w-xl">

              Premium CPVC and UPVC systems designed for homes,
              apartments, and commercial spaces with superior
              durability, pressure handling, and clean water flow.

            </p>
          </div>
        </div>

        {/* ROW 2 */}
        <div className="mt-28 grid lg:grid-cols-2 gap-12 items-center">

          {/* Content */}
          <div className="order-2 lg:order-1">

            <p className="uppercase tracking-[0.2em] text-xs text-[#8a2967]/50 mb-5">

              Industrial Applications

            </p>

            <h3 className="text-3xl md:text-4xl xl:text-5xl leading-[0.95] font-semibold ">

              Engineered For
              Heavy-Duty
              Performance

            </h3>

            <p className="mt-7 text-lg leading-relaxed text-black/60 max-w-xl">

              Industrial-grade pipeline systems built to withstand
              pressure-intensive environments and demanding
              operational infrastructure.

            </p>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 relative overflow-hidden rounded-[40px] h-[500px]">

            <Image
              src={IndustrialImg}
              alt="Industrial"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* FULL WIDTH STRIP */}
        <div className="mt-28 relative rounded-[40px] overflow-hidden h-[650px]">

          {/* Background */}
          <Image
            src={DrainageImg}
            alt="Drainage"
            fill
            className="object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-linear-to-bl from-transparent to-black"></div>

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col justify-end p-8 sm:p-12 lg:p-16">

            <p className="uppercase tracking-[0.2em] text-xs sm:text-sm text-white/60 mb-5">

              SWR & Drainage Systems

            </p>

            <h3 className="text-[24px] md:text-[38px]   font-semibold text-white max-w-5xl">

              Water Management
              Solutions  <br />Designed
              For Modern Cities

            </h3>

            <div className="mt-10 flex flex-wrap gap-4">

              {[
                "Leak Resistant",
                "Industrial Grade",
                "Long Lifecycle",
                "Pressure Tested",
              ].map((item, index) => (
                <div
                  key={index}
                  className="h-12 px-5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center text-sm text-white"
                >

                  {item}

                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationsSection;