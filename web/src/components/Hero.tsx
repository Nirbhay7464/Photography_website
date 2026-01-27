"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Hero = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1.1, 1.3]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative h-[100vh] w-full flex items-center justify-center overflow-hidden bg-black"
    >
      
      {/* Background */}
      <motion.div
        style={{ scale: backgroundScale, opacity: opacityFade }}
        initial={{ scale: 1.5, opacity: 0 }}
        animate={{ scale: 1.1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url(https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e)",
        }}
      />

      {/* Layered Overlays for Depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black" />
      <div className="absolute inset-0 bg-black/20" />

      {/* Content Container */}
      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.span 
          initial={{ opacity: 0, letterSpacing: "0.1em" }}
          animate={{ opacity: 1, letterSpacing: "0.3em" }}
          transition={{ duration: 1, delay: 0.5 }}
          className="block text-xs md:text-sm uppercase text-white/70 mb-4 tracking-[0.3em] font-light"
        >
          Based in New York — Available Worldwide
        </motion.span>

        <h1 className="text-5xl md:text-8xl font-serif italic text-white leading-[1.1] mb-8">
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="inline-block"
          >
            Capturing
          </motion.span>{" "}
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="inline-block font-sans not-italic font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50"
          >
            The Art
          </motion.span> <br />
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="inline-block"
          >
            of Moment.
          </motion.span>
        </h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="text-gray-300 text-base md:text-lg max-w-xl mx-auto mb-10 font-light leading-relaxed"
        >
          Cinematic photography & films crafted with emotion, elegance, and 
          timeless storytelling.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-5"
        >
          <a
            href="#contact"
            className="group relative px-10 py-4 bg-white text-black font-semibold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95"
          >
            <span className="relative z-10">Book a Session</span>
            <div className="absolute inset-0 bg-gray-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>

          <a
            href="#portfolio"
            className="px-10 py-4 border border-white/40 text-white rounded-full backdrop-blur-sm hover:bg-white/10 transition-all active:scale-95"
          >
            Explore Gallery
          </a>
        </motion.div>
      </div>

      {/* --- PREMIUM BOTTOM DIVIDER --- */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180">
        <svg 
          className="relative block w-full h-[60px] md:h-[120px]" 
          data-name="Layer 1" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          {/* Use the same color as your next section background (usually #111 or black) */}
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
            className="fill-black" // Adjust fill to match next section
          ></path>
        </svg>
      </div>

      {/* Scroll Indicator (Moved up slightly to clear the curve) */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-20 left-1/2 -translate-x-1/2 text-white/30 text-xs flex flex-col items-center gap-2"
      >
        <span className="uppercase tracking-[0.2em] text-[10px]">Scroll</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-white/50 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;