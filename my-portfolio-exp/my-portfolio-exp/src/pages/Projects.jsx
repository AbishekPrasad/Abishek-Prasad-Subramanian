import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

// ---- Project Data ----
const projects = [
  {
    id: 1,
    title: "Restaurant Management System (MERN Stack)",
    description: "Built a role-based restaurant platform with ordering, queue management, and e-wallet integration using MERN.",
    image: "./projects/resturant.png",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "Tailwind CSS"],
    github: "https://github.com/AbishekPrasad/restaurant-management"
  },
  {
    id: 2,
    title: "SAR Image Colorization using Deep Learning",
    description: "Developed a CNN-based model to colorize grayscale SAR images, enhancing interpretability for remote sensing tasks.",
    image: "./projects/sar.png",
    technologies: ["Python", "TensorFlow", "CNN", "Deep Learning", "Remote Sensing"],
    github: "https://github.com/AbishekPrasad/SAR-Image-Enhancement-Using-Deep-Learning.git"
  },
  {
    id: 3,
    title: "Brain Tumor Classification with VGG16",
    description: "Created a deep learning model using VGG16 and transfer learning to classify MRI scans as tumor or non-tumor.",
    image: "./projects/tumor.png",
    technologies: ["Python", "TensorFlow", "VGG16", "Transfer Learning", "Medical Imaging"],
    github: "https://github.com/AbishekPrasad/Brain-Tumor-Detection-and-Classification-using-Deep-Learning.git"
  },
  {
    id: 4,
    title: "Smart Solar Load Management using IoT + ML (Ongoing)",
    description: "Designed an intelligent energy system using ML and IoT to manage and prioritize solar loads for optimal usage.",
    image: "./projects/solar.png",
    technologies: ["Python", "ESP32", "IoT", "GSM", "Machine Learning"],
    github: "https://github.com/AbishekPrasad/solar-load-iot"
  },
  {
    id: 5,
    title: "Crypto Payment Gateway (Web3 Blockchain)",
    description: "Engineered a blockchain-agnostic crypto payment gateway with MetaMask wallet integration for dApp payments.",
    image: "./projects/crypto.png",
    technologies: ["Solidity", "Web3.js", "Smart Contracts", "React", "Ethereum"],
    github: "https://github.com/AbishekPrasad/crypto-payment-gateway"
  }
];

// ---- Component ----
const Projects = () => {
  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">

        {/* ---- Projects Title ---- */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>

        {/* ---- Projects Grid ---- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 sm:h-56 object-cover"
              />
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 leading-tight">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-6">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 sm:px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-xs sm:text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-indigo-300 hover:text-indigo-400 font-medium transition text-sm sm:text-base"
                  >
                    <FaGithub className="text-lg sm:text-xl" /> View GitHub
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
