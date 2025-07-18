import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMail, FiPhone, FiMapPin, FiSend, FiUser, FiMessageSquare, FiGithub, FiLinkedin, FiTwitter } = FiIcons;

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: FiMail,
      title: 'Email',
      value: 'blinkzdigital1@gmail.com',
      link: 'mailto:blinkzdigital1@gmail.com'
    },
    {
      icon: FiPhone,
      title: 'Phone',
      value: '+234 814 332 2220',
      link: 'tel:+2348143322220'
    },
    {
      icon: FiMapPin,
      title: 'Location',
      value: 'Nigeria',
      link: '#'
    }
  ];

  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/victorbyamos', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://linkedin.com/in/victorbyamos', label: 'LinkedIn' },
    { icon: FiTwitter, href: 'https://twitter.com/victorbyamos', label: 'Twitter' },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's <span className="text-primary-400">Connect</span>
          </h2>
          <p className="text-xl text-secondary-300 max-w-3xl mx-auto">
            Ready to transform your business challenges into digital opportunities? 
            Let's discuss your project and create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-secondary-800/50 backdrop-blur-sm rounded-2xl p-8 border border-secondary-700"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <SafeIcon icon={FiUser} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary-400" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    required
                    className="w-full pl-10 pr-4 py-3 bg-secondary-700 border border-secondary-600 rounded-lg text-white placeholder-secondary-400 focus:outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-400 transition-all duration-300"
                  />
                </div>
                <div className="relative">
                  <SafeIcon icon={FiMail} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email"
                    required
                    className="w-full pl-10 pr-4 py-3 bg-secondary-700 border border-secondary-600 rounded-lg text-white placeholder-secondary-400 focus:outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-400 transition-all duration-300"
                  />
                </div>
              </div>
              <div className="relative">
                <SafeIcon icon={FiMessageSquare} className="absolute left-3 top-4 text-secondary-400" />
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Subject"
                  required
                  className="w-full pl-10 pr-4 py-3 bg-secondary-700 border border-secondary-600 rounded-lg text-white placeholder-secondary-400 focus:outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-400 transition-all duration-300"
                />
              </div>
              <div className="relative">
                <SafeIcon icon={FiMessageSquare} className="absolute left-3 top-4 text-secondary-400" />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your Message"
                  rows="5"
                  required
                  className="w-full pl-10 pr-4 py-3 bg-secondary-700 border border-secondary-600 rounded-lg text-white placeholder-secondary-400 focus:outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-400 transition-all duration-300 resize-none"
                ></textarea>
              </div>
              <motion.button
                type="submit"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: '0 0 25px rgba(59, 130, 246, 0.5)'
                }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-primary-600 to-blue-600 text-white py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                Send Message
                <SafeIcon icon={FiSend} className="text-lg group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Get in Touch</h3>
              <p className="text-secondary-300 mb-8 leading-relaxed">
                I'm always excited to discuss new projects and opportunities. 
                Whether you're a startup looking to establish your digital presence 
                or an established business ready to scale, I'm here to help.
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-4 p-4 bg-secondary-800/50 backdrop-blur-sm rounded-xl border border-secondary-700 hover:border-primary-400/50 transition-all duration-300 group"
                >
                  <div className="bg-gradient-to-br from-primary-600 to-blue-600 p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <SafeIcon icon={info.icon} className="text-xl text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{info.title}</h4>
                    <p className="text-secondary-300">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ 
                      scale: 1.1, 
                      y: -3,
                      boxShadow: '0 0 20px rgba(59, 130, 246, 0.4)'
                    }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-secondary-800/50 backdrop-blur-sm p-4 rounded-xl border border-secondary-700 hover:border-primary-400/50 text-secondary-400 hover:text-primary-400 transition-all duration-300 group"
                  >
                    <SafeIcon icon={social.icon} className="text-xl" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-gradient-to-r from-primary-600 to-blue-600 p-6 rounded-xl text-white"
            >
              <h4 className="text-xl font-semibold mb-2">Ready to Start?</h4>
              <p className="mb-4 opacity-90">
                Let's discuss your project and see how BlinkzDigital can help your business grow.
              </p>
              <motion.a
                href="tel:+2348143322220"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-all duration-300 inline-block"
              >
                Call Now
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;