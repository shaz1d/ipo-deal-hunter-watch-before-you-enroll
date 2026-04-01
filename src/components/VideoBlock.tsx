"use client";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

interface VideoBlockProps {
  title: string;
  subtitle: string;
  description: string;
  videoLabel: string;
  thumbnailPlaceholder: string;
}

export default function VideoBlock({ title, subtitle, description, videoLabel, thumbnailPlaceholder }: VideoBlockProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="flex flex-col md:flex-row items-center w-full gap-8 border-b border-white/10 pb-12 last:border-0"
    >
      {/* Left Text Segment */}
      <div className="w-full md:w-1/2 flex flex-col justify-center text-left max-w-lg">
        <p className="text-xs uppercase tracking-widest text-[#9ca3af] mb-1">{subtitle}</p>
        <h3 className="text-3xl font-bold uppercase text-accent mb-4 leading-tight">
          {title}
        </h3>
        <p className="text-[#d1d5db] font-light md:text-lg leading-relaxed">
          {description}
        </p>
      </div>

      {/* Right Video Segment */}
      <div className="w-full md:w-1/2 relative group cursor-pointer overflow-hidden rounded-md border-4 border-accent shadow-[0_0_20px_rgba(242,185,0,0.15)]">
        <div className="aspect-video relative w-full bg-navy-900 flex items-center justify-center">
          <img 
            src={thumbnailPlaceholder} 
            alt={title} 
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
          />
          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="w-16 h-16 rounded-full bg-accent/90 flex items-center justify-center pl-1 transform group-hover:scale-110 transition-transform duration-300 shadow-xl">
               <Play className="text-navy-900 w-8 h-8 fill-navy-900" />
             </div>
          </div>
          <div className="absolute bottom-4 left-4 right-4 text-left">
            <p className="text-white font-semibold drop-shadow-md text-sm md:text-base leading-tight bg-black/50 p-2 rounded inline-block backdrop-blur-sm">
              {videoLabel}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
