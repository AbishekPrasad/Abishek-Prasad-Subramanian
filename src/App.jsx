import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Loader from "./components/Loader";
import Header from "./components/Header";
import Footer from "./components/Footer";
import InteractiveBackground from "./components/ParticleBackground";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

// Enhanced section wrapper with more dynamic animations
function SectionWrapper({ id, children, index }) {
  const [isInView, setIsInView] = useState(false);
  
  // Determine animation direction based on index
  const isEven = index % 2 === 0;
  const initialX = isEven ? -50 : 50;
  
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, x: initialX, y: 20 }}
      whileInView={{ 
        opacity: 1, 
        x: 0, 
        y: 0,
        transition: { 
          type: "spring", 
          stiffness: 70, 
          damping: 20, 
          delay: 0.1 
        }
      }}
      viewport={{ once: true, margin: "-100px" }}
      onViewportEnter={() => setIsInView(true)}
      className="min-h-screen w-full flex items-center justify-center py-16 md:py-24"
    >
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </motion.section>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Background with subtle gradient */}
      <div 
        className="fixed inset-0 z-[-2]" 
        style={{
          background: "linear-gradient(to bottom, #000000, #050510, #050510, #000000)",
        }}
      />
      
      {/* Interactive background stays mounted regardless of loading state */}
      <InteractiveBackground />
      
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loader"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10"
          >
            <Loader />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col min-h-screen relative z-10"
          >
            <Header />
            
            <main className="flex-grow">
              <SectionWrapper id="home" index={0}>
                <Home />
              </SectionWrapper>
              
              <SectionWrapper id="about" index={1}>
                <About />
              </SectionWrapper>
              
              <SectionWrapper id="experience" index={2}>
                <Experience />
              </SectionWrapper>
              
              <SectionWrapper id="projects" index={3}>
                <Projects />
              </SectionWrapper>
              
              <SectionWrapper id="contact" index={4}>
                <Contact />
              </SectionWrapper>
            </main>
            
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
