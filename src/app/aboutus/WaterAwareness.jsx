import React from "react";

const waterThoughts = [
  "जीवन में पानी और प्लंबिंग में भागवत बहोत ही जरूरी है।",
  "आज पानी बचाएँ, कल पछताएँ न पाएँ।",
  "हर बूंद अनमोल है, व्यर्थ न गवाएं।",
  "जल है जीवन का आधार, इसका करें सदैव उपयोग सावधानी से।",
  "पानी बचाना हमारा धर्म, निभाएँ सब मिलकर कर्म",
];

const WaterAwareness = () => {
  return (
    <section className="w-full bg-linear-to-b from-[#8a29660e] to-white px-4 py-20 sm:py-24 lg:py-28 overflow-hidden">

      <div className="max-w-6xl mx-auto">

        {/* Top Label */}
        <div className="flex items-center justify-center gap-3">

          <div className="w-10 h-px bg-[#8a2967]/30"></div>

          <p className="text-sm font-medium tracking-wide uppercase text-[#8a2967]">

            Water Awareness

          </p>

          <div className="w-10 h-px bg-[#8a2967]/30"></div>
        </div>

        {/* Main Heading */}
        <div className="mt-8 text-center">

          <h2 className="text-4xl sm:text-5xl md:text-6xl leading-tight tracking-tight font-semibold text-black">

            “भागवत पाइप:
            <span className="text-[#8a2967]">
              {" "}पानी की कहानी,
            </span>

            <br />

            हमारी ज़िम्मेदारी”

          </h2>

          <p className="mt-8 max-w-3xl mx-auto text-lg leading-8 text-black/65">

            जल ही जीवन है — और हर बूंद की सुरक्षा हमारी
            सामूहिक ज़िम्मेदारी। भागवत पाइप केवल पाइपिंग
            समाधान नहीं बनाता, बल्कि बेहतर और ज़िम्मेदार
            जल उपयोग की सोच को भी आगे बढ़ाता है।

          </p>
        </div>

        {/* Thought Lines */}
        <div className="mt-16 border-t border-black/8">

          {waterThoughts.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 py-8 border-b border-black/8"
            >

              {/* Number */}
              <div className="text-[#8a2967]/40 text-lg font-medium">

                0{index + 1}

              </div>

              {/* Text */}
              <p className="flex-1 text-xl sm:text-2xl leading-relaxed text-black font-medium md:px-10">

                {item}

              </p>

              {/* Small Dot */}
              <div className="hidden md:flex w-3 h-3 rounded-full bg-[#8a2967]/20"></div>
            </div>
          ))}
        </div>

        {/* Bottom Statement */}
        <div className="mt-16 text-center">

          <p className="text-sm tracking-[0.25em] uppercase text-black/40">

            BHAGVAT PIPE

          </p>
        </div>
      </div>
    </section>
  );
};

export default WaterAwareness;