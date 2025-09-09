/**
 * @file Hero.tsx
 * @description Hero section with animated introduction and call-to-action
 * @author Deepthi Kallam
 * @status [x] Developed
 * @lastUpdated 2024-01-01
 */

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, Mail } from 'lucide-react';
import profileImg from '../assets/deepthi.png';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 md:pt-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-900 dark:to-gray-800">
        <div 
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230ea5e9' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
      </div>

      <div className="container-custom relative z-10 min-h-[60vh] flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24">
        {/* Profile Image */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="flex-shrink-0"
        >
          <img
            src={profileImg}
            alt="Profile"
            className="mx-auto w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 object-cover rounded-full shadow-2xl border-8 border-primary-500 bg-white"
          />
        </motion.div>
        {/* Text Content */}
        <div className="flex flex-col items-center lg:items-start justify-center gap-8 w-full">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left px-4"
          >
            {/* Greeting */}
            <motion.div variants={itemVariants} className="mb-4">
              <span className="text-4xl text-primary-600 dark:text-primary-400 font-medium">
                Hello, I'm
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="text-8xl md:text-9xl font-bold text-gray-900 dark:text-white mb-6"
            >
              <span className="gradient-text">Deepthi Reddy Kallam</span>
            </motion.h1>

            {/* Title */}
            <motion.h2
              variants={itemVariants}
              className="text-5xl md:text-6xl text-gray-700 dark:text-gray-300 mb-8"
            >
              Java Full Stack Developer
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-3xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto mb-12 leading-relaxed"
            >
              Passionate about creating beautiful, functional, and user-centered digital experiences. 
              With 3+ years of experience in full-stack development, I bring ideas to life through 
              innovative solutions and clean code.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-16"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary flex items-center gap-2"
              >
                <Mail size={20} />
                Get In Touch
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary flex items-center gap-2"
              >
                <Download size={20} />
                Download Resume
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        variants={itemVariants}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          onClick={scrollToAbout}
          whileHover={{ y: 5 }}
          className="text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown size={24} />
          </motion.div>
        </motion.button>
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-20 right-20 w-20 h-20 bg-primary-200 dark:bg-primary-800 rounded-full opacity-20 blur-xl"
      />
      
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-20 left-20 w-16 h-16 bg-secondary-200 dark:bg-secondary-800 rounded-full opacity-20 blur-xl"
      />
    </section>
  );
};

export default Hero; 