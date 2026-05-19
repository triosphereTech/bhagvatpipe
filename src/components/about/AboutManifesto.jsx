import React from "react";

const AboutManifesto = () => {
  return (
    <section className="w-full bg-linear-to-b from-white to-[#8a29660e] px-4 py-20 sm:py-24 lg:py-28 overflow-hidden">

      <div className="max-w-5xl mx-auto text-center">

        {/* Small Label */}
        <div className="flex items-center justify-center gap-3">

          <div className="w-10 h-px bg-[#8a2967]/30"></div>

          <p className="text-sm font-medium tracking-wide uppercase text-[#8a2967]">

            Know Our Products

          </p>

          <div className="w-10 h-px bg-[#8a2967]/30"></div>
        </div>

        {/* Heading */}
        <h2 className="mt-8 text-4xl sm:text-5xl md:text-6xl leading-tight tracking-tight font-semibold text-black">

          Engineered For
          <span className="text-[#8a2967]">
            {" "}Long-Term Reliability
          </span>

        </h2>

        {/* Description */}
        <div className="mt-10 space-y-6">

          <p className="text-lg leading-8 text-black/65">

            Bhagvat Pipes manufactures premium CPVC and
            UPVC piping systems engineered for durability,
            reliability, and modern infrastructure applications.

          </p>

          <p className="text-lg leading-8 text-black/65">

            Designed for residential, commercial, and industrial
            environments, our piping solutions combine
            long-term performance, corrosion resistance,
            and installation efficiency while maintaining
            high manufacturing standards.

          </p>

          <p className="text-lg leading-8 text-black/65">

            With a strong focus on product quality and dependable
            infrastructure solutions, Bhagvat Pipes continues
            to deliver piping systems trusted across modern
            construction and industrial projects.

          </p>
        </div>

        {/* Bottom Divider */}
        <div className="mt-16 flex items-center justify-center gap-4">

          <div className="w-20 h-px bg-black/10"></div>

          <div className="w-2 h-2 rounded-full bg-[#8a2967]/30"></div>

          <div className="w-20 h-px bg-black/10"></div>

        </div>
      </div>
    </section>
  );
};

export default AboutManifesto;      