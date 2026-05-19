import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-red-800 py-8">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4">
          <div className="flex-1 mb-4 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">MySelf</h3>
            <p className="text-red-800">
              Full-Stack Developer based in the INDIA, specializing in web and
              software development.
            </p>
          </div>
        </div>

        <div
          className="border-t border-gray-600 pt-4 flex flex-col md:flex-row 
          justify-between items-center"
        >
          <p className="text-red-800">
            &copy; {new Date().getFullYear()}MySelf. All rights reserved.
          </p>
          <div className="flex space-x-4 my-4 md:my-0">
            <a href="#" className="text-red-800 hover:text-red-500">
              <FaFacebook />
            </a>
            <a href="#" className="text-red-800 hover:text-red-500">
              <FaTwitter />
            </a>
            <a href="#" className="text-red-800 hover:text-red-500">
              <FaLinkedin />
            </a>
            <a href="#" className="text-red-800 hover:text-red-500">
              <FaGithub />
            </a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-red-800 hover:text-red-500">
              Privacy
            </a>
            <a href="#" className="text-red-800 hover:text-red-500">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
