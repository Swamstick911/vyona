import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const VyonaButton = ({
  text = "Vyona Button",
  onClick,
  color1 = "#a855f7",
  color2 = "#6042f5",
  borderColor = "#ffffff",
  glow = true,
}) => {
  const buttonRef = useRef(null);
  const borderRef = useRef(null);

  useEffect(() => {
    const btn = buttonRef.current;
    const border = borderRef.current;

    // Animate gradient "orbit" around the border
    const borderAnim = gsap.to(border, {
      backgroundPosition: "400% 0",
      duration: 6, // slow, elegant orbit
      ease: "none",
      repeat: -1,
    });
    borderAnim.pause();

    // Hover start
    btn.addEventListener("mouseenter", () => {
      borderAnim.play();
      gsap.to(btn, {
        scale: 1.07,
        boxShadow: glow
          ? `0 0 25px ${color1}80, 0 0 50px ${color2}40`
          : "none",
        duration: 0.3,
      });
      gsap.to(border, { opacity: 1, duration: 0.4 });
    });

    // Hover end
    btn.addEventListener("mouseleave", () => {
      borderAnim.pause();
      gsap.to(btn, { scale: 1, boxShadow: "none", duration: 0.3 });
      gsap.to(border, { opacity: 0.15, duration: 0.4 });
    });

    // Click animation
    btn.addEventListener("click", () => {
      // Pulse the border
      gsap.fromTo(
        border,
        { opacity: 1, scale: 1 },
        { opacity: 0.5, scale: 1.1, duration: 0.25, yoyo: true, repeat: 1 }
      );

      // Subtle button pop
      gsap.fromTo(
        btn,
        { scale: 0.95 },
        { scale: 1.07, duration: 0.2, ease: "power2.out", yoyo: true, repeat: 1 }
      );
    });
  }, [color1, color2, borderColor, glow]);

  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      className="relative px-10 py-4 rounded-full font-semibold overflow-hidden focus:outline-none text-white"
      style={{
        background: `linear-gradient(90deg, ${color1}, ${color2})`,
      }}
    >
      {/* Animated orbit border */}
      <span
        ref={borderRef}
        className="absolute inset-0 rounded-full p-[1.5px]"
        style={{
          background: `conic-gradient(from 0deg, ${borderColor} 0%, transparent 25%, ${borderColor} 50%, transparent 75%, ${borderColor} 100%)`,
          backgroundSize: "400% 400%",
          opacity: 0.15,
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          pointerEvents: "none",
        }}
      />

      {/* Text */}
      <span className="relative z-10 tracking-wide">{text}</span>

      {/* Subtle inner glow */}
      {glow && (
        <span
          className="absolute inset-0 rounded-full blur-xl opacity-25 z-0"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${color1}55, transparent 70%)`,
          }}
        />
      )}
    </button>
  );
};

export default VyonaButton;
