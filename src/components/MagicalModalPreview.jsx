import React from "react";

const MagicalModalPreview = () => {
    return (
        <div className="relative w-[350px] h-[200px] rounded-2xl bg-gradient-to-br from-[#1e003b]/80 to-[#3b0077]/80 border border-white/20 shadow-[0_0_25px_rgba(255,255,255,0.2)] flex flex-col justify-center items-center text-center text-white overflow-hidden">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-fuchsia-500/20 via-purple-500/20 to-indigo-500/20 blur-xl animate-pulse pointer-events-none"></div>
            <h2 className="text-xl font-bold bg-gradient-to-r from-fuchsia-400 via-purple-300 to-indigo-300 bg-clip-text text-transparent">
                Magical Modal
            </h2>
            <p className="text-sm text-white/70 mt-2">
            Preview
            </p>
        </div>
    );
};

export default MagicalModalPreview;