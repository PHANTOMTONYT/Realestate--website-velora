import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

interface HeaderProps {
  onInquireClick: () => void;
  activeSection: string;
  setActiveSection: (sec: string) => void;
}

export default function Header({ onInquireClick, activeSection, setActiveSection }: HeaderProps) {
  const navItems = ["Home", "Our Story", "Properties", "Communities"];

  return (
    <header className="w-full flex items-center justify-between px-6 py-6 md:px-12 bg-transparent z-40 relative">
      {/* Brand Logo in refined serif */}
      <div className="flex items-center">
        <span className="font-serif font-bold text-2xl tracking-wide text-[#4D3852] flex items-baseline">
          Velora<span className="text-[10px] tracking-normal font-sans font-semibold ml-0.5 self-start -mt-0.5 select-none text-[#4D3852]">™</span>
        </span>
      </div>

      {/* Navigation items (Centered, using clean tracking list) */}
      <nav className="hidden md:flex items-center space-x-10">
        {navItems.map((item) => {
          const isActive = activeSection === item;
          return (
            <button
              key={item}
              id={`nav-${item.toLowerCase().replace(/\s+/g, "-")}`}
              onClick={() => setActiveSection(item)}
              className={`relative cursor-pointer text-xs font-bold uppercase tracking-widest transition-all duration-300 py-2 ${
                isActive 
                  ? "text-[#4D3852]" 
                  : "text-[#4D3852]/60 hover:text-[#4D3852]"
              }`}
            >
              {item}
            </button>
          );
        })}
      </nav>

      {/* Dynamic button for Inquiries in pink pill style */}
      <div>
        <button
          id="inquire-btn-header"
          onClick={onInquireClick}
          className="group cursor-pointer flex items-center gap-3 bg-gradient-to-r from-[#D622E6] to-[#990FAF] hover:from-[#E632F6] hover:to-[#A91FBF] text-white pl-5 pr-1 py-1 rounded-full text-xs uppercase tracking-widest font-bold transition-all duration-300 shadow-md shadow-[#990FAF]/15 hover:shadow-lg"
        >
          <span className="mr-1">Inquire Now</span>
          <span className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-[#990FAF] transition-transform duration-300 group-hover:scale-105">
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </span>
        </button>
      </div>
    </header>
  );
}
