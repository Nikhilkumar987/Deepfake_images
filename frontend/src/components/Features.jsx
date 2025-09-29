import React from "react";
import { Brain, Zap, ShieldCheck, BarChart } from "lucide-react";

const Features = () => {
  const features = [
    {
      title: "Fast Analysis",
      description: "Get instant results with our optimized AI models.",
      icon: <Zap className="w-8 h-8 text-purple-400" />,
    },
    {
      title: "AI-Powered Detection",
      description:
        "Our deep learning models analyze news and media for authenticity.",
      icon: <Brain className="w-8 h-8 text-blue-400" />,
    },
    {
      title: "Secure & Private",
      description:
        "Your data stays safe with end-to-end encryption and no third-party sharing.",
      icon: <ShieldCheck className="w-8 h-8 text-green-400" />,
    },
    {
      title: "Detailed Insights",
      description:
        "See confidence scores, explanations, and related fact-check links.",
      icon: <BarChart className="w-8 h-8 text-pink-400" />,
    },
  ];

  return (
    <section className="py-20 flex justify-center items-center bg-transparent">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Section Heading */}
        <h2 className="text-4xl font-extrabold text-white">
          Why Choose <span className="text-purple-400">Our Tool</span>?
        </h2>
        <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
          We make fake news and deepfake detection fast, accurate, and secure —
          built for journalists, researchers, and everyday users.
        </p>

        {/* Features Grid - 2x2 layout */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center">
          {features.map((feature, index) => (
            <div
              key={index}
              className="w-full sm:w-80 backdrop-blur-xl bg-white/10 rounded-2xl p-6 shadow-md hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] transition-transform hover:scale-105 border border-white/10"
            >
              <div className="flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mt-4">
                {feature.title}
              </h3>
              <p className="text-gray-300 mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
