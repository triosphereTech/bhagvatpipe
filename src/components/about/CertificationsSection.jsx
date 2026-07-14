import React from "react";

const standards = [
  {
    title: "ISO 9001:2015",
    desc: "Certified manufacturing standards focused on quality, consistency, and industrial reliability.",
  },
  {
    title: "ISI Standards",
    desc: "Products engineered to meet recognized infrastructure and piping quality benchmarks.",
  },
  {
    title: "SDR 11 / SDR 13.5",
    desc: "Pressure-rated piping systems designed for long-term durability and stable performance.",
  },
  {
    title: "SCH 40 / SCH 80",
    desc: "Industrial-grade specifications suitable for demanding residential and commercial applications.",
  },
];

const CertificationsSection = () => {
  return (
    <section className="w-full bg-white px-4 py-5 lg:py-10 overflow-hidden">

      <div className="max-w-6xl mx-auto">

        {/* Top Intro */}
        <div className="max-w-3xl">

          <div className="flex items-center gap-3">

            <div className="w-10 h-px bg-[#8a2967]/30"></div>

            <p className="text-sm font-medium tracking-wide uppercase text-[#8a2967]">

              Certifications & Standards

            </p>
          </div>

          <h2 className="mt-6 text-[26px] md:text-[34px] lg:text-[44px] leading-tight tracking-tight font-semibold text-black text-left md:text-left">

            Certified &
            <span className="text-[#8a2967]">
              {" "}Engineered
            </span>

            {" "}For Reliable Infrastructure

          </h2>
        </div>

        {/* Standards List */}
        <div className="mt-10 md:mt-12 border-t border-black/8">

          {standards.map((item, index) => (
            <div
              key={index}
              className="grid md:grid-cols-[0.8fr_1.2fr] gap-8 py-10 border-b border-black/8"
            >

              {/* Left */}
              <div>

                <p className="text-sm text-[#8a2967]/50 font-medium mb-4">

                  0{index + 1}

                </p>

                <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-black">

                  {item.title}

                </h3>
              </div>

              {/* Right */}
              <div>

                <p className="text-[14px] md:text-[16px] lg:text-[18px] leading-relaxed text-black/60 max-w-2xl">

                  {item.desc}

                </p>
              </div>
            </div>
          ))}
        </div>

      
      </div>
    </section>
  );
};

export default CertificationsSection;
