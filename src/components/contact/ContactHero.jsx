import React from "react";

import {
  HiOutlinePhone,
  HiOutlineEnvelope,
  HiOutlineMapPin,
} from "react-icons/hi2";

const contactInfo = [
  {
    icon: <HiOutlinePhone />,
    title: "Phone",
    value: "+91 98765 43210",
  },
  {
    icon: <HiOutlineEnvelope />,
    title: "Email",
    value: "info@bhagvatpipes.com",
  },
  {
    icon: <HiOutlineMapPin />,
    title: "Location",
    value: "Ahmedabad, Gujarat",
  },
];

const ContactHero = () => {
  return (
    <section className="w-full bg-white px-4 py-16 sm:py-20 lg:py-24 overflow-hidden">

      <div className="max-w-7xl mx-auto">

        {/* Top Layout */}
        <div className="grid lg:grid-cols-[1fr_0.7fr] gap-16 items-start">

          {/* Left */}
          <div>

            {/* Label */}
            <div className="flex items-center gap-3">

              <div className="w-10 h-px bg-[#8a2967]/30"></div>

              <p className="text-sm font-medium tracking-wide uppercase text-[#8a2967]">

                Contact Bhagvat Pipes

              </p>
            </div>

            {/* Heading */}
            <h1 className="mt-7 text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight font-semibold text-black max-w-4xl">

              Let’s Build
              <span className="text-[#8a2967]">
                {" "}Reliable Infrastructure
              </span>

              <br />

              Together

            </h1>

            {/* Description */}
            <p className="mt-8 text-lg leading-8 text-black/60 max-w-2xl">

              Connect with Bhagvat Pipes for premium
              CPVC, UPVC, and SWR piping solutions
              engineered for residential, commercial,
              and industrial infrastructure projects.

            </p>
          </div>

          {/* Right Info */}
          <div className="lg:pt-4">

            <div className="border border-black/10 rounded-[32px] bg-[#8a29660e] overflow-hidden">

              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-5 p-6 sm:p-7 ${
                    index !== contactInfo.length - 1
                      ? "border-b border-black/8"
                      : ""
                  }`}
                >

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-white border border-black/8 flex items-center justify-center text-[#8a2967] text-2xl shrink-0">

                    {item.icon}

                  </div>

                  {/* Content */}
                  <div>

                    <p className="text-sm text-black/45">

                      {item.title}

                    </p>

                    <h3 className="mt-2 text-xl font-semibold text-black break-all">

                      {item.value}

                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="mt-16 h-px w-full bg-black/8"></div>
      </div>
    </section>
  );
};

export default ContactHero;