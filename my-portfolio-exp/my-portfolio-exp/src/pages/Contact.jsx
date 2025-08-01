import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

// Optional custom icon (you can remove this if not needed)
const HuggingFaceIcon = (props) => (
  <svg viewBox="0 0 32 32" fill="currentColor" width="1em" height="1em" {...props}>
    <circle cx="16" cy="16" r="16" fill="currentColor" />
    <ellipse cx="11.5" cy="15.5" rx="1.5" ry="2" fill="#000" />
    <ellipse cx="20.5" cy="15.5" rx="1.5" ry="2" fill="#000" />
    <path d="M10 20c1.5 2 6.5 2 8 0" stroke="#000" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    <ellipse cx="16" cy="24" rx="6" ry="2" fill="currentColor" />
  </svg>
);

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    const serviceId = "service_fyyo7d1";
    const templateId = "template_hgnw5b7";
    const publicKey = "v_UeQeck9aiZCrJb7";

    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setStatus({
          submitted: true,
          success: true,
          message: 'Your message has been sent successfully! I will get back to you soon.'
        });
        form.current.reset();
        setLoading(false);
      }, (error) => {
        console.log('FAILED...', error.text);
        setStatus({
          submitted: true,
          success: false,
          message: `There was an error sending your message: ${error.text}. Please try again later.`
        });
        setLoading(false);
      });
  };

  return (
    <section className="p-4 sm:p-6 md:p-8 lg:p-12 xl:p-20" id="contact">
      <motion.h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Contact Me
      </motion.h2>

      <motion.p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-12 text-center max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Feel free to reach out if you have any questions or would like to discuss potential opportunities.
      </motion.p>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {/* Left - Contact Info */}
        <motion.div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 sm:p-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center">
            <span className="bg-indigo-500 w-2 h-6 sm:h-8 rounded mr-3"></span>
            Get In Touch
          </h3>
          <div className="space-y-4 sm:space-y-6">
            {/* Location */}
            <div className="flex items-start">
              <div className="bg-indigo-500/20 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4 flex-shrink-0">
                <FaMapMarkerAlt className="text-indigo-400 text-lg sm:text-xl" />
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="text-base sm:text-lg font-semibold text-white">Location</h4>
                <p className="text-sm sm:text-base text-gray-300 mt-1">27/J-13, Vinayaga Apartment<br />Venlandipalayam, Coimbatore - 641025<br />Tamil Nadu</p>
              </div>
            </div>
            {/* Email */}
            <div className="flex items-start">
              <div className="bg-indigo-500/20 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4 flex-shrink-0">
                <FaEnvelope className="text-indigo-400 text-lg sm:text-xl" />
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="text-base sm:text-lg font-semibold text-white">Email</h4>
                <a href="mailto:abishekarru@gmail.com" className="text-sm sm:text-base text-gray-300 hover:text-indigo-400 mt-1 block break-all">abishekarru@gmail.com</a>
              </div>
            </div>
            {/* Phone */}
            <div className="flex items-start">
              <div className="bg-indigo-500/20 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4 flex-shrink-0">
                <FaPhone className="text-indigo-400 text-lg sm:text-xl" />
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="text-base sm:text-lg font-semibold text-white">Phone</h4>
                <a href="tel:+918610901231" className="text-sm sm:text-base text-gray-300 hover:text-indigo-400 mt-1 block">+91 8610901231</a>
              </div>
            </div>
            {/* LinkedIn */}
            <div className="flex items-start">
              <div className="bg-indigo-500/20 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4 flex-shrink-0">
                <FaLinkedin className="text-indigo-400 text-lg sm:text-xl" />
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="text-base sm:text-lg font-semibold text-white">LinkedIn</h4>
                <a href="https://www.linkedin.com/in/abishek-prasad-subramanian" target="_blank" rel="noopener noreferrer"
                  className="text-sm sm:text-base text-gray-300 hover:text-indigo-400 mt-1 block break-all">
                  linkedin.com/in/abishek-prasad-subramanian
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right - Form */}
        <motion.div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 sm:p-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center">
            <span className="bg-indigo-500 w-2 h-6 sm:h-8 rounded mr-3"></span>
            Send Message
          </h3>

          {status.submitted ? (
            <motion.div
              className={`p-4 sm:p-6 rounded-lg ${status.success ? 'bg-indigo-500/20 text-indigo-200' : 'bg-red-500/20 text-red-200'}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-base sm:text-lg">{status.message}</p>
              {status.success && (
                <button onClick={() => setStatus({ submitted: false, success: false, message: '' })}
                  className="mt-4 bg-indigo-500 text-white py-2 px-4 sm:px-6 rounded-lg hover:bg-indigo-600 transition-colors text-sm sm:text-base">
                  Send Another Message
                </button>
              )}
            </motion.div>
          ) : (
            <form ref={form} onSubmit={sendEmail} className="space-y-4 sm:space-y-5">
              <div>
                <label htmlFor="user_name" className="block text-white mb-2 font-medium text-sm sm:text-base">Name</label>
                <input type="text" name="user_name" placeholder="Enter name" required
                  className="w-full p-3 bg-white/5 text-white border border-white/10 rounded-lg placeholder-gray-400 focus:outline-none focus:border-indigo-500 transition text-sm sm:text-base" />
              </div>
              <div>
                <label htmlFor="user_email" className="block text-white mb-2 font-medium text-sm sm:text-base">Email</label>
                <input type="email" name="user_email" placeholder="Enter email" required
                  className="w-full p-3 bg-white/5 text-white border border-white/10 rounded-lg placeholder-gray-400 focus:outline-none focus:border-indigo-500 transition text-sm sm:text-base" />
              </div>
              <div>
                <label htmlFor="message" className="block text-white mb-2 font-medium text-sm sm:text-base">Message</label>
                <textarea name="message" rows="4" placeholder="Enter message here" required
                  className="w-full p-3 bg-white/5 text-white border border-white/10 rounded-lg placeholder-gray-400 focus:outline-none focus:border-indigo-500 transition text-sm sm:text-base resize-none"></textarea>
              </div>
              <motion.button type="submit" disabled={loading}
                className="w-full py-3 px-6 rounded-lg text-white font-medium bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg shadow-indigo-500/30 hover:from-indigo-700 hover:to-purple-700 transition-all flex items-center justify-center text-sm sm:text-base"
                whileHover={{ y: -3 }} whileTap={{ y: 0 }}>
                {loading && <span className="inline-block animate-spin mr-2">⟳</span>}
                {loading ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>

      {/* Social Icons Footer */}
      <motion.div className="mt-8 sm:mt-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Connect With Me</h3>
        <div className="flex justify-center gap-4 sm:gap-6">
          <a href="mailto:abishekarru@gmail.com" className="bg-white/5 hover:bg-white/10 p-2 sm:p-3 rounded-full text-indigo-400 hover:text-indigo-300 transition-all hover:-translate-y-1">
            <FaEnvelope className="text-lg sm:text-xl" />
          </a>
          <a href="https://www.linkedin.com/in/abishek-prasad-subramanian" target="_blank" rel="noopener noreferrer"
            className="bg-white/5 hover:bg-white/10 p-2 sm:p-3 rounded-full text-indigo-400 hover:text-indigo-300 transition-all hover:-translate-y-1">
            <FaLinkedin className="text-lg sm:text-xl" />
          </a>
          <a href="https://github.com/AbishekPrasad" target="_blank" rel="noopener noreferrer"
            className="bg-white/5 hover:bg-white/10 p-2 sm:p-3 rounded-full text-indigo-400 hover:text-indigo-300 transition-all hover:-translate-y-1">
            <FaGithub className="text-lg sm:text-xl" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
