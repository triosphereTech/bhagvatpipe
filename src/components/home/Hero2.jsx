"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaArrowRight,
  FaPause,
  FaPlay,
  FaVolumeMute,
  FaVolumeUp,
} from "react-icons/fa";

const rotatingWords = ["Infrastructure", "Homes", "Industries", "Generations"];

const stats = [
  { value: "15+", label: "Product Categories" },
  { value: "200+", label: "Trusted Projects" },
  { value: "24/7", label: "Customer Support" },
];

const marqueeItems = [
  "CPVC Pipes",
  "UPVC Pipes",
  "SWR Ring Fit",
  "SWR Self Fit",
  "CPVC Plain Fittings",
  "CPVC Brass Fittings",
  "SDR 11 · SDR 13.5",
  "SCH 40 · SCH 80",
];

const ease = [0.22, 1, 0.36, 1];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease },
});

const controlBtn =
  "w-9 h-9 flex items-center justify-center rounded-full border border-white/25 bg-white/10 hover:bg-white hover:text-[#8a2967] text-white backdrop-blur-md transition-colors duration-300 cursor-pointer";

// Design B
const Hero2 = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setWordIndex((i) => (i + 1) % rotatingWords.length),
      3000
    );
    return () => clearInterval(id);
  }, []);

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
      <div className="relative w-full h-[calc(100svh-100px)] min-h-[620px] max-h-[920px] overflow-hidden">
        {/* Background Video */}
        <motion.video
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
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.4, ease }}
        />

        {/* Light overlays — just enough for text legibility */}
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.25)_0%,transparent_45%,rgba(0,0,0,0.35)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-2/5 bg-linear-to-t from-black/60 to-transparent" />

        {/* Subtle brand tint */}
        <div
          aria-hidden
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] md:w-[680px] md:h-[680px] rounded-full bg-[#8a2967] opacity-[0.12] blur-[140px]"
        />

        {/* Center Content */}
        <div className="relative z-10 h-full max-w-7xl mx-auto flex flex-col items-center justify-center text-center px-5 pb-20 [text-shadow:0_2px_24px_rgba(0,0,0,0.35)]">
          {/* Eyebrow */}
          <motion.div
            {...fadeUp(0.2)}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-8 h-px bg-white/60" />
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.3em] text-white/85 font-medium">
              Trusted Pipe Manufacturer
            </span>
            <span className="w-8 h-px bg-white/60" />
          </motion.div>

          {/* Headline */}
          <h1 className="w-full text-white tracking-tight leading-[1.1] text-[36px] sm:text-[48px] md:text-[60px] lg:text-[72px]">
            <span className="block overflow-hidden">
              <motion.span
                className="block font-light"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.35, ease }}
              >
                Built Strong for
              </motion.span>
            </span>

            <span className="relative block w-full h-[1.3em] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={rotatingWords[wordIndex]}
                  className="absolute inset-x-0 top-0 block whitespace-nowrap font-semibold text-[#f3c6e3]"
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{ duration: 0.6, ease }}
                >
                  {rotatingWords[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>

          {/* Sub text */}
          <motion.p
            {...fadeUp(0.7)}
            className="mt-5 max-w-[540px] text-[14px] md:text-[16px] leading-relaxed text-white/85"
          >
            Premium CPVC, UPVC &amp; SWR piping solutions engineered for
            durability, smooth water flow and long-lasting performance.
          </motion.p>

          {/* CTAs */}
          <motion.div
            {...fadeUp(0.85)}
            className="mt-8 flex flex-wrap items-center justify-center gap-3 [text-shadow:none]"
          >
            <Link
              href="/products"
              className="group inline-flex items-center gap-3 h-12 pl-6 pr-2 rounded-full bg-[#8a2967] text-white text-sm font-medium shadow-[0_8px_30px_rgba(138,41,103,0.45)] hover:bg-[#7a225a] transition-colors duration-300"
            >
              Explore Products
              <span className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-[#8a2967]">
                <FaArrowRight
                  size={12}
                  className="group-hover:translate-x-0.5 transition-transform duration-300"
                />
              </span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center h-12 px-6 rounded-full border border-white/40 bg-white/10 backdrop-blur-md text-white text-sm font-medium hover:bg-white hover:text-black transition-all duration-300"
            >
              Get a Quote
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            {...fadeUp(1)}
            className="mt-10 grid grid-cols-3 divide-x divide-white/25"
          >
            {stats.map((s) => (
              <div key={s.label} className="px-4 sm:px-8 md:px-10">
                <p className="text-xl sm:text-2xl md:text-[28px] font-semibold text-white">
                  {s.value}
                </p>
                <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.15em] text-white/70 mt-1">
                  {s.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Bar: scroll hint · marquee · controls */}
        <div className="absolute inset-x-0 bottom-0 z-20 border-t border-white/15 bg-black/25 backdrop-blur-md">
          <div className="flex items-center h-14">
            {/* Scroll hint */}
            <div className="hidden md:flex items-center gap-3 h-full px-8 border-r border-white/15 shrink-0">
              <span className="relative w-px h-6 bg-white/25 overflow-hidden">
                <motion.span
                  className="absolute left-0 top-0 w-px h-2.5 bg-white"
                  animate={{ y: [-10, 24] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                />
              </span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-white/70">
                Scroll
              </span>
            </div>

            {/* Marquee */}
            <div className="relative flex-1 overflow-hidden h-full flex items-center [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
              <div
                className="flex w-max animate-marquee"
                style={{ animationDuration: "45s" }}
              >
                {[...marqueeItems, ...marqueeItems].map((item, i) => (
                  <span
                    key={`${item}-${i}`}
                    className="flex items-center gap-8 pr-8 text-[11px] md:text-xs uppercase tracking-[0.2em] text-white/80 whitespace-nowrap"
                  >
                    {item}
                    <span className="w-1 h-1 rounded-full bg-[#e7a4cf]" />
                  </span>
                ))}
              </div>
            </div>

            {/* Video Controls */}
            <div className="flex items-center gap-2 h-full px-4 md:px-8 border-l border-white/15 shrink-0">
              <button
                type="button"
                onClick={togglePlay}
                aria-label={isPlaying ? "Pause video" : "Play video"}
                className={controlBtn}
              >
                {isPlaying ? <FaPause size={11} /> : <FaPlay size={11} />}
              </button>
              <button
                type="button"
                onClick={toggleMute}
                aria-label={isMuted ? "Unmute video" : "Mute video"}
                className={controlBtn}
              >
                {isMuted ? <FaVolumeMute size={12} /> : <FaVolumeUp size={12} />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero2;
