import React from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa'; // scroll arrow
import HeroImage from '../assets/hero-image.jpg';
import ReactTypingEffect from 'react-typing-effect';

const Hero = () => {
  return (
    <div className="bg-black text-white text-center py-16 relative overflow-visible" id="home">
      
      {/* Profile Image */}
      <motion.img
        src={HeroImage}
        alt="Profile"
        className="mx-auto mb-8 w-48 h-48 rounded-full object-cover relative z-10 shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      />

      {/* Heading with Typing Effect */}
      <motion.h1
        className="text-4xl font-bold relative z-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        I'm{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-800 to-yellow-500">
          Sonmatreya Baug
        </span>
        ,{' '}
        <ReactTypingEffect
          text={['Full-Stack Developer', 'Web Developer', 'React Enthusiast']}
          speed={100}
          eraseSpeed={50}
          typingDelay={500}
          eraseDelay={2000}
          className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-red-800 font-bold"
        />
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="mt-4 text-lg text-gray-300 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        I specialize in building modern and responsive web applications.
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="mt-8 space-x-4 relative z-10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <button className="bg-gradient-to-r from-red-800 to-yellow-500 transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
          <a href="#contact">Contact With Me</a>
        </button>
        <button className="bg-gradient-to-r from-red-800 to-yellow-500 transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
          <a href="/Sonmatreya Baug Resume.pdf" download="Sonmatreya Baug Resume.pdf">Resume</a>
        </button>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-yellow-500 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <a href="#about">
          <FaChevronDown size={24} />
        </a>
      </motion.div>
    </div>
  );
};

export default Hero;
