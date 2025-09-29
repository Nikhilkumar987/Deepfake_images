import React from "react";

const testimonials = [
  {
    name: "John D.",
    role: "Journalist",
    text: "This tool has saved me hours verifying news stories before publishing!",
  },
  {
    name: "Sara M.",
    role: "Researcher",
    text: "Finally a reliable AI system that detects deepfakes with high accuracy.",
  },
  {
    name: "Alex K.",
    role: "Content Creator",
    text: "Love how fast and easy it is to check if a video is real or fake.",
  },
  {
    name: "Priya S.",
    role: "Student",
    text: "I use it for my media literacy project — the explanations are so clear and help me educate others.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-transparent overflow-hidden relative">
      <h2 className="text-4xl font-extrabold text-center text-white mb-12">
        What People <span className="text-purple-400">Say</span>
      </h2>

      {/* Infinite Scrolling Wrapper */}
      <div className="relative w-full">
        <div className="flex animate-scroll">
          {[...testimonials, ...testimonials].map((t, i) => (
            <div
              key={i}
              className="mx-4 w-[300px] flex-shrink-0 backdrop-blur-xl bg-white/10 border border-white/10 rounded-2xl p-6 shadow-md overflow-hidden"
            >
              <p className="text-gray-300 italic break-words leading-relaxed line-clamp-5">
                "{t.text}"
              </p>
              <div className="mt-4 text-sm text-gray-400 truncate">
                — <span className="text-white font-semibold">{t.name}</span>,{" "}
                {t.role}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Keyframes for Infinite Scroll */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          display: flex;
          animation: scroll 25s linear infinite;
          width: max-content;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
