import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const MagicalModal = ({ isOpen = true, onClose = () => {}, children }) => {
  const modalRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    if (isOpen && modalRef.current && overlayRef.current) {
      gsap.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.4, ease: "power2.out" }
      );
      gsap.fromTo(
        modalRef.current,
        { y: 60, scale: 0.85, opacity: 0 },
        { y: 0, scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.8)" }
      );
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      onClick={onClose}
      className="fixed inset-0 z-40 flex items-center justify-center bg-black/60 backdrop-blur-md"
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className="relative z-50 w-[420px] h-[280px] rounded-2xl flex flex-col justify-center items-center bg-gradient-to-br from-[#1e003b]/90 to-[#3b0077]/90 border border-white/20 shadow-[0_0_30px_rgba(170,0,255,0.35)] text-white text-center overflow-hidden"
      >
        {/* Soft Aura Glow */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-fuchsia-500/10 via-purple-500/10 to-indigo-500/10 blur-xl animate-pulse pointer-events-none"></div>

        {/* Actual content */}
        <div className="relative z-10 px-6">
          {children || (
            <>
              <h2 className="text-2xl font-extrabold mb-2 bg-gradient-to-r from-fuchsia-400 via-purple-300 to-indigo-300 bg-clip-text text-transparent">
                ✨ Magical Modal ✨
              </h2>
              <p className="text-sm text-white/70 mb-5">
                Balanced proportions, glowing energy, and smooth animation.
              </p>
              <button
                onClick={onClose}
                className="mt-2 px-6 py-2 bg-gradient-to-r from-fuchsia-500 to-purple-600 rounded-full font-medium hover:scale-105 transition-transform shadow-lg"
              >
                Close
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MagicalModal;
