"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import {
  FaArrowRight,
  FaPause,
  FaPlay,
  FaVolumeMute,
  FaVolumeUp,
} from "react-icons/fa";

const highlights = [
  {
    title: "Durability",
    desc: "Built to perform under pressure for years.",
  },
  {
    title: "Corrosion Resistant",
    desc: "No rust, no scaling, clean water flow.",
  },
  {
    title: "Easy Installation",
    desc: "Lightweight systems that save time on site.",
  },
];

const controlBtn =
  "w-9 h-9 flex items-center justify-center rounded-full bg-white/15 border border-white/25 text-white backdrop-blur-md hover:bg-white hover:text-[#8a2967] transition-colors duration-300 cursor-pointer";

const AboutManifesto = () => {
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
    <section className="w-full bg-linear-to-b from-white to-[#8a29660e] px-4 py-16 md:py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[auto_1fr] items-center gap-14 lg:gap-20">
        {/* LEFT: Portrait video */}
        <div className="relative mx-auto w-full max-w-[300px] sm:max-w-[340px] lg:w-[360px] lg:max-w-none">
          {/* Decorative backdrop */}
          <div className="absolute -inset-4 md:-inset-6 rounded-[40px] bg-[#8a2967]/8 rotate-[-4deg]" />
          <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-[#8a2967]/15 blur-3xl" />

          {/* Video frame */}
          <div className="relative aspect-9/16 rounded-[28px] overflow-hidden bg-black shadow-[0_30px_80px_rgba(138,41,103,0.25)] ring-1 ring-black/5">
            <video
              ref={videoRef}
              className="absolute inset-0 w-full h-full object-cover"
              src="/videos/Bhagvat_F5.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            />

            {/* Soft fades for the chips */}
            <div className="absolute inset-x-0 top-0 h-24 bg-linear-to-b from-black/35 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-black/45 to-transparent" />

            {/* Top chip */}
            <div className="absolute top-4 left-4 flex items-center gap-2 rounded-full bg-white/15 border border-white/25 backdrop-blur-md px-3 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f3c6e3]" />
              <span className="text-[10px] uppercase tracking-[0.2em] text-white font-medium">
                Inside Bhagvat
              </span>
            </div>

            {/* Controls */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
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

          {/* Floating card */}
          <div className="absolute -right-6 sm:-right-12 bottom-24 rounded-2xl bg-white shadow-[0_16px_40px_rgba(0,0,0,0.10)] border border-black/5 px-4 py-3">
            <p className="text-[10px] uppercase tracking-[0.18em] text-black/40">
              We Make
            </p>
            <p className="mt-0.5 text-sm font-semibold text-black">
              CPVC <span className="text-[#8a2967]">&amp;</span> UPVC
            </p>
            <p className="text-[11px] text-black/50">Piping Systems</p>
          </div>
        </div>

        {/* RIGHT: Content */}
        <div className="text-left">
          {/* Small Label */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-px bg-[#8a2967]/40" />
            <p className="text-xs md:text-sm font-medium tracking-[0.2em] uppercase text-[#8a2967]">
              Know Our Products
            </p>
          </div>

          {/* Heading */}
          <h2 className="mt-5 text-[28px] md:text-[36px] lg:text-[44px] leading-[1.1] tracking-tight font-semibold text-black">
            Engineered For
            <br />
            <span className="text-[#8a2967]">Long-Term Reliability</span>
          </h2>

          {/* Description */}
          <div className="mt-6 space-y-4 max-w-[580px]">
            <p className="text-[15px] md:text-[17px] leading-relaxed text-black/75">
              Bhagvat Pipes manufactures premium CPVC and UPVC piping systems
              engineered for durability, reliability, and modern infrastructure
              applications.
            </p>
            <p className="text-[14px] md:text-[15px] leading-relaxed text-black/55">
              Designed for residential, commercial, and industrial environments,
              our piping solutions combine long-term performance, corrosion
              resistance, and installation efficiency while maintaining high
              manufacturing standards.
            </p>
            <p className="text-[14px] md:text-[15px] leading-relaxed text-black/55">
              With a strong focus on product quality and dependable
              infrastructure solutions, Bhagvat Pipes continues to deliver
              piping systems trusted across modern construction and industrial
              projects.
            </p>
          </div>

          {/* Highlights */}
          <div className="mt-8 grid sm:grid-cols-3 gap-3">
            {highlights.map((h, i) => (
              <div
                key={h.title}
                className="rounded-2xl bg-white border border-black/5 p-4 hover:border-[#8a2967]/25 hover:shadow-[0_10px_30px_rgba(138,41,103,0.08)] transition-all duration-300"
              >
                <p className="text-xs font-semibold text-[#8a2967]/60">
                  0{i + 1}
                </p>
                <p className="mt-2 text-sm font-semibold text-black">
                  {h.title}
                </p>
                <p className="mt-1 text-[12px] leading-snug text-black/50">
                  {h.desc}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <Link
            href="/products"
            className="group mt-8 inline-flex items-center gap-3 h-12 pl-6 pr-2 rounded-full bg-[#8a2967] text-white text-sm font-medium hover:bg-[#7a225a] transition-colors duration-300"
          >
            Explore Products
            <span className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-[#8a2967]">
              <FaArrowRight
                size={12}
                className="group-hover:translate-x-0.5 transition-transform duration-300"
              />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutManifesto;
