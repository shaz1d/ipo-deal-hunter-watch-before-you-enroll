"use client";
import { motion } from "framer-motion";

export default function ExitsStrip() {
  const logos = [
    { title: "Exclusive Members-Only Meeting", img: "/Images/event-image%20(1).webp" },
    { title: "Live Deal Flow Pitch", img: "/Images/event-image%20(2).webp" },
    { title: "Founder Networking", img: "/Images/event-image%20(3).webp" },
    { title: "Masterclass Sessions", img: "/Images/event-image%20(4).webp" },
    { title: "Behind Closed Doors", img: "/Images/event-image%20(5).webp" },
    { title: "Executive Check-ins", img: "/Images/event-image%20(6).webp" },
  ];

  const getBentoClass = (idx: number) => {
    switch (idx) {
      case 0: return "md:col-span-2 md:row-span-2"; // Huge feature block
      case 1: return "md:col-span-2 md:row-span-1"; // Wide landscape
      case 2: return "md:col-span-1 md:row-span-1"; // Compact square
      case 3: return "md:col-span-1 md:row-span-1"; // Compact square
      case 4: return "md:col-span-2 md:row-span-1"; // Wide landscape bottom
      case 5: return "md:col-span-2 md:row-span-1"; // Wide landscape bottom
      default: return "";
    }
  };

  return (
    <section className="relative w-full py-16 md:py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-[#04080F] to-navy-900 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center">

        {/* Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-16 w-full flex flex-col items-center"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="w-12 h-[1px] bg-accent/40"></span>
            <p className="text-accent tracking-[0.3em] text-sm font-bold uppercase drop-shadow-md">Proven Track Record</p>
            <span className="w-12 h-[1px] bg-accent/40"></span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black italic uppercase text-white tracking-wide mix-blend-screen drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            The Exits Are Real
          </h2>
          <p className="mt-6 text-gray-400 font-light max-w-2xl text-lg md:text-xl">
            These aren't paper gains. DHA members have watched their pre-IPO picks trade on NASDAQ and NYSE.
          </p>
        </motion.div>

        {/* Premium Bento Box Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 w-full auto-rows-[200px] md:auto-rows-[300px] z-10 relative">

          {/* Deep Core Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[100%] bg-accent/5 blur-[120px] rounded-[100%] pointer-events-none -z-10" />

          {logos.map((logo, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1, duration: 0.8, ease: "easeOut" }}
              className={`relative group rounded-3xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.5)] border border-white/5 bg-navy-900 cursor-pointer ${getBentoClass(idx)}`}
            >
              <img
                src={logo.img}
                alt={logo.title}
                className="w-full h-full object-cover filter brightness-[0.6] sepia-[0.2] saturate-50 group-hover:brightness-100 group-hover:sepia-0 group-hover:saturate-100 group-hover:scale-105 transition-all duration-700 ease-out"
              />

              <div className="absolute inset-0 border-[1.5px] border-accent/0 group-hover:border-accent/40 rounded-3xl transition-colors duration-700 pointer-events-none z-30" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
