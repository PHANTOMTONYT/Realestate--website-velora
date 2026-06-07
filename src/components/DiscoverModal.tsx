import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight, CheckCircle, ShieldCheck, HeartHandshake, Eye } from "lucide-react";
import { useState } from "react";

interface DiscoverModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AMENITIES = [
  {
    title: "Double-Height Sky Lounge",
    subtitle: "Floor 42 Panoramic Escape",
    desc: "A sprawling glass-encased lounge hovering 180 meters above the metropolis, complete with custom Roche-Bobois furniture, private dining salons, and a custom bar.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    stats: { size: "4,500 sqft", height: "6.5 meters", capacity: "60 guests" }
  },
  {
    title: "Vitreous Infinity Pools",
    subtitle: "Zero-Edge Solariums",
    desc: "Featuring three fully climatized saltwater pools seamlessly integrating into the skyline. Surrounded by thermal daybeds and absolute private cabanas.",
    image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80",
    stats: { size: "2,200 sqft", temp: "28°C / 82°F", chem: "Saline Natural" }
  },
  {
    title: "Obsidian Private Cellar",
    subtitle: "Artisan Lounge & Storage",
    desc: "A biometric-secured vault featuring custom European white oak locker racks designed for vintage holding, curated by world-class on-call sommeliers.",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80",
    stats: { capacity: "12,000 Bottles", security: "Biometric Portal", temp: "12°C Controlled" }
  },
  {
    title: "Apex Sanctuary Spa & Wellness",
    subtitle: "Oasis for Body and Mind",
    desc: "Private steam hammam chambers, cryogenic pools, and customized treatment rooms serviced directly by high-end luxury spa practitioners.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    stats: { chambers: "4 Treatment", pools: "Cryo & Thermal", custom: "Herb Therapies" }
  }
];

export default function DiscoverModal({ isOpen, onClose }: DiscoverModalProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % AMENITIES.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + AMENITIES.length) % AMENITIES.length);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#1A1A1A]/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 15 }}
            transition={{ type: "spring", duration: 0.4 }}
            className="bg-[#FAF9F6] text-[#1A1A1A] border border-[#1A1A1A]/15 rounded-none overflow-hidden w-full max-w-5xl shadow-2xl relative z-10 flex flex-col md:flex-row max-h-[85vh] md:max-h-[80vh]"
          >
            {/* Close button with rectangular styling */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 p-2.5 bg-[#FAF9F6] hover:bg-[#1A1A1A] text-[#1A1A1A] hover:text-[#FAF9F6] border border-[#1A1A1A]/10 shadow-sm cursor-pointer transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left side: Immersive Image Carousel */}
            <div className="w-full md:w-1/2 relative bg-[#1A1A1A] h-56 md:h-auto overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeIndex}
                  src={AMENITIES[activeIndex].image}
                  alt={AMENITIES[activeIndex].title}
                  referrerPolicy="no-referrer"
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>

              {/* Navigation dots & arrows in minimal line format */}
              <div className="absolute inset-x-0 bottom-4 flex items-center justify-between px-6 z-10">
                <div className="flex gap-1 bg-[#1A1A1A]/80 p-1.5 border border-white/10 rounded-none backdrop-blur-sm">
                  {AMENITIES.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveIndex(idx)}
                      className={`h-1.5 transition-all duration-300 ${
                        idx === activeIndex ? "w-5 bg-white" : "w-1.5 bg-white/40 hover:bg-white"
                      }`}
                    />
                  ))}
                </div>

                <div className="flex gap-1">
                  <button
                    onClick={handlePrev}
                    className="p-2 text-[#121212] bg-[#FAF9F6] hover:bg-[#C2410C] hover:text-white rounded-none cursor-pointer transition-colors text-xs font-bold"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="p-2 text-[#121212] bg-[#FAF9F6] hover:bg-[#C2410C] hover:text-white rounded-none cursor-pointer transition-colors text-xs font-bold"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right side: Detailed Description */}
            <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-between overflow-y-auto">
              <div className="space-y-4 pt-4 md:pt-2">
                <div className="flex items-center gap-2">
                  <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-[#C2410C] bg-[#C2410C]/10 px-2.5 py-1">
                    Velora High Haven Experience
                  </span>
                </div>
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                    transition={{ duration: 0.25 }}
                  >
                    <h3 className="text-3xl font-serif font-semibold italic text-[#1A1A1A] tracking-tight">
                      {AMENITIES[activeIndex].title}
                    </h3>
                    <h5 className="text-[10px] uppercase tracking-widest font-bold text-[#C2410C]/80 mt-1">
                      {AMENITIES[activeIndex].subtitle}
                    </h5>
                    <p className="text-[#1A1A1A]/75 text-sm leading-relaxed mt-4">
                      {AMENITIES[activeIndex].desc}
                    </p>

                    {/* Stats details in structured editorial boxes */}
                    <div className="grid grid-cols-3 gap-2 mt-6 pt-6 border-t border-[#1A1A1A]/10">
                      {Object.entries(AMENITIES[activeIndex].stats).map(([key, val]) => (
                        <div key={key} className="bg-[#EAE8E2]/50 p-2.5 rounded-none border border-[#1A1A1A]/10">
                          <p className="text-[8px] font-bold text-[#1A1A1A]/50 uppercase tracking-widest">
                            {key}
                          </p>
                          <p className="text-[11px] font-bold text-[#1A1A1A] mt-0.5 truncate">
                            {val}
                          </p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Decorative Trust badge resembling blueprint specification */}
              <div className="mt-8 p-4 bg-[#EAE8E2] rounded-none border border-[#1A1A1A]/10 flex items-start gap-3">
                <div className="p-1.5 bg-white border border-[#1A1A1A]/10 text-[#C2410C] shadow-sm shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#1A1A1A]">
                    Fully Customizable Penthouses
                  </h4>
                  <p className="text-[11px] text-[#1A1A1A]/70 mt-1 leading-normal">
                    Select layouts are subject to bespoke architect consultations prior to structural handover.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
