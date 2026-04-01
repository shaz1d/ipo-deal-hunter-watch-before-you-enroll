"use client";
import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section className="relative w-full py-16 md:py-24 lg:py-32 flex justify-center items-center overflow-hidden border-t border-white/5">
      {/* Radiant Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent/15 blur-[120px] rounded-[100%] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-black italic uppercase text-white leading-none mb-8 tracking-wide">
            Step Inside<br /> The <span className="text-accent underline decoration-4 underline-offset-8">Alliance</span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-300 font-light mb-8 leading-relaxed max-w-2xl mx-auto">
            After watching all of the videos above, you should now have a very firm grasp on exactly what we do inside Deal Hunters Alliance.
          </p>
          <p className="text-lg md:text-xl text-gray-400 font-light mb-12 max-w-3xl mx-auto border-l border-r border-white/10 px-8">
            As we have stated many times, Deal Hunters Alliance is a private community and gaining access is by <span className="text-accent font-bold">invite only.</span> We invite you to apply — get back with the enrollment coach or acquisitions advisor on our team you are already speaking with to formally apply for the program.
          </p>
        </motion.div>

        {/* Final Premium Image Block */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full aspect-video rounded-3xl overflow-hidden border border-white/20 shadow-[0_30px_60px_rgba(0,0,0,0.8)] relative bg-navy-900 mb-16"
        >
          <img
            src="/Images/chris-headshot-2.webp"
            alt="Ready to Join DHA"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-gray-300 font-light text-lg mb-8 max-w-2xl mx-auto">
            You have everything inside of you that you need to be successful in pre-IPO startup investing. We are excited to go on this journey with you. And even more than that, we are excited to welcome you into our DHA family.
          </p>

          <p className="text-accent font-black text-2xl md:text-3xl italic uppercase tracking-[0.2em] relative inline-block py-4">
            See you on the inside.
            <br />
            I saved a seat at the table for you.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
