import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const MagicCard = ({ title = "Magic Card", description = "Harness the forces of magic." }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    // subtle hover glow animation
    const el = cardRef.current;
    gsap.fromTo(
      el,
      { y: 0 },
      { y: -5, repeat: -1, yoyo: true, duration: 1.2, ease: "power1.inOut" }
    );
  }, []);

  return (
    <div
      ref={cardRef}
      className="relative w-72 md:w-80 p-5 rounded-xl bg-gradient-to-br from-purple-800 to-indigo-900 
                 shadow-lg cursor-pointer overflow-hidden"
    >
      {/* Card content */}
      <h2 className="text-2xl font-bold text-yellow-300 mb-2">{title}</h2>
      <p className="text-white text-sm md:text-base">{description}</p>

      {/* Bottom decorative accent */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-16 h-1 rounded-full bg-yellow-300 opacity-60 animate-pulse"></div>
    </div>
  );
};

export default MagicCard;
