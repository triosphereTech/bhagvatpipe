"use client";

import React from "react";
import Link from "next/link";

import { HiOutlineChevronRight } from "react-icons/hi2";

const PageBanner = ({
  title,
  breadcrumbs = [],
}) => {
  return (
    <section className="w-full bg-linear-to-b from-[#8a29660e] to-white pt-28 pb-10 px-4">

      <div className="max-w-7xl mx-auto">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm">

          {breadcrumbs.map((item, index) => (
            <React.Fragment key={index}>

              {index !== 0 && (
                <HiOutlineChevronRight className="text-black/30 text-xs" />
              )}

              {item.href ? (
                <Link
                  href={item.href}
                  className="text-black/45 hover:text-[#8a2967] transition-all duration-300"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-[#8a2967] font-medium">

                  {item.label}

                </span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Title */}
        <div className="mt-5 flex items-end justify-between gap-6">

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.04em] text-black">

            {title}

          </h1>

          {/* Small Line */}
          <div className="hidden md:block w-20 h-px bg-black/10"></div>
        </div>

        {/* Bottom Border */}
        <div className="mt-8 h-px w-full bg-black/8"></div>
      </div>
    </section>
  );
};

export default PageBanner;