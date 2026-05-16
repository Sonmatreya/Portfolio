import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white px-8 md:px-16 lg:px-24 fixed w-full z-50 shadow-md">
      <div className="container py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">MySelf</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li><a href="#home" className="text-red-700 text-2xl hover:text-yellow-400">Home</a></li>
          <li><a href="#about" className="text-red-700 text-2xl hover:text-yellow-400">About</a></li>
          <li><a href="#service" className="text-red-700 text-2xl hover:text-yellow-400">Services</a></li>
          <li><a href="#project" className="text-red-700 text-2xl hover:text-yellow-400">Projects</a></li>
          <li><a href="#contact" className="text-red-700 text-2xl hover:text-yellow-400">Contact</a></li>
        </ul>

        {/* Connect Button */}
        <a
          href="#contact"
          className="hidden md:inline bg-gradient-to-r from-red-400 to-yellow-500 text-white 
          transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
        >
          Connect Me
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl focus:outline-none"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <ul className="md:hidden bg-black text-center space-y-4 py-6">
          <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
          <li><a href="#service" onClick={() => setIsOpen(false)}>Services</a></li>
          <li><a href="#project" onClick={() => setIsOpen(false)}>Projects</a></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
