"use client";
import { motion } from "framer-motion";

export default function ChrisBioBlock() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="bg-white text-navy-900 rounded-lg p-8 md:p-12 w-full max-w-4xl mx-auto shadow-2xl relative flex flex-col md:flex-row gap-8 items-center"
    >
      <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden flex-shrink-0 border-4 border-accent shadow-lg bg-gray-200">
        <img 
          src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80" 
          alt="Chris Graebe" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-black italic uppercase text-navy-900 leading-tight">
          "I've evaluated thousands of deals — so you don't have to. My job is to find the ones worth your money."
        </h3>
        <p className="text-gray-700 leading-relaxed font-light mt-2">
          I grew up in a small Midwest town and spent years building businesses before discovering my true passion: finding early-stage startups before they go public. I've personally evaluated thousands of deals, invested alongside the likes of Mark Cuban and Kevin O'Leary, and built a portfolio of 20+ startups now valued at over $700 million combined. 
        </p>
        <p className="text-gray-700 leading-relaxed font-light">
          Deal Hunters Alliance is how I bring the best of what I find directly to everyday investors — the kind of curated, due-diligence-heavy deal flow that was once reserved for Silicon Valley insiders and institutional money. Now it's yours.
        </p>
        <div className="mt-4 border-t border-gray-200 pt-4">
          <p className="font-bold uppercase tracking-widest text-sm text-accent">Chris Graebe</p>
          <p className="text-xs uppercase tracking-wide text-gray-500">Angel Investor & Founder, Deal Hunters Alliance Pre-IPO Investor · Austin, TX</p>
        </div>
      </div>
    </motion.div>
  );
}
