import React from "react";

const SpellOrbCard = ({ spell }) => {
  return (
    <div className={`relative w-64 h-64 rounded-2xl bg-gradient-to-br ${spell.color} p-[2px] shadow-xl hover:scale-105 transition-all duration-300`}>
      <div className="w-full h-full bg-black/60 rounded-2xl flex flex-col items-center justify-center text-center p-4">
        <h2 className="text-2xl font-bold mb-2 text-white">{spell.title}</h2>
        <p className="text-sm text-gray-300">{spell.description}</p>
      </div>
    </div>
  );
};

export default SpellOrbCard;
