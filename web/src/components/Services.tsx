"use client";

import { motion } from "framer-motion";
import { 
  Camera, 
  Heart, 
  Users, 
  Stars, 
  Calendar, 
  Focus
} from "lucide-react";

const services = [
  {
    title: "Wedding Photography",
    description: "Capturing grand celebrations and intimate whispers of your big day.",
    icon: <Camera className="w-5 h-5" />,
    index: "01",
    size: "md:col-span-2", // Larger card for main service
  },
  {
    title: "Pre-Wedding",
    description: "Cinematic storytelling in breathtaking locations.",
    icon: <Heart className="w-5 h-5" />,
    index: "02",
    size: "md:col-span-1",
  },
  {
    title: "Maternity",
    description: "Elegant portraits celebrating the miracle of life.",
    icon: <Stars className="w-5 h-5" />,
    index: "03",
    size: "md:col-span-1",
  },
  {
    title: "Engagement",
    description: "The beautiful beginning of your forever story.",
    icon: <Users className="w-5 h-5" />,
    index: "04",
    size: "md:col-span-1",
  },
  {
    title: "Cinematography",
    description: "High-end cinematic films that breathe life into memories.",
    icon: <Focus className="w-5 h-5" />,
    index: "05",
    size: "md:col-span-2", // Larger card
  },
];

const Services = () => {
  return (
    <section id="services" className="relative bg-black py-24 md:py-32 overflow-hidden">
      
      {/* Subtle Background Text Decoration */}
      <div className="absolute top-0 left-10 text-[10rem] font-black text-white/[0.01] select-none pointer-events-none tracking-tighter">
        SERVICES
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Modern Header - Left Aligned for Editorial Look */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="text-[var(--color-accent)] text-[10px] uppercase tracking-[0.5em] font-bold mb-4 block">
              Selection of Expertise
            </span>
            <h2 className="text-4xl md:text-7xl font-serif italic text-white leading-none">
              Visual <span className="not-italic font-sans font-black uppercase text-outline">Excellence.</span>
            </h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gray-500 max-w-sm text-sm font-light leading-relaxed border-l border-white/10 pl-6"
          >
            We don't just take photos; we curate memories through a sophisticated lens of art and emotion.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className={`group relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 p-8 min-h-[280px] flex flex-col justify-between transition-all duration-500 hover:border-[var(--color-accent)]/30 ${service.size}`}
            >
              {/* Animated Background Glow on Hover */}
              <div className="absolute -inset-24 bg-[var(--color-accent)]/10 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-12">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-[var(--color-accent)] group-hover:bg-[var(--color-accent)] group-hover:text-black transition-all duration-500">
                    {service.icon}
                  </div>
                  <span className="font-mono text-xs text-white/20 group-hover:text-white/40 transition-colors">
                    [{service.index}]
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-gray-500 font-light text-sm leading-relaxed max-w-[250px]">
                  {service.description}
                </p>
              </div>

              {/* Minimalist Corner Accent */}
              <div className="absolute bottom-6 right-6 opacity-20 group-hover:opacity-100 transition-opacity">
                 <div className="w-6 h-6 border-b-2 border-r-2 border-[var(--color-accent)] rounded-br-sm" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;