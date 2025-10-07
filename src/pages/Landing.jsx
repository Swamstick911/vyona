import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Landing = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);
  const orbRef = useRef(null);
  const particlesRef = useRef([]);
  const cursorRef = useRef(null);

  // Create particle elements for background
  useEffect(() => {
    const particleContainer = document.createElement("div");
    particleContainer.className = "absolute inset-0 overflow-hidden z-0";
    document.body.appendChild(particleContainer);

    for (let i = 0; i < 50; i++) {
      const particle = document.createElement("div");
      particle.className =
        "absolute bg-white/30 rounded-full blur-[1px]";
      const size = Math.random() * 3 + 1;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particleContainer.appendChild(particle);
      particlesRef.current.push(particle);
    }

    // Floating particles animation
    particlesRef.current.forEach((particle) => {
      gsap.to(particle, {
        y: `random(-20, 20)`,
        x: `random(-10, 10)`,
        duration: `random(3,6)`,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    return () => {
      particleContainer.remove();
    };
  }, []);

  // GSAP entrance + floating title + orb animation
  useEffect(() => {
    gsap.fromTo(
      [titleRef.current, subtitleRef.current, buttonRef.current],
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.3,
        duration: 1.5,
        ease: "power3.out",
      }
    );

    // Gentle title float
    gsap.to(titleRef.current, {
      y: 10,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Magic orb float
    gsap.to(orbRef.current, {
      y: 20,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  // Custom glowing cursor trail
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.className =
      "fixed w-6 h-6 rounded-full bg-gradient-to-r from-fuchsia-400 to-violet-600 blur-[8px] pointer-events-none z-50";
    document.body.appendChild(cursor);
    cursorRef.current = cursor;

    const coords = { x: 0, y: 0 };
    window.addEventListener("mousemove", (e) => {
      coords.x = e.clientX;
      coords.y = e.clientY;
    });

    gsap.ticker.add(() => {
      gsap.to(cursor, {
        x: coords.x - 12,
        y: coords.y - 12,
        duration: 0.15,
        ease: "power2.out",
      });
    });

    return () => {
      cursor.remove();
      gsap.ticker.remove(() => {});
    };
  }, []);

  return (
    <div className="h-screen w-full bg-gradient-to-br from-[#0b001a] via-[#160040] to-[#2a006e] text-white flex flex-col md:flex-row items-center justify-center overflow-hidden relative px-8 select-none">
      {/* Left Content */}
      <div className="md:w-1/2 z-10">
        <h1
          ref={titleRef}
          className="text-7xl py-4 md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#7b00ff] via-[#00fff0] to-[#ffb300] drop-shadow-[0_0_25px_rgba(69,209,237,0.3)] mb-8 z-10"
        >
          Vyona
        </h1>
        <h2
          ref={subtitleRef}
          className="text-xl md:text-2xl text-gray-300 mb-6"
        >
          Enter the world where ideas levitate,
          <br />
          and creation bends to your will.
        </h2>

        <p className="text-gray-400 max-w-md mb-8 leading-relaxed">
          Vyona is your portal to the mystical side of modern web design —
          glowing gradients, enchanted animations, and spells of interaction
          powered by GSAP & React. Step into a world where your imagination
          shapes the magic.
        </p>

        <button
            ref={buttonRef}
            className="group relative overflow-hidden px-8 py-3 font-semibold rounded-full text-white tracking-wide transition-transform duration-300 transform hover:scale-110 hover:shadow-[0_0_25px_rgba(147,51,234,0.5)]"
        >
            {/* Magical gradient background */}
            <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-400 opacity-90 group-hover:opacity-100 transition-all duration-500 blur-sm group-hover:blur-lg"></span>

            {/* Subtle light ring on hover */}
            <span className="absolute inset-0 rounded-full border border-white/10 group-hover:border-fuchsia-300/30 transition-all duration-500"></span>

            {/* Glowing shine sweep effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-700 ease-out"></span>

            <span className="relative z-10 flex items-center gap-2">
                Enter the Realm
                <span className="text-fuchsia-300 animate-pulse"></span>
            </span>
        </button>

      </div>

      {/* Right Animation */}
      <div className="md:w-1/2 flex justify-center items-center relative mt-10 md:mt-0">
        <div
          ref={orbRef}
          className="w-56 h-56 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-2xl opacity-80 animate-pulse shadow-[0_0_100px_20px_rgba(168,85,247,0.4)]"
        ></div>
        <div className="absolute w-80 h-80 rounded-full border border-violet-500/20 animate-spin-slow"></div>
      </div>
    </div>
  );
};

export default Landing;
