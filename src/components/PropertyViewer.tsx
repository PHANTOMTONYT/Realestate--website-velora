import { motion, AnimatePresence } from "motion/react";
import { X, BedDouble, Bath, Maximize, MapPin, Milestone, Star, Calendar } from "lucide-react";
import { Category, Property } from "../types";

interface PropertyViewerProps {
  category: Category | null;
  onClose: () => void;
  onInquireProperty: (propTitle: string) => void;
}

export default function PropertyViewer({ category, onClose, onInquireProperty }: PropertyViewerProps) {
  if (!category) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#1A1A1A]/80 backdrop-blur-md"
        />

        {/* Modal content body */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.98, y: 15 }}
          transition={{ type: "spring", duration: 0.4 }}
          className="bg-[#FAF9F6] rounded-none w-full max-w-5xl overflow-hidden shadow-2xl border border-[#1A1A1A]/15 z-10 flex flex-col max-h-[85vh]"
        >
          {/* Header */}
          <div className="p-6 md:p-8 border-b border-[#1A1A1A]/10 flex items-center justify-between bg-[#EAE8E2]">
            <div>
              <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-[#C2410C] bg-[#C2410C]/10 px-3 py-1">
                Luxury Curation
              </span>
              <h3 className="text-2xl font-serif italic font-bold text-[#1A1A1A] mt-1.5">
                {category.title}
              </h3>
              <p className="text-sm text-[#1A1A1A]/70 mt-0.5">
                {category.subtitle}
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2.5 bg-white border border-[#1A1A1A]/10 hover:bg-[#1A1A1A] text-[#1A1A1A] hover:text-white cursor-pointer transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Properties List Scroll Container with Editorial Layout */}
          <div className="flex-1 overflow-y-auto p-6 md:p-10 space-y-10">
            {category.properties.map((property, index) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.12, duration: 0.35 }}
                className="flex flex-col lg:flex-row gap-8 bg-[#FAF9F6] p-5 rounded-none border border-[#1A1A1A]/10 shadow-sm"
              >
                {/* Property Image Cover */}
                <div className="relative w-full lg:w-[42%] h-64 lg:h-auto min-h-[240px] rounded-none overflow-hidden bg-[#1A1A1A]">
                  <img
                    src={property.image}
                    alt={property.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.015]"
                  />
                  <div className="absolute top-4 left-4 bg-[#1A1A1A]/80 backdrop-blur-md px-3.5 py-1.5 rounded-none text-white text-[9px] uppercase tracking-widest font-bold border border-white/10 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#C2410C]" />
                    {property.location}
                  </div>
                </div>

                {/* Property Stats & Copy */}
                <div className="flex-1 flex flex-col justify-between space-y-6">
                  <div>
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <h4 className="text-xl font-serif font-bold text-[#1A1A1A]">
                          {property.title}
                        </h4>
                        <p className="text-[#C2410C] font-serif italic text-lg mt-0.5">
                          {property.price}
                        </p>
                      </div>
                      <span className="text-[9px] font-bold text-[#C2410C] bg-[#C2410C]/5 border border-[#C2410C]/20 rounded-none px-2.5 py-1 uppercase tracking-wider">
                        Available
                      </span>
                    </div>

                    <p className="text-[#1A1A1A]/80 text-sm leading-relaxed mt-4">
                      {property.description}
                    </p>

                    {/* Features Grid row */}
                    <div className="grid grid-cols-3 gap-2.5 mt-5">
                      <div className="bg-[#EAE8E2]/40 p-2.5 rounded-none border border-[#1A1A1A]/10 flex items-center gap-2">
                        <BedDouble className="w-4 h-4 text-[#C2410C]" />
                        <span className="text-xs text-[#1A1A1A] font-medium">{property.beds} Beds</span>
                      </div>
                      <div className="bg-[#EAE8E2]/40 p-2.5 rounded-none border border-[#1A1A1A]/10 flex items-center gap-2">
                        <Bath className="w-4 h-4 text-[#C2410C]" />
                        <span className="text-xs text-[#1A1A1A] font-medium">{property.baths} Baths</span>
                      </div>
                      <div className="bg-[#EAE8E2]/40 p-2.5 rounded-none border border-[#1A1A1A]/10 flex items-center gap-2">
                        <Maximize className="w-4 h-4 text-[#C2410C]" />
                        <span className="text-xs text-[#1A1A1A] font-medium">{property.sqft}</span>
                      </div>
                    </div>

                    {/* Quality Badges */}
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {property.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="bg-[#EAE8E2] text-[#1A1A1A]/70 text-[9px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-none border border-[#1A1A1A]/10"
                        >
                          ♦ {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Inquiry Form Trigger */}
                  <div className="pt-4 border-t border-[#1A1A1A]/10 flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-wider text-[#1A1A1A]/60 flex items-center gap-2">
                      <Milestone className="w-4 h-4 text-[#C2410C]" />
                      Individual custom design included
                    </span>
                    <button
                      onClick={() => onInquireProperty(`${property.title} (${property.location})`)}
                      className="cursor-pointer bg-[#1A1A1A] hover:bg-[#C2410C] text-white px-5 py-3 rounded-none text-xs uppercase tracking-widest font-bold transition-all"
                    >
                      Inquire on Property
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
