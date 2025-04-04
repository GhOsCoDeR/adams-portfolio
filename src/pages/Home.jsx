import { Link } from 'react-router-dom';
import { FaArrowRight, FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaMobileAlt, FaLaptopCode, FaUsers, FaCode, FaTrophy, FaExternalLinkAlt } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import React from 'react';

const Home = () => {
  // Auto-typing effect for roles
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = [
    "Frontend Developer", 
    "Mobile App Creator", 
    "UI/UX Enthusiast", 
    "React Specialist"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="section min-h-[85vh] flex items-center bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        {/* Background patterns */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            className="absolute -top-12 -left-12 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          <motion.div 
            className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ 
              duration: 10, 
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        </div>

        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div 
              className="md:w-1/2 mb-10 md:mb-0 z-10"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="mb-4 inline-block"
              >
                <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                  <motion.span
                    animate={{ rotate: [0, 15, -15, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 5 }}
                  >
                    <FaLaptopCode />
                  </motion.span>
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={roleIndex}
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -10, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {roles[roleIndex]}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </motion.div>
              
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Hi, I'm <span className="text-primary relative inline-block">
                  Adam Mahama
                  <motion.span 
                    className="absolute bottom-2 left-0 w-full h-3 bg-primary/20 -z-10"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                  ></motion.span>
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-lg md:text-xl mb-8 text-gray-600 max-w-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                I craft <span className="text-primary font-medium relative inline-block">
                  elegant solutions
                  <motion.span 
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-primary"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 1.5, duration: 0.5 }}
                  ></motion.span>
                </span> through code, 
                specializing in responsive web applications and intuitive mobile experiences 
                focused on security, performance, and accessibility.
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap gap-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                <Link to="/projects" className="btn btn-primary flex items-center gap-2 px-6 py-3 shadow-lg shadow-primary/20 relative overflow-hidden group">
                  <span className="absolute top-0 left-0 w-full h-full bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                  <span className="relative z-10">View My Work</span> 
                  <motion.span 
                    className="relative z-10"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                  >
                    <FaArrowRight />
                  </motion.span>
                </Link>
                <Link to="/resume" className="btn btn-secondary flex items-center gap-2 px-6 py-3 relative overflow-hidden group">
                  <span className="absolute top-0 left-0 w-full h-full bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                  <span className="relative z-10">Resume</span> 
                  <FaArrowRight className="relative z-10" />
                </Link>
                <Link to="/contact" className="btn btn-outline px-6 py-3 border-2 relative overflow-hidden group">
                  <span className="absolute top-0 left-0 w-full h-full bg-primary/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                  <span className="relative z-10">Get In Touch</span>
                </Link>
              </motion.div>
              
              <motion.div 
                className="flex gap-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              >
                <motion.a 
                  href="https://github.com/GhOsCoDeR" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-600 hover:text-primary transition-colors p-2 rounded-full hover:bg-gray-100"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub size={22} />
                </motion.a>
                <motion.a 
                  href="https://linkedin.com/in/adammahama" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-600 hover:text-primary transition-colors p-2 rounded-full hover:bg-gray-100"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaLinkedin size={22} />
                </motion.a>
                <motion.a 
                  href="https://twitter.com/adammahama" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-600 hover:text-primary transition-colors p-2 rounded-full hover:bg-gray-100"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaTwitter size={22} />
                </motion.a>
                <motion.a 
                  href="mailto:adams24mahama@gmail.com" 
                  className="text-gray-600 hover:text-primary transition-colors p-2 rounded-full hover:bg-gray-100"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaEnvelope size={22} />
                </motion.a>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="md:w-1/2 relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative z-10">
                <motion.div 
                  className="bg-primary rounded-full w-72 h-72 md:w-80 md:h-80 mx-auto overflow-hidden border-4 border-white shadow-2xl relative"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
                >
                  {/* Animated border */}
                  <motion.div 
                    className="absolute inset-0 rounded-full border-4 border-primary/50"
                    animate={{ 
                      scale: [1, 1.05, 1],
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  />

                  {/* Profile image */}
                  <img 
                    src="/images/profile/profile.jpeg" 
                    alt="Adam Mahama" 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                
                {/* Decorative elements */}
                <motion.div 
                  className="absolute -top-5 -right-5 w-16 h-16 bg-yellow-400 rounded-full z-[-1] hidden md:block"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 0.7 }}
                  transition={{ delay: 0.9, duration: 0.4 }}
                  whileHover={{ rotate: 45 }}
                ></motion.div>
                <motion.div 
                  className="absolute -bottom-5 -left-5 w-20 h-20 bg-blue-400 rounded-full z-[-1] hidden md:block"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 0.7 }}
                  transition={{ delay: 1.1, duration: 0.4 }}
                  whileHover={{ rotate: -45 }}
                ></motion.div>
                <motion.div
                  className="absolute top-1/2 -right-10 transform -translate-y-1/2 w-12 h-12 bg-primary/30 rounded-lg z-[-1] hidden md:block"
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.3, duration: 0.6 }}
                  whileHover={{ rotate: 180 }}
                ></motion.div>
              </div>
              
              {/* Rotating badges wheel */}
              <div className="absolute inset-0 w-full h-full">
                {/* Experience badge */}
                <motion.div 
                  className="absolute top-0 right-10 bg-white shadow-lg rounded-lg p-3 z-20 hidden md:block"
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ 
                    y: 0, 
                    opacity: 1,
                    rotate: [0, 360],
                  }}
                  transition={{ 
                    delay: 1.5, 
                    duration: 0.6, 
                    type: "spring",
                    rotate: {
                      duration: 40,
                      repeat: Infinity,
                      ease: "linear"
                    }
                  }}
                  whileHover={{ scale: 1.1, rotate: 0 }}
                >
                  <div className="flex items-center gap-2">
                    <FaLaptopCode className="text-primary" />
                    <div>
                      <div className="text-primary font-bold text-xl">3+</div>
                      <div className="text-xs text-gray-600">Years Experience</div>
                    </div>
                  </div>
                </motion.div>
                
                {/* Projects completed badge */}
                <motion.div 
                  className="absolute bottom-5 left-10 bg-white shadow-lg rounded-lg p-3 z-20 hidden md:block"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ 
                    y: 0, 
                    opacity: 1,
                    rotate: [0, 360],
                  }}
                  transition={{ 
                    delay: 1.7, 
                    duration: 0.6, 
                    type: "spring",
                    rotate: {
                      duration: 35,
                      repeat: Infinity,
                      ease: "linear"
                    }
                  }}
                  whileHover={{ scale: 1.1, rotate: 0 }}
                >
                  <div className="flex items-center gap-2">
                    <FaMobileAlt className="text-primary" />
                    <div>
                      <div className="text-primary font-bold text-xl">20+</div>
                      <div className="text-xs text-gray-600">Projects Completed</div>
                    </div>
                  </div>
                </motion.div>
                
                {/* Clients badge */}
                <motion.div 
                  className="absolute top-1/3 -right-10 bg-white shadow-lg rounded-lg p-3 z-20 hidden md:block"
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ 
                    x: 0, 
                    opacity: 1,
                    rotate: [0, 360],
                  }}
                  transition={{ 
                    delay: 1.9, 
                    duration: 0.6, 
                    type: "spring",
                    rotate: {
                      duration: 30,
                      repeat: Infinity,
                      ease: "linear"
                    }
                  }}
                  whileHover={{ scale: 1.1, rotate: 0 }}
                >
                  <div className="flex items-center gap-2">
                    <FaUsers className="text-primary" />
                    <div>
                      <div className="text-primary font-bold text-xl">12+</div>
                      <div className="text-xs text-gray-600">Happy Clients</div>
                    </div>
                  </div>
                </motion.div>
                
                {/* Technologies badge */}
                <motion.div 
                  className="absolute -top-5 left-20 bg-white shadow-lg rounded-lg p-3 z-20 hidden md:block"
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ 
                    y: 0, 
                    opacity: 1,
                    rotate: [0, 360],
                  }}
                  transition={{ 
                    delay: 2.1, 
                    duration: 0.6, 
                    type: "spring",
                    rotate: {
                      duration: 45,
                      repeat: Infinity,
                      ease: "linear"
                    }
                  }}
                  whileHover={{ scale: 1.1, rotate: 0 }}
                >
                  <div className="flex items-center gap-2">
                    <FaCode className="text-primary" />
                    <div>
                      <div className="text-primary font-bold text-xl">8+</div>
                      <div className="text-xs text-gray-600">Technologies</div>
                    </div>
                  </div>
                </motion.div>
                
                {/* Awards badge */}
                <motion.div 
                  className="absolute bottom-1/4 -left-10 bg-white shadow-lg rounded-lg p-3 z-20 hidden md:block"
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ 
                    x: 0, 
                    opacity: 1,
                    rotate: [0, 360],
                  }}
                  transition={{ 
                    delay: 2.3, 
                    duration: 0.6, 
                    type: "spring",
                    rotate: {
                      duration: 38,
                      repeat: Infinity,
                      ease: "linear"
                    }
                  }}
                  whileHover={{ scale: 1.1, rotate: 0 }}
                >
                  <div className="flex items-center gap-2">
                    <FaTrophy className="text-primary" />
                    <div>
                      <div className="text-primary font-bold text-xl">5+</div>
                      <div className="text-xs text-gray-600">Awards</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Skills */}
      <section className="section bg-white py-24 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
          <div className="absolute top-16 right-16 w-64 h-64 border-8 border-primary/10 rounded-full"></div>
          <div className="absolute bottom-16 left-16 w-72 h-72 border-8 border-primary/10 rounded-full"></div>
          <div className="absolute top-1/4 left-1/3 w-40 h-40 border-8 border-primary/10 rounded-xl -rotate-12"></div>
        </div>
      
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <motion.div 
              className="text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.span 
                className="text-primary font-medium mb-2 inline-block"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                EXPERTISE
              </motion.span>
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-3 relative inline-block"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Technical Skills
                <motion.span 
                  className="absolute -bottom-2 left-0 w-full h-1 bg-primary"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                ></motion.span>
              </motion.h2>
            </motion.div>
            
            <motion.p 
              className="text-center mb-12 text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Here are the technologies and frameworks I specialize in to create high-quality digital experiences.
            </motion.p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <SkillCard icon="⚛️" title="React.js" delay={0.1} />
              <SkillCard icon="📱" title="Flutter" delay={0.2} />
              <SkillCard icon="🔥" title="Firebase" delay={0.3} />
              <SkillCard icon="🖌️" title="TailwindCSS" delay={0.4} />
              <SkillCard icon="🔒" title="Web Security" delay={0.5} />
              <SkillCard icon="📊" title="MySQL" delay={0.6} />
              <SkillCard icon="🗺️" title="Google Maps API" delay={0.7} />
              <SkillCard icon="✨" title="TypeScript" delay={0.8} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section bg-gray-50 py-24 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-blue-400/5 rounded-full blur-3xl"></div>
        <motion.div 
          className="absolute right-20 bottom-40 w-20 h-20 bg-primary/10 rounded-xl"
          animate={{ 
            rotate: [0, 180],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity,
            repeatType: "mirror"
          }}
        ></motion.div>

        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row justify-between items-center mb-16">
              <div className="mb-6 md:mb-0">
                <motion.span 
                  className="text-primary font-medium mb-2 block"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  PORTFOLIO
                </motion.span>
                <motion.h2 
                  className="text-3xl md:text-4xl font-bold relative inline-block"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Featured Projects
                  <motion.span 
                    className="absolute -bottom-2 left-0 w-1/2 h-1 bg-primary"
                    initial={{ width: 0 }}
                    whileInView={{ width: "50%" }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                  ></motion.span>
                </motion.h2>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Link to="/projects" className="text-primary font-medium flex items-center gap-1 hover:underline group transition-all px-4 py-2 rounded-lg hover:bg-primary/10">
                  View All <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <ProjectCard 
                  title="Campus Security Navigator" 
                  description="A mobile app that plots crime data on maps and alerts students when approaching high-risk areas."
                  tech="Flutter, Firebase, Google Maps"
                  image="/images/campus-security/campusSecurityadmin.jpg"
                  liveUrl="https://campus-security-navigator.example.com"
                  githubUrl="https://github.com/GhOsCoDeR/campus-security-navigator"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <ProjectCard 
                  title="E-Commerce Platform" 
                  description="A fully functional e-commerce website with product catalog, cart functionality, and secure checkout."
                  tech="React, TailwindCSS, MySQL"
                  image="/images/ecommerce/ecommerce.jpg"
                  liveUrl="https://ecommerce-demo.example.com"
                  githubUrl="https://github.com/GhOsCoDeR/HopAndShop_main.git"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <ProjectCard 
                  title="Mosaic Grove" 
                  description="An agriculture website for exotic fruits and nuts including cashewnuts, dragon fruits, tigernuts, and wanbugu apples."
                  tech="React, Node.js, Express, MongoDB"
                  image="/images/mosaic/agriculture.jpg"
                  liveUrl="https://mosaicgrov.netlify.app/"
                  githubUrl="https://github.com/GideonWill/Mosaic-Grove.git"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                viewport={{ once: true }}
              >
                <ProjectCard 
                  title="Personal Portfolio" 
                  description="A modern, responsive portfolio website built with React and TailwindCSS to showcase my projects and skills."
                  tech="React, TailwindCSS, Framer Motion"
                  image="/images/portfolio/Screenshot 2025-04-03 101506.png"
                  liveUrl="https://adamsmahamaportfolio.netlify.app/"
                  githubUrl="https://github.com/GhOsCoDeR/adams-portfolio.git"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="md:col-span-1"
              >
                <ProjectCard 
                  title="Weather Dashboard" 
                  description="A weather application that provides current weather data and forecasts for any location with search and geolocation."
                  tech="React, WeatherAPI, CSS"
                  image="/images/weather/Screenshot 2025-04-03 115446.png"
                  liveUrl="https://adamsweatherapp.netlify.app/"
                  githubUrl="https://github.com/GhOsCoDeR/weather.git"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.45 }}
                viewport={{ once: true }}
                className="md:col-span-1"
              >
                <ProjectCard 
                  title="Student Voting System" 
                  description="A secure online platform for university student elections with real-time results, candidate profiles, and voter authentication."
                  tech="React, Firebase, TailwindCSS"
                  image="/images/voting/voting.jpg"
                  liveUrl="https://student-voting-demo.example.com"
                  githubUrl="https://github.com/GhOsCoDeR/student-voting-system"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section py-24 bg-gradient-to-br from-primary to-primary-dark text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <motion.div 
            className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white opacity-10" 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          ></motion.div>
          <motion.div 
            className="absolute bottom-10 right-20 w-40 h-40 rounded-full bg-white opacity-10"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          ></motion.div>
          <motion.div 
            className="absolute top-1/2 left-1/4 w-20 h-20 rounded-full bg-white opacity-10"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
          ></motion.div>
        </div>

        <div className="container-custom text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div 
              className="w-24 h-24 bg-white/10 rounded-full mx-auto mb-8 flex items-center justify-center"
              initial={{ y: -20 }}
              whileInView={{ y: 0 }}
              transition={{ 
                type: "spring",
                stiffness: 300,
                damping: 10,
                duration: 1 
              }}
              viewport={{ once: true }}
            >
              <FaEnvelope className="text-4xl" />
            </motion.div>

            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Interested in working together?
            </motion.h2>
            
            <motion.p 
              className="mb-10 max-w-2xl mx-auto text-lg opacity-90 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              I'm always open to discussing new projects, creative ideas or 
              opportunities to be part of your vision. Let's create something amazing together.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Link to="/contact" className="btn bg-white text-primary hover:bg-gray-100 inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium text-lg shadow-lg hover:shadow-xl transition-all group relative overflow-hidden">
                <span className="absolute inset-0 bg-primary/10 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
                <span className="relative">Get In Touch</span>
                <motion.span 
                  className="relative"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Infinity, repeatDelay: 1 }}
                >
                  <FaArrowRight />
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// Skill Card Component
const SkillCard = ({ icon, title, delay = 0 }) => {
  return (
    <motion.div 
      className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:border-primary hover:shadow-lg transition-all group relative overflow-hidden"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className="absolute inset-0 bg-primary/5 scale-0 group-hover:scale-100 rounded-xl transition-transform duration-300 origin-bottom"></div>
      <div className="text-5xl mb-4 text-primary group-hover:scale-110 transition-transform duration-300 relative">
        {icon}
      </div>
      <h3 className="text-lg font-semibold group-hover:text-primary transition-colors duration-300 relative">
        {title}
      </h3>
    </motion.div>
  );
};

