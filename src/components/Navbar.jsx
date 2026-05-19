import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50
      bg-white/90 backdrop-blur-lg shadow-md"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">

        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <motion.div
            whileHover={{
              scale: 1.08,
              textShadow: "0px 0px 12px rgba(239,68,68,0.6)"
            }}
            className="text-3xl font-extrabold tracking-wide cursor-pointer"
          >
            <span className="text-red-600">Sonma</span>

            <span
              className="text-transparent bg-clip-text
              bg-gradient-to-r from-red-600 to-yellow-500"
            >
              treya
            </span>
          </motion.div>

          {/* Desktop Menu */}
          <ul
            className="hidden md:flex items-center
            space-x-8 text-lg font-semibold"
          >

            {[
              "home",
              "about",
              "service",
              "project",
              "contact",
            ].map((item, index) => (
              <motion.li
                key={index}
                whileHover={{ y: -2 }}
              >
                <a
                  href={`#${item}`}
                  className="relative group capitalize hover:text-red-600 transition duration-300"
                >
                  <span>
                    {item === "service"
                      ? "Services"
                      : item === "project"
                      ? "Projects"
                      : item}
                  </span>

                  {/* Underline Effect */}
                  <span
                    className="absolute left-0 -bottom-1 w-0 h-[2px]
                    bg-gradient-to-r from-red-600 to-yellow-500
                    transition-all duration-300 group-hover:w-full"
                  ></span>
                </a>
              </motion.li>
            ))}

          </ul>

          {/* Right Side */}
          <div className="hidden md:flex items-center gap-5">

            {/* GitHub */}
            <motion.a
              href="https://github.com/Sonmatreya"
              target="_blank"
              rel="noreferrer"

              whileHover={{
                scale: 1.2,
                rotate: 5,
              }}

              className="text-2xl text-gray-700
              hover:text-red-600 transition duration-300"
            >
              <FaGithub />
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              href="https://www.linkedin.com/in/sonmatreyabaug"
              target="_blank"
              rel="noreferrer"

              whileHover={{
                scale: 1.2,
                rotate: -5,
              }}

              className="text-2xl text-gray-700
              hover:text-red-600 transition duration-300"
            >
              <FaLinkedin />
            </motion.a>

            {/* Connect Button */}
            <motion.a
              href="#contact"

              whileHover={{
                scale: 1.05,
                y: -2,
              }}

              whileTap={{
                scale: 0.95,
              }}

              className="bg-gradient-to-r from-red-600 to-yellow-500
              text-white px-6 py-2 rounded-full font-semibold
              shadow-lg hover:shadow-red-600
              transition-all duration-300"
            >
              Connect Me
            </motion.a>

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-3xl text-red-600"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>
      </div>

      {/* Bottom Gradient Line */}
      <div className="h-[2px] bg-gradient-to-r from-red-600 via-yellow-500 to-red-600"></div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}

        animate={{
          height: isOpen ? "320px" : 0,
          opacity: isOpen ? 1 : 0,
        }}

        transition={{
          duration: 0.4
        }}

        className="md:hidden overflow-hidden
        bg-white/95 backdrop-blur-xl shadow-lg"
      >
        <ul
          className="flex flex-col items-center
          gap-6 py-6 text-lg font-semibold"
        >

          <li>
            <a
              href="#home"
              onClick={() => setIsOpen(false)}
              className="hover:text-red-600 transition"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              onClick={() => setIsOpen(false)}
              className="hover:text-red-600 transition"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#service"
              onClick={() => setIsOpen(false)}
              className="hover:text-red-600 transition"
            >
              Services
            </a>
          </li>

          <li>
            <a
              href="#project"
              onClick={() => setIsOpen(false)}
              className="hover:text-red-600 transition"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="hover:text-red-600 transition"
            >
              Contact
            </a>
          </li>

          {/* Mobile Icons */}
          <div className="flex gap-5 text-2xl">

            <a
              href="https://github.com/Sonmatreya"
              target="_blank"
              rel="noreferrer"
              className="hover:text-red-600 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/sonmatreyabaug"
              target="_blank"
              rel="noreferrer"
              className="hover:text-red-600 transition"
            >
              <FaLinkedin />
            </a>

          </div>

          {/* Mobile Button */}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}

            className="bg-gradient-to-r from-red-600 to-yellow-500
            text-white px-6 py-3 rounded-full font-semibold
            hover:scale-105 transition duration-300
            border border-red-400 shadow-lg"
          >
            Connect Me
          </a>

        </ul>
      </motion.div>
    </nav>
  );
};

export default Navbar;