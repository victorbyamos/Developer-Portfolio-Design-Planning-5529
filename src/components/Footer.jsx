import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCode, FiHeart, FiGithub, FiLinkedin, FiTwitter, FiMail, FiPhone, FiMapPin, FiArrowUp } = FiIcons;

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    services: [
      { name: 'Web Development', href: '#services' },
      { name: 'Mobile Apps', href: '#services' },
      { name: 'E-commerce', href: '#services' },
      { name: 'SaaS Development', href: '#services' },
    ],
    company: [
      { name: 'About', href: '#about' },
      { name: 'Projects', href: '#projects' },
      { name: 'Contact', href: '#contact' },
      { name: 'Blog', href: '#' },
    ],
    resources: [
      { name: 'Case Studies', href: '#projects' },
      { name: 'Tech Stack', href: '#about' },
      { name: 'Process', href: '#services' },
      { name: 'FAQ', href: '#' },
    ]
  };

  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/victorbyamos', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://linkedin.com/in/victorbyamos', label: 'LinkedIn' },
    { icon: FiTwitter, href: 'https://twitter.com/victorbyamos', label: 'Twitter' },
  ];

  return (
    <footer className="bg-secondary-900 border-t border-secondary-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <div className="flex items-center space-x-2 mb-4">
                <div className="relative">
                  <SafeIcon icon={FiCode} className="text-2xl text-primary-400" />
                  <div className="absolute inset-0 bg-primary-400 rounded-full blur-md opacity-20"></div>
                </div>
                <span className="text-2xl font-bold text-white">
                  Victor<span className="text-primary-400">Amos</span>
                </span>
              </div>
              <p className="text-secondary-300 mb-6 max-w-md leading-relaxed">
                Full-Stack Developer and founder of <span className="text-primary-400">BlinkzDigital</span>. 
                Transforming business challenges into digital opportunities with modern web and mobile solutions.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3 text-secondary-300">
                  <SafeIcon icon={FiMail} className="text-primary-400" />
                  <a href="mailto:blinkzdigital1@gmail.com" className="hover:text-primary-400 transition-colors">
                    blinkzdigital1@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-secondary-300">
                  <SafeIcon icon={FiPhone} className="text-primary-400" />
                  <a href="tel:+2348143322220" className="hover:text-primary-400 transition-colors">
                    +234 814 332 2220
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-secondary-300">
                  <SafeIcon icon={FiMapPin} className="text-primary-400" />
                  <span>Nigeria</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ 
                      scale: 1.1, 
                      y: -2,
                      boxShadow: '0 0 15px rgba(59, 130, 246, 0.3)'
                    }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-secondary-800 p-3 rounded-lg text-secondary-400 hover:text-primary-400 hover:bg-secondary-700 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <SafeIcon icon={social.icon} className="text-lg" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Services Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-secondary-300 hover:text-primary-400 transition-colors duration-200 block py-1"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-secondary-300 hover:text-primary-400 transition-colors duration-200 block py-1"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-secondary-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-secondary-300">
              <span>© 2024 Victor Amos. Made with</span>
              <SafeIcon icon={FiHeart} className="text-red-500 animate-pulse" />
              <span>in Nigeria</span>
            </div>
            
            <div className="flex items-center space-x-6">
              <a href="#" className="text-secondary-300 hover:text-primary-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-secondary-300 hover:text-primary-400 transition-colors">
                Terms of Service
              </a>
              
              {/* Scroll to Top Button */}
              <motion.button
                onClick={scrollToTop}
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: '0 0 15px rgba(59, 130, 246, 0.3)'
                }}
                whileTap={{ scale: 0.9 }}
                className="bg-primary-600 text-white p-2 rounded-lg hover:bg-primary-700 transition-all duration-300"
                aria-label="Scroll to top"
              >
                <SafeIcon icon={FiArrowUp} className="text-lg" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;