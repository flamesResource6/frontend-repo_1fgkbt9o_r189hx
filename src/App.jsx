import React from "react";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Notes from "./components/Notes";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <header className="relative z-10">
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-5">
          <div className="flex items-center gap-2">
            <span className="text-2xl">💘</span>
            <span className="font-semibold tracking-wide">For Kheira</span>
          </div>
          <div className="hidden sm:flex items-center gap-6 text-sm text-white/80">
            <a href="#gallery" className="hover:text-white transition">Gallery</a>
            <a href="#notes" className="hover:text-white transition">Notes</a>
          </div>
        </nav>
      </header>

      <main>
        <Hero />
        <Gallery />
        <Notes />
      </main>

      <Footer />
    </div>
  );
}

export default App;
