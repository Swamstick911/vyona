// src/pages/Gallery.jsx
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { spells } from "../components/data";
import MagicButton from "../components/MagicButton";
import SignUpForm from "../components/SignUpForm";

const Gallery = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const renderPreview = (spell) => {
    switch (spell.type) {
      case "input":
        return (
          <input
            className="w-48 px-4 py-2 rounded-xl text-white bg-black/20 placeholder-gray-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-white shadow-[0_0_15px_rgba(255,255,255,0.18)]"
            placeholder="Type here..."
          />
        );
      case "orb":
        return (
          <div
            className={`w-16 h-16 rounded-full bg-gradient-to-r ${spell.colorGradient} shadow-[0_0_20px_rgba(255,255,255,0.35)] animate-pulse`}
          />
        );
      default:
        return null;
      
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#150030] via-[#240055] to-[#3a0077] text-white flex flex-col items-center justify-start px-6 py-20">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-violet-400 via-fuchsia-400 to-yellow-300 bg-clip-text text-transparent"
      >
        Vyona Component Gallery
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl"
      >
        {spells.map((spell) => (
          <div
            key={spell.id}
            onClick={() => navigate(`/gallery/${spell.id}`)}
            className="cursor-pointer relative rounded-xl p-6 flex flex-col items-center text-center bg-white/5 backdrop-blur-md border border-white/20 hover:scale-105 transition-transform duration-300 shadow-lg"
          >
            {/* Live Preview */}
            <div className="mb-6 w-full flex justify-center">{renderPreview(spell)}</div>

            {/* Title & Description */}
            <h3 className="text-xl font-bold text-white mb-2">{spell.title}</h3>
            <p className="text-gray-300 text-sm">{spell.description}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Gallery;
