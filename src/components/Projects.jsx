import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiExternalLink, FiGithub, FiTrendingUp, FiShoppingCart, FiCode, FiUsers, FiDollarSign, FiBarChart } = FiIcons;

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'Invoicely Pro',
      category: 'SaaS Dashboard',
      description: 'A comprehensive invoice management system for small businesses with automated billing, payment tracking, and financial reporting.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
      features: ['Payment Integration', 'Automated Billing', 'Financial Reports', 'Multi-currency Support'],
      metrics: {
        icon: FiDollarSign,
        value: '300%',
        label: 'Revenue Increase'
      },
      gradient: 'from-blue-600 to-purple-600'
    },
    {
      title: 'TrendCart',
      category: 'E-commerce Storefront',
      description: 'Modern e-commerce platform with advanced inventory management, real-time analytics, and seamless checkout experience.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      tech: ['React', 'PHP', 'MySQL', 'PayPal API'],
      features: ['Inventory Management', 'Order Tracking', 'Customer Analytics', 'Mobile Responsive'],
      metrics: {
        icon: FiTrendingUp,
        value: '250%',
        label: 'Sales Growth'
      },
      gradient: 'from-green-600 to-blue-600'
    },
    {
      title: 'CodeAudit AI',
      category: 'DevTool Landing Page',
      description: 'AI-powered code analysis tool that helps developers identify bugs, security vulnerabilities, and optimization opportunities.',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      tech: ['React', 'Python', 'TensorFlow', 'Docker'],
      features: ['AI Code Analysis', 'Security Scanning', 'Performance Metrics', 'Team Collaboration'],
      metrics: {
        icon: FiUsers,
        value: '5000+',
        label: 'Active Users'
      },
      gradient: 'from-purple-600 to-pink-600'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-primary-400">Projects</span>
          </h2>
          <p className="text-xl text-secondary-300 max-w-3xl mx-auto">
            Real solutions that delivered measurable results for my clients
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Project Image */}
                <motion.div
                  className={`relative overflow-hidden rounded-2xl ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 lg:h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-3">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-primary-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <SafeIcon icon={FiExternalLink} className="text-lg" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-secondary-800 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <SafeIcon icon={FiGithub} className="text-lg" />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>

                {/* Project Details */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div>
                    <span className="text-primary-400 font-medium text-sm uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h3 className="text-3xl font-bold text-white mt-2 mb-4">
                      {project.title}
                    </h3>
                    <p className="text-secondary-300 text-lg leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-white font-semibold mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          whileHover={{ scale: 1.05 }}
                          className="bg-secondary-700 text-secondary-300 px-3 py-1 rounded-full text-sm font-medium border border-secondary-600 hover:border-primary-400 hover:text-primary-400 transition-all duration-300"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-secondary-300">
                          <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Metrics */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`bg-gradient-to-r ${project.gradient} p-6 rounded-xl text-white`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="bg-white/20 p-3 rounded-full">
                        <SafeIcon icon={project.metrics.icon} className="text-2xl" />
                      </div>
                      <div>
                        <div className="text-3xl font-bold">{project.metrics.value}</div>
                        <div className="text-white/80">{project.metrics.label}</div>
                      </div>
                    </div>
                  </motion.div>

                  {/* CTA Buttons */}
                  <div className="flex space-x-4">
                    <motion.button
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: '0 0 25px rgba(59, 130, 246, 0.5)'
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-primary-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                    >
                      View Project
                      <SafeIcon icon={FiExternalLink} className="text-lg" />
                    </motion.button>
                    <motion.button
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: 'rgba(59, 130, 246, 0.1)'
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="border-2 border-primary-400 text-primary-400 px-6 py-3 rounded-lg font-semibold hover:bg-primary-400/10 transition-all duration-300 flex items-center gap-2"
                    >
                      View Code
                      <SafeIcon icon={FiGithub} className="text-lg" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-semibold text-white mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-secondary-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how I can help transform your business challenges into digital opportunities.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 0 25px rgba(59, 130, 246, 0.5)'
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-primary-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-block"
          >
            Let's Work Together
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;