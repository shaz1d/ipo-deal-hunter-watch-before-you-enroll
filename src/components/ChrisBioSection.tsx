"use client";
import { motion } from "framer-motion";

export default function ChrisBioSection() {
  return (
    <section className="relative w-full py-16 md:py-24 lg:py-32 border-y border-white/5 bg-gradient-to-b from-[#0D1B2A] to-[#04080F] overflow-hidden">
      {/* Radial soft glow behind Chris */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative z-10 items-center">

        {/* Left Column - Photography & Glass Stats Overlay */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative rounded-3xl overflow-hidden shadow-2xl group border border-white/10"
        >
          {/* Edge-to-edge sleek portrait */}
          <div className="aspect-[3/4] relative w-full bg-navy-900 overflow-hidden">
            <img
              src="/Images/graebe-headshot.webp"
              alt="Chris Graebe"
              className="w-full h-full object-cover filter contrast-125 saturate-50 group-hover:saturate-100 transition-all duration-700"
            />
            {/* Dark gradient overlay so text is readable */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

            {/* Huge numeric statutory info floating in glass at bottom of photo */}
            <div className="absolute bottom-6 left-6 right-6 backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 flex justify-between items-center shadow-2xl">
              <div className="text-center">
                <span className="block text-4xl font-black text-white italic">20+</span>
                <span className="text-xs uppercase tracking-widest text-accent font-bold mt-1">Startups</span>
              </div>
              <div className="w-[1px] h-12 bg-white/20"></div>
              <div className="text-center">
                <span className="block text-4xl font-black text-white italic">$700M<span className="text-accent">+</span></span>
                <span className="text-xs uppercase tracking-widest text-gray-400 font-bold mt-1">Portfolio</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column - Deep Authority Copy */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col gap-8 justify-center"
        >
          <div>
            <p className="text-accent text-sm font-bold uppercase tracking-[0.3em] mb-4">Meet Your Insider</p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black italic uppercase leading-[0.9] text-white">
              "I've Evaluated Thousands <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent to-yellow-600 mt-2">Of Deals...</span>"
            </h2>
            <p className="text-gray-400 font-light text-xl mt-6 italic border-l-4 border-accent pl-6">
              "...so you don't have to. My job is to find the ones worth your money."
            </p>
          </div>

          <div className="flex flex-col gap-6 text-lg font-light leading-relaxed text-[#d1d5db]">
            <p>
              I grew up in a small Midwest town and spent years building businesses before discovering my true passion: finding early-stage startups before they go public.
            </p>
            <p className="font-medium text-white">
              I've personally evaluated thousands of deals, invested alongside the likes of Mark Cuban and Kevin O'Leary, and built a portfolio of 20+ startups now valued at over $700 million combined.
            </p>
            <p>
              Deal Hunters Alliance is how I bring the best of what I find directly to everyday investors — the kind of curated, due-diligence-heavy deal flow that was once reserved for Silicon Valley insiders and institutional money. Now it's yours.
            </p>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="font-bold uppercase tracking-[0.2em] text-lg text-white">Chris Graebe</p>
              <p className="text-xs uppercase tracking-widest text-accent mt-1">Founder, Deal Hunters Alliance</p>
            </div>
            <div className="w-48 h-16 relative">
              <img src="/Images/graebe-signature.png" alt="Chris Graebe Signature" className="w-full h-full object-contain filter invert opacity-90" />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
