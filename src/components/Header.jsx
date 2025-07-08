import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Header() {
  const [isHome, setIsHome] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) section.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false); // Close menu after clicking
    setActiveSection(sectionId);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Check which section is currently in view
      const sections = ["home", "about", "experience", "projects", "contact"];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (!element) return false;
        
        const rect = element.getBoundingClientRect();
        return rect.top <= 150 && rect.bottom >= 150;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
      
      // Check if we're at the home section
      const homeSection = document.getElementById("home");
      if (homeSection) {
        const homeRect = homeSection.getBoundingClientRect();
        setIsHome(homeRect.top <= 150 && homeRect.bottom >= 150);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 px-4 py-6"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="container mx-auto flex justify-center">
        <motion.nav 
          className={`px-6 py-3 bg-black/30 backdrop-blur-md border border-white/10 rounded-full transition-all duration-300 ${isHome ? 'shadow-lg shadow-indigo-500/10' : 'shadow-lg shadow-indigo-500/20'}`}
          animate={{ 
            backgroundColor: isHome ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.7)'
          }}
        >
          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8 items-center">
            {[
              { id: "home", label: "Home" },
              { id: "about", label: "About" },
              { id: "experience", label: "Experience" },
              { id: "projects", label: "Projects" },
              { id: "contact", label: "Contact" }
            ].map(item => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                    activeSection === item.id 
                      ? 'text-white' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500"
                      layoutId="navIndicator"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </button>
              </li>
            ))}
        
          </ul>
          
          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center justify-between w-full">
            
            <button 
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </motion.nav>
      </div>
      
      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="absolute top-full left-4 right-4 mt-2 md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <div className="bg-black/80 backdrop-blur-lg rounded-2xl shadow-lg border border-white/10 overflow-hidden">
              <nav>
                <ul className="py-2">
                  {[
                    { id: "home", label: "Home", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
                    { id: "about", label: "About", icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" },
                    { id: "experience", label: "Experience", icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
                    { id: "projects", label: "Projects", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" },
                    { id: "contact", label: "Contact", icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" }
                  ].map(item => (
                    <li key={item.id}>
                      <button
                        onClick={() => scrollToSection(item.id)}
                        className={`w-full text-left py-3 px-6 flex items-center space-x-3 transition-colors ${
                          activeSection === item.id 
                            ? 'bg-indigo-500/20 text-white' 
                            : 'text-gray-300 hover:bg-white/5'
                        }`}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                        </svg>
                        <span>{item.label}</span>
                        {activeSection === item.id && (
                          <motion.div 
                            className="ml-auto h-2 w-2 rounded-full bg-indigo-500"
                            layoutId="mobileNavIndicator"
                          />
                        )}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Header;
