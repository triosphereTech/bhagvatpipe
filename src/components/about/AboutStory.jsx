import React from "react";

const stats = [
  {
    value: "12+",
    label: "Years Experience",
  },
  {
    value: "ISO",
    label: "Certified Standards",
  },
  {
    value: "PAN India",
    label: "Supply Network",
  },
  {
    value: "CPVC • UPVC • SWR",
    label: "Industrial Solutions",
  },
];

const AboutStory = () => {
  return (
    <section className="w-full bg-white px-4  overflow-hidden">

      <div className="max-w-7xl mx-auto">

        {/* Top Small Label */}
        <div className="flex items-center gap-3">

          <div className="w-10 h-px bg-[#8a2967]/30"></div>

          <p className="text-sm font-medium tracking-wide uppercase text-[#8a2967]">

            Our Foundation

          </p>
        </div>

        {/* Main Story */}
        <div className="mt-8 max-w-5xl">

          <h2 className="text-5xl md:text-6xl xl:text-4xl leading-tight tracking-tight font-semibold text-black">

            Bhagvat Pipes was built with a vision to deliver

            <span className="text-[#8a2967]">
              {" "}reliable piping systems
            </span>

            {" "}engineered for modern infrastructure,
            industrial durability, and long-term trust.

          </h2>

          <p className="mt-8 text-lg leading-8 text-black/60 max-w-3xl">

            From residential plumbing systems to industrial
            infrastructure applications, Bhagvat Pipes focuses
            on manufacturing quality-driven CPVC, UPVC, and
            SWR solutions that meet evolving construction and
            infrastructure demands across India.

          </p>
        </div>

        {/* Divider */}
        <div className="mt-16 h-px w-full bg-black/8"></div>

        {/* Stats Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 lg:gap-10 py-12">

          {stats.map((item, index) => (
            <div
              key={index}
              className="lg:border-r lg:border-black/8 last:border-none lg:pr-10"
            >

              <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-black">

                {item.value}

              </h3>

              <p className="mt-3 text-base text-black/55">

                {item.label}

              </p>
            </div>
          ))}
        </div>

        {/* Bottom Divider */}
        <div className="h-px w-full bg-black/8"></div>
      </div>
    </section>
  );
};

export default AboutStory;