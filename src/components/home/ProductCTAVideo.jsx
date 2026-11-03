"use client";

import React, { useRef, useState } from "react";
import { FaPause, FaPlay, FaVolumeMute, FaVolumeUp } from "react-icons/fa";

const controlBtn =
  "w-9 h-9 flex items-center justify-center rounded-full bg-white/15 border border-white/25 text-white backdrop-blur-md hover:bg-white hover:text-[#8a2967] transition-colors duration-300 cursor-pointer";

const ProductCTAVideo = ({ src, className = "" }) => {
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
    <div className={`relative overflow-hidden bg-black ${className}`}>
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src={src}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-black/45 to-transparent" />

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
  );
};

export default ProductCTAVideo;
