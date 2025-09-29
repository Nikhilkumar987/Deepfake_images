import React from "react";

const ContactSection = () => {
  return (
    <section className="py-20 bg-transparent flex justify-center">
      <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-xl p-12 max-w-3xl w-full">
        <h2 className="text-4xl font-extrabold text-white mb-4 text-center">
          Get in Touch
        </h2>
        <p className="text-gray-300 mb-8 text-center">
          Have questions or feedback? We'd love to hear from you.
        </p>

        <form className="space-y-6">
          <div className="flex flex-col">
            <label className="text-gray-300 mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-300 mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              className="p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-300 mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Your Message"
              rows="5"
              className="p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-xl shadow-lg font-semibold transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
