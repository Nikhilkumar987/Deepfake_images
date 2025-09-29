import React from "react";

const CTASection = () => {
  return (
    <section className="py-20 bg-transparent flex justify-center">
      <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-xl p-12 max-w-3xl text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          Ready to Check the Truth?
        </h2>
        <p className="text-gray-300 mb-8 text-lg">
          Start detecting fake news and deepfakes instantly. Join thousands of
          users who trust our AI-powered tool to stay informed.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-lg font-semibold transition">
            Analyze News
          </button>
          <button className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-xl shadow-lg font-semibold transition">
            Detect Deepfakes
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
