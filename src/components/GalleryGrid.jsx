// src/components/GalleryGrid.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { spells } from "./data";
import MagicButton from "./MagicButton";
import SignUpForm from "./SignUpForm";

const GalleryGrid = () => {
  const navigate = useNavigate();

  const renderPreview = (spell) => {
    switch (spell.type) {
      case "input":
        return (
          <input
            className="w-36 px-3 py-2 rounded-xl text-white bg-black/20 placeholder-gray-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-white shadow-[0_0_10px_rgba(255,255,255,0.12)]"
            placeholder="Type..."
          />
        );
      case "orb":
        return (
          <div
            className={`w-12 h-12 rounded-full bg-gradient-to-r ${spell.colorGradient} shadow-[0_0_15px_rgba(255,255,255,0.35)] animate-pulse`}
          />
        );
      case "card":
        return <SignUpForm embedded={true} />;
      default:
        return null;
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 p-6">
      {spells.map((spell) => (
        <div
          key={spell.id}
          className="cursor-pointer group relative rounded-xl p-4 flex flex-col items-center text-center bg-black/10 backdrop-blur-sm shadow-lg hover:scale-105 transition-transform duration-300"
          onClick={() => navigate(`/gallery/${spell.id}`)}
        >
          {/* Live Preview */}
          <div className="mb-4 w-full flex justify-center">{renderPreview(spell)}</div>

          {/* Title & Description */}
          <h3 className="text-lg font-bold text-white mb-1">{spell.title}</h3>
          <p className="text-gray-300 text-sm">{spell.description}</p>
        </div>
      ))}
    </div>
  );
};

export default GalleryGrid;
