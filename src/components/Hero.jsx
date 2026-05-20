import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaCheckCircle } from 'react-icons/fa';
import HeroImage from '../assets/hero-image.jpg';
import ReactTypingEffect from 'react-typing-effect';

const Hero = () => {

  const [showPopup, setShowPopup] = useState(false);

  const handleDownload = () => {
    setShowPopup(true);

    setTimeout(() => {
      setShowPopup(false);
    }, 4000);
  };

  return (
    <div
      className="bg-gradient-to-br from-yellow-50 via-white to-red-50
      text-black text-center py-20 relative overflow-hidden
      min-h-screen flex flex-col justify-center items-center"
      id="home"
    >

      {/* Profile Image */}
      <motion.img
        src={HeroImage}
        alt="Profile"
        className="mx-auto mb-8 w-56 h-56 rounded-full object-cover
        relative z-10 shadow-2xl border-4 border-red-500"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      />

      {/* Heading */}
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold relative z-10 leading-tight px-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        I'm{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-yellow-500">
          Sonmatreya Baug
        </span>
      </motion.h1>

      {/* Typing Effect */}
      <motion.div
        className="mt-4 text-2xl md:text-3xl font-bold px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <ReactTypingEffect
          text={[
            'Full-Stack Developer',
            'MERN Stack Developer',
            'React Enthusiast',
          ]}
          speed={100}
          eraseSpeed={50}
          typingDelay={500}
          eraseDelay={2000}
          className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-red-700"
        />
      </motion.div>

      {/* Subtitle */}
      <motion.p
        className="mt-6 text-lg md:text-xl text-gray-700 max-w-2xl px-4 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        I specialize in building modern, responsive, and user-friendly web
        applications using the MERN Stack.
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="mt-8 flex justify-center gap-5 flex-wrap relative z-10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >

        {/* Contact Button */}
        <a
          href="#contact"
          className="bg-gradient-to-r from-red-600 to-yellow-500 text-white px-6 py-3 rounded-full font-semibold
          shadow-lg hover:shadow-red-600 transition-all duration-300 hover:scale-105"
        >
          Contact With Me
        </a>

        {/* Resume Button */}
        <a
          href="/Sonmatreya Baug Resume.pdf"
          download="Sonmatreya Baug Resume.pdf"
          onClick={handleDownload}
          className="border-2 border-red-600 text-red-700 font-semibold px-6 py-3 rounded-full
          hover:bg-red-500 hover:text-white hover:shadow-lg hover:shadow-red-600
          transition duration-300 hover:scale-105"
        >
          Download Resume
        </a>

      </motion.div>

      {/* Beautiful Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.8 }}
            transition={{ duration: 0.4 }}
            className="fixed top-8 right-6 z-50
            bg-white border-l-4 border-green-500
            shadow-2xl rounded-xl p-5 w-80"
          >

            <div className="flex items-start gap-3">

              <FaCheckCircle className="text-green-500 text-3xl mt-1" />

              <div className="text-left">
                <h3 className="font-bold text-lg text-black">
                  Download Complete
                </h3>

                <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                  Thank you for downloading my resume.
                  I would love the opportunity to contribute
                  my skills to your company.
                </p>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2
        text-red-600 cursor-pointer"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <a href="#about">
          <FaChevronDown size={28} />
        </a>
      </motion.div>

    </div>
  );
};

export default Hero;