"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const ease = [0.22, 1, 0.36, 1];

const reveal = (delay = 0) => ({
  initial: { y: "105%" },
  animate: { y: 0 },
  transition: { duration: 1.1, delay, ease },
});

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease },
});

// Design C — clean, minimal, type-led
const Hero3 = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) video.play();
    else video.pause();
  };

  return (
    <section className="relative w-full pt-[100px] bg-black">
      <div className="relative w-full h-[calc(100svh-100px)] min-h-[600px] overflow-hidden">
        {/* Video */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          src="/videos/Bhagwat_Pipe.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />

        {/* Single, quiet overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/25 to-black/20" />

        {/* Top-right minimal controls */}
        <motion.div
          {...fade(1.2)}
          className="absolute top-6 right-6 md:top-8 md:right-10 z-20 flex items-center gap-5 text-[11px] uppercase tracking-[0.25em] text-white/70"
        >
          <button
            type="button"
            onClick={togglePlay}
            className="cursor-pointer hover:text-white transition-colors"
          >
            {isPlaying ? "Pause" : "Play"}
          </button>
          <span className="w-px h-3 bg-white/30" />
          <button
            type="button"
            onClick={toggleMute}
            className="cursor-pointer hover:text-white transition-colors flex items-center gap-2"
          >
            <span
              className={`inline-block w-1.5 h-1.5 rounded-full ${
                isMuted ? "bg-white/40" : "bg-[#e08bc2]"
              }`}
            />
            {isMuted ? "Sound Off" : "Sound On"}
          </button>
        </motion.div>

        {/* Content */}
        <div className="absolute inset-x-0 bottom-0 z-10 px-6 md:px-10 lg:px-14 pb-8 md:pb-12">
          <div className="max-w-[1400px] mx-auto">
            {/* Eyebrow */}
            <motion.p
              {...fade(0.2)}
              className="mb-5 text-[11px] uppercase tracking-[0.3em] text-white/60"
            >
              Bhagvat Pipe — CPVC · UPVC · SWR
            </motion.p>

            {/* Headline */}
            <h1 className="text-white font-semibold tracking-[-0.03em] leading-[0.95] text-[52px] sm:text-[80px] md:text-[110px] lg:text-[140px]">
              <span className="block overflow-hidden pb-1">
                <motion.span className="block" {...reveal(0.3)}>
                  Strong Pipes.
                </motion.span>
              </span>
              <span className="block overflow-hidden pb-2">
                <motion.span
                  className="block font-light italic text-white/90"
                  {...reveal(0.45)}
                >
                  Lasting Flow<span className="text-[#e08bc2] not-italic">.</span>
                </motion.span>
              </span>
            </h1>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.4, delay: 0.8, ease }}
              className="mt-8 md:mt-10 h-px w-full bg-white/25 origin-left"
            />

            {/* Bottom row */}
            <div className="mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <motion.p
                {...fade(1)}
                className="max-w-[440px] text-[14px] md:text-[15px] leading-relaxed text-white/65"
              >
                Premium piping engineered for durability and smooth water flow —
                for homes, buildings and industry.
              </motion.p>

              <motion.div {...fade(1.1)} className="flex items-center gap-8">
                <Link
                  href="/contact"
                  className="hidden sm:inline text-sm text-white/70 hover:text-white underline-offset-4 hover:underline transition-colors"
                >
                  Contact Us
                </Link>
                <Link
                  href="/products"
                  className="group inline-flex items-center gap-4 text-white"
                >
                  <span className="text-sm md:text-base font-medium">
                    Explore Products
                  </span>
                  <span className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-white text-black group-hover:bg-[#8a2967] group-hover:text-white transition-colors duration-300">
                    <FaArrowRight
                      size={14}
                      className="group-hover:translate-x-0.5 transition-transform duration-300"
                    />
                  </span>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero3;
