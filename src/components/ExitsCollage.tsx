"use client";
import { motion } from "framer-motion";

export default function ExitsCollage() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl p-8 md:p-12 w-full max-w-4xl mx-auto shadow-2xl flex flex-col items-center gap-8 text-navy-900 my-12"
    >
      <h2 className="text-4xl md:text-5xl font-black italic uppercase text-center tracking-wide">
        The Exits Are Real
      </h2>
      <p className="text-center text-gray-700 max-w-2xl text-lg font-light mb-4">
        These aren't paper gains. DHA members have watched their pre-IPO picks trade on NASDAQ and NYSE.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        {/* Placeholder for the collage grid images */}
        <div className="aspect-square bg-gray-200 overflow-hidden shadow-md">
          <img src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=600&q=80" alt="Exit" className="w-full h-full object-cover" />
        </div>
        <div className="aspect-square bg-gray-200 overflow-hidden shadow-md">
          <img src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=600&q=80" alt="Exit" className="w-full h-full object-cover" />
        </div>
        <div className="aspect-square bg-gray-200 overflow-hidden shadow-md">
          <img src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=600&q=80" alt="Exit" className="w-full h-full object-cover" />
        </div>
        <div className="aspect-square bg-gray-200 overflow-hidden shadow-md">
          <img src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=600&q=80" alt="Exit" className="w-full h-full object-cover" />
        </div>
      </div>
    </motion.div>
  );
}
