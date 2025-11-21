import React from "react";

const loveNotes = [
  "Your laugh is my favorite melody. 🎶",
  "With you, ordinary moments feel magical. ✨",
  "You make my heart feel at home. 🏡❤️",
  "Every sunrise reminds me of your light. 🌅",
  "Holding your hand makes everything softer. 🤝💖",
];

const Notes = () => {
  return (
    <section id="notes" className="py-16 sm:py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-center text-3xl sm:text-4xl font-bold text-white mb-8">
          Little notes for you
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {loveNotes.map((note, idx) => (
            <div
              key={idx}
              className="rounded-2xl p-5 border border-rose-400/20 bg-gradient-to-br from-rose-500/10 to-pink-500/10 text-rose-50 shadow-xl shadow-rose-900/10"
            >
              {note}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Notes;
