import React from "react";
import { motion } from "framer-motion";

// Work Experience Card Component
function WorkCard({ year, title, institution, description, skills }) {
  return (
    <motion.div 
      className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 sm:p-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
        <h3 className="text-lg sm:text-xl font-bold text-white">{title}</h3>
        <span className="text-indigo-400 text-xs sm:text-sm font-medium">{year}</span>
      </div>
      <p className="text-white/80 font-medium text-sm sm:text-base">{institution}</p>
      <p className="text-gray-300 mt-3 text-sm sm:text-base leading-relaxed">{description}</p>
      {skills && (
        <div className="mt-4 flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-2 sm:px-3 py-1 rounded-full text-xs font-medium bg-indigo-500/10 text-indigo-300 hover:bg-indigo-500/20 transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
}

// Timeline Item for Certifications
function TimelineItem({ year, title, institution, description, skills }) {
  return (
    <motion.div
      className="relative pl-6 sm:pl-8 lg:pl-12 py-4 sm:py-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute left-0 top-6 sm:top-7 lg:top-8 h-3 w-3 sm:h-4 sm:w-4 rounded-full bg-indigo-500 border-2 border-zinc-900"></div>
      <div className="absolute left-[5px] sm:left-[7px] top-0 h-full w-[3px] bg-indigo-500/40"></div>

      <motion.div
        className="bg-white/5 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-white/10 hover:border-indigo-500/40 transition-all duration-300"
        whileHover={{ y: -5 }}
      >
        <span className="text-indigo-400 text-xs sm:text-sm font-medium">{year}</span>
        <h3 className="text-lg sm:text-xl font-bold text-white mt-1">{title}</h3>
        <p className="text-white/90 font-medium mt-1 text-sm sm:text-base">{institution}</p>
        <p className="text-gray-300 mt-3 text-sm sm:text-base leading-relaxed">{description}</p>

        {skills && (
          <div className="mt-4 flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-2 sm:px-3 py-1 rounded-full text-xs font-medium bg-indigo-500/10 text-indigo-300 hover:bg-indigo-500/20 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

// Skills Section
function SkillsSection() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "JavaScript", "C", "SQL"],
      color: "from-indigo-500 to-blue-500",
    },
    {
      title: "Web Development",
      skills: ["React.js", "Node.js", "Express.js", "MongoDB", "HTML", "CSS", "Tailwind CSS"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Machine Learning & AI",
      skills: ["NumPy", "Pandas", "Scikit-learn", "TensorFlow", "OpenCV"],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Blockchain & Web3",
      skills: ["Solidity", "Web3.js", "MetaMask", "Smart Contracts"],
      color: "from-yellow-500 to-orange-500",
    },
    {
      title: "Tools & Others",
      skills: ["Git", "GitHub", "Postman", "Figma"],
      color: "from-emerald-500 to-teal-500",
    }
  ];

  return (
    <motion.div
      className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 sm:p-6 mb-8 sm:mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center">
        <span className="bg-indigo-500 w-2 h-6 sm:h-8 rounded mr-3"></span>
        Technical Skills
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            className="p-3 sm:p-4 rounded-lg bg-white/5 border border-white/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h4 className={`text-base sm:text-lg font-semibold mb-2 sm:mb-3 bg-clip-text text-transparent bg-gradient-to-r ${category.color}`}>
              {category.title}
            </h4>
            <div className="flex flex-wrap gap-1 sm:gap-2">
              {category.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-2 sm:px-3 py-1 bg-indigo-500/10 text-indigo-300 rounded-full text-xs sm:text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

// Main Experience Component
function Experience() {
  const experiences = [
    {
      year: "2025 – Present",
      title: "Project Intern",
      institution: "nStore Retech Pvt. Ltd. | Chennai, Tamil Nadu | Hybrid",
      description:
        "Working on full-stack and blockchain projects to build production-ready applications using MERN stack and Web3 technologies.",
      skills: ["React", "Node.js", "MongoDB", "Web3.js", "MetaMask", "Smart Contracts"],
    },
  ];

  const certifications = [
    {
      year: "2023",
      title: "Python for Data Science, AI & Development",
      institution: "IBM",
      description: "Comprehensive course covering Python fundamentals for data science and AI applications.",
      skills: ["Python", "Data Science", "AI"],
    },
    {
      year: "2023",
      title: "Data Science Orientation",
      institution: "IBM",
      description: "Introductory course to data science concepts, methodologies, and applications.",
      skills: ["Data Science", "Analytics"],
    },
  ];

  return (
    <section className="p-4 sm:p-6 md:p-8 lg:p-12 xl:p-20">
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 lg:mb-10 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Experience & Skills
      </motion.h2>

      {/* Work Experience Section */}
      <motion.h3
        className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="bg-indigo-500 w-2 sm:w-3 h-6 sm:h-9 rounded mr-3"></span>
        Work Experience
      </motion.h3>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-12 sm:mb-16">
        {experiences.map((item, index) => (
          <WorkCard 
            key={index}
            year={item.year}
            title={<span className="text-lg sm:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">{item.title}</span>}
            institution={item.institution}
            description={item.description}
            skills={item.skills}
          />
        ))}
      </div>

      {/* Skills Section */}
      <SkillsSection />

      {/* Certifications Timeline */}
      <div className="max-w-4xl mx-auto">
        <motion.h3
          className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 mt-8 sm:mt-12 flex items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="bg-indigo-500 w-2 h-6 sm:h-8 rounded mr-3"></span>
          Certifications
        </motion.h3>

        {certifications.map((item, index) => (
          <TimelineItem
            key={index}
            year={item.year}
            title={item.title}
            institution={item.institution}
            description={item.description}
            skills={item.skills}
          />
        ))}
      </div>
    </section>
  );
}

export default Experience;
