/**
 * @file Skills.tsx
 * @description Skills section with categorized skills and interactive progress bars
 * @author Deepthi Kallam
 * @status [x] Developed
 * @lastUpdated 2024-01-01
 */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Database, 
  Cloud, 
  Palette, 
  Smartphone, 
  Settings,
  Zap,
  Shield,
  Globe,
  Cpu,
  Users
} from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  icon: any;
  color: string;
}

interface SkillCategory {
  id: string;
  name: string;
  icon: any;
  description: string;
  skills: Skill[];
}

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('programming');

  const skillCategories: SkillCategory[] = [
    {
      id: 'programming',
      name: 'Programming & Frameworks',
      icon: Code,
      description: 'Java, Spring Boot, Spring MVC, Hibernate, JPA, Java EE, Microservices Architecture, RESTful APIs',
      skills: [
        { name: 'Java', level: 95, icon: Code, color: 'text-yellow-700' },
        { name: 'Spring Boot', level: 92, icon: Code, color: 'text-green-700' },
        { name: 'Spring MVC', level: 90, icon: Code, color: 'text-green-600' },
        { name: 'Hibernate', level: 88, icon: Code, color: 'text-green-500' },
        { name: 'JPA', level: 85, icon: Code, color: 'text-blue-700' },
        { name: 'Microservices', level: 90, icon: Code, color: 'text-purple-700' },
        { name: 'RESTful APIs', level: 93, icon: Globe, color: 'text-blue-500' },
      ]
    },
    {
      id: 'frontend',
      name: 'Web Development & Frontend',
      icon: Palette,
      description: 'JavaScript, TypeScript, React.js, Angular, JSP, Servlets, Material-UI, Redux, RxJS, NgRx',
      skills: [
        { name: 'JavaScript', level: 95, icon: Palette, color: 'text-yellow-500' },
        { name: 'TypeScript', level: 90, icon: Palette, color: 'text-blue-600' },
        { name: 'React.js', level: 92, icon: Palette, color: 'text-blue-500' },
        { name: 'Angular', level: 88, icon: Palette, color: 'text-red-500' },
        { name: 'Redux', level: 85, icon: Palette, color: 'text-purple-500' },
        { name: 'RxJS', level: 80, icon: Palette, color: 'text-pink-500' },
        { name: 'NgRx', level: 80, icon: Palette, color: 'text-green-500' },
        { name: 'JSP', level: 75, icon: Palette, color: 'text-orange-500' },
        { name: 'Servlets', level: 75, icon: Palette, color: 'text-gray-500' },
        { name: 'Material-UI', level: 80, icon: Palette, color: 'text-blue-400' },
      ]
    },
    {
      id: 'cloud',
      name: 'Cloud & DevOps',
      icon: Cloud,
      description: 'AWS (EC2, S3, Lambda, RDS), GCP, Docker, Kubernetes, Terraform, CI/CD, Jenkins, Azure DevOps',
      skills: [
        { name: 'AWS', level: 85, icon: Cloud, color: 'text-yellow-500' },
        { name: 'Docker', level: 80, icon: Cloud, color: 'text-blue-500' },
        { name: 'Kubernetes', level: 78, icon: Cloud, color: 'text-blue-700' },
        { name: 'Terraform', level: 75, icon: Cloud, color: 'text-green-700' },
        { name: 'CI/CD', level: 80, icon: Cloud, color: 'text-green-500' },
        { name: 'Jenkins', level: 78, icon: Cloud, color: 'text-gray-700' },
        { name: 'Azure DevOps', level: 75, icon: Cloud, color: 'text-blue-400' },
      ]
    },
    {
      id: 'databases',
      name: 'Databases & Data Management',
      icon: Database,
      description: 'MySQL, PostgreSQL, Oracle, MongoDB, Redis, JDBC, JPA, Hibernate Query Language (HQL), Cassandra',
      skills: [
        { name: 'MySQL', level: 90, icon: Database, color: 'text-blue-500' },
        { name: 'PostgreSQL', level: 88, icon: Database, color: 'text-blue-600' },
        { name: 'Oracle', level: 80, icon: Database, color: 'text-orange-700' },
        { name: 'MongoDB', level: 85, icon: Database, color: 'text-green-600' },
        { name: 'Redis', level: 80, icon: Database, color: 'text-red-500' },
        { name: 'Cassandra', level: 75, icon: Database, color: 'text-purple-700' },
        { name: 'JDBC', level: 80, icon: Database, color: 'text-gray-700' },
        { name: 'JPA', level: 80, icon: Database, color: 'text-blue-700' },
        { name: 'HQL', level: 75, icon: Database, color: 'text-green-700' },
      ]
    },
    {
      id: 'tools',
      name: 'Software Development & Tools',
      icon: Settings,
      description: 'Git, GitHub, GitLab, Maven, Gradle, IntelliJ IDEA, Eclipse, VS Code',
      skills: [
        { name: 'Git', level: 90, icon: Settings, color: 'text-orange-500' },
        { name: 'GitHub', level: 90, icon: Settings, color: 'text-gray-800' },
        { name: 'GitLab', level: 85, icon: Settings, color: 'text-pink-700' },
        { name: 'Maven', level: 80, icon: Settings, color: 'text-blue-700' },
        { name: 'Gradle', level: 78, icon: Settings, color: 'text-green-700' },
        { name: 'IntelliJ IDEA', level: 85, icon: Settings, color: 'text-blue-400' },
        { name: 'Eclipse', level: 80, icon: Settings, color: 'text-purple-700' },
        { name: 'VS Code', level: 90, icon: Settings, color: 'text-blue-500' },
      ]
    },
    {
      id: 'security',
      name: 'Security & API Management',
      icon: Shield,
      description: 'OAuth2, JWT, Role-Based Access Control (RBAC), API Gateway, Postman, Swagger',
      skills: [
        { name: 'OAuth2', level: 80, icon: Shield, color: 'text-blue-700' },
        { name: 'JWT', level: 80, icon: Shield, color: 'text-green-700' },
        { name: 'RBAC', level: 75, icon: Shield, color: 'text-purple-700' },
        { name: 'API Gateway', level: 75, icon: Shield, color: 'text-gray-700' },
        { name: 'Postman', level: 85, icon: Shield, color: 'text-orange-500' },
        { name: 'Swagger', level: 80, icon: Shield, color: 'text-green-500' },
      ]
    },
    {
      id: 'testing',
      name: 'Testing & Performance Optimization',
      icon: Zap,
      description: 'JUnit, Mockito, Selenium, Load Testing, Memory Profiling, JVM Optimization',
      skills: [
        { name: 'JUnit', level: 85, icon: Zap, color: 'text-blue-700' },
        { name: 'Mockito', level: 80, icon: Zap, color: 'text-green-700' },
        { name: 'Selenium', level: 80, icon: Zap, color: 'text-yellow-500' },
        { name: 'Load Testing', level: 75, icon: Zap, color: 'text-orange-500' },
        { name: 'Memory Profiling', level: 75, icon: Zap, color: 'text-purple-700' },
        { name: 'JVM Optimization', level: 75, icon: Zap, color: 'text-gray-700' },
      ]
    },
    {
      id: 'agile',
      name: 'Agile & Collaboration',
      icon: Users,
      description: 'Agile (Scrum/Kanban), JIRA, Confluence, Code Reviews, Peer Programming',
      skills: [
        { name: 'Agile (Scrum/Kanban)', level: 85, icon: Users, color: 'text-blue-500' },
        { name: 'JIRA', level: 80, icon: Users, color: 'text-green-700' },
        { name: 'Confluence', level: 80, icon: Users, color: 'text-blue-400' },
        { name: 'Code Reviews', level: 80, icon: Users, color: 'text-purple-700' },
        { name: 'Peer Programming', level: 75, icon: Users, color: 'text-pink-500' },
      ]
    }
  ];

  const activeCategoryData = skillCategories.find(cat => cat.id === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="skills" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Skills & <span className="gradient-text">Expertise</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto"
          />
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Category Navigation */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="lg:col-span-1"
          >
            <div className="space-y-4">
              {skillCategories.map((category) => (
                <motion.button
                  key={category.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveCategory(category.id)}
                  className={`w-full text-left p-6 rounded-xl transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-primary-600 text-white shadow-lg'
                      : 'bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <div className="flex items-center mb-3">
                    <category.icon 
                      size={24} 
                      className={`mr-3 ${
                        activeCategory === category.id ? 'text-white' : 'text-primary-600 dark:text-primary-400'
                      }`}
                    />
                    <h3 className="font-semibold text-3xl">{category.name}</h3>
                  </div>
                  <p className={`text-sm ${
                    activeCategory === category.id ? 'text-primary-100' : 'text-gray-500 dark:text-gray-400'
                  }`}>
                    {category.description}
                  </p>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Skills Display */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center mb-8">
                  {activeCategoryData && (
                    <>
                      <activeCategoryData.icon 
                        size={32} 
                        className="text-primary-600 dark:text-primary-400 mr-3" 
                      />
                      <div>
                        <h3 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white">
                          {activeCategoryData.name}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          {activeCategoryData.description}
                        </p>
                      </div>
                    </>
                  )}
                </div>

                <div className="space-y-6">
                  {activeCategoryData?.skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <skill.icon 
                            size={20} 
                            className={`mr-3 ${skill.color}`} 
                          />
                          <span className="font-medium text-gray-900 dark:text-white text-3xl">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-base font-medium text-primary-600 dark:text-primary-400">
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ 
                            duration: 1, 
                            delay: index * 0.1,
                            ease: 'easeOut'
                          }}
                          className="h-2 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full relative overflow-hidden"
                        >
                          <motion.div
                            animate={{
                              x: ['-100%', '100%'],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: 'linear',
                            }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Skill Level Legend */}
                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                    Skill Level Guide
                  </h4>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                      <span className="text-gray-600 dark:text-gray-300">Expert (90-100%)</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                      <span className="text-gray-600 dark:text-gray-300">Advanced (80-89%)</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                      <span className="text-gray-600 dark:text-gray-300">Intermediate (70-79%)</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Additional Skills */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-20"
        >
          <motion.h3
            variants={itemVariants}
            className="text-4xl font-bold text-gray-900 dark:text-white text-center mb-12"
          >
            Additional <span className="gradient-text">Tools</span>
          </motion.h3>
          
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6"
          >
            {[
              'VS Code', 'Figma', 'Postman', 'Jest', 'Webpack', 'Vercel',
              'Netlify', 'GitHub', 'Slack', 'Trello', 'Notion', 'Docker'
            ].map((tool, index) => (
              <motion.div
                key={tool}
                whileHover={{ scale: 1.05, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200"
              >
                <div className="w-8 h-8 bg-primary-100 dark:bg-primary-900 rounded-lg mb-2 flex items-center justify-center">
                  <span className="text-primary-600 dark:text-primary-400 font-bold text-sm">
                    {tool.charAt(0)}
                  </span>
                </div>
                <span className="text-3xl font-medium text-gray-900 dark:text-white text-center">
                  {tool}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 