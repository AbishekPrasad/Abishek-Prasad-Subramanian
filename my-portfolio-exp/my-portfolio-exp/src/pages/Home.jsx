import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Home = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const downloadResume = () => {
    const resumeUrl = "https://drive.google.com/uc?export=download&id=1vc0PS891SFWrZR0hr_f5v-1R-RLI8P5x";
    
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.setAttribute('download', 'Abishek_Prasad_Resume.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-full">
      {/* Hero Section with Animated Elements */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-16">
        {/* Left Column - Text Content */}
        <motion.div 
          className="w-full lg:w-1/2 order-2 lg:order-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Name with gradient text */}
          <div className="mb-4 sm:mb-6">
            <motion.span 
              className="text-base sm:text-lg font-medium text-indigo-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Hello, I'm
            </motion.span>
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              Abishek Prasad Subramanian
            </motion.h1>
            <motion.div
              className="mt-3 sm:mt-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white/90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <div className="flex items-center">
                <span className="mr-2 sm:mr-3 h-8 sm:h-11">a </span>
                <div className="h-8 sm:h-12 overflow-hidden">
                  <div>
                      <div className="h-8 sm:h-12 flex items-center text-indigo-400 animate-slide-up delay-[200ms]">B.Tech IT Student</div>
                      <div className="h-8 sm:h-12 flex items-center text-purple-400 animate-slide-up delay-[400ms]">ML Enthusiast</div>
                      <div className="h-8 sm:h-12 flex items-center text-pink-400 animate-slide-up delay-[600ms]">MERN Stack Developer</div>
                      <div className="h-8 sm:h-12 flex items-center text-indigo-400 animate-slide-up delay-[800ms]">Dapp Developer</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Description */}
          <motion.p 
            className="text-base sm:text-lg text-gray-300 my-4 sm:my-6 max-w-lg lg:max-w-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
 B.Tech Information Technology student with practical experience in MERN stack Development and Blockchain integration and Machine learning.
          </motion.p>
          
          {/* Social Links */}
          <motion.div 
            className="flex gap-4 sm:gap-6 mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.3 }}
          >
            <a 
              href="https://github.com/AbishekPrasad" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub" 
              className="text-white hover:text-indigo-400 transition-colors p-2 rounded-full hover:bg-white/10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
              </svg>
            </a>
            <a 
              href="https://www.linkedin.com/in/abishek-prasad-subramanian" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn" 
              className="text-white hover:text-indigo-400 transition-colors p-2 rounded-full hover:bg-white/10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
              </svg>
            </a>
            <a 
              href="mailto:abishekarru@gmail.com" 
              aria-label="Email" 
              className="text-white hover:text-indigo-400 transition-colors p-2 rounded-full hover:bg-white/10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 16 16">
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
              </svg>
            </a>
          </motion.div>
          
          {/* Action Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            <button 
              onClick={() => scrollToSection("projects")} 
              className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-full text-white font-medium shadow-lg shadow-indigo-500/30 transition-all text-sm sm:text-base"
            >
              View Projects
            </button>
            <button 
              onClick={downloadResume} 
              className="px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all rounded-full text-white font-medium flex items-center justify-center text-sm sm:text-base"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Resume
            </button>
            <button 
              onClick={() => scrollToSection("contact")} 
              className="px-6 sm:px-8 py-3 sm:py-4 bg-transparent border border-white/30 hover:border-indigo-400 hover:text-indigo-400 transition-all rounded-full text-white font-medium text-sm sm:text-base"
            >
              Contact Me
            </button>
          </motion.div>
        </motion.div>
        
        {/* Right Column - Skills Card */}
        <motion.div 
          className="w-full lg:w-1/2 mt-8 lg:mt-0 order-1 lg:order-2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="p-4 sm:p-6 lg:p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md border border-white/10 shadow-xl">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center">
              <span className="bg-indigo-500 w-2 h-6 sm:h-8 rounded mr-3"></span>
              What I Do
            </h2>
            
            <div className="space-y-4 sm:space-y-6">
               {[
                  {
                    title: "MERN Stack Development",
                    description: "Creating full-stack web applications with user authentication, role-based dashboards, secure APIs, and responsive UIs using MongoDB, Express.js, React, and Node.js.",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    )
                  },
                  {
                    title: "Web3 & DApp Development",
                    description: "Building decentralized applications (DApps) with blockchain integration using smart contracts, web3.js, and user-centric interfaces for crypto-based platforms.",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2L2 12l10 10 10-10L12 2zm0 3.464l6.536 6.536L12 18.536 5.464 12 12 5.464z" />
                      </svg>
                    )
                  },
                  {
                    title: "Image & Signal Processing",
                    description: "Applying filtering, noise reduction, and edge detection techniques for enhanced image analysis and preprocessing in machine learning pipelines.",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    )
                  },
                  {
                    title: "Machine Learning & AI",
                    description: "Designing and training deep learning models for image classification, facial expression recognition, and real-world prediction systems using CNNs, transfer learning, and model evaluation metrics.",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    )
                  }
                  
              ].map((skill, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl hover:bg-white/5 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                >
                  <div className="p-2 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 text-white flex-shrink-0">
                    {skill.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-1">{skill.title}</h3>
                    <p className="text-sm sm:text-base text-gray-400 leading-relaxed">{skill.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
