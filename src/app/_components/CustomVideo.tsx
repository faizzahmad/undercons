"use client";
import { useRef, useState } from "react";
import { VscUnmute, VscMute } from "react-icons/vsc";

interface CustomVideoProps {
  src: string;
}

export default function CustomVideo({ src }: CustomVideoProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
const isMuted = true; // Video is always muted

//   const toggleMute = () => {
//     const video = videoRef.current;
//     if (video) {
//       video.muted = !video.muted;
//       setIsMuted(video.muted);
//     }
//   };

  return (
    
    <div className="relative w-full">
      <video
        ref={videoRef}
        src={src}
        autoPlay
        loop
        muted={isMuted}
        playsInline
        className="w-full h-auto opacity-50"
        controls={false}
      />
      {/* <button
        onClick={toggleMute}
        className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded"
      >
        {isMuted ? <VscMute /> : <VscUnmute />}
      </button> */}
    </div>
  );
}
