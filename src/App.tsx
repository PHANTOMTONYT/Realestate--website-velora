import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Sparkles, AlertCircle, Bookmark, Compass, Landmark, Hotel, Sliders } from "lucide-react";
import Header from "./components/Header";
import DiscoverModal from "./components/DiscoverModal";
import InquiryModal from "./components/InquiryModal";
import PropertyViewer from "./components/PropertyViewer";
import { categoriesData } from "./data";
import { Category } from "./types";

// Import building image directly
// @ts-ignore
import buildingImg from "./assets/images/modular_building_transparent.png";

export default function App() {
  const [activeSection, setActiveSection] = useState("Home");
  const [isDiscoverOpen, setIsDiscoverOpen] = useState(false);
  const [isInquireOpen, setIsInquireOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  const [inquiryProperty, setInquiryProperty] = useState("General Interest");

  const openInquiryModal = (propertyTitle: string = "General Interest") => {
    setInquiryProperty(propertyTitle);
    setIsInquireOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#AB98AF] p-0 md:px-12 flex justify-center relative selection:bg-[#990FAF] selection:text-white">
      {/* Content wrapper with light lavender background, with left and right margins */}
      <div className="w-full max-w-[1440px] bg-[#E8D5EB] text-[#4D3852] flex flex-col items-center justify-between relative overflow-visible font-sans pb-12 shadow-2xl">

        {/* Navigation Header */}
        <Header
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          onInquireClick={() => openInquiryModal("General Portfolio Inquiry")}
        />

        {/* Main Container Core */}
        <main className="w-full flex-1 max-w-7xl mx-auto px-4 md:px-12 mt-2 md:mt-4 relative z-10 flex flex-col justify-between">

          {/* Layer 1: Massive Background Text "HIGH HAVEN" */}
          <div className="relative w-full text-center pointer-events-none select-none h-28 md:h-36 flex items-center justify-center overflow-visible z-0 -mb-6 md:-mb-8">
            <h1 className="text-[12vw] font-display font-black tracking-[-0.04em] uppercase text-[#4D3852]/80 leading-none">
              HIGH HAVEN
            </h1>
          </div>

          {/* Layer 2: Main Immersive Dashboard Panel */}
          <div className="w-full relative bg-gradient-to-b from-[#110714] to-[#A016B4] text-white rounded-[48px] border border-[#1A1A1A]/5 overflow-visible h-[680px] md:h-[620px] shadow-2xl">

            {/* Ambient Purple Light Leak / Glow */}
            <div className="absolute bottom-0 left-12 w-64 h-64 bg-[#E8D5EB]/10 rounded-full blur-[90px] pointer-events-none" />
            <div className="absolute top-12 right-12 w-64 h-64 bg-white/5 rounded-full blur-[80px] pointer-events-none" />

            {/* Absolute Building Container */}
            <div className="absolute bottom-0 left-[55%] -translate-x-1/2 w-full z-20 pointer-events-none overflow-visible flex items-end justify-center">
              <motion.div
                initial={{ y: "15%", opacity: 0 }}
                animate={{ y: "5%", opacity: 1 }}
                transition={{ type: "spring", stiffness: 90, damping: 14, delay: 0.2 }}
                className="relative z-20 overflow-visible flex items-end pointer-events-auto"
              >
                <img
                  src={buildingImg}
                  alt="Building"
                  className="
                    relative
                    z-20
                    object-contain
                    w-auto
                    h-[572px] md:h-[825px]
                    max-w-[95%]
                    select-none
                    hover:scale-[1.01]
                    transition-transform
                    duration-500
                    cursor-zoom-in
                  "
                  style={{
                    filter: "drop-shadow(0 40px 60px rgba(0,0,0,0.6)) drop-shadow(0 0 45px rgba(153,15,175,0.35))"
                  }}
                  onClick={() => setIsDiscoverOpen(true)}
                />
              </motion.div>
            </div>


          </div>

          {/* Layer 3: Grid Cards / Portfolio Categories */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 md:mt-16 w-full relative z-10">
            {categoriesData.map((category) => {
              return (
                <button
                  key={category.id}
                  id={`card-${category.id}`}
                  onClick={() => setSelectedCategory(category)}
                  className="cursor-pointer group text-left bg-[#F5ECF7]/80 hover:bg-white border border-[#4D3852]/10 p-8 rounded-[24px] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-44 hover:-translate-y-1"
                >
                  <div className="space-y-2">
                    <h3 className="font-sans font-bold text-xl text-[#4D3852] tracking-tight group-hover:text-[#990FAF] transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-xs text-[#4D3852]/80 leading-relaxed font-normal">
                      {category.subtitle}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

        </main>

        {/* Footer minimal signature */}
        <footer className="mt-20 w-full text-center text-[10px] uppercase tracking-[0.2em] font-bold text-[#4D3852]/60 select-none px-4 max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between border-t border-[#4D3852]/10 pt-8 gap-4">
          <p>&copy; 2026 Velora™ International. Atelier Aurelius Curation.</p>
          <div className="flex gap-6">
            <button onClick={() => openInquiryModal("General Brokerage Advisory")} className="hover:text-[#990FAF] cursor-pointer transition-colors">Brokerage Registry</button>
            <span>&mdash;</span>
            <button onClick={() => setIsDiscoverOpen(true)} className="hover:text-[#990FAF] cursor-pointer transition-colors">Press room</button>
          </div>
        </footer>

        {/* Slide-over Inquiry Drawer Modal */}
        <InquiryModal
          isOpen={isInquireOpen}
          onClose={() => setIsInquireOpen(false)}
          defaultProperty={inquiryProperty}
        />

        {/* Discover Interior Experience Modal */}
        <DiscoverModal
          isOpen={isDiscoverOpen}
          onClose={() => setIsDiscoverOpen(false)}
        />

        {/* Active Luxury Property Grid Viewer */}
        <PropertyViewer
          category={selectedCategory}
          onClose={() => setSelectedCategory(null)}
          onInquireProperty={(title) => {
            setSelectedCategory(null);
            // Small delay for natural modal transition pacing
            setTimeout(() => {
              openInquiryModal(title);
            }, 350);
          }}
        />

      </div>
    </div>
  );
}
