import React from "react";
import { motion } from "framer-motion";
import { Layout, Code, Server, Layers, PenTool, BarChart2 } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Web Design",
    description: "Creating visually appealing and user-friendly web designs.",
    icon: Layout,
  },
  {
    id: 2,
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces.",
    icon: Code,
  },
  {
    id: 3,
    title: "Backend Development",
    description: "Developing robust server-side logic and databases.",
    icon: Server,
  },
  {
    id: 4,
    title: "Full-Stack Development",
    description: "Combining both frontend and backend development skills.",
    icon: Layers,
  },
  {
    id: 5,
    title: "Content Writing",
    description: "Writing content for your business and companies.",
    icon: PenTool,
  },
  {
    id: 6,
    title: "Digital Marketing",
    description: "Promote your business with our digital marketing team.",
    icon: BarChart2,
  },
];

const Service = () => {
  return (
    <div className="bg-black text-white py-20" id="service">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        
        {/* Section Heading */}
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Services
        </motion.h2>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                className="group bg-gray-900/90 px-6 pt-6 pb-6 rounded-xl shadow-lg border border-transparent 
                           transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{
                  y: -10,
                  scale: 1.05,
                  boxShadow: "0px 10px 25px rgba(255, 80, 80, 0.3)",
                  borderColor: "rgba(255, 80, 80, 0.6)",
                }}
              >
                {/* Icon with playful animation */}
                <motion.div
                  className="mb-4 flex justify-start"
                  whileHover={{ rotate: [0, -10, 10, -5, 5, 0], scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon
                    size={40}
                    className="text-yellow-500 group-hover:text-red-800 transition-colors"
                  />
                </motion.div>

                {/* Service ID */}
                <div className="text-right text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-800 to-yellow-500">
                  {service.id}
                </div>

                {/* Title */}
                <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-800 to-yellow-500">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-gray-300">{service.description}</p>

                {/* CTA */}
                <a
                  href="#contact"
                  className="mt-4 inline-block font-semibold text-red-800 hover:text-yellow-500 transition-colors"
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
