"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { videosPart1, videosPart2 } from "@/data/content";

export default function VideoGrid({ part }: { part: 1 | 2 }) {
  const videos = part === 1 ? videosPart1 : videosPart2;
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  return (
    <section className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-16 md:py-24 lg:py-32 flex flex-col gap-16 md:gap-24 lg:gap-32">
      {videos.map((videoData, idx) => {
        const vid = videoData as any; // Cast to bypass strict TS checking for optional fields
        const isReversed = idx % 2 !== 0;
        return (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className={`w-full flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}
          >
            {/* Text Content */}
            <div className="w-full lg:w-5/12 flex flex-col relative">
              <div className="absolute -left-8 -top-12 text-[8rem] font-black text-white/[0.03] select-none pointer-events-none font-kanit italic">
                {String(idx + 1).padStart(2, '0')}
              </div>

              <div className="flex items-center gap-4 mb-4">
                <span className="h-[2px] w-8 bg-accent"></span>
                <p className="text-xs font-bold tracking-[0.2em] uppercase text-accent">Module {idx + 1 + (part === 2 ? videosPart1.length : 0)}</p>
              </div>

              <h3 className="text-4xl md:text-5xl font-black uppercase text-white leading-[1.1] mb-6">
                {vid.title}
              </h3>
              
              <h4 className="text-xl md:text-2xl text-accent font-light mb-6">
                {vid.subtitle}
              </h4>
              
              <p className="text-gray-400 font-light text-lg leading-relaxed">
                {vid.description}
              </p>
            </div>

            {/* Video Player/Thumbnail */}
            <div className="w-full lg:w-7/12 relative group cursor-pointer z-10">
              <div className="relative rounded-2xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10 p-2 md:p-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 group-hover:bg-white/10 group-hover:border-accent/50 group-hover:shadow-[0_0_40px_rgba(242,185,0,0.2)]">
                <div className="aspect-video relative w-full bg-black rounded-xl overflow-hidden flex items-center justify-center">
                  
                  {playingIndex === idx && vid.videoUrl ? (
                    <video 
                      autoPlay 
                      controls 
                      playsInline 
                      preload="none"
                      poster={vid.posterUrl || vid.thumbnailPlaceholder} 
                      src={vid.videoUrl} 
                      className="w-full h-full outline-none bg-black"
                    />
                  ) : (
                    <>
                      <img
                        src={vid.posterUrl || vid.thumbnailPlaceholder}
                        alt={vid.title}
                        className="w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-90"
                      />

                      {/* Floating Pulsing Play Button */}
                      <div 
                        className="absolute inset-0 flex items-center justify-center cursor-pointer"
                        onClick={() => {
                          if (vid.videoUrl) setPlayingIndex(idx);
                        }}
                      >
                        <div className="relative">
                          <div className="absolute inset-0 rounded-full bg-accent/30 animate-ping" />
                          <div className="absolute -inset-4 rounded-full border border-accent/20 animate-pulse" />

                          <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center transform group-hover:scale-110 group-hover:bg-accent transition-all duration-300 shadow-2xl">
                            <svg className="text-white group-hover:text-navy-900 w-8 h-8 transition-colors duration-300 fill-current" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"><path d="M8 5v14l11-7z" /></svg>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                  
                </div>

              </div>
            </div>
          </motion.div>
        );
      })}
    </section>
  );
}
