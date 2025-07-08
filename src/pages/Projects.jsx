import React from "react";
import { motion } from "framer-motion";

// ---- Project Data ----
const projects = [
  {
    id: 4,
    title: "Restaurant Management System (MERN Stack)",
    description: "Built a role-based restaurant platform with ordering, queue management, and e-wallet integration using MERN.",
    image: "./projects/resturant.png",
    achievements: [
      "Created separate dashboards for users, chefs, and admins",
      "Added order queueing and item tracking with status updates",
      "Enabled admin control with photo, ingredients, and price editing"
    ],
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "Tailwind CSS"]
  },
  {
    id: 1,
    title: "SAR Image Colorization using Deep Learning",
    description: "Developed a CNN-based model to colorize grayscale SAR images, enhancing interpretability for remote sensing tasks.",
    image: "./projects/sar.png",
    achievements: [
      "Improved visual clarity in grayscale SAR imagery",
      "Achieved SSIM of 0.89 and PSNR of 28.6 dB",
      "Facilitated better environmental monitoring through visualization"
    ],
    technologies: ["Python", "TensorFlow", "CNN", "Deep Learning", "Remote Sensing"]
  },
  {
    id: 2,
    title: "Brain Tumor Classification with VGG16",
    description: "Created a deep learning model using VGG16 and transfer learning to classify MRI scans as tumor or non-tumor.",
    image: "./projects/tumor.png",
    achievements: [
      "Achieved 98.3% accuracy on test MRI dataset",
      "Utilized VGG16 with transfer learning for feature extraction",
      "Optimized for clinical-grade performance using medical imaging best practices"
    ],
    technologies: ["Python", "TensorFlow", "VGG16", "Transfer Learning", "Medical Imaging"]
  },
  {
    id: 3,
    title: "Smart Solar Load Management using IoT + ML (Ongoing)",
    description: "Designed an intelligent energy system using ML and IoT to manage and prioritize solar loads for optimal usage.",
    image: "./projects/solar.png",
    achievements: [
      "Real-time solar monitoring",
      "Predicted consumption trends and switched critical loads dynamically",
    ],
    technologies: ["Python", "ESP32", "IoT", "GSM", "Machine Learning"]
  },
  {
    id: 5,
    title: "Crypto Payment Gateway (Web3 Blockchain)",
    description: "Engineered a blockchain-agnostic crypto payment gateway with MetaMask wallet integration for dApp payments.",
    image: "./projects/crypto.png",
    achievements: [
      "Designed secure smart contract transaction flow",
      "Implemented support for multiple wallets and tokens",
      "Created blockchain-agnostic logic for decentralized platforms"
    ],
    technologies: ["Solidity", "Web3.js", "Smart Contracts", "React", "Ethereum"]
  }
];


// ---- Component ----
const Projects = () => {
  return (
    <section className="py-16 bg-transparent">
      <div className="container mx-auto px-6 lg:px-12">

        {/* ---- Projects Title ---- */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>

        {/* ---- Projects Grid ---- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <h4 className="text-white font-semibold mb-2">Key Achievements:</h4>
                <ul className="list-disc pl-5 text-gray-300 space-y-1 mb-4">
                  {project.achievements.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ---- Work Experience ---- */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
