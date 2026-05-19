import React from "react";

import {
  HiOutlineShieldCheck,
  HiOutlineWrenchScrewdriver,
  HiOutlineSparkles,
  HiOutlineHeart,
  HiOutlineBuildingOffice2,
  HiOutlineUserGroup,
} from "react-icons/hi2";

const missions = [
  {
    icon: <HiOutlineShieldCheck />,
    title: "Premium Quality Manufacturing",
    desc: "Manufacture durable, reliable, and high-performance CPVC and UPVC pipes & fittings that meet and exceed industry standards.",
  },

  {
    icon: <HiOutlineUserGroup />,
    title: "Customer Satisfaction",
    desc: "Provide excellent customer service, long-term support, and dependable solutions for every infrastructure requirement.",
  },

  {
    icon: <HiOutlineSparkles />,
    title: "Innovation & Sustainability",
    desc: "Lead the CPVC and UPVC industry through continuous innovation, sustainability, safety, and modern technology.",
  },

  {
    icon: <HiOutlineHeart />,
    title: "Employee Well-Being",
    desc: "Create a safe, healthy, and growth-oriented environment that empowers employees and encourages excellence.",
  },

  {
    icon: <HiOutlineBuildingOffice2 />,
    title: "Community Development",
    desc: "Contribute positively toward economic development and infrastructure growth within the community and nation.",
  },

  {
    icon: <HiOutlineWrenchScrewdriver />,
    title: "Empowering Plumbers",
    desc: "Help plumbers succeed through innovative, best-in-class products backed by expertise, quality, and trust.",
  },
];

const MissionPage = () => {
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

                  Our Mission

                </p>
              </div>

              {/* Heading */}
              <h1 className="mt-8 text-5xl sm:text-6xl lg:text-8xl leading-[0.95] tracking-[-0.04em] font-semibold text-black">

                Delivering
                <br />

                Quality
                <br />

                Through
                <span className="text-[#8a2967]">
                  {" "}Innovation
                </span>

                <br />

                & Reliability

              </h1>
            </div>

            {/* RIGHT */}
            <div>

              <p className="text-xl leading-9 text-black/60">

                Bhagvat Pipe is committed to
                manufacturing reliable CPVC and
                UPVC piping systems with exceptional
                quality, innovation, and customer
                satisfaction while contributing to
                sustainable infrastructure growth.

              </p>

              {/* Small Stats */}
              <div className="mt-12 grid grid-cols-2 gap-6">

                <div className="rounded-[28px] border border-black/10 bg-[#8a29660e] p-6">

                  <p className="text-sm text-black/45">

                    Commitment

                  </p>

                  <h3 className="mt-3 text-3xl leading-none font-semibold text-black">

                    Quality
                    <br />

                    Excellence

                  </h3>
                </div>

                <div className="rounded-[28px] border border-black/10 bg-[#8a29660e] p-6">

                  <p className="text-sm text-black/45">

                    Focus

                  </p>

                  <h3 className="mt-3 text-3xl leading-none font-semibold text-black">

                    Innovation
                    <br />

                    & Safety

                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Line */}
          <div className="mt-20 border-t border-black/10 pt-10">

            <p className="max-w-5xl text-2xl sm:text-3xl lg:text-4xl leading-[1.4] tracking-tight text-black/75 font-medium">

              “To provide innovative, durable, and
              industry-leading CPVC & UPVC solutions
              that empower customers, support
              infrastructure growth, and create
              long-term value for communities.”

            </p>
          </div>
        </div>
      </section>

      {/* MISSION GRID */}
      <section className="w-full px-4 pb-20 sm:pb-24 lg:pb-28">

        <div className="max-w-7xl mx-auto">

          {/* Top */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">

            <div>

              <div className="flex items-center gap-3">

                <div className="w-10 h-px bg-[#8a2967]/30"></div>

                <p className="text-sm font-medium tracking-wide uppercase text-[#8a2967]">

                  Mission Priorities

                </p>
              </div>

              <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight font-semibold text-black">

                Purpose Behind
                <span className="text-[#8a2967]">
                  {" "}Every Connection
                </span>

              </h2>
            </div>

            <p className="max-w-xl text-lg leading-8 text-black/60">

              Our mission is built around product
              quality, customer trust, innovation,
              sustainability, and empowering people
              through dependable infrastructure solutions.

            </p>
          </div>

          {/* Grid */}
          <div className="mt-16 grid sm:grid-cols-2 xl:grid-cols-3 gap-5">

            {missions.map((item, index) => (
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

                      Bhagvat Mission

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

              QUALITY • TRUST • INNOVATION

            </h3>
          </div>
        </div>
      </section>
    </section>
  );
};

export default MissionPage; 