import React from "react";
import Image from "next/image";
import HeroImg from "../../../public/Images/home/Heropipe.png";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="w-full bg-[#8a29660e] pt-10 px-0 pb-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Main Container */}
        <div className="relative rounded-[32px] min-h-[620px] xl:min-h-[680px] overflow-hidden">
          
          {/* Decorative Blur */}
          <div className="absolute -top-32 -left-32 w-[320px] h-[320px] blur-3xl rounded-full"></div>

          {/* Main Grid */}
          <div className="relative z-10 grid lg:grid-cols-2 items-center">
            
            {/* LEFT CONTENT */}
            <div className="flex flex-col justify-center px-7 sm:px-10 md:px-14 lg:px-16 py-10 lg:py-16">

              {/* Small Label */}
              <div className="flex items-center gap-3 mb-7">
                <div className="w-10 h-[2px] bg-[#8a2967] rounded-full"></div>

                <p className="uppercase tracking-[0.2em] text-xs sm:text-sm text-black/55 font-medium">
                  Trusted Pipe Manufacturer
                </p>
              </div>

              {/* Heading */}
              <h1 className="max-w-[620px] font-semibold text-[52px] leading-[0.95] sm:text-[64px] md:text-[74px] xl:text-[82px] tracking-wide text-black">
                Strong Pipes
                <br />
                For Modern
                <br />
                Infrastructure
              </h1>

              {/* Description */}
              <p className="mt-7 max-w-[520px] text-base sm:text-lg leading-relaxed text-black/60">
                Bhagvat Pipe delivers premium quality CPVC, UPVC & SWR
                piping solutions engineered for durability, smooth water
                flow, and long-lasting performance across residential,
                commercial, and industrial projects.
              </p>

              {/* Buttons */}
              <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Link href={"/products"}>
                <button  className="cursor-pointer h-14 px-8 rounded-xl bg-[#8a2967] text-white text-sm sm:text-base font-medium hover:scale-[1.03] transition-all duration-300">
                  Explore Products
                </button></Link>
<Link href={"/contact"}>
                <button  className="cursor-pointer h-14 px-8 rounded-xl border border-black/10 bg-white text-black text-sm sm:text-base font-medium hover:bg-black hover:text-white transition-all duration-300">
                  Contact Us
                </button></Link>

              </div>

              {/* Bottom Stats */}
              <div className="mt-12 flex flex-wrap gap-8 xl:gap-12">

                <div>
                  <h3 className="text-3xl font-bold text-black">
                    15+
                  </h3>

                  <p className="text-sm text-black/50 mt-1">
                    Product Categories
                  </p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-black">
                    1000+
                  </h3>

                  <p className="text-sm text-black/50 mt-1">
                    Trusted Projects
                  </p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-black">
                    24/7
                  </h3>

                  <p className="text-sm text-black/50 mt-1">
                    Customer Support
                  </p>
                </div>

              </div>
            </div>

            {/* RIGHT IMAGE SIDE */}
            <div className="relative flex items-end justify-center lg:justify-end px-4 sm:px-6 lg:px-0 pt-8 lg:pt-0">

              {/* White Circle */}
              <div className="absolute bottom-[-60px] md:bottom-[-40px] xl:bottom-[-20px] w-[340px] h-[340px] sm:w-[480px] sm:h-[480px] md:w-[560px] md:h-[560px] xl:w-[640px] xl:h-[640px] bg-white rounded-full"></div>

              {/* Main Image */}
              <div className="relative z-10 w-[300px] sm:w-[400px] md:w-[500px] xl:w-[680px] h-[380px] md:h-[600px] xl:h-[680px]">
                <Image
                  src={HeroImg}
                  alt="Bhagvat Pipe Products"
                  fill
                  priority
                  className="object-contain object-bottom"
                />
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;