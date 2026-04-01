"use client";
import { motion } from "framer-motion";

export default function HeroTitle() {
  return (
    <section className="relative w-full flex flex-col justify-center items-center text-center px-4 overflow-hidden pt-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full max-w-7xl relative z-10 flex flex-col items-center"
      >
        <p className="text-sm md:text-lg lg:text-xl font-light tracking-[0.2em] uppercase text-gray-400 mb-8 flex flex-col md:flex-row items-center gap-4 text-center">
          <span className="hidden md:block w-8 lg:w-16 h-[1px] bg-gray-500"></span>
          Before You Join Deal Hunters Alliance
          <span className="hidden md:block w-8 lg:w-16 h-[1px] bg-gray-500"></span>
        </p>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] font-black uppercase italic leading-[0.9] tracking-tight text-white relative flex flex-col items-center">
          <div className="flex gap-3 md:gap-0 items-center md:gap-6 lg:gap-8">
            <span className="text-accent drop-shadow-md">Watch</span>
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "2px rgba(255,255,255,0.7)" }}
            >
              These
            </span>
          </div>
          <span className="mt-2 md:mt-4 drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">Videos</span>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-12 md:mt-16 w-[1.5px] h-12 md:h-24 bg-gradient-to-b from-accent to-transparent opacity-80"
        ></motion.div>
      </motion.div>
    </section>
  );
}
