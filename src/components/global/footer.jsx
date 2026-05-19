import React from "react";

import {
  HiOutlineArrowUpRight,
  HiOutlineMapPin,
  HiOutlinePhone,
  HiOutlineEnvelope,
} from "react-icons/hi2";

const Footer = () => {
  return (
    <footer className="w-full bg-[#8a2967] text-white overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 pt-20 sm:pt-24 lg:pt-28 pb-10">

        {/* TOP */}
        <div className="grid lg:grid-cols-[1.0fr_0.9fr] gap-20">

          {/* LEFT */}
          <div>

            {/* Label */}
            <div className="flex items-center gap-3 mb-7">

              <div className="w-10 h-[2px] bg-white/30 rounded-full"></div>

              <p className="uppercase tracking-[0.22em] text-xs sm:text-sm text-white/50 font-medium">

                Bhagvat Pipes

              </p>
            </div>

            {/* Heading */}
            <h2 className="text-5xl md:text-6xl xl:text-6xl font-semibold tracking-[-0.03em] text-white">

              Building
              <br />

              Reliable
              <br />

              Infrastructure

            </h2>

            {/* Description */}
            <p className="mt-10 max-w-2xl text-base sm:text-lg leading-relaxed text-white/65">

              Premium CPVC, UPVC, and SWR piping systems
              engineered for residential, commercial, and
              industrial infrastructure applications across India.

            </p>

            {/* CTA */}
            <button className="group mt-12 h-16 px-7 rounded-full bg-white text-[#8a2967] flex items-center gap-5 hover:scale-[1.02] transition-all duration-300">

              <span className="text-sm sm:text-base font-medium tracking-wide">

                Download Catalogue

              </span>

              <div className="w-10 h-10 rounded-full bg-[#8a29660e] flex items-center justify-center group-hover:rotate-45 transition-all duration-300">

                <HiOutlineArrowUpRight className="text-xl" />

              </div>
            </button>
          </div>

          {/* RIGHT */}
          <div className="grid sm:grid-cols-2 gap-14 lg:pt-10">

            {/* Products */}
            <div>

              <p className="uppercase tracking-[0.2em] text-xs text-white/40 mb-7">

                Products

              </p>

              <div className="flex flex-col gap-5">

                {[
                  "CPVC Pipes",
                  "UPVC Pipes",
                  "SWR Systems",
                  "Pipe Fittings",
                  "Industrial Solutions",
                ].map((item, index) => (
                  <button
                    key={index}
                    className="w-fit text-left text-lg text-white/75 hover:text-white transition-all duration-300"
                  >

                    {item}

                  </button>
                ))}
              </div>
            </div>

            {/* Company */}
            <div>

              <p className="uppercase tracking-[0.2em] text-xs text-white/40 mb-7">

                Company

              </p>

              <div className="flex flex-col gap-5">

                {[
                  "About Bhagvat",
                  "Applications",
                  "Technical Standards",
                  "Distribution Network",
                  "Contact Us",
                ].map((item, index) => (
                  <button
                    key={index}
                    className="w-fit text-left text-lg text-white/75 hover:text-white transition-all duration-300"
                  >

                    {item}

                  </button>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="sm:col-span-2 pt-6 border-t border-white/10">

              <p className="uppercase tracking-[0.2em] text-xs text-white/40 mb-7">

                Contact Information

              </p>

              <div className="grid sm:grid-cols-2 gap-5">

                {/* Phone */}
                <div className="flex items-start gap-4">

                  <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center shrink-0">

                    <HiOutlinePhone className="text-xl" />

                  </div>

                  <div>

                    <p className="text-sm text-white/40 mb-1">
                      Phone
                    </p>

                    <h4 className="text-base sm:text-lg font-medium text-white">

                      +91 98765 43210

                    </h4>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">

                  <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center shrink-0">

                    <HiOutlineEnvelope className="text-xl" />

                  </div>

                  <div>

                    <p className="text-sm text-white/40 mb-1">
                      Email
                    </p>

                    <h4 className="text-base sm:text-lg font-medium text-white break-all">

                      info@bhagvatpipes.com

                    </h4>
                  </div>
                </div>

                {/* Location */}
              
              </div>
                <div className="flex items-start gap-4 pt-8">

                  <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center shrink-0">

                    <HiOutlineMapPin className="text-xl" />

                  </div>

                  <div>

                    <p className="text-sm text-white/40 mb-1">
                      Location
                    </p>

                    <h4 className="text-base sm:text-lg font-medium text-white">

                      Ahmedabad, Gujarat

                    </h4>
                  </div>
                </div>
            </div>
          </div>
        </div>

        {/* CENTER STRIP */}
        <div className="mt-20 pt-10 border-t border-white/10 flex flex-wrap gap-4">

          {[
            "ISO Certified",
            "ISI Standards",
            "CPVC Systems",
            "UPVC Solutions",
            "SWR Infrastructure",
            "PAN India Supply",
          ].map((item, index) => (
            <div
              key={index}
              className="h-12 px-5 rounded-full border border-white/10 bg-white/5 flex items-center text-sm text-white/75"
            >

              {item}

            </div>
          ))}
        </div>

        {/* BOTTOM */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-5">

          {/* Left */}
          <p className="text-sm text-white/40">

            © 2026 Bhagvat Pipes. All rights reserved.

          </p>

          {/* Right */}
          <div className="flex flex-wrap items-center gap-6">

            {[
              "Privacy Policy",
              "Terms & Conditions",
              "Support",
            ].map((item, index) => (
              <button
                key={index}
                className="text-sm text-white/40 hover:text-white transition-all duration-300"
              >

                {item}

              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Huge Background Text */}
      <div className="relative h-[120px] sm:h-[180px] overflow-hidden pointer-events-none">

        <h3 className="absolute bottom-[-30px] left-1/2 -translate-x-1/2 whitespace-nowrap text-[120px] sm:text-[180px] md:text-[240px] lg:text-[320px] font-semibold leading-none tracking-[-0.08em] text-white/[0.03]">

          BHAGVAT

        </h3>
      </div>
    </footer>
  );
};

export default Footer;