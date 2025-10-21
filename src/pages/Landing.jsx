import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);

  const navigate = useNavigate();

  const enterGallery = () => {
    navigate("/gallery");
  };

  return (
    <div className="h-screen w-full flex items-center justify-center overflow-hidden relative px-8 select-none bg-gradient-to-br from-[#150030] via-[#240055] to-[#3a0077]">
      <div className="flex flex-col items-center justify-center text-center">
        <h1
          ref={titleRef}
          className="text-7xl py-4 md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#7b00ff] via-[#00fff0] to-[#ffb300] drop-shadow-[0_0_25px_rgba(69,209,237,0.3)] mb-8"
        >
          Vyona
        </h1>

        <h2
          ref={subtitleRef}
          className="text-xl md:text-2xl text-gray-300 mb-6"
        >
          Enter the world where ideas levitate,
          <br /> and creation bends to your will.
        </h2>

        <p className="text-gray-400 max-w-md mb-8 leading-relaxed">
          Crafted with React and Tailwind, Vyona is a realm of interactive magic
          where design becomes alive, and imagination shapes every element.
        </p>

        <button
          onClick={enterGallery}
          ref={buttonRef}
          className="group relative overflow-hidden px-8 py-3 font-semibold rounded-full text-white tracking-wide transition-transform duration-300 transform hover:scale-110 hover:shadow-[0_0_25px_rgba(147,51,234,0.5)]"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-400 opacity-90 group-hover:opacity-100 transition-all duration-500 blur-sm group-hover:blur-lg"></span>
          <span className="absolute inset-0 rounded-full border border-white/10 group-hover:border-fuchsia-300/30 transition-all duration-500"></span>
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-700 ease-out"></span>
          <span className="relative z-10 flex items-center gap-2">
            Enter the Realm <span className="text-fuchsia-300 animate-pulse" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Landing;
