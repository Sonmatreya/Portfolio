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
    <div className="bg-white text-black py-20" id="about" >
      <div className="container mx-auto px-8 md:px-16 lg:px-24">

        {/* Heading */}
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-red-600"
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
            className="w-70 h-96 rounded-2xl object-cover mb-8 md:mb-0 shadow-2xl border-4 border-red-500"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          />

          {/* Content */}
          <div className="flex-1">

            {/* Intro Text */}
            <motion.p
              className="text-lg mb-8 leading-relaxed text-black-700"
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
                  <div className="grow bg-white-800 rounded-full h-2.5 relative overflow-hidden group cursor-pointer">
                    <motion.div
                      className="bg-gradient-to-r from-red-800 to-yellow-600 h-2.5 rounded-full relative transition-all duration-300"
                      style={{ width: skill.level }}
                      initial={{ width: 0 }}
                      whileInView={{ width: skill.level }}
                      transition={{ duration: 1.2, delay: 0.3 }}
                      viewport={{ once: true }}
                      whileHover={{
                        scale: 1.02,
                        boxShadow: "0 0 15px rgba(234, 179, 8, 0.55)" 
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
  className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.7,
    delay: 0.4
  }}
  viewport={{ once: true }}
>

  {/* Experience */}
  <div
    className="bg-white rounded-2xl p-6 shadow-lg 
    hover:shadow-[0_0_30px_rgba(239,68,68,0.8)] hover:-translate-y-2
    active:shadow-[0_0_40px_rgba(220,38,38,1)]
    transition duration-300 border border-red-500 cursor-pointer"
  >
    <h3
      className="text-3xl font-bold text-transparent
      bg-clip-text bg-gradient-to-r from-red-700 to-yellow-500"
    >
      Fresher
    </h3>

    <p className="mt-2">
      Years Experience
    </p>
  </div>

  {/* Projects */}
  <div
    className="bg-white rounded-2xl p-6 shadow-lg 
    hover:shadow-[0_0_30px_rgba(239,68,68,0.8)] hover:-translate-y-2
    active:shadow-[0_0_40px_rgba(220,38,38,1)]
    transition duration-300 border border-red-400 cursor-pointer"
  >
    <h3
      className="text-3xl font-bold text-transparent
      bg-clip-text bg-gradient-to-r from-red-700 to-yellow-500"
    >
      6+
    </h3>

    <p className="mt-2">
      Projects Completed
    </p>
  </div>

  {/* Clients */}
  <div
    className="bg-white rounded-2xl p-6 shadow-lg 
    hover:shadow-[0_0_30px_rgba(239,68,68,0.8)] hover:-translate-y-2
    active:shadow-[0_0_40px_rgba(220,38,38,1)]
    color-red-500
    transition duration-300 border border-red-400 cursor-pointer"
  >
    <h3
      className="text-3xl font-bold text-transparent
      bg-clip-text bg-gradient-to-r from-red-700 to-yellow-500"
    >
      10+
    </h3>

    <p className="mt-2">
      Happy Clients
    </p>
  </div>

</motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;