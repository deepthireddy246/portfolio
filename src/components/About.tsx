/**
 * @file About.tsx
 * @description About section with professional summary and tech stack
 * @author Deepthi Kallam
 * @status [x] Developed
 * @lastUpdated 2024-01-01
 */

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Palette, 
  Smartphone, 
  Globe, 
  Database, 
  Zap,
  Users,
  Target
} from 'lucide-react';

const About: React.FC = () => {
  const techStack = [
    { name: 'React', icon: Code, color: 'text-blue-500' },
    { name: 'Node.js', icon: Globe, color: 'text-green-500' },
    { name: 'TypeScript', icon: Code, color: 'text-blue-600' },
    { name: 'TailwindCSS', icon: Palette, color: 'text-cyan-500' },
    { name: 'MongoDB', icon: Database, color: 'text-green-600' },
    { name: 'AWS', icon: Zap, color: 'text-yellow-500' },
  ];

  const skills = [
    { icon: Code, title: 'Full-Stack Development', description: 'Building scalable web applications from frontend to backend' },
    { icon: Palette, title: 'UI/UX Design', description: 'Creating intuitive and beautiful user interfaces' },
    { icon: Smartphone, title: 'Mobile Development', description: 'Developing responsive and mobile-first applications' },
    { icon: Users, title: 'Team Collaboration', description: 'Working effectively in agile development teams' },
    { icon: Target, title: 'Problem Solving', description: 'Analyzing complex problems and implementing solutions' },
    { icon: Zap, title: 'Performance Optimization', description: 'Optimizing applications for speed and efficiency' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom relative z-10">
        {/* Top-right profile image for large screens - REMOVED */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-7xl md:text-8xl font-bold text-gray-900 dark:text-white mb-4"
          >
            About <span className="gradient-text">Me</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center pt-8">
          {/* Left Column - About Text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h3
              variants={itemVariants}
              className="text-5xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Full Stack Developer | Kansas City, Missouri
            </motion.h3>
            <motion.p
              variants={itemVariants}
              className="text-3xl text-gray-600 dark:text-gray-300 mb-6 leading-relaxed"
            >
              I am a Java Full Stack Developer with 4 years of experience building scalable, high-performance web applications and enterprise solutions. Skilled in Java, Spring Boot, React.js, Angular, microservices, and cloud technologies, I deliver robust, secure, and efficient solutions for modern business needs.
            </motion.p>
          </motion.div>

          {/* Right Column - Skills Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-2 gap-6"
          >
            {skills
              .filter(skill => skill.title !== 'UI/UX Design')
              .map((skill, index) => (
                <motion.div
                  key={skill.title}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg card-hover"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-primary-100 dark:bg-primary-900 rounded-lg mr-3">
                      <skill.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {skill.title}
                    </h4>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-2xl">
                    {skill.description}
                  </p>
                </motion.div>
              ))}
          </motion.div>
        </div>

        {/* Tech Stack Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-20"
        >
          <motion.h3
            variants={itemVariants}
            className="text-6xl font-bold text-gray-900 dark:text-white text-center mb-12"
          >
            Tech <span className="gradient-text">Stack</span>
          </motion.h3>
          
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
          >
            {techStack.map((tech) => (
              <motion.div
                key={tech.name}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-col items-center p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg card-hover"
              >
                <tech.icon className={`w-12 h-12 ${tech.color} mb-3`} />
                <span className="font-medium text-gray-900 dark:text-white text-center text-3xl">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-20"
        >
          <motion.h3
            variants={itemVariants}
            className="text-6xl font-bold text-gray-900 dark:text-white text-center mb-12"
          >
            Education
          </motion.h3>
          <motion.div
            variants={itemVariants}
            className="max-w-2xl mx-auto space-y-8"
          >
            <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h4 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Master of Science in Computer Science</h4>
                <p className="text-2xl text-gray-700 dark:text-gray-300 mb-1">University of Missouri - Kansas City, Missouri</p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h4 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Bachelor of Technology in Information Technology</h4>
                <p className="text-2xl text-gray-700 dark:text-gray-300 mb-1">GRIET, Hyderabad, India</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 