"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Play, X, Sparkles, MoveRight } from "lucide-react";



// Helper to fix YouTube/Vimeo URLs for the iframe
const getEmbedUrl = (url: string) => {
  if (!url) return "";
  if (url.includes("youtube.com") || url.includes("youtu.be")) {
    const id = url.includes("v=") ? url.split("v=")[1].split("&")[0] : url.split("/").pop();
    return `https://www.youtube.com/embed/${id}?autoplay=1`;
  }
  if (url.includes("vimeo.com")) {
    const id = url.split("/").pop();
    return `https://player.vimeo.com/video/${id}?autoplay=1`;
  }
  return url;
};

export default function VideoClient({ initialVideos }: { initialVideos: any[] }) {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section id="videos" className="bg-black pt-24 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <span className="flex items-center gap-2 text-[#D4AF37] text-[10px] uppercase tracking-[0.6em] font-bold mb-4">
              <Sparkles size={12} /> The Motion Archive
            </span>
            <h2 className="text-5xl md:text-7xl font-sans font-black uppercase text-white leading-[0.9] tracking-tighter">
              Cinematic <br /> 
              <span className="font-serif italic font-light lowercase text-white/30">Legacy.</span>
            </h2>
          </motion.div>
        </div>

        {/* Dynamic Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {initialVideos.map((video, idx) => (
            <motion.div
              key={video._id}
              className="group cursor-pointer"
              onClick={() => setActiveVideo(video.videoUrl)}
            >
              <div className="relative aspect-video rounded-[1.5rem] overflow-hidden bg-[#080808] border border-white/[0.03]">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  className="object-cover transition-transform duration-[1.5s] group-hover:scale-105 opacity-50 group-hover:opacity-80"
                />
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center group-hover:bg-white transition-all duration-700">
                    <Play className="text-white group-hover:text-black fill-current ml-0.5" size={20} />
                  </div>
                </div>

                {/* Info Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-[#D4AF37] text-[9px] font-bold uppercase tracking-[0.4em]">{video.category}</p>
                      <h3 className="text-white text-xl md:text-2xl font-serif italic">{video.title}</h3>
                    </div>
                    <div className="flex items-center gap-2 text-white/20 group-hover:text-white transition-colors text-[9px] uppercase font-bold">
                       <span>Play Film</span>
                       <MoveRight size={14} />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-3xl flex items-center justify-center p-4"
            onClick={() => setActiveVideo(null)}
          >
            <motion.div 
              className="w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={getEmbedUrl(activeVideo)}
                className="w-full h-full"
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}