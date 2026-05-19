import React from "react";

import {
  HiOutlineSparkles,
  HiOutlineGlobeAsiaAustralia,
  HiOutlineShieldCheck,
  HiOutlineBolt,
  HiOutlineHeart,
  HiOutlineBuildingOffice2,
} from "react-icons/hi2";

const visions = [
  {
    icon: <HiOutlineGlobeAsiaAustralia />,
    title: "Sustainable Water Management",
    desc: "Building responsible and efficient piping solutions for future generations through sustainable infrastructure systems.",
  },

  {
    icon: <HiOutlineShieldCheck />,
    title: "Trusted Quality Leadership",
    desc: "Becoming India's most trusted name in premium CPVC and UPVC pipes with uncompromised quality standards.",
  },

  {
    icon: <HiOutlineBolt />,
    title: "Innovation Driven Growth",
    desc: "Revolutionizing the plumbing industry with advanced technology and high-performance piping solutions.",
  },

  {
    icon: <HiOutlineBuildingOffice2 />,
    title: "Nationwide Infrastructure Impact",
    desc: "Expanding reliable piping systems across homes, offices, factories, and construction projects throughout India.",
  },

  {
    icon: <HiOutlineHeart />,
    title: "People & Value Creation",
    desc: "Creating long-term value through customer satisfaction, employee well-being, and meaningful relationships.",
  },

  {
    icon: <HiOutlineSparkles />,
    title: "Optimism & Progress",
    desc: "Inspiring confidence, happiness, and growth through dependable products and modern infrastructure solutions.",
  },
];

const VisionPage = () => {
  return (
    <section className="w-full bg-white overflow-hidden">

      {/* HERO */}
      <section className="w-full px-4 pt-28 sm:pt-32 lg:pt-36 pb-20 sm:pb-24">

        <div className="max-w-7xl mx-auto">

          <div className="grid lg:grid-cols-[1fr_0.8fr] gap-16 items-end">

            {/* LEFT */}
            <div>

              {/* Label */}
              <div className="flex items-center gap-3">

                <div className="w-10 h-px bg-[#8a2967]/30"></div>

                <p className="text-sm font-medium tracking-wide uppercase text-[#8a2967]">

                  Our Vision

                </p>
              </div>

              {/* Heading */}
              <h1 className="mt-8 text-5xl sm:text-6xl lg:text-8xl leading-[0.95] tracking-[-0.04em] font-semibold text-black">

                Building
                <br />

                India's Future
                <br />

                Through
                <span className="text-[#8a2967]">
                  {" "}Reliable
                </span>

                <br />

                Water Systems

              </h1>
            </div>

            {/* RIGHT */}
            <div>

              <p className="text-xl leading-9 text-black/60">

                Bhagvat Pipe envisions becoming
                India’s most trusted provider of
                innovative CPVC and UPVC piping
                systems, delivering sustainable,
                efficient, and high-performance
                infrastructure solutions for generations.

              </p>

              {/* Small Stats */}
              <div className="mt-12 grid grid-cols-2 gap-6">

                <div className="rounded-[28px] border border-black/10 bg-[#8a29660e] p-6">

                  <p className="text-sm text-black/45">

                    Focus

                  </p>

                  <h3 className="mt-3 text-3xl leading-none font-semibold text-black">

                    Quality
                    <br />

                    Leadership

                  </h3>
                </div>

                <div className="rounded-[28px] border border-black/10 bg-[#8a29660e] p-6">

                  <p className="text-sm text-black/45">

                    Vision

                  </p>

                  <h3 className="mt-3 text-3xl leading-none font-semibold text-black">

                    Sustainable
                    <br />

                    Infrastructure

                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Line */}
          <div className="mt-20 border-t border-black/10 pt-10">

            <p className="max-w-5xl text-2xl sm:text-3xl lg:text-4xl leading-[1.4] tracking-tight text-black/75 font-medium">

              “To maximize product placement and
              expand the range of premium CPVC and
              UPVC solutions while becoming India’s
              No.1 name in quality, innovation, and
              infrastructure excellence.”

            </p>
          </div>
        </div>
      </section>

      {/* VISION GRID */}
      <section className="w-full px-4 pb-20 sm:pb-24 lg:pb-28">

        <div className="max-w-7xl mx-auto">

          {/* Top */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">

            <div>

              <div className="flex items-center gap-3">

                <div className="w-10 h-px bg-[#8a2967]/30"></div>

                <p className="text-sm font-medium tracking-wide uppercase text-[#8a2967]">

                  Core Vision Areas

                </p>
              </div>

              <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight font-semibold text-black">

                Purpose Driven
                <span className="text-[#8a2967]">
                  {" "}Infrastructure
                </span>

              </h2>
            </div>

            <p className="max-w-xl text-lg leading-8 text-black/60">

              Our vision extends beyond manufacturing —
              focusing on innovation, sustainability,
              customer trust, and long-term impact
              across modern infrastructure systems.

            </p>
          </div>

          {/* Grid */}
          <div className="mt-16 grid sm:grid-cols-2 xl:grid-cols-3 gap-5">

            {visions.map((item, index) => (
              <div
                key={index}
                className="group relative rounded-[32px] border border-black/10 bg-white overflow-hidden hover:border-[#8a2967]/20 transition-all duration-500"
              >

                {/* Top */}
                <div className="p-7">

                  {/* Number */}
                  <p className="text-sm text-black/35">

                    {String(index + 1).padStart(2, "0")}

                  </p>

                  {/* Icon */}
                  <div className="mt-8 w-16 h-16 rounded-2xl bg-[#8a29660e] border border-black/10 flex items-center justify-center text-3xl text-[#8a2967]">

                    {item.icon}

                  </div>

                  {/* Title */}
                  <h3 className="mt-8 text-[32px] leading-[1.05] tracking-tight font-semibold text-black">

                    {item.title}

                  </h3>

                  {/* Desc */}
                  <p className="mt-5 text-base leading-7 text-black/60">

                    {item.desc}

                  </p>

                  {/* Bottom */}
                  <div className="mt-8 pt-6 border-t border-black/10 flex items-center justify-between">

                    <p className="text-sm font-medium text-[#8a2967]">

                      Bhagvat Vision

                    </p>

                    <div className="text-5xl text-[#8a2967]/10 font-semibold">

                      0{index + 1}

                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Large Typography */}
          <div className="mt-24 overflow-hidden">

            <h3 className="text-6xl sm:text-8xl lg:text-[170px] leading-none font-semibold tracking-tight text-black/[0.04] whitespace-nowrap">

              INDIA • INFRASTRUCTURE • FUTURE

            </h3>
          </div>
        </div>
      </section>
    </section>
  );
};

export default VisionPage;