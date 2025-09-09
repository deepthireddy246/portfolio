/**
 * @file Experience.tsx
 * @description Experience section with interactive vertical timeline
 * @author Deepthi Kallam
 * @status [x] Developed
 * @lastUpdated 2024-01-01
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, ExternalLink, ChevronRight } from 'lucide-react';

interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
  link?: string;
}

const Experience: React.FC = () => {
  const [activeExperience, setActiveExperience] = useState(0);

  const experiences: ExperienceItem[] = [
    {
      id: 1,
      title: 'Software Engineer',
      company: 'Morgan Stanley',
      location: 'Overland Park, Kansas',
      period: 'Jul 2024 – Present',
      description: 'Developing scalable, high-performance web applications and enterprise solutions using Java, Spring Boot, React.js, Angular, and Microservices.',
      achievements: [
        'Refactored, modernized, transitioned, and streamlined monolithic architecture into AWS Lambda, DynamoDB, and S3-based serverless solutions, decreasing infrastructure costs by 38%, improving auto-scaling capabilities, and boosting system efficiency.',
        'Redesigned, indexed, optimized, and fine-tuned relational and NoSQL databases (PostgreSQL, MongoDB) by implementing advanced partitioning, caching, and indexing strategies, reducing complex query response times by 52%, improving data integrity.',
        'Built, integrated, automated, and enhanced continuous integration and deployment pipelines using Jenkins, Docker, and Kubernetes, lowering release failures by 65%, increasing deployment efficiency, and minimizing rollback complexities.',
        'Implemented, fine-tuned, managed, and configured event-driven microservices using Apache Kafka, AWS SQS, and RabbitMQ, increasing throughput by 50%, reducing message-processing delays, and enabling scalable asynchronous event workflows.',
        'Secured, enforced, audited, and strengthened system-wide RBAC policies, AES-256 encryption, and multi-factor authentication, ensuring full compliance with financial industry security standards, reducing vulnerabilities, and mitigating security breaches.'
      ],
      technologies: ['Java', 'Spring Boot', 'React.js', 'Angular', 'Microservices', 'AWS', 'Docker', 'Kubernetes', 'Jenkins', 'Kafka', 'SQS', 'RabbitMQ', 'PostgreSQL', 'MongoDB', 'RBAC', 'AES-256', 'CI/CD'],
    },
    {
      id: 2,
      title: 'Software Developer',
      company: 'Accenture',
      location: 'Hyderabad, India',
      period: 'Sept 2021 – Dec 2022',
      description: 'Constructed, deployed, maintained, and upgraded enterprise-grade web applications using Angular, Spring Boot, and Hibernate, improving frontend efficiency by 50%, enhancing code reusability, and optimizing UI rendering for a seamless experience.',
      achievements: [
        'Optimized, restructured, enhanced, and reengineered reusable frontend components using Angular, RxJS, and NgRx, increasing page load speeds by 47%, improving modularity, and enhancing real-time interactions with UI elements.',
        'Engineered, configured, deployed, and extended high-performance RESTful APIs with Spring WebFlux, gRPC, and Redis caching, reducing API response latency by 43%, improving data exchange performance, and supporting complex transaction workflows.',
        'Upgraded, migrated, secured, and modernized legacy monolithic applications by transitioning workloads to AWS ECS, RDS, and CloudFront, lowering hosting expenses by 35%, improving failover mechanisms, and enabling application scaling.',
        'Refined, optimized, scaled, and improved relational and NoSQL database (MySQL, PostgreSQL, Cassandra) using partitioning, indexing, and caching mechanisms, achieving a 48% reduction in data retrieval times.',
        'Created, tested, implemented, and automated end-to-end test suites using JUnit, Selenium, and Cypress, reducing defect rates by 40%, increasing overall test coverage, and ensuring software stability across diverse environments.',
        'Deployed, monitored, maintained, and configured containerized applications using Docker, Helm, and Kubernetes, enabling horizontal scalability, better fault tolerance, and improved deployment reliability across distributed systems.',
        'Led, streamlined, improved, and enhanced Agile development methodologies, including sprint planning, backlog refinement, and cross-team collaboration, achieving a 22% increase in project efficiency, reducing delays, and boosting productivity.'
      ],
      technologies: ['Angular', 'Spring Boot', 'Hibernate', 'RxJS', 'NgRx', 'Spring WebFlux', 'gRPC', 'Redis', 'AWS ECS', 'RDS', 'CloudFront', 'MySQL', 'PostgreSQL', 'Cassandra', 'JUnit', 'Selenium', 'Cypress', 'Docker', 'Helm', 'Kubernetes', 'Agile'],
    },
    {
      id: 3,
      title: 'Associate Software Engineer',
      company: 'Dixon Technologies',
      location: 'Hyderabad, India',
      period: 'Dec 2019 – Aug 2021',
      description: 'Constructed, deployed, maintained, and upgraded enterprise-grade web applications using Angular, Spring Boot, and Hibernate, improving frontend efficiency by 50%, enhancing code reusability, and optimizing UI rendering for a seamless experience.',
      achievements: [
        'Developed and deployed full-stack retail applications using Node.js, React.js, and PostgreSQL, optimizing order processing workflows and reducing',
'fulfillment time from 12 hours to 3 hours, improving overall operational efficiency and customer satisfaction for over 500 daily orders.',
'Engineered real-time inventory tracking systems with Node.js, PostgreSQL, and Redis caching, enabling automatic low-stock alerts and ensuring',
'consistent product availability across multiple store locations, preventing frequent stockouts and lost sales opportunities.',
' Implemented automated backend processes for order validation, payment reconciliation, and shipment tracking using Node.js and Express.js,', 
'reducing manual intervention and operational errors by 40%, while improving accuracy and reliability of daily retail operations',
'Built interactive admin dashboards and analytics tools with Node.js, Chart.js, and SQL, providing actionable insights into sales trends, revenue',
'performance, and regional store KPIs, which significantly improved managerial decision-making speed and strategic planning.',
' Integrated third-party payment gateways, shipping APIs, and loyalty programs using Node.js, ensuring secure, real-time transaction processing and',
'automatic customer reward updates, enhancing user satisfaction, engagement, and repeat purchase behavior.',
' Conducted comprehensive unit testing, automated CI/CD deployment, and peer code reviews using Jest, Git, and GitHub Actions, improving code',
'reliability, reducing production errors, and accelerating feature rollout timelines across high-traffic retail platforms.',
      ],
      technologies: ['Angular', 'Spring Boot', 'Hibernate', 'RxJS', 'NgRx', 'Spring WebFlux', 'gRPC', 'Redis', 'AWS ECS', 'RDS', 'CloudFront', 'MySQL', 'PostgreSQL', 'Cassandra', 'JUnit', 'Selenium', 'Cypress', 'Docker', 'Helm', 'Kubernetes', 'Agile'],
    }

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
    <section id="experience" className="section-padding bg-white dark:bg-gray-900">
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
            className="text-7xl md:text-8xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Work <span className="gradient-text">Experience</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto"
          />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Timeline Navigation */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="lg:col-span-1"
          >
            <div className="space-y-4">
              {experiences.map((experience, index) => (
                <motion.button
                  key={experience.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveExperience(index)}
                  className={`w-full text-left p-6 rounded-xl transition-all duration-300 ${
                    activeExperience === index
                      ? 'bg-primary-600 text-white shadow-lg'
                      : 'bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-4xl">{experience.title}</h3>
                    <ChevronRight 
                      size={20} 
                      className={`transition-transform duration-300 ${
                        activeExperience === index ? 'rotate-90' : ''
                      }`}
                    />
                  </div>
                  <p className={`font-medium mb-1 text-3xl ${
                    activeExperience === index ? 'text-primary-100' : 'text-primary-600 dark:text-primary-400'
                  }`}>
                    {experience.company}
                  </p>
                  <div className="flex items-center text-2xl opacity-75">
                    <Calendar size={14} className="mr-1" />
                    {experience.period}
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Experience Details */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="lg:col-span-2"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeExperience}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl"
              >
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {experiences[activeExperience].title}
                    </h3>
                    {experiences[activeExperience].link && (
                      <motion.a
                        href={experiences[activeExperience].link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200"
                      >
                        <ExternalLink size={20} />
                      </motion.a>
                    )}
                  </div>
                  
                  <div className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
                    <span className="font-semibold text-primary-600 dark:text-primary-400 text-3xl">
                      {experiences[activeExperience].company}
                    </span>
                  </div>
                  
                  <div className="flex items-center text-gray-500 dark:text-gray-400 text-2xl mb-4">
                    <MapPin size={16} className="mr-1" />
                    {experiences[activeExperience].location}
                    <span className="mx-2">•</span>
                    <Calendar size={16} className="mr-1" />
                    {experiences[activeExperience].period}
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 text-3xl">
                    {experiences[activeExperience].description}
                  </p>
                </div>

                {/* Achievements */}
                <div className="mb-6">
                  <h4 className="text-4xl font-semibold text-gray-900 dark:text-white mb-3">
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {experiences[activeExperience].achievements.map((achievement, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start text-gray-600 dark:text-gray-300 text-2xl"
                      >
                        <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {achievement}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-4xl font-semibold text-gray-900 dark:text-white mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {experiences[activeExperience].technologies.map((tech, index) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 }}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-2xl font-medium"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 