import React from "react";

const MainBanner = () => {
  return (
    <div className="pointer-events-none">
      <div className="backdrop-blur-xl bg-gradient-to-br from-white/20 via-white/10 to-white/5 border border-white/30 rounded-3xl shadow-[0_0_40px_rgba(255,255,255,0.2)] p-10 max-w-2xl text-center transition-transform duration-500 hover:scale-[1.02] hover:shadow-[0_0_60px_rgba(255,255,255,0.3)]">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg tracking-wide">
          Fake News & Deepfake Detection
        </h1>

        <p className="text-lg text-gray-200 mt-4 max-w-lg mx-auto leading-relaxed">
          Use our AI-powered tools to analyze news articles and media,
          verifying their authenticity with cutting-edge technology.
        </p>

        <div className="mt-8 flex justify-center gap-6 pointer-events-auto">
          <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold rounded-xl shadow-md shadow-blue-500/30 hover:shadow-blue-500/50 transition transform hover:scale-105">
            Fake News
          </button>
          <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-semibold rounded-xl shadow-md shadow-purple-500/30 hover:shadow-purple-500/50 transition transform hover:scale-105">
            Deepfake
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
