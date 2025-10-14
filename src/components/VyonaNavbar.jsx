import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const VyonaNavbar = ({ preview }) => {
  const navRef = useRef(null);

  useEffect(() => {
    if (navRef.current) {
      gsap.fromTo(
        navRef.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
      );
    }
  }, []);

  return (
    <nav
      ref={navRef}
      className={`${
        preview ? "relative" : "fixed top-4 left-1/2 -translate-x-1/2"
      } w-full max-w-4xl flex justify-between items-center px-6 py-3
         bg-black/30 backdrop-blur-xl border border-white/20 rounded-2xl
         shadow-[0_0_25px_rgba(255,255,255,0.2)]
         transition-all duration-400 hover:shadow-[0_0_40px_rgba(255,255,255,0.35)]
         bg-gradient-to-r from-violet-500/20 via-fuchsia-500/20 to-pink-500/20`}
    >


      {/* Links */}
      <ul className="flex space-x-6 text-white font-semibold text-sm md:text-base">
        {["Home", "Docs", "Gallery", "About"].map((item, idx) => (
          <li
            key={idx}
            className="relative cursor-pointer hover:text-yellow-300 transition-colors duration-300 group"
          >
            {item}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default VyonaNavbar;
