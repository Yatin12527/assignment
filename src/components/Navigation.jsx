import { CiGlobe } from "react-icons/ci";
import { GoArrowUpRight } from "react-icons/go";
import { AiOutlineMenu } from "react-icons/ai";
import { HiOutlineXMark } from "react-icons/hi2";
import { useState } from "react";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full py-8 px-4 sm:px-6 lg:px-10 text-[#0A1F1A]">
      <div className="flex items-center justify-between max-w-[1600px] mx-auto">
        <div className="hidden lg:flex items-center gap-16">
          <div className="flex items-center gap-8 text-sm font-light tracking-wide">
            <a href="#home" className="hover:opacity-70 transition-opacity">
              HOME
            </a>
            <a href="#about" className="hover:opacity-70 transition-opacity">
              ABOUT
            </a>
            <a href="#events" className="hover:opacity-70 transition-opacity">
              EVENTS
            </a>
          </div>
        </div>
        <button
          className="lg:hidden flex items-center"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <HiOutlineXMark className="w-6 h-6" />
          ) : (
            <AiOutlineMenu className="w-6 h-6" />
          )}
        </button>

        <div className="lg:absolute lg:left-1/2 lg:-translate-x-1/2 flex items-center gap-2">
          <img src="/Logomark.png" alt="Logo" className="w-6 h-6" />
          <span className="font-serif text-xl tracking-widest">
            <i>L</i>UXORT
          </span>
        </div>

        <div className="hidden lg:flex items-center gap-8">
          <button className="flex items-center gap-2 text-sm font-light">
            <CiGlobe className="w-4 h-4" />
            <span>EN</span>
          </button>
          <span className="text-sm font-light border-l-2 pl-5 border-l-[#0A1F1A]">
            +123 7564 8970
          </span>
          <button className="flex items-center gap-2 text-sm font-light tracking-wide hover:opacity-70 transition-opacity">
            LOGIN
            <GoArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        <button className="lg:hidden flex items-center gap-1 text-sm font-light tracking-wide hover:opacity-70 transition-opacity">
          LOGIN
          <GoArrowUpRight className="w-4 h-4" />
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden mt-6 pb-4 flex flex-col gap-6 border-t border-[#0A1F1A]/20 pt-6">
          <div className="flex flex-col gap-4 text-sm font-light tracking-wide">
            <a
              href="#home"
              className="hover:opacity-70 transition-opacity"
              onClick={() => setMobileMenuOpen(false)}
            >
              HOME
            </a>
            <a
              href="#about"
              className="hover:opacity-70 transition-opacity"
              onClick={() => setMobileMenuOpen(false)}
            >
              ABOUT
            </a>
            <a
              href="#events"
              className="hover:opacity-70 transition-opacity"
              onClick={() => setMobileMenuOpen(false)}
            >
              EVENTS
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navigation;
