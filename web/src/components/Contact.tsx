"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Sparkles, MoveRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="bg-black pt-32 pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Refined Editorial Header */}
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <span className="flex items-center gap-2 text-[var(--color-accent)] text-[10px] uppercase tracking-[0.6em] font-bold mb-6">
              <Sparkles size={12} /> Get in Touch
            </span>
            <h2 className="text-5xl md:text-7xl font-sans font-black uppercase text-white leading-[0.9] tracking-tighter">
              Start Your <br /> 
              <span className="font-serif italic font-light lowercase text-white/30">
                narrative.
              </span>
            </h2>
          </motion.div>
          <p className="text-gray-500 max-w-sm text-sm font-light leading-relaxed border-l border-white/5 pl-8 mb-2">
            Available for worldwide travel. Let’s discuss how we can document your legacy with cinematic precision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-20">
          {/* Contact Info - Minimalist Styling */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-8">
              <div className="flex gap-6 group">
                <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/5 text-[var(--color-accent)] transition-colors group-hover:bg-[var(--color-accent)] group-hover:text-black">
                  <MapPin size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/40 mb-1 font-bold">Studio</p>
                  <p className="text-gray-300 text-sm leading-relaxed font-light">
                    Near Hanuman Mandir, Arjun Nagar, <br />
                    Amravati, Maharashtra – 444603
                  </p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/5 text-[var(--color-accent)] transition-colors group-hover:bg-[var(--color-accent)] group-hover:text-black">
                  <Phone size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/40 mb-1 font-bold">Direct Line</p>
                  <p className="text-gray-300 text-sm font-light">+91 98503 34318</p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/5 text-[var(--color-accent)] transition-colors group-hover:bg-[var(--color-accent)] group-hover:text-black">
                  <Mail size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/40 mb-1 font-bold">Email Inquiry</p>
                  <p className="text-gray-300 text-sm font-light">pratik.rohankar9@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Fluent WhatsApp Button */}
            <a href="https://wa.me/919850334318" target="_blank" className="inline-block group relative">
              <div className="relative bg-white text-black px-8 py-4 rounded-full font-black uppercase text-[10px] tracking-[0.3em] flex items-center gap-4 overflow-hidden shadow-xl hover:-translate-y-1 transition-all duration-500">
                <div className="absolute inset-0 bg-[var(--color-accent)] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                <span className="relative z-10">Chat on WhatsApp</span>
                <MoveRight size={14} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          </motion.div>

          {/* Refined Contact Form */}
        <motion.form
  initial={{ opacity: 0, x: 30 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="space-y-6" // Increased spacing for better "breathability"
>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
    <div className="relative">
      <input
        type="text"
        placeholder="Full Name"
        className="w-full bg-white/[0.07] border border-white/20 rounded-2xl px-6 py-5 text-sm text-white 
                   focus:outline-none focus:border-[#D4AF37] focus:bg-white/[0.1] 
                   transition-all duration-300 
                   placeholder:text-white/60 placeholder:font-medium placeholder:uppercase placeholder:text-[10px] placeholder:tracking-[0.2em]"
      />
    </div>
    
    <div className="relative">
      <input
        type="email"
        placeholder="Email Address"
        className="w-full bg-white/[0.07] border border-white/20 rounded-2xl px-6 py-5 text-sm text-white 
                   focus:outline-none focus:border-[#D4AF37] focus:bg-white/[0.1] 
                   transition-all duration-300 
                   placeholder:text-white/60 placeholder:font-medium placeholder:uppercase placeholder:text-[10px] placeholder:tracking-[0.2em]"
      />
    </div>
  </div>

  <div className="relative">
    <input
      type="text"
      placeholder="Event Type (e.g. Wedding)"
      className="w-full bg-white/[0.07] border border-white/20 rounded-2xl px-6 py-5 text-sm text-white 
                 focus:outline-none focus:border-[#D4AF37] focus:bg-white/[0.1] 
                 transition-all duration-300 
                 placeholder:text-white/60 placeholder:font-medium placeholder:uppercase placeholder:text-[10px] placeholder:tracking-[0.2em]"
    />
  </div>

  <div className="relative">
    <textarea
      placeholder="Tell us about your vision..."
      rows={5}
      className="w-full bg-white/[0.07] border border-white/20 rounded-2xl px-6 py-5 text-sm text-white 
                 focus:outline-none focus:border-[#D4AF37] focus:bg-white/[0.1] 
                 transition-all duration-300 
                 placeholder:text-white/60 placeholder:font-medium placeholder:uppercase placeholder:text-[10px] placeholder:tracking-[0.2em] resize-none"
    />
  </div>

  <button
    type="submit"
    className="w-full group relative bg-white text-black px-8 py-5 rounded-2xl overflow-hidden transition-all duration-500 shadow-[0_0_40px_rgba(212,175,55,0.2)] hover:shadow-[0_0_60px_rgba(212,175,55,0.4)]"
  >
    <div className="absolute inset-0 bg-[#D4AF37] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
    <div className="relative z-10 flex items-center justify-center gap-3">
      <span className="text-[11px] font-black uppercase tracking-[0.5em] group-hover:text-black transition-colors">
        Send Message
      </span>
      <MoveRight size={16} className="group-hover:translate-x-2 transition-all" />
    </div>
  </button>
</motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;