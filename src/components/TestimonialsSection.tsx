"use client";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { testimonials } from "@/data/content";

export default function TestimonialsSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setIsPlaying(true);
    setTimeout(() => {
      videoRef.current?.play();
    }, 100);
  };

  return (
    <section className="relative w-full py-16 md:py-24 lg:py-32 overflow-hidden bg-navy-900 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-14 lg:mb-16 max-w-3xl"
        >
          <p className="text-accent text-sm font-bold uppercase tracking-[0.3em] mb-6 flex items-center justify-center gap-4">
            <span className="w-12 h-[1px] bg-accent/50"></span>
            Member Success
            <span className="w-12 h-[1px] bg-accent/50"></span>
          </p>
          <h2 className="text-4xl md:text-6xl font-black italic uppercase text-white tracking-wide">
            Don't Just Take <br />
            <span className="text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.7)" }}>Our Word For It</span>
          </h2>
        </motion.div>

        {/* Cinematic Single Video Showcase */}
        <div className="w-full max-w-md mb-16 md:mb-24 lg:mb-32 relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative shadow-[0_30px_60px_rgba(0,0,0,0.8)] border border-white/10 rounded-[2rem] overflow-hidden group bg-black w-full max-w-md mx-auto aspect-[9/16]"
          >
            {isPlaying ? (
              <video
                ref={videoRef}
                suppressHydrationWarning
                controls
                playsInline
                preload="none"
                poster="/Images/testimonial-thumb.webp"
                src="https://assets.cdn.filesafe.space/0lNvmVkEurcw6PesXYvk/media/69c3fa6e586426210cdab742.mp4"
                className="w-full h-full object-cover outline-none"
              />
            ) : (
              <>
                <img
                  src="/Images/testimonial-thumb.webp"
                  alt="Member Success Story"
                  className="w-full h-full object-cover opacity-70 transition-all duration-700 group-hover:scale-105 group-hover:opacity-90"
                />

                {/* Floating Pulsing Play Button */}
                <div
                  className="absolute inset-0 flex items-center justify-center cursor-pointer"
                  onClick={handlePlay}
                >
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-accent/30 animate-ping" />
                    <div className="absolute -inset-5 rounded-full border border-accent/20 animate-pulse" />

                    <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center transform group-hover:scale-110 group-hover:bg-accent transition-all duration-300 shadow-2xl">
                      <svg className="text-white group-hover:text-navy-900 w-10 h-10 transition-colors duration-300 fill-current" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"><path d="M8 5v14l11-7z" /></svg>
                    </div>
                  </div>
                </div>
              </>
            )}
          </motion.div>

          {/* Ambient Backlight */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-accent/10 rounded-full blur-[100px] -z-10 pointer-events-none" />
        </div>

        {/* Text Testimonials High-End Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, transition: { duration: 0.2, delay: 0 } }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: (idx % 2) * 0.15, duration: 0.3, ease: "easeOut" }}
              className="relative p-10 backdrop-blur-lg bg-white/[0.03] border border-white/10 rounded-2xl hover:bg-white/[0.05] transition-colors duration-300 group shadow-2xl"
            >
              <div className="absolute top-8 left-8 text-6xl text-accent/20 font-serif leading-none italic group-hover:text-accent/40 transition-colors select-none">"</div>
              <p className="relative z-10 text-gray-300 font-light leading-loose text-lg mb-8 pt-8">
                {testimonial.text}
              </p>
              <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                <div className="w-12 h-12 rounded-full bg-navy-900 border border-white/20 flex items-center justify-center font-bold text-accent italic">
                  {testimonial.name.charAt(0)}
                </div>
                <p className="text-white font-bold tracking-[0.2em] uppercase text-sm">
                  {testimonial.name}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
