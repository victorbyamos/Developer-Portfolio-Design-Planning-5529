import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiArrowDown, FiGithub, FiLinkedin, FiTwitter, FiExternalLink } = FiIcons;

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Story Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-blue-400">
                Victor Amos
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-secondary-300 mb-6">
              Full-Stack Developer & Digital Solutions Architect
            </p>
            <p className="text-lg text-secondary-400 max-w-3xl mx-auto">
              Founder of <span className="text-primary-400 font-semibold">BlinkzDigital</span> - 
              Specializing in scaling local businesses and startups with cutting-edge web and mobile solutions
            </p>
          </motion.div>

          {/* Need & Answer Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-secondary-800/50 backdrop-blur-sm rounded-xl p-6 border border-secondary-700">
                <h3 className="text-xl font-semibold text-primary-400 mb-3">The Challenge</h3>
                <p className="text-secondary-300">
                  Local businesses and startups struggle with outdated digital presence, 
                  limiting their growth potential and customer reach.
                </p>
              </div>
              <div className="bg-secondary-800/50 backdrop-blur-sm rounded-xl p-6 border border-secondary-700">
                <h3 className="text-xl font-semibold text-primary-400 mb-3">My Solution</h3>
                <p className="text-secondary-300">
                  Custom web and mobile applications using LAMP & MERN stacks, 
                  designed to solve real business problems and drive growth.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12"
          >
            <p className="text-secondary-400 mb-4">Specialized in:</p>
            <div className="flex flex-wrap justify-center gap-4">
              {['LAMP Stack', 'MERN Stack', 'Mobile Development', 'UI/UX Design'].map((tech) => (
                <motion.span
                  key={tech}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="bg-gradient-to-r from-primary-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <motion.a
              href="#projects"
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 0 25px rgba(59, 130, 246, 0.5)'
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              View My Work
              <SafeIcon icon={FiExternalLink} className="text-lg group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: 'rgba(59, 130, 246, 0.1)'
              }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-primary-400 text-primary-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary-400/10 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Let's Talk Business
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex justify-center space-x-6 mb-12"
          >
            {[
              { icon: FiGithub, href: 'https://github.com/victorbyamos' },
              { icon: FiLinkedin, href: 'https://linkedin.com/in/victorbyamos' },
              { icon: FiTwitter, href: 'https://twitter.com/victorbyamos' },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ 
                  scale: 1.2, 
                  y: -3,
                  boxShadow: '0 0 20px rgba(59, 130, 246, 0.4)'
                }}
                whileTap={{ scale: 0.9 }}
                className="text-2xl text-secondary-400 hover:text-primary-400 transition-all duration-300 p-3 rounded-full hover:bg-primary-400/10"
              >
                <SafeIcon icon={social.icon} />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-secondary-400 hover:text-primary-400 transition-colors cursor-pointer"
            >
              <SafeIcon icon={FiArrowDown} className="text-2xl" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;