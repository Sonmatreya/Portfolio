import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaHeart,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="bg-gradient-to-r from-red-50 via-white to-yellow-50
      text-black py-10 border-t border-red-100"
    >
      <div className="container mx-auto px-8 md:px-16 lg:px-24">

        {/* Top Section */}
        <div
          className="flex flex-col md:flex-row
          justify-between items-center
          gap-8 mb-8"
        >

          {/* Logo & Description */}
          <div className="text-center md:text-left max-w-md">

            <h3
              className="text-4xl font-extrabold mb-3
              text-transparent bg-clip-text
              bg-gradient-to-r from-red-600 to-yellow-500"
            >
              Sonmatreya
            </h3>

            <p className="text-gray-700 leading-relaxed">
              Full-Stack Developer from India specializing in modern,
              responsive, and user-friendly MERN Stack applications.
            </p>

          </div>

          {/* Social Icons */}
          <div className="flex space-x-5 text-2xl">

            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"

              className="bg-white p-3 rounded-full shadow-md
              hover:bg-red-500 hover:text-white
              hover:scale-110 hover:shadow-red-300
              transition duration-300"
            >
              <FaFacebook />
            </a>

            {/* Twitter */}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"

              className="bg-white p-3 rounded-full shadow-md
              hover:bg-red-500 hover:text-white
              hover:scale-110 hover:shadow-red-300
              transition duration-300"
            >
              <FaTwitter />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/sonmatreyabaug"
              target="_blank"
              rel="noreferrer"

              className="bg-white p-3 rounded-full shadow-md
              hover:bg-red-500 hover:text-white
              hover:scale-110 hover:shadow-red-300
              transition duration-300"
            >
              <FaLinkedin />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/Sonmatreya"
              target="_blank"
              rel="noreferrer"

              className="bg-white p-3 rounded-full shadow-md
              hover:bg-red-500 hover:text-white
              hover:scale-110 hover:shadow-red-300
              transition duration-300"
            >
              <FaGithub />
            </a>

          </div>
        </div>

        {/* Bottom Section */}
        <div
          className="border-t border-red-200 pt-6
          flex flex-col md:flex-row
          justify-between items-center gap-4"
        >

          {/* Copyright */}
          <p
            className="text-gray-700 text-sm text-center
            flex items-center gap-1"
          >
            © {new Date().getFullYear()} Sonmatreya Baug.
            Made with
            <FaHeart className="text-red-500 animate-pulse" />
            All Rights Reserved.
          </p>

          {/* Links */}
          <div className="flex gap-6 text-sm font-medium">

            <a
              href="#"
              className="hover:text-red-600
              transition duration-300"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="hover:text-red-600
              transition duration-300"
            >
              Terms & Conditions
            </a>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;