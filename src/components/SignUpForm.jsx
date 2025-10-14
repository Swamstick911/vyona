import React, { useRef } from "react";
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
      className={`flex items-center justify-center px-4 ${
        embedded ? "w-full h-full py-2" : "min-h-screen py-20"
      }`}
    >
      <div
        className={`w-full max-w-md ${
          embedded ? "p-4" : "p-8"
        } bg-black/30 backdrop-blur-xl rounded-2xl shadow-lg transform transition-transform hover:scale-105`}
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

        <div className={`space-y-2 ${embedded ? "" : "mb-4"}`}>
          <input
            className={`w-full px-3 py-2 rounded-xl text-white bg-black/20 placeholder-gray-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-white transition-all shadow-[0_0_10px_rgba(255,255,255,0.15)] ${
              embedded ? "text-sm py-1" : "text-base py-3"
            }`}
            placeholder="Full Name"
          />
          <input
            className={`w-full px-3 py-2 rounded-xl text-white bg-black/20 placeholder-gray-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-white transition-all shadow-[0_0_10px_rgba(255,255,255,0.15)] ${
              embedded ? "text-sm py-1" : "text-base py-3"
            }`}
            placeholder="Email"
          />
          <input
            type="password"
            className={`w-full px-3 py-2 rounded-xl text-white bg-black/20 placeholder-gray-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-white transition-all shadow-[0_0_10px_rgba(255,255,255,0.15)] ${
              embedded ? "text-sm py-1" : "text-base py-3"
            }`}
            placeholder="Password"
          />
        </div>

        <div className="mt-3">
          <button
            ref={btnRef}
            onMouseEnter={handleHover}
            onMouseLeave={handleHoverOut}
            onClick={handleClick}
            className={`w-full rounded-full font-semibold text-white bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-400 tracking-wide transition-transform ${
              embedded ? "py-2 text-sm" : "py-3 text-base"
            }`}
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

export default SignUpForm;
