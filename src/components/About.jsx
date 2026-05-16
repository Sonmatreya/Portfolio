import React from "react";
import { motion } from "framer-motion";
import AboutImage from "../assets/aboutme-image.jpg";

const skills = [
  { name: "HTML & CSS", level: "83.33%" },
  { name: "React JS", level: "91.67%" },
  { name: "Node JS", level: "75%" },
  { name: "MongoDB", level: "66.67%" },
];

const About = () => {
  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          {/* Profile Image */}
          <motion.img
            src={AboutImage}
            alt="About Me Profile"
            className="w-72 h-80 rounded object-cover mb-8 md:mb-0 shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          />

          <div className="flex-1">
            {/* Intro Text */}
            <motion.p
              className="text-lg mb-8 leading-relaxed text-gray-300"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            >
              I am a passionate full-stack developer with a focus on building
              modern and responsive web applications. With a strong foundation
              in both frontend and backend technologies, I strive to create
              seamless and efficient user experiences.
            </motion.p>

            {/* Skills */}
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="flex items-center"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <label className="w-2/12 mr-2">{skill.name}</label>
                  <div className="grow bg-gray-800 rounded-full h-2.5 relative overflow-hidden group cursor-pointer">
                    <motion.div
                      className="bg-gradient-to-r from-red-800 to-yellow-500 h-2.5 rounded-full relative transition-all duration-300"
                      style={{ width: skill.level }}
                      initial={{ width: 0 }}
                      whileInView={{ width: skill.level }}
                      transition={{ duration: 1.2, delay: 0.3 }}
                      viewport={{ once: true }}
                      whileHover={{
                        scale: 1.02,
                        boxShadow: "0 0 15px rgba(245, 158, 11, 0.4)"
                      }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-0 group-hover:opacity-30"
                        animate={{
                          x: ['-100%', '100%']
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: 3,
                          ease: "easeInOut"
                        }}
                      />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <motion.div
              className="mt-12 flex flex-col md:flex-row justify-between text-center gap-8 md:gap-0"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-800 to-yellow-500">
                  FRESHER
                </h3>
                <p className="text-lg text-white-400">Years Experience</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-800 to-yellow-500">
                  6
                </h3>
                <p className="text-lg text-white-400">Projects Completed</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-800 to-yellow-500">
                  10+
                </h3>
                <p className="text-lg text-white-400">Happy Clients</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
