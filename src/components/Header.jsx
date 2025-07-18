import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMenu, FiX, FiCode, FiMail, FiPhone } = FiIcons;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-secondary-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <div className="relative">
              <SafeIcon 
                icon={FiCode} 
                className="text-2xl text-primary-400 animate-pulse" 
              />
              <div className="absolute inset-0 bg-primary-400 rounded-full blur-md opacity-20"></div>
            </div>
            <span className="text-xl font-bold text-white">
              Victor<span className="text-primary-400">Amos</span>
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ y: -2 }}
                className="text-secondary-300 hover:text-primary-400 transition-colors duration-200 relative group"
              >
                {item.name}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-400 transition-all duration-300 group-hover:w-full"></div>
              </motion.a>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <motion.a
              href="mailto:blinkzdigital1@gmail.com"
              whileHover={{ scale: 1.1 }}
              className="text-secondary-300 hover:text-primary-400 transition-colors"
            >
              <SafeIcon icon={FiMail} className="text-lg" />
            </motion.a>
            <motion.a
              href="tel:+2348143322220"
              whileHover={{ scale: 1.1 }}
              className="text-secondary-300 hover:text-primary-400 transition-colors"
            >
              <SafeIcon icon={FiPhone} className="text-lg" />
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            <SafeIcon icon={isMenuOpen ? FiX : FiMenu} className="text-2xl" />
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-secondary-800 rounded-lg mt-2 p-4 shadow-xl"
          >
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ x: 10 }}
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 text-secondary-300 hover:text-primary-400 transition-colors"
              >
                {item.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;