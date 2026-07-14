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
        <div className="text-left md:text-center max-w-5xl mx-auto">

        
          <h2 className="text-[26px] md:text-[34px] lg:text-[44px] leading-tight font-semibold tracking-normal text-black ">

            Built For
            <br />

          <span className="text-[#8a2967]">Modern
            Infrastructure </span>  

          </h2>

          <p className="mt-3 max-w-2xl mx-auto text-[14px] md:text-[16px] lg:text-[18px] leading-relaxed text-black/60">

            Bhagvat piping systems are engineered for residential,
            industrial, commercial, and water infrastructure
            applications requiring durability and long-term reliability.

          </p>
        </div>

{/* ROW 1 */}
<div className="mt-8 grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">

  {/* Image */}
  <div
    className="
      relative
      overflow-hidden
      rounded-[24px]
      sm:rounded-[30px]
      lg:rounded-[40px]
      aspect-[4/3]
      lg:aspect-[5/4]
      w-full
    "
  >
    <Image
      src={ResidentialImg}
      alt="Residential"
      fill
      className="object-cover object-center"
      sizes="(max-width: 640px) 100vw,
             (max-width: 1024px) 100vw,
             50vw"
    />
  </div>

  {/* Content */}
  <div>
    <p className="uppercase tracking-[0.2em] text-xs text-[#8a2967]/50 mb-5">
      Residential Systems
    </p>

    <h3 className="text-[20px] md:text-[30px] lg:text-[38px] leading-tight font-normal">
      Smart Plumbing
      <br />
      Solutions For
      <br />
      Modern Living
    </h3>

    <p className="mt-5 md:mt-6 text-[14px] md:text-[16px] lg:text-[18px] leading-relaxed text-black/60 max-w-xl">
      Premium CPVC and UPVC systems designed for homes,
      apartments, and commercial spaces with superior
      durability, pressure handling, and clean water flow.
    </p>
  </div>
</div>

{/* ROW 2 */}
<div className="mt-10 md:mt-16 lg:mt-20 grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">

  {/* Content */}
  <div className="order-2 lg:order-1">
    <p className="uppercase tracking-[0.2em] text-xs text-[#8a2967]/50 mb-5">
      Industrial Applications
    </p>

    <h3 className="text-[20px] md:text-[30px] lg:text-[38px] leading-tight font-normal">
      Engineered For
      <br />
      Heavy-Duty
      <br />
      Performance
    </h3>

    <p className="mt-5 md:mt-6 text-[14px] md:text-[16px] lg:text-[18px] leading-relaxed text-black/60 max-w-xl">
      Industrial-grade pipeline systems built to withstand
      pressure-intensive environments and demanding
      operational infrastructure.
    </p>
  </div>

  {/* Image */}
  <div
    className="
      order-1 lg:order-2
      relative
      overflow-hidden
      rounded-[24px]
      sm:rounded-[30px]
      lg:rounded-[40px]
      aspect-[4/3]
      lg:aspect-[5/4]
      w-full
    "
  >
    <Image
      src={IndustrialImg}
      alt="Industrial"
      fill
      className="object-cover object-center"
      sizes="(max-width: 640px) 100vw,
             (max-width: 1024px) 100vw,
             50vw"
    />
  </div>
</div>

{/* FULL WIDTH STRIP */}
<div
  className="
    mt-5
    md:mt-16
    lg:mt-20
    relative
    overflow-hidden
    rounded-[24px]
    sm:rounded-[30px]
    lg:rounded-[40px]
    aspect-[16/12]
    md:aspect-[16/10]
    lg:aspect-[16/8]
    w-full
  "
>
  {/* Background */}
  <Image
    src={DrainageImg}
    alt="Drainage"
    fill
    className="object-cover object-center"
    sizes="100vw"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

  {/* Content */}
  <div className="relative z-10 h-full flex flex-col justify-end p-5 sm:p-8 md:p-10 lg:p-16">

    <p className="hidden lg:block uppercase tracking-[0.2em] text-xs sm:text-sm text-white/70 mb-4">
      SWR & Drainage Systems
    </p>

    <h3 className="text-[20px] md:text-[30px] lg:text-[38px] leading-tight font-normal text-white">
      Water Management
      <br />
      Solutions Designed
      <br />
      For Modern Cities
    </h3>

    <div className="hidden lg:flex mt-6 md:mt-8 lg:mt-10 flex-wrap gap-3 md:gap-4">
      {[
        "Leak Resistant",
        "Industrial Grade",
        "Long Lifecycle",
        "Pressure Tested",
      ].map((item, index) => (
        <div
          key={index}
          className="h-10 md:h-12 px-4 md:px-5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center text-xs md:text-sm text-white"
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
