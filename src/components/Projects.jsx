import React from "react";
import { motion } from "framer-motion";

import tic from "../assets/tic.png";
import weather from "../assets/weather.png";
import food from "../assets/food.png";
import protfolio from "../assets/protfolio.png";
import chat from "../assets/chat.png";
import news from "../assets/news.png";

const projects = [
  {
    id: 1,
    name: "TIC-TAC-TOE",
    technologies: "HTML, CSS & JavaScript",
    image: tic,
    github: "https://github.com/Sonmatreya/Tic-Tac-Toe",
    live: "https://tic-tac-toe-35ay.onrender.com",
  },

  {
    id: 2,
    name: "WEATHER-APP",
    technologies: "HTML, CSS & JavaScript",
    image: weather,
    github: "https://github.com/Sonmatreya/Weather-App",
    live: "https://weather-app-urby.onrender.com",
  },

  {
    id: 3,
    name: "CHAT-APP",
    technologies: "MERN Stack",
    image: chat,
    github: "https://github.com/Sonmatreya/Chat-App",
    live: "https://chat-app-06fm.onrender.com",
  },

  {
    id: 4,
    name: "FOOD-APP",
    technologies: "MERN Stack",
    image: food,
    github: "https://github.com/Sonmatreya/Food-App",
    live: "https://food-app-5qi5.onrender.com",
  },

  {
    id: 5,
    name: "PORTFOLIO",
    technologies: "React & Tailwind CSS",
    image: protfolio,
    github: "https://github.com/Sonmatreya/Portfolio",
    live: "https://portfolio-3vgg.onrender.com",
  },

  {
    id: 6,
    name: "NEWS-PORTAL",
    technologies: "MERN Stack",
    image: news,
    github: "https://github.com/Sonmatreya/E-news",
    live: "https://e-news-reader.onrender.com",
  },
];

const Projects = () => {
  return (
    <div className="bg-white text-black py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">

        {/* Heading */}
        <motion.h2
          className="text-4xl font-bold text-center mb-14 text-red-700"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          My Projects
        </motion.h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden shadow-xl 
              border border-red-500 group hover:shadow-[0_0_30px_rgba(239,68,68,0.8)] hover:-translate-y-2
active:shadow-[0_0_40px_rgba(220,38,38,1)]"
              
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}

              whileHover={{
                y: -10,
                rotateX: 5,
                rotateY: -5,
                scale: 1.03,
              }}

              style={{
                transformStyle: "preserve-3d",
              }}
            >

              {/* Project Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-52 object-cover 
                  group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">

                {/* Project Name */}
                <h3
                  className="text-2xl font-bold mb-3 
                  text-transparent bg-clip-text 
                  bg-gradient-to-r from-red-700 to-yellow-500"
                >
                  {project.name}
                </h3>

                {/* Technologies */}
                <p className="text-black mb-5">
                  {project.technologies}
                </p>

                {/* Buttons */}
                <div className="flex gap-4">

                  {/* GitHub Button */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                   className="bg-gradient-to-r from-red-600 to-yellow-500 text-white px-6 py-3 rounded-full font-semibold 
                    shadow-lg hover:shadow-red-600 transition-all duration-300"
                  >
                    GitHub
                  </a>

                  {/* Live Demo Button */}
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-red-600 text-red-700 font-semibold px-6 py-3 rounded-full hover:bg-red-500 hover:text-white hover:shadow-lg hover:shadow-red-600 transition duration-300"
                  >
                    Live Demo
                  </a>

                </div>
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Projects;