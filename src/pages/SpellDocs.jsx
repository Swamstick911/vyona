// src/pages/SpellDocs.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { spells } from "../components/data";
import { gsap } from "gsap";
import MagicButton from "../components/MagicButton";
import SignUpForm from "../components/SignUpForm";
import MagicToggle from "../components/MagicToggle";
import MysticOrbLoader from "../components/MysticOrbLoader";
import VyonaNavbar from "../components/VyonaNavbar";
import MagicalModal from "../components/MagicalModal";
import MagicalModalPreview from "../components/MagicalModalPreview";
import MagicCard from "../components/MagicCard";

const SpellDocs = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const spell = spells.find((s) => s.id === parseInt(id, 10));
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    // small entrance animation for live preview when the spell is present
    if (!spell) return;
    const el = document.querySelector("#live-preview");
    if (el) {
      gsap.fromTo(el, { y: 8, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" });
    }
  }, [spell]);

  if (!spell) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#150030] via-[#240055] to-[#3a0077] flex flex-col items-center justify-center text-white text-center p-6">
        <h1 className="text-4xl font-bold mb-4 text-fuchsia-400">Spell Not Found</h1>
        <button
          onClick={() => navigate(-1)}
          className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg hover:scale-105 transition-transform"
        >
          Return
        </button>
      </div>
    );
  }

  const renderPreview = () => {
    switch (spell.type) {
      case "button":
        return (
          <MagicButton />
        );

      case "input":
        return (
          <input
            id="live-preview"
            className={`px-4 py-2 rounded-xl text-white bg-black/20 placeholder-gray-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-white transition-all w-64 shadow-[0_0_15px_rgba(255,255,255,0.18)]`}
            placeholder="Type here..."
            onFocus={(e) => gsap.to(e.currentTarget, { boxShadow: `0 0 18px rgba(255,255,255,0.12)`, duration: 0.25 })}
            onBlur={(e) => gsap.to(e.currentTarget, { boxShadow: `0 0 8px rgba(0,0,0,0.12)`, duration: 0.25 })}
          />
        );

      case "orb":
        return (
          <div
            id="live-preview"
            className={`w-20 h-20 rounded-full bg-gradient-to-r ${spell.colorGradient} shadow-[0_0_28px_rgba(255,255,255,0.35)] animate-pulse`}
          />
        );

      case "form":
        return (
          <SignUpForm />
        );
      
      case "toggle":
        return (
          <MagicToggle />
        );

      case "loader":
        return <MysticOrbLoader />;

      case "navbar":
        return (
          <div
            id="live-preview"
            className="w-full max-w-3xl rounded-2xl p-4 shadow-lg flex justify-center"
          >
            <VyonaNavbar preview />
          </div>
        );

      case "modal":
        return (
          <div
            id="live-preview"
            className="flex justify-center items-center min-h-[300px] w-full"
          >
            <MagicalModalPreview />
          </div>
        );

      case "card":
        return (
          <div id="live-preview" className="flex justify-center">
            <MagicCard />
          </div>
        );


      default:
        return null;
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(spell.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch (err) {
      console.error("Copy failed", err);
      setCopied(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#150030] via-[#240055] to-[#3a0077] text-white flex flex-col items-center justify-start px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-3xl flex flex-col items-center text-center"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 pb-4 bg-gradient-to-r from-violet-400 via-fuchsia-400 to-yellow-300 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(255,200,255,0.3)]">
          {spell.title}
        </h1>

        <p className="text-fuchsia-300 text-lg mb-6 italic">"{spell.description}"</p>

        {/* Live Preview */}
        <div className="my-10 flex justify-center">
          {renderPreview()}
        </div>



        {/* Code Block */}
        <div className="w-full bg-black/40 backdrop-blur-lg border border-white/10 rounded-xl p-6 text-left font-mono text-sm text-fuchsia-100 shadow-[0_0_20px_rgba(255,255,255,0.05)] relative">
          <button
            aria-label="Copy code"
            className="absolute top-2 right-3 text-xs text-gray-300 bg-white/10 px-2 py-1 rounded hover:bg-white/20 transition-all"
            onClick={handleCopy}
          >
            {copied ? "Copied!" : "Copy"}
          </button>
          <pre className="whitespace-pre-wrap break-words">{spell.code}</pre>
        </div>

        {/* Back Button */}
        <button
          onClick={() => navigate("/gallery")}
          className="mt-12 px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg hover:scale-105 transition-transform"
        >
          Back to Gallery
        </button>
      </motion.div>
    </div>
  );
};

export default SpellDocs;
