"use client";

import React from "react";

import {
  HiOutlineArrowRight,
} from "react-icons/hi2";

const ContactFormSection = () => {
  return (
    <section className="w-full bh-linear-to-b from-white to-[#8a29660e] px-4 py-20 sm:py-24 lg:py-28 overflow-hidden">

      <div className="max-w-7xl mx-auto">

        {/* Main Layout */}
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14">

          {/* LEFT - FORM */}
          <div className="rounded-[36px] border border-black/10 bg-white p-6 sm:p-8 lg:p-10">

            {/* Top */}
            <div>

              <div className="flex items-center gap-3">

                <div className="w-10 h-px bg-[#8a2967]/30"></div>

                <p className="text-sm font-medium tracking-wide uppercase text-[#8a2967]">

                  Send Inquiry

                </p>
              </div>

              <h2 className="mt-6 text-3xl sm:text-4xl leading-tight tracking-tight font-semibold text-black">

                Let’s Start
                <span className="text-[#8a2967]">
                  {" "}The Conversation
                </span>

              </h2>

              <p className="mt-5 text-base leading-7 text-black/60">

                Connect with Bhagvat Pipes for product
                inquiries, dealership opportunities, or
                infrastructure project requirements.

              </p>
            </div>

            {/* Form */}
            {/* Form */}
<form className="mt-8 space-y-4">

  {/* First + Last Name */}
  <div className="grid sm:grid-cols-2 gap-4">

    {/* First Name */}
    <div>

      <label className="block text-[13px] font-medium text-black mb-2">

        First Name

      </label>

      <input
        type="text"
        placeholder="First name"
        className="w-full h-12 rounded-xl border border-black/10 px-4 text-[15px] text-black placeholder:text-black/30 outline-none focus:border-[#8a2967] transition-all duration-300"
      />
    </div>

    {/* Last Name */}
    <div>

      <label className="block text-[13px] font-medium text-black mb-2">

        Last Name

      </label>

      <input
        type="text"
        placeholder="Last name"
        className="w-full h-12 rounded-xl border border-black/10 px-4 text-[15px] text-black placeholder:text-black/30 outline-none focus:border-[#8a2967] transition-all duration-300"
      />
    </div>
  </div>

  {/* Phone + Email */}
  <div className="grid sm:grid-cols-2 gap-4">

    {/* Phone */}
    <div>

      <label className="block text-[13px] font-medium text-black mb-2">

        Phone Number

      </label>

      <input
        type="text"
        placeholder="Phone number"
        className="w-full h-12 rounded-xl border border-black/10 px-4 text-[15px] text-black placeholder:text-black/30 outline-none focus:border-[#8a2967] transition-all duration-300"
      />
    </div>

    {/* Email */}
    <div>

      <label className="block text-[13px] font-medium text-black mb-2">

        Email Address

      </label>

      <input
        type="email"
        placeholder="Email address"
        className="w-full h-12 rounded-xl border border-black/10 px-4 text-[15px] text-black placeholder:text-black/30 outline-none focus:border-[#8a2967] transition-all duration-300"
      />
    </div>
  </div>

  {/* Company */}
  <div>

    <label className="block text-[13px] font-medium text-black mb-2">

      Company Name

    </label>

    <input
      type="text"
      placeholder="Company name"
      className="w-full h-12 rounded-xl border border-black/10 px-4 text-[15px] text-black placeholder:text-black/30 outline-none focus:border-[#8a2967] transition-all duration-300"
    />
  </div>

  {/* Message */}
  <div>

    <label className="block text-[13px] font-medium text-black mb-2">

      Message

    </label>

    <textarea
      rows={3}
      placeholder="Write your message..."
      className="w-full rounded-xl border border-black/10 px-4 py-3 text-[15px] text-black placeholder:text-black/30 outline-none resize-none focus:border-[#8a2967] transition-all duration-300"
    />
  </div>

  {/* Button */}
  <button
    type="submit"
    className="group mt-1 h-12 px-6 rounded-full bg-[#8a2967] text-white text-sm font-medium flex items-center gap-3 hover:scale-[1.02] transition-all duration-300"
  >

    Send Inquiry

    <HiOutlineArrowRight className="text-base group-hover:translate-x-1 transition-all duration-300" />

  </button>
</form>
          </div>

          {/* RIGHT - MAP */}
          <div className="rounded-[36px] border border-black/10 bg-white overflow-hidden">

            {/* Map */}
            <div className="h-[400px] sm:h-[500px] lg:h-full min-h-[620px]">

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d3901.1458375072257!2d72.689948!3d23.036008!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDAyJzExLjMiTiA3MsKwNDEnMjUuNiJF!5e1!3m2!1sen!2sin!4v1779042178330!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>

            {/* Bottom Address Strip */}
            <div className="border-t border-black/10 px-6 sm:px-8 py-6 bg-[#8a29660e]">

              <p className="text-sm text-black/45">

                Manufacturing & Office Location

              </p>

              <h3 className="mt-2 text-xl font-semibold text-black">

                Ahmedabad, Gujarat, India

              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;