// Project Card Component
const ProjectCard = ({ title, description, tech, image, liveUrl, githubUrl }) => {
  return (
    <motion.div 
      className="group relative h-96 overflow-hidden rounded-2xl shadow-lg transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
      animate={{ 
        y: [0, -10, 0],
        rotate: [0, 0.5, 0, -0.5, 0],
      }}
      transition={{ 
        y: {
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        },
        rotate: {
          duration: 12,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }
      }}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          src={typeof image === 'string' ? image : image[0]} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          animate={{ 
            scale: [1, 1.03, 1],
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/20 transition-opacity duration-300"></div>
      </div>
      
      {/* Content Container */}
      <div className="absolute inset-0 z-10 flex flex-col justify-end p-6 text-white">
        {/* Tech Badge */}
        <div className="absolute top-4 right-4">
          <motion.span 
            className="bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg border border-white/10"
            whileHover={{ scale: 1.05 }}
            animate={{ 
              y: [0, -3, 0],
              opacity: [0.8, 1, 0.8]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse" 
            }}
          >
            {tech.split(',')[0]}
          </motion.span>
        </div>
        
        {/* Glass Card for Content - Only at the bottom portion */}
        <motion.div 
          className="bg-black/40 backdrop-blur-sm rounded-xl p-5 border border-white/10 mt-auto"
          animate={{ 
            boxShadow: ['0 4px 6px rgba(0, 0, 0, 0.1)', '0 10px 15px rgba(0, 0, 0, 0.2)', '0 4px 6px rgba(0, 0, 0, 0.1)'],
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        >
          {/* Project Title with Animated Underline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-primary transition-colors">
              {title}
              <motion.div 
                className="block h-[2px] bg-primary/40"
                animate={{ 
                  width: ['0%', '30%', '0%'],
                }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "reverse" 
                }}
              />
            </h3>
          </motion.div>
          
          {/* Project Description */}
          <motion.p 
            className="mb-4 text-gray-100 line-clamp-2 text-sm leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {description}
          </motion.p>
          
          {/* Technologies */}
          <motion.div 
            className="mb-4 opacity-80"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.8 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-xs font-light">{tech}</div>
          </motion.div>
          
          {/* Action Buttons */}
          <motion.div 
            className="flex justify-between items-center"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.a 
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/80 font-medium flex items-center gap-1 hover:text-white transition-colors group/btn"
              whileHover={{ x: 2 }}
              animate={{ 
                x: [0, 2, 0],
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse" 
              }}
            >
              <span className="bg-white/10 backdrop-blur-md p-2 rounded-full border border-white/5">
                <FaGithub size={14} />
              </span>
              <span className="opacity-0 group-hover/btn:opacity-100 transition-opacity">View Code</span>
            </motion.a>
            
            {liveUrl && (
              (title === "Mosaic Grove" || title === "Personal Portfolio" || title === "Weather Dashboard") ? (
                <motion.a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-primary transition-colors border border-white/10"
                  whileHover={{ scale: 1.05 }}
                  animate={{ 
                    y: [0, -2, 0],
                  }}
                  transition={{ 
                    duration: 6,
                    repeat: Infinity,
                    repeatType: "reverse" 
                  }}
                >
                  <span>Live Demo</span>
                  <motion.span
                    animate={{ 
                      x: [0, 3, 0],
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse" 
                    }}
                  >
                    <FaExternalLinkAlt size={10} className="transition-transform" />
                  </motion.span>
                </motion.a>
              ) : (
                <div className="relative group/tooltip">
                  <motion.button
                    className="text-sm bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-primary transition-colors cursor-pointer border border-white/10"
                    whileHover={{ scale: 1.05 }}
                    animate={{ 
                      y: [0, -2, 0],
                    }}
                    transition={{ 
                      duration: 6,
                      repeat: Infinity,
                      repeatType: "reverse" 
                    }}
                    onClick={() => alert(`This is a demo project. Live demo is not currently deployed.`)}
                  >
                    <span>Preview</span>
                    <motion.span
                      animate={{ 
                        x: [0, 3, 0],
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse" 
                      }}
                    >
                      <FaExternalLinkAlt size={10} className="transition-transform" />
                    </motion.span>
                  </motion.button>
                  <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-sm text-white text-xs px-3 py-1 rounded opacity-0 group-hover/tooltip:opacity-100 transition-opacity w-40 text-center">
                    Demo link not currently deployed
                  </span>
                </div>
              )
            )}
          </motion.div>
        </motion.div>
      </div>
      
      {/* Hover Effect Overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-primary/10 to-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-5 pointer-events-none"
        animate={{ 
          opacity: [0, 0.05, 0],
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse" 
        }}
      ></motion.div>
    </motion.div>
  );
};

export default Home; 