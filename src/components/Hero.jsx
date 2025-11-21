import React from "react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-20">
      {/* background gradient hearts */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-pink-500/20 blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-rose-500/20 blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <div className="inline-flex items-center gap-3 text-rose-300/90 mb-6 text-lg">
            <span className="animate-pulse">❤️</span>
            <span>For the one and only</span>
            <span className="animate-pulse">🌹</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
            Kheira, you are my favorite <span className="bg-gradient-to-r from-pink-400 via-rose-400 to-fuchsia-400 bg-clip-text text-transparent">love story</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg md:text-xl text-rose-100/80 max-w-2xl mx-auto">
            Every day with you feels like sunrise after a gentle night. This little corner of the web is a love letter to your smile, your kindness, and the magic you bring to my world. ✨
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <a
              href="#gallery"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-rose-500 hover:bg-rose-600 text-white font-medium shadow-lg shadow-rose-500/20 transition"
            >
              See our gallery 💞
            </a>
            <a
              href="#notes"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium border border-white/10 backdrop-blur-sm transition"
            >
              Read my notes 💌
            </a>
          </div>
        </div>

        {/* floating emojis */}
        <div className="pointer-events-none select-none relative">
          <div className="absolute left-6 top-8 text-3xl sm:text-4xl opacity-70 animate-bounce">💖</div>
          <div className="absolute right-8 -top-2 text-2xl sm:text-3xl opacity-70 animate-bounce [animation-delay:200ms]">✨</div>
          <div className="absolute right-20 bottom-0 text-3xl sm:text-4xl opacity-70 animate-bounce [animation-delay:400ms]">🥰</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
