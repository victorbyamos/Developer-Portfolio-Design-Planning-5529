import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCode, FiSmartphone, FiShoppingCart, FiTrendingUp, FiDatabase, FiLayers } = FiIcons;

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: FiCode,
      title: 'Web Development',
      description: 'Custom web applications using LAMP & MERN stacks, optimized for performance and scalability.',
      features: ['Responsive Design', 'SEO Optimization', 'Performance Tuning', 'Security Implementation'],
      color: 'from-blue-500 to-purple-600'
    },
    {
      icon: FiSmartphone,
      title: 'Mobile Development',
      description: 'Cross-platform mobile apps that provide seamless user experiences across all devices.',
      features: ['iOS & Android', 'React Native', 'Flutter', 'App Store Deployment'],
      color: 'from-green-500 to-blue-600'
    },
    {
      icon: FiShoppingCart,
      title: 'E-commerce Solutions',
      description: 'Complete online stores with payment integration, inventory management, and analytics.',
      features: ['Payment Gateway', 'Inventory System', 'Order Management', 'Customer Analytics'],
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: FiTrendingUp,
      title: 'SaaS Development',
      description: 'Scalable software-as-a-service platforms with subscription management and analytics.',
      features: ['Multi-tenancy', 'Subscription Billing', 'API Development', 'Cloud Deployment'],
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: FiDatabase,
      title: 'Database Design',
      description: 'Robust database architecture and optimization for high-performance applications.',
      features: ['MySQL', 'MongoDB', 'Performance Tuning', 'Data Migration'],
      color: 'from-cyan-500 to-blue-600'
    },
    {
      icon: FiLayers,
      title: 'UI/UX Design',
      description: 'User-centered design that converts visitors into customers and drives business growth.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Conversion Optimization'],
      color: 'from-pink-500 to-purple-600'
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-primary-400">Services</span>
          </h2>
          <p className="text-xl text-secondary-300 max-w-3xl mx-auto">
            Comprehensive digital solutions to transform your business challenges into growth opportunities
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ 
                y: -10,
                boxShadow: '0 20px 40px rgba(59, 130, 246, 0.2)'
              }}
              className="bg-secondary-800/50 backdrop-blur-sm rounded-2xl p-6 border border-secondary-700 hover:border-primary-400/50 transition-all duration-300 group"
            >
              <div className="relative mb-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <SafeIcon icon={service.icon} className="text-2xl text-white" />
                </div>
                <div className={`absolute inset-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300`}></div>
              </div>

              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-secondary-300 mb-4 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-secondary-400">
                    <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 0 20px rgba(59, 130, 246, 0.4)'
                }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 w-full bg-gradient-to-r from-primary-600 to-blue-600 text-white py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100"
              >
                Learn More
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-semibold text-white text-center mb-12">
            My <span className="text-primary-400">Process</span>
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', desc: 'Understanding your business needs and challenges' },
              { step: '02', title: 'Strategy', desc: 'Developing a tailored solution roadmap' },
              { step: '03', title: 'Development', desc: 'Building with best practices and modern tech' },
              { step: '04', title: 'Launch', desc: 'Deployment, testing, and ongoing support' }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="text-center group"
              >
                <div className="relative mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-blue-600 rounded-full flex items-center justify-center mx-auto text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                    {process.step}
                  </div>
                  <div className="absolute inset-0 w-16 h-16 bg-gradient-to-br from-primary-400 to-blue-400 rounded-full mx-auto opacity-0 group-hover:opacity-30 blur-lg transition-all duration-300"></div>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-primary-400 transition-colors">
                  {process.title}
                </h4>
                <p className="text-secondary-400 text-sm leading-relaxed">
                  {process.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;