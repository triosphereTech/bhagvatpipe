"use client";

import React, { useState } from "react";

import {
  HiOutlinePlus,
  HiOutlineMinus,
} from "react-icons/hi2";

const faqs = [
  {
    question: "What types of pipes does Bhagvat Pipes manufacture?",
    answer:
      "Bhagvat Pipes manufactures premium CPVC, UPVC, and SWR piping systems engineered for residential, commercial, and industrial infrastructure applications.",
  },
  {
    question: "Are Bhagvat Pipes suitable for industrial applications?",
    answer:
      "Yes. Bhagvat Pipes are designed to support industrial-grade performance with reliable pressure handling, durability, and long-term infrastructure stability.",
  },
  {
    question: "Do Bhagvat Pipes meet industry standards?",
    answer:
      "Bhagvat Pipes are manufactured with quality-focused standards including ISO-certified systems and industrial piping specifications such as SDR and SCH standards.",
  },
  {
    question: "Where are Bhagvat Pipes manufactured?",
    answer:
      "Bhagvat Pipes operates from Ahmedabad, Gujarat, supplying piping solutions for projects across multiple regions in India.",
  },
  {
    question: "How can I contact Bhagvat Pipes for dealership or project inquiries?",
    answer:
      "You can connect with Bhagvat Pipes through the contact section for dealership partnerships, infrastructure project discussions, or product-related inquiries.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white px-4 py-20 sm:py-24 lg:py-28 overflow-hidden">

      <div className="max-w-6xl mx-auto">

        {/* Top */}
        <div className="max-w-3xl">

          <div className="flex items-center gap-3">

            <div className="w-10 h-px bg-[#8a2967]/30"></div>

            <p className="text-sm font-medium tracking-wide uppercase text-[#8a2967]">

              Frequently Asked Questions

            </p>
          </div>

          <h2 className="mt-7 text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight font-semibold text-black">

            Everything You Need
            <br />

            To Know About
            <span className="text-[#8a2967]">
              {" "}Bhagvat Pipes
            </span>

          </h2>
        </div>

        {/* FAQ List */}
        <div className="mt-16 border-t border-black/10">

          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                className="border-b border-black/10"
              >

                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between gap-6 py-7 text-left"
                >

                  <h3 className="text-xl sm:text-2xl font-medium text-black leading-relaxed">

                    {faq.question}

                  </h3>

                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-full border border-black/10 flex items-center justify-center shrink-0 transition-all duration-300 ${
                    isActive
                      ? "bg-[#8a2967] text-white border-[#8a2967]"
                      : "bg-[#8a29660e] text-black"
                  }`}>

                    {isActive ? (
                      <HiOutlineMinus className="text-xl" />
                    ) : (
                      <HiOutlinePlus className="text-xl" />
                    )}

                  </div>
                </button>

                {/* Answer */}
                <div className={`grid transition-all duration-500 ease-in-out ${
                  isActive
                    ? "grid-rows-[1fr] opacity-100 pb-7"
                    : "grid-rows-[0fr] opacity-0"
                }`}>

                  <div className="overflow-hidden">

                    <p className="max-w-4xl text-lg leading-8 text-black/60 pr-10">

                      {faq.answer}

                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Typography */}
        <div className="mt-20 overflow-hidden">

          <h3 className="text-5xl sm:text-7xl lg:text-9xl font-semibold tracking-tight text-black/[0.04] whitespace-nowrap">

            RELIABLE INFRASTRUCTURE

          </h3>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;