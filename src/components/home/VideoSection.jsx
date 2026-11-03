"use client";

import React, { useRef, useState } from "react";
import { FaPause, FaPlay, FaVolumeMute, FaVolumeUp } from "react-icons/fa";

const VideoSection = () => {
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
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  return (
    <section className="w-full px-4 pb-14 md:pb-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="relative w-full overflow-hidden rounded-2xl shadow-xl bg-black">
          <video
            ref={videoRef}
            className="w-full h-auto block"
            src="/videos/Bhagwat_Pipe.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          />

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3">
            <button
              type="button"
              onClick={togglePlay}
              aria-label={isPlaying ? "Pause video" : "Play video"}
              className="flex items-center gap-2 rounded-full bg-black/60 hover:bg-[#8e2f6d] text-white px-4 py-2 text-sm font-medium backdrop-blur-sm transition-colors cursor-pointer"
            >
              {isPlaying ? <FaPause /> : <FaPlay />}
              <span>{isPlaying ? "Pause" : "Play"}</span>
            </button>

            <button
              type="button"
              onClick={toggleMute}
              aria-label={isMuted ? "Unmute video" : "Mute video"}
              className="flex items-center gap-2 rounded-full bg-black/60 hover:bg-[#8e2f6d] text-white px-4 py-2 text-sm font-medium backdrop-blur-sm transition-colors cursor-pointer"
            >
              {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
              <span>{isMuted ? "Unmute" : "Mute"}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
