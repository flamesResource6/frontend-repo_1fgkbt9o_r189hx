import React from "react";

const images = [
  {
    src: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=1600&auto=format&fit=crop",
    alt: "Love sunset",
  },
  {
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1600&auto=format&fit=crop",
    alt: "Her smile",
  },
  {
    src: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1600&auto=format&fit=crop",
    alt: "Holding hands",
  },
  {
    src: "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?q=80&w=1600&auto=format&fit=crop",
    alt: "Roses",
  },
  {
    src: "https://images.unsplash.com/photo-1530906622963-8a60586a49c7?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxSb3Nlc3xlbnwwfDB8fHwxNzYzNjgzMjQ0fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80",
    alt: "Notes",
  },
  {
    src: "https://images.unsplash.com/photo-1517842645767-c639042777db?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxOb3Rlc3xlbnwwfDB8fHwxNzYzNjgzMjQ1fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80",
    alt: "Fireworks",
  },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-16 sm:py-20 border-t border-white/10 bg-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Memories I cherish with you</h2>
          <p className="text-rose-100/80 mt-2">A little wall of moments, vibes, and dreams. 📸💗</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <img
                src={img.src}
                alt={img.alt}
                className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-3 text-white text-sm">
                {img.alt}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
