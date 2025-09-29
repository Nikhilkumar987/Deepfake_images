import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How do you detect fake news?",
    answer:
      "We use state-of-the-art NLP and fact-checking AI models trained on large datasets to evaluate the credibility of articles, headlines, and videos.",
  },
  {
    question: "Is my data stored?",
    answer:
      "No, your data is processed securely and not stored on our servers. We value your privacy and follow strict data protection guidelines.",
  },
  {
    question: "Is this free to use?",
    answer:
      "Yes, the core detection tool is free for everyone. Premium plans are available for journalists and researchers who need bulk analysis.",
  },
  {
    question: "Can I trust the results?",
    answer:
      "While our models are highly accurate, no system is perfect. We recommend using our results alongside human judgment and reputable fact-checking sites.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-transparent">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-white">
          Frequently Asked <span className="text-purple-400">Questions</span>
        </h2>
        <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
          Get quick answers about how our Fake News & Deepfake detection works.
        </p>

        {/* FAQ List */}
        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-xl shadow-md p-5 text-left"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full text-left text-lg font-medium text-white focus:outline-none"
              >
                {faq.question}
                <ChevronDown
                  className={`w-5 h-5 text-purple-400 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-40 mt-3" : "max-h-0"
                }`}
              >
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
