import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100); // adjust scroll threshold
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-4 left-1/2 transform -translate-x-1/2 w-11/12 md:w-3/4 lg:w-2/3
        backdrop-blur-xl bg-white/10 border border-white/20
        rounded-2xl shadow-lg transition-all duration-500
        z-50
        ${isScrolled ? "top-0 rounded-b-2xl py-2" : "py-4"}
      `}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <Link to="/" className="text-xl md:text-2xl font-bold text-white hover:text-purple-400">
          MyApp
        </Link>

        {/* Links */}
        <div className="hidden md:flex space-x-6">
          <NavLink to="/" className={({ isActive }) => `transition ${isActive ? 'text-purple-400' : 'text-white hover:text-purple-400'}`}>
            Home
          </NavLink>
          <a href="#" className="text-white/70 cursor-not-allowed">Docs</a>
          <NavLink to="/deepfake" className={({ isActive }) => `transition ${isActive ? 'text-purple-400' : 'text-white hover:text-purple-400'}`}>
            Deepfake AI
          </NavLink>
          <a href="#" className="text-white/70 cursor-not-allowed">Fake News AI</a>
          <a href="#" className="text-white/70 cursor-not-allowed">Contact Us</a>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button className="p-2 rounded hover:bg-white/20 text-white">
            ☰
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
