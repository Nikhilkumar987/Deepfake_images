import React from "react";
import { UploadCloud, Brain, CheckCircle } from "lucide-react";

const steps = [
  { title: "Upload Article/Media", icon: <UploadCloud className="w-8 h-8 text-purple-400" /> },
  { title: "AI Analyzes It", icon: <Brain className="w-8 h-8 text-blue-400" /> },
  { title: "Get Trust Score", icon: <CheckCircle className="w-8 h-8 text-green-400" /> },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-transparent relative">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-white mb-12">
          How <span className="text-purple-400">It Works</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-2xl p-6 shadow-md hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] transition"
            >
              <div className="flex justify-center mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold text-white">{step.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
