import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiAward, FiUsers, FiTrendingUp, FiCode } = FiIcons;

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { icon: FiCode, value: '50+', label: 'Projects Completed' },
    { icon: FiUsers, value: '30+', label: 'Happy Clients' },
    { icon: FiTrendingUp, value: '200%', label: 'Average Growth' },
    { icon: FiAward, value: '3+', label: 'Years Experience' },
  ];

  const skills = [
    { name: 'Frontend Development', level: 95 },
    { name: 'Backend Development', level: 90 },
    { name: 'Mobile Development', level: 85 },
    { name: 'UI/UX Design', level: 88 },
    { name: 'Database Design', level: 92 },
    { name: 'DevOps', level: 80 },
  ];

  return (
    <section id="about" className="py-20 bg-secondary-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-primary-400">Me</span>
          </h2>
          <p className="text-xl text-secondary-300 max-w-3xl mx-auto">
            Passionate about transforming business challenges into digital opportunities
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Story Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-6">My Story</h3>
            <div className="space-y-4 text-secondary-300">
              <p>
                As the founder of <span className="text-primary-400 font-semibold">BlinkzDigital</span>, 
                I've dedicated my career to helping local businesses and startups overcome their digital challenges. 
                My journey began with a simple belief: every business deserves a powerful digital presence.
              </p>
              <p>
                Specializing in both <span className="text-primary-400">LAMP</span> and <span className="text-primary-400">MERN</span> stacks, 
                I create comprehensive solutions that not only look great but drive real business results. 
                From e-commerce platforms to SaaS applications, I've helped businesses achieve an average of 200% growth.
              </p>
              <p>
                My approach combines technical expertise with business acumen, ensuring that every solution 
                I deliver directly addresses your specific challenges and goals.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="bg-secondary-800/50 backdrop-blur-sm rounded-xl p-4 border border-secondary-700 text-center group hover:border-primary-400/50 transition-all duration-300"
                >
                  <SafeIcon 
                    icon={stat.icon} 
                    className="text-2xl text-primary-400 mb-2 mx-auto group-hover:scale-110 transition-transform" 
                  />
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-secondary-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Technical Expertise</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="group">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-secondary-300 font-medium">{skill.name}</span>
                    <span className="text-primary-400 font-semibold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-secondary-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.6 + index * 0.1 }}
                      className="bg-gradient-to-r from-primary-600 to-blue-600 h-2 rounded-full relative group-hover:shadow-lg group-hover:shadow-primary-400/50 transition-all duration-300"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>

            {/* Tech Stack */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-white mb-4">Core Technologies</h4>
              <div className="flex flex-wrap gap-3">
                {['React', 'Node.js', 'PHP', 'MySQL', 'MongoDB', 'Laravel', 'Express', 'React Native', 'Flutter'].map((tech) => (
                  <motion.span
                    key={tech}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="bg-secondary-700 text-secondary-300 px-4 py-2 rounded-full text-sm font-medium border border-secondary-600 hover:border-primary-400 hover:text-primary-400 transition-all duration-300 cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;