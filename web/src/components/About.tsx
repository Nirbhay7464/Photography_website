"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Camera, MapPin, Award } from "lucide-react";

const About = () => {
  // 3D Tilt Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section id="about" className="relative py-24 md:py-32 bg-[#111] overflow-hidden">
      
      {/* Subtle Bottom Gradient Merge */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent z-10" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-20">
        
        {/* Left Side: 3D Image Card */}
        <motion.div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative group cursor-pointer"
        >
          {/* Dotted Border Accent */}
          <div className="absolute -inset-6 border border-dashed border-white/20 rounded-3xl pointer-events-none group-hover:border-white/40 transition-colors" />

          {/* Main Polaroid Card */}
          <div className="relative bg-[#1a1a1a] p-4 pb-12 rounded-2xl shadow-2xl overflow-hidden border border-white/5">
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden mb-6">
              <Image
                src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5" 
                alt="The Photographer"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="px-2">
               <p className="text-white/40 font-mono text-[10px] uppercase tracking-widest">
                 Serial No. CS-2026 / 883
               </p>
            </div>
          </div>

          {/* Floating Badge */}
          <motion.div 
            style={{ translateZ: "50px" }}
            className="absolute -bottom-10 -left-6 bg-[var(--color-accent)] text-black p-6 rounded-full aspect-square flex flex-col items-center justify-center shadow-2xl border-4 border-[#111]"
          >
            <span className="text-3xl font-bold leading-tight">9+</span>
            <span className="text-[9px] font-black uppercase tracking-tighter text-center leading-none">Years in <br/> Industry</span>
          </motion.div>
        </motion.div>

        {/* Right Side: Content */}
        <div className="relative">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
             viewport={{ once: true }}
          >
            <span className="bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-[var(--color-accent)] text-xs font-bold tracking-widest uppercase mb-6 inline-block">
              Meet the Creator
            </span>
            
            <h2 className="text-5xl md:text-7xl font-serif italic text-white mb-8 leading-[1.1]">
              Storytelling <br /> 
              <span className="not-italic font-sans font-black uppercase text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/20">
                Through Lens.
              </span>
            </h2>

            <p className="text-gray-400 text-lg font-light leading-relaxed mb-8 max-w-xl">
              I’m a background in fine arts and over 8 years in specialized 
              <span className="text-white"> 300+ successful projects.</span> I strive to create emotive visuals that speak the soul and secret stories for every individual.
            </p>

            {/* Stats Bar */}
            <div className="flex flex-col sm:flex-row gap-8 py-8 border-y border-white/10 mb-10">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-[var(--color-accent)]">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="text-white text-xl font-bold">300+</h4>
                  <p className="text-gray-500 text-xs uppercase">Happy Clients</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-[var(--color-accent)]">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white text-xl font-bold">12</h4>
                  <p className="text-gray-500 text-xs uppercase">Global Locations</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-[var(--color-accent)] transition-all duration-300 active:scale-95">
                Contact for Booking
              </button>
              <button className="px-10 py-4 border border-white/20 text-white rounded-full hover:bg-white/10 transition-all duration-300">
                My Creative Journey
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* --- PREMIUM BOTTOM DIVIDER --- */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20">
        <svg 
          className="relative block w-full h-[40px] md:h-[80px]" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          {/* Path color matches the background of the Services section (Black) */}
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
            className="fill-black"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default About;