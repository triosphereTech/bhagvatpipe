import React from "react";
import Image from "next/image";
import { HiOutlineArrowRight } from "react-icons/hi2";

import CPVCImg from "../../../public/Images/home/cpvc.png";
import UPVCImg from "../../../public/Images/home/upvc.png";
import SWRImg from "../../../public/Images/home/fitting.png";

const products = [
  {
    title: "CPVC Range",
    image: CPVCImg,
    desc: "Complete range of C-PVC piping solutions for hot and cold water distribution systems.",
    link: "/products/cpvc",
    categories: [
      {
        title: "C-PVC Plain Fittings",
        link: "/products/cpvc-plain-fittings",
      },
      {
        title: "C-PVC Brass Fittings",
        link: "/products/cpvc-brass-fittings",
      },
    ],
  },
  {
    title: "UPVC",
    image: UPVCImg,
    desc: "Reliable uPVC drainage systems designed for soil, waste and rainwater applications.",
    link: "/products/upvc",
    categories: [
      {
        title: "SWR Ring Fit",
        link: "/products/swr-ring-fittings",
      },
      {
        title: "SWR Self Fit",
        link: "/products/swr-self-fittings",
      },
    ],
  },
];

const ProductCategories = () => {
  return (
    <section className="w-full bg-[#8a29660e] px-4 py-14 sm:py-16 lg:py-20 overflow-hidden">
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

            <h2 className="mt-6 text-[26px] md:text-[34px] lg:text-[44px] leading-tight tracking-tight font-semibold text-black text-left md:text-left">
              Complete
              <span className="text-[#8a2967]"> Pipe & Fittings</span>
              <br />
              Product Range
            </h2>
          </div>

          <p className="max-w-xl text-[14px] md:text-[16px] lg:text-[18px] leading-relaxed text-black/60">
            Bhagvat Pipes offers a complete ecosystem of CPVC, UPVC and SWR
            piping systems engineered for residential, commercial and industrial
            infrastructure projects.
          </p>
        </div>

        {/* Products */}
        <div className="mt-10 md:mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
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
        <div className="h-52 lg:h-56 relative">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover group-hover:scale-105 transition-all duration-700"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-2xl font-semibold text-black">
          {item.title}
        </h3>

        <p className="mt-3 text-base leading-7 text-black/60">
          {item.desc}
        </p>

        {/* Category Links */}
        <div className="mt-6 flex flex-col gap-3">
          {item.categories.map((category, categoryIndex) => (
            <a
              key={categoryIndex}
              href={category.link}
              className="group/item flex items-center justify-between rounded-2xl border border-black/10 bg-[#8a29660a] px-4 py-4 hover:border-[#8a2967] hover:bg-[#8a29660e] transition-all duration-300"
            >
              <div>
                <h4 className="text-[15px] font-semibold text-black">
                  {category.title}
                </h4>
              </div>

              <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center group-hover/item:bg-[#8a2967] group-hover/item:border-[#8a2967] transition-all duration-300">
                <HiOutlineArrowRight className="text-lg text-[#8a2967] group-hover/item:text-white transition-all duration-300" />
              </div>
            </a>
          ))}
        </div>

        {/* Main Button */}
        <div className="mt-auto pt-6">
          <a
            href={item.link}
            className="group/btn inline-flex items-center gap-2 text-sm font-medium text-[#8a2967]"
          >
            Explore Category

            <HiOutlineArrowRight className="text-base group-hover/btn:translate-x-1 transition-all duration-300" />
          </a>
        </div>
      </div>
    </div>
  ))}

  {/* CONTACT CARD */}
  <div className="relative rounded-[28px] overflow-hidden bg-white flex flex-col min-h-full">
    {/* Decorative Glow */}
    <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-white/10 blur-3xl" />
    <div className="absolute -bottom-24 -left-20 w-64 h-64 rounded-full bg-white/5 blur-3xl" />
    {/* Content */}
    <div className="relative z-10 flex flex-col flex-1 px-8 pt-8">
      {/* <span className="uppercase tracking-[0.18em] text-xs font-medium text-[#8a2967]/70">
        Contact Us
      </span> */}

      <h3 className="mt-4 text-[36px] leading-tight font-semibold text-black">
        Can't find
        <br />
        what you need?
      </h3>

      <p className="mt-5 text-black/75 leading-7">
        Get in touch with our team for expert guidance, product
        recommendations and a customized quotation for your project.
      </p>

      <a
        href="/contact"
        className="mt-8 inline-flex w-fit items-center gap-3 rounded-full bg-[#8a2967] px-6 py-3 text-white font-medium hover:gap-4 transition-all duration-300"
      >
        Request a Quote

        <HiOutlineArrowRight className="text-lg" />
      </a>

      {/* Push image to bottom */}
      <div className="flex-1" />

      {/* Bottom Image */}
      <div className="relative w-[calc(100%+64px)] h-[300px] -ml-8 mt-8">
        <Image
          src={SWRImg}
          alt="Bhagvat Pipes"
          fill
          className="object-contain object-bottom"
          priority
        />
      </div>
    </div>
  </div>
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
