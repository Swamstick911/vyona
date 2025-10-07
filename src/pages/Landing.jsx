import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Landing = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);
  const mainOrbRef = useRef(null);
  const miniOrbsRef = useRef([]);
  const ringsRef = useRef([]);
  const particlesRef = useRef([]);

  // Background particles
  useEffect(() => {
    const particleContainer = document.createElement("div");
    particleContainer.className = "absolute inset-0 overflow-hidden z-0";
    document.body.appendChild(particleContainer);

    for (let i = 0; i < 50; i++) {
      const particle = document.createElement("div");
      particle.className = "absolute bg-white/30 rounded-full blur-[1px]";
      const size = Math.random() * 3 + 1;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particleContainer.appendChild(particle);
      particlesRef.current.push(particle);
    }

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

  // Entrance animations + floating orbs
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

    gsap.to(titleRef.current, {
      y: 10,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(mainOrbRef.current, {
      y: 20,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    miniOrbsRef.current.forEach((orb) => {
      gsap.to(orb, {
        y: `random(-20, 20)`,
        x: `random(-20, 20)`,
        duration: `random(3,6)`,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    ringsRef.current.forEach((ring, i) => {
      gsap.to(ring, {
        rotation: i % 2 === 0 ? 360 : -360,
        duration: 20 + i * 5,
        repeat: -1,
        ease: "linear",
      });
    });
  }, []);

  // Click sparkle animation
  useEffect(() => {
    const handleClick = (e) => {
      const burst = document.createElement("div");
      burst.className =
        "absolute w-4 h-4 rounded-full bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-400 opacity-80 pointer-events-none blur-sm";
      burst.style.left = `${e.clientX - 2}px`;
      burst.style.top = `${e.clientY - 2}px`;
      document.body.appendChild(burst);

      gsap.fromTo(
        burst,
        { scale: 0, opacity: 1 },
        {
          scale: 3,
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
          onComplete: () => burst.remove(),
        }
      );
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
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
        <h2 ref={subtitleRef} className="text-xl md:text-2xl text-gray-300 mb-6">
          Enter the world where ideas levitate,
          <br />
          and creation bends to your will.
        </h2>

        <p className="text-gray-400 max-w-md mb-8 leading-relaxed">
          With dazzling gradients, captivating animations, and interactive spells powered by GSAP & React, Vyona is your gateway to the magical side of contemporary web design. Enter a realm where the magic is shaped by your imagination.
        </p>

        <button
          ref={buttonRef}
          className="group relative overflow-hidden px-8 py-3 font-semibold rounded-full text-white tracking-wide transition-transform duration-300 transform hover:scale-110 hover:shadow-[0_0_25px_rgba(147,51,234,0.5)]"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-400 opacity-90 group-hover:opacity-100 transition-all duration-500 blur-sm group-hover:blur-lg"></span>
          <span className="absolute inset-0 rounded-full border border-white/10 group-hover:border-fuchsia-300/30 transition-all duration-500"></span>
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-700 ease-out"></span>
          <span className="relative z-10 flex items-center gap-2">
            Enter the Realm
            <span className="text-fuchsia-300 animate-pulse"></span>
          </span>
        </button>
      </div>

      {/* Right-side Magical Orb Cluster */}
      <div className="md:w-1/2 flex justify-center items-center relative mt-10 md:mt-0">
        <div
          ref={mainOrbRef}
          className="w-56 h-56 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-2xl opacity-80 shadow-[0_0_100px_20px_rgba(168,85,247,0.4)]"
        ></div>

        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            ref={(el) => (ringsRef.current[i] = el)}
            className={`absolute w-${80 + i * 20} h-${80 + i * 20} rounded-full border border-violet-500/20`}
          ></div>
        ))}

        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            ref={(el) => (miniOrbsRef.current[i] = el)}
            className="absolute w-6 h-6 bg-gradient-to-r from-indigo-400 to-fuchsia-400 rounded-full blur-sm opacity-70"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Landing;
