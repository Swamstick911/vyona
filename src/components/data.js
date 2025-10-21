// src/components/data.js
export const spells = [
  {
    id: 1,
    title: "Vyona Orbit Button - Primary",
    description:
      "A glowing button with a smooth orbiting border, scaling and pulsing on hover/click, powered by GSAP with a glassmorphism effect.",
    type: "button",
    code: `import React, { useEffect, useRef } from "react";
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
          ? \`\0 0 25px \$\{color1}80, 0 0 50px \$\{color2}40\`
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
        background: \`\linear-gradient(90deg, \$\{color1}, \$\{color2})\`,
      }}
    >
      {/* Animated orbit border */}
      <span
        ref={borderRef}
        className="absolute inset-0 rounded-full p-[1.5px]"
        style={{
          background: \`\conic-gradient(from 0deg, \$\{borderColor} 0%, transparent 25%, \$\{borderColor} 50%, transparent 75%, \$\{borderColor} 100%)\`,
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
            background: \`\radial-gradient(circle at 50% 50%, \$\{color1}55, transparent 70%)\`,
          }}
        />
      )}
    </button>
  );
};

export default VyonaButton;`,
  },
  {
    id: 2,
    title: "Sign Up Form - Glassmorphism",
    description:
      "A magical Sign Up interface with glassmorphism, subtle glowing effects, and GSAP-powered button animations.",
    type: "form",
    code: `import React, { useRef } from "react";
import { gsap } from "gsap";

const SignUpForm = ({ embedded = false }) => {
  const btnRef = useRef(null);

  const handleHover = () => {
    gsap.to(btnRef.current, {
      scale: 1.05,
      boxShadow: "0 0 25px #8b5cf680, 0 0 50px #ec489950",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleHoverOut = () => {
    gsap.to(btnRef.current, {
      scale: 1,
      boxShadow: "none",
      duration: 0.3,
      ease: "power2.inOut",
    });
  };

  const handleClick = () => {
    gsap.fromTo(
      btnRef.current,
      { scale: 1.05 },
      { scale: 0.95, duration: 0.1, yoyo: true, repeat: 1, ease: "power1.inOut" }
    );
  };

  return (
    <div
      className={\`\flex items-center justify-center px-4 \$\{
        embedded ? "w-full h-full py-2" : "min-h-screen py-20"
      }\`}
    >
      <div
        className={\`\w-full max-w-md \$\{
          embedded ? "p-4" : "p-8"
        } bg-black/30 backdrop-blur-xl rounded-2xl shadow-lg transform transition-transform hover:scale-105\`}
        style={{
          border: "1px solid rgba(255,255,255,0.1)",
          boxShadow: embedded
            ? "0 0 15px rgba(255,255,255,0.1)"
            : "0 0 25px rgba(255,255,255,0.2)",
        }}
      >
        <h2
          className="text-3xl font-bold mb-2 text-center bg-gradient-to-r from-violet-400 via-fuchsia-400 to-yellow-300 bg-clip-text text-transparent"
          style={{ fontSize: embedded ? "1rem" : "1.75rem" }}
        >
          Sign Up
        </h2>
        {!embedded && (
          <p className="text-fuchsia-300 text-center mb-4">
            Subtitle
          </p>
        )}

        <div className={\`\space-y-2 \$\{embedded ? "" : "mb-4"}\`}>
          <input
            className={\`\w-full px-3 py-2 rounded-xl text-white bg-black/20 placeholder-gray-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-white transition-all shadow-[0_0_10px_rgba(255,255,255,0.15)] \$\{
              embedded ? "text-sm py-1" : "text-base py-3"
            }\`}
            placeholder="Full Name"
          />
          <input
            className={\`\w-full px-3 py-2 rounded-xl text-white bg-black/20 placeholder-gray-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-white transition-all shadow-[0_0_10px_rgba(255,255,255,0.15)] \$\{
              embedded ? "text-sm py-1" : "text-base py-3"
            }\`}
            placeholder="Email"
          />
          <input
            type="password"
            className={\`\w-full px-3 py-2 rounded-xl text-white bg-black/20 placeholder-gray-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-white transition-all shadow-[0_0_10px_rgba(255,255,255,0.15)] \$\{
              embedded ? "text-sm py-1" : "text-base py-3"
            }\`}
            placeholder="Password"
          />
        </div>

        <div className="mt-3">
          <button
            ref={btnRef}
            onMouseEnter={handleHover}
            onMouseLeave={handleHoverOut}
            onClick={handleClick}
            className={\`\w-full rounded-full font-semibold text-white bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-400 tracking-wide transition-transform \$\{
              embedded ? "py-2 text-sm" : "py-3 text-base"
            }\`}
          >
            Create Account
          </button>
        </div>

        {!embedded && (
          <p className="text-sm text-gray-300 mt-3 text-center">
            Already have an account?{" "}
            <span className="text-white underline cursor-pointer">Login</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default SignUpForm;`,
  },
  {
    id: 3,
    title: "Magic Toggle - Glassmorphic",
    description:
      "A magical toggle switch with glowing handle, GSAP animation, and sparkles when active, perfect for interactive UIs.",
    type: "toggle",
    code: `iimport React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

const MagicToggle = ({ size = "md", onToggle }) => {
    const [active, setActive] = useState(false);
    const toggleRef = useRef(null);
    const handleRef = useRef(null);

    const sizes = {
        sm: { width: 50, height: 25, handle: 20 },
        md: { width: 70, height: 35, handle: 30 },
        lg: { width: 100, height: 50, handle: 40 },
    };

    const { width, height, handle } = sizes[size] || sizes.md;

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { duration: 0.4, ease: "power2.out" } });
        if (active) {
            tl.to(handleRef.current, { x: width - handle - 4, backgroundColor: "#ec4899", boxShadow: "0 0 15px #ec489980" })
                .to(toggleRef.current, { backgroundColor: "rgba(236,72,153,0.25)" }, 0);
        } else {
            tl.to(handleRef.current, { x: 2, backgroundColor: "#8b5cf6", boxShadow: "0 0 10px #8b5cf680" })
                .to(toggleRef.current, { backgroundColor: "rgba(139,92,246,0.25)" }, 0);
        }
    }, [active, width, handle]);

    const handleClick = () => {
        setActive(!active);
        if (onToggle) onToggle(!active);
    };

    return (
        <div
            ref={toggleRef}
            onClick={handleClick}
            className="relative rounded-full transition-colors duration-300"
            style={{
                width: \`\${width}px\`,
                height: \`\${height}px\`,
                background: "rgba(139,92,246,0.25)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.1)",
                boxShadow: "0 0 15px rgba(139,92,246,0.4)",
            }}
        >
            <div
                ref={handleRef}
                className="absolute top-1/2 -translate-y-1/2 rounded-full"
                style={{
                    width: \`\${handle}px\`,
                    height: \`\${handle}px\`,
                    background: "#8b5cf6",
                    left: "2px",
                    boxShadow: "0 0 10px #8b5cf680",
                }} />
        </div>
    );
};

export default MagicToggle;`,
  },

  {
    id: 4,
    title: "Mystic Orb Loader",
    description: 
      "An interactive loader with some soothing effects",
    type: "loader",
    code: `import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const MysticOrbLoader = ({ size = 150, color1 = "#a855f7", color2 = "#ec4899" }) => {
    const orbRef = useRef(null);
    const ring1Ref = useRef(null);
    const ring2Ref = useRef(null);
    const sparksRef = useRef([]);

    useEffect(() => {
        gsap.to(orbRef.current, {
            scale: 1.05,
            repeat: -1,
            yoyo: true,
            duration: 1.6,
            ease: "power1.inOut",
        });

        gsap.to(ring1Ref.current, {
            rotate: 360,
            repeat: -1,
            duration: 10,
            ease: "none",
        });

        sparksRef.current.forEach((spark) => {
            gsap.to(spark, {
                opacity: 0,
                repeat: -1,
                yoyo: true,
                duration: gsap.utils.random(0.6, 1.4),
                delay: gsap.utils.random(0, 1),
            });
        });
    }, []);

    return (
        <div className="relative flex items-center justify-center">
            {/* Orb Glow */}
            <div
                ref={orbRef}
                className="rounded-full blur-2xl opacity-60"
                style={{
                    width: size,
                    height: size,
                    background: \`\radial-gradient(circle at center, \${color1}, \${color2}, transparent 70%)\`,
                    boxShadow:  \`\0 0 40px \${color1}80, 0 0 80px \${color2}50\`,
                }}
            />

            {/* Rotating Rings */}
            <div
                ref={ring1Ref}
                className="absolute rounded-full border-[2px] border-dashed opacity-70"
                style={{
                    width: size + 30,
                    height: size + 30,
                    borderColor: color1,
                }}
            ></div>

            <div
                ref={ring2Ref}
                className="absolute rounded-full borde-[2px] border-dashed opacity-60"
                style={{
                    width: size + 60,
                    height: size + 60,
                    borderColor: color2,
                }}
            ></div>

            {/* Sparks */}
            {[...Array(10)].map((_, i) => (
                <div
                    key={i}
                    ref={(el) => (sparksRef.current[i] = el)}
                    className="absolute rounded-full"
                    style={{
                        width: 6,
                        height: 6,
                        top: \`\${Math.random() * 100}%\`,
                        left: \`\${Math.random() * 100}%\`,
                        background: i % 2 === 0 ? color1 : color2,
                        filter: "blur(1px)",
                        opacity: 0.5,
                    }}
                />
            ))}
        </div>
    );
};

export default MysticOrbLoader;`
  },
  {
    id: 5,
    title: "Mystical Glow Navbar",
    description:
      "A floating magical navbar with glassmorphism, glowing gradient logo, GSAP entrance, and hover link animations.",
    type: "navbar",
    code: `import React, { useEffect, useRef } from "react";
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
      className={\`\${
        preview ? "relative" : "fixed top-4 left-1/2 -translate-x-1/2"
      } w-full max-w-4xl flex justify-between items-center px-6 py-3
         bg-black/30 backdrop-blur-xl border border-white/20 rounded-2xl
         shadow-[0_0_25px_rgba(255,255,255,0.2)]
         transition-all duration-400 hover:shadow-[0_0_40px_rgba(255,255,255,0.35)]
         bg-gradient-to-r from-violet-500/20 via-fuchsia-500/20 to-pink-500/20\`}
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

export default VyonaNavbar;`
  },
  {
    id: 6,
    title: "Magic Glass Card",
    description: "A mystical glassmorphic card with glowing effects and subtle animations",
    type: "card",
    code: `import React, { useRef, useEffect } from "react";
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
                 border-2 border-yellow-400 shadow-lg cursor-pointer overflow-hidden"
    >
      {/* Top corner sparkles */}
      <div className="absolute top-2 left-2 w-3 h-3 rounded-full bg-yellow-400 animate-pulse opacity-70"></div>
      <div className="absolute top-2 right-2 w-3 h-3 rounded-full bg-pink-400 animate-pulse opacity-70"></div>

      {/* Card content */}
      <h2 className="text-2xl font-bold text-yellow-300 mb-2">{title}</h2>
      <p className="text-white text-sm md:text-base">{description}</p>

      {/* Bottom decorative accent */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-16 h-1 rounded-full bg-yellow-300 opacity-60 animate-pulse"></div>
    </div>
  );
};

export default MagicCard;`
  }
];
