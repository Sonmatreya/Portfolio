import React from "react";
import { motion } from "framer-motion";
import {
  Layout,
  Code,
  Server,
  Layers,
  PenTool,
  BarChart2,
} from "lucide-react";

const services = [
  {
    id: 1,
    title: "Web Design",
    description:
      "Creating visually appealing and user-friendly web designs.",
    icon: Layout,
  },
  {
    id: 2,
    title: "Frontend Development",
    description:
      "Building responsive and interactive user interfaces.",
    icon: Code,
  },
  {
    id: 3,
    title: "Backend Development",
    description:
      "Developing robust server-side logic and databases.",
    icon: Server,
  },
  {
    id: 4,
    title: "Full-Stack Development",
    description:
      "Combining both frontend and backend development skills.",
    icon: Layers,
  },
  {
    id: 5,
    title: "Content Writing",
    description:
      "Writing content for your business and companies.",
    icon: PenTool,
  },
  {
    id: 6,
    title: "Digital Marketing",
    description:
      "Promote your business with our digital marketing team.",
    icon: BarChart2,
  },
];

const Service = () => {
  return (
    <div className="bg-white text-black py-20" id="service">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">

        {/* Heading */}
        <motion.h2
          className="text-5xl font-extrabold text-center mb-14 pb-2 leading-normal
          text-transparent bg-clip-text
          bg-gradient-to-r from-red-700 to-yellow-500"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          My Services
        </motion.h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.id}
                className="
                  group
                  bg-white
                  p-7
                  rounded-3xl
                  border border-red-100
                  shadow-lg
                  hover:shadow-2xl
                  transition-all duration-500
                  cursor-pointer
                  relative
                  overflow-hidden
                "
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -12,
                  scale: 1.04,
                  rotateX: 5,
                  rotateY: -5,
                  boxShadow:
                    "0px 20px 40px rgba(239, 68, 68, 0.35)",
                }}
                style={{
                  transformStyle: "preserve-3d",
                }}
              >

                {/* Background Glow */}
                <div
                  className="
                    absolute inset-0
                    bg-gradient-to-br
                    from-red-100/50
                    via-transparent
                    to-red-500/40
                    opacity-0
                    group-hover:opacity-100
                    transition duration-500 border border-red-400 cursor-pointer
                  "
                ></div>

                {/* Floating Blur Effect */}
                <div
                  className="
                    absolute -top-10 -right-10
                    w-32 h-32
                    bg-red-300/20
                    rounded-full
                    blur-3xl
                    group-hover:scale-150
                    transition duration-700
                  "
                ></div>

                {/* Icon */}
                <motion.div
                  className="mb-5 relative z-10"
                  whileHover={{
                    rotate: [0, -10, 10, -5, 5, 0],
                    scale: 1.2,
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon
                    size={45}
                    className="
                      text-red-700
                      group-hover:text-red-500
                      transition-colors duration-300
                    "
                  />
                </motion.div>

                {/* Number */}
                <div
                  className="
                    text-right text-3xl font-extrabold
                    text-transparent bg-clip-text
                    bg-gradient-to-r
                    from-red-700 to-red-500
                    relative z-10
                  "
                >
                  0{service.id}
                </div>

                {/* Title */}
                <h3
                  className="
                    mt-3 text-2xl font-bold
                    text-transparent bg-clip-text
                    bg-gradient-to-r
                    from-red-700 to-yellow-500
                    relative z-10
                  "
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className="
                    mt-4 text-black
                    leading-relaxed
                    relative z-10
                  "
                >
                  {service.description}
                </p>

                {/* Read More */}
                <a
                  href="#contact"
                  className="
                    mt-6 inline-block
                    font-semibold
                    text-red-700
                    hover:text-red-600
                    transition-colors
                    relative z-10
                  "
                >
                  Read More →
                </a>

              </motion.div>
            );
          })}

        </div>
      </div>
    </div>
  );
};

export default Service;