"use client";
import { motion } from "framer-motion";
import { testimonials } from "@/data/content";

export default function TestimonialsStack() {
  return (
    <div className="w-full flex flex-col items-center mt-12 gap-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-3xl md:text-5xl font-black italic uppercase text-white tracking-wide">
          Don't Just Take Our Word For It...
        </h2>
        <p className="text-gray-400 mt-4 tracking-widest text-sm uppercase">See What Our Members Are Saying</p>
      </motion.div>

      {/* Video Testimonials Stack */}
      <div className="flex flex-col gap-6 w-full max-w-sm mx-auto">
        {[1, 2, 3].map((item) => (
          <motion.div 
            key={item}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: item * 0.1 }}
            className="aspect-[9/16] bg-navy-900 border border-white/10 rounded-lg overflow-hidden shadow-xl"
          >
             <img 
               src={`https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=400&q=80`} 
               alt={`Video Testimonial ${item}`} 
               className="w-full h-full object-cover opacity-80"
             />
          </motion.div>
        ))}
      </div>

      {/* Text Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-8">
        {testimonials.map((testimonial, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 + 0.3 }}
            className="bg-[#122336] p-6 rounded-lg border border-white/5 flex flex-col justify-between"
          >
            <p className="text-gray-300 font-light leading-relaxed italic mb-6">"{testimonial.text}"</p>
            <p className="text-accent font-bold tracking-widest uppercase text-sm">— {testimonial.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
