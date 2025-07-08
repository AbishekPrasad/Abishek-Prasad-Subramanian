import { motion } from "framer-motion";

function About() {
  return (
    <section className="p-6 md:p-20">
      <motion.h2 
        className="text-4xl md:text-6xl font-extrabold mb-6 md:mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>
      
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Personal Info */}
          <motion.div 
            className="col-span-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 h-full">
              <img 
                src="photo.png" 
                alt="Abishek Prasad Subramanian" 
                className="w-full h-64 object-cover rounded-xl mb-6"
              />
              
              <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
                Abishek Prasad Subramanian
              </h3>
              
              <div className="space-y-3 text-gray-300">
                <p className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  27/J-13, Vinayaga Apartment
                </p>
                <p className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Dr. Ambethkar Road, Venlandipalayam
                </p>
                <p className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +91 8610901231
                </p>
                <p className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  abishekarru@gmail.com
                </p>
                <p className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  <a href="https://www.linkedin.com/in/abishek-prasad-subramanian" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">
                    LinkedIn Profile
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
          
          {/* Summary and Skills */}
          <motion.div 
            className="col-span-1 md:col-span-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 mb-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <span className="bg-indigo-500 w-2 h-8 rounded mr-3"></span>
                Summary
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Enthusiastic B.Tech Information Technology student with practical experience in MERN stack Development and Blockchain 
integration and Machine learning. Passionate about leveraging technology to solve complex problems, eager to contribute to impactful projects, and 
continuously expand technical and collaborative skills through hands-on learning. 
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <span className="bg-indigo-500 w-2 h-8 rounded mr-3"></span>
                Skills
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-indigo-400 mb-3">Programming Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Python", "Java", "C", "SQL"].map((skill, index) => (
                      <span key={index} className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-indigo-400 mb-3">Development Libraries</h4>
                  <div className="flex flex-wrap gap-2">
                    {["React", "NodeJS"].map((skill, index) => (
                      <span key={index} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-indigo-400 mb-3">Tools & Libraries</h4>
                  <div className="flex flex-wrap gap-2">
                    {["NumPy", "Pandas", "Scikit-Learn", "Matplotlib", "Seaborn", "Git", "Beautiful Soup", "SciPy", "TensorFlow"].map((skill, index) => (
                      <span key={index} className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-indigo-400 mb-3">Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    {["English", "Tamil"].map((skill, index) => (
                      <span key={index} className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Education */}
        <motion.div 
          className="mt-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <span className="bg-indigo-500 w-2 h-8 rounded mr-3"></span>
              Education
            </h3>
            
            <div className="space-y-8">
              <div className="relative pl-8 border-l-2 border-indigo-500/50">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-indigo-500"></div>
                <h4 className="text-xl font-bold text-white">BTech Information Technology</h4>
                <p className="text-indigo-300 mb-2">Saranathan College of Engineering | 2022 - 2026</p>
                <p className="text-gray-400">Tiruchirappalli, Tamil Nadu | CGPA: 7.8 (current)</p>
              </div>
              
              <div className="relative pl-8 border-l-2 border-indigo-500/50">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-indigo-500"></div>
                <h4 className="text-xl font-bold text-white">Higher Secondary</h4>
                <p className="text-indigo-300 mb-2">Lisieux Matriculation Higher Secondary School | 2020 - 2022</p>
                <p className="text-gray-400">Coimbatore, Tamil Nadu | 75%</p>
              </div>
              
              <div className="relative pl-8 border-l-2 border-indigo-500/50">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-indigo-500"></div>
                <h4 className="text-xl font-bold text-white">Secondary</h4>
                <p className="text-indigo-300 mb-2">Lisieux Matriculation Higher Secondary School | 2020</p>
                <p className="text-gray-400">Coimbatore, Tamil Nadu | 75%</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
