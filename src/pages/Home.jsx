import { Link } from 'react-router-dom';
import { FaArrowRight, FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaMobileAlt, FaLaptopCode, FaUsers, FaCode, FaTrophy, FaExternalLinkAlt, FaMousePointer, FaHandPointUp } from 'react-icons/fa';
import { motion, AnimatePresence, useMotionValue, useTransform, useDragControls } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import React from 'react';

// Draggable Element Component
const DraggableElement = ({ children, initialX, initialY, color, size, icon, zIndex = 40 }) => {
  const x = useMotionValue(initialX);
  const y = useMotionValue(initialY);
  const controls = useDragControls();
  const [isDragging, setIsDragging] = useState(false);
  const [wasJustDragged, setWasJustDragged] = useState(false);

  // Reset the "just dragged" state after showing the tooltip
  useEffect(() => {
    if (wasJustDragged) {
      const timer = setTimeout(() => {
        setWasJustDragged(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [wasJustDragged]);

  const startDrag = (event) => {
    controls.start(event);
    setIsDragging(true);
  };

  return (
    <motion.div
      drag
      dragControls={controls}
      dragMomentum={false}
      dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={() => {
        setIsDragging(false);
        setWasJustDragged(true);
      }}
      initial={{ x: initialX, y: initialY }}
      style={{ x, y, zIndex }}
      whileDrag={{ scale: 1.1 }}
      className="absolute cursor-grab active:cursor-grabbing"
    >
      <div
        onPointerDown={startDrag}
        className={`relative rounded-full flex items-center justify-center ${size} ${color} shadow-lg`}
      >
        {children}
        
        {/* Dragable indicator */}
        {!isDragging && !wasJustDragged && (
          <motion.div 
            className="absolute -top-10 -right-2 bg-black/80 text-white text-xs px-2 py-1 rounded-full flex items-center shadow-lg backdrop-blur-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20, delay: 1 }}
          >
            <FaHandPointUp className="mr-1" /> Drag me
          </motion.div>
        )}
        
        {/* Feedback after dragging */}
        {wasJustDragged && (
          <motion.div 
            className="absolute -top-10 left-1/2 -translate-x-1/2 bg-green-600 text-white text-xs px-2 py-1 rounded-full flex items-center shadow-lg"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <FaMousePointer className="mr-1" /> Positioned!
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

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
      <section className="section min-h-[90vh] flex items-center bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        {/* Background patterns - enhanced with more dynamic elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Static background elements */}
          <motion.div 
            className="absolute -top-12 -left-12 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
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
          <motion.div 
            className="absolute top-1/3 left-1/3 w-64 h-64 bg-yellow-400/5 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.5, 0.2] 
            }}
            transition={{ 
              duration: 12, 
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          <motion.div 
            className="absolute top-20 right-1/4 w-6 h-6 bg-primary rounded-full"
            animate={{ 
              y: [0, 100, 0],
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.5]
            }}
            transition={{ 
              duration: 15, 
              repeat: Infinity,
              repeatType: "loop"
            }}
          />
          <motion.div 
            className="absolute bottom-32 left-1/4 w-4 h-4 bg-yellow-400 rounded-full"
            animate={{ 
              y: [0, -80, 0],
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.5]
            }}
            transition={{ 
              duration: 18, 
              repeat: Infinity,
              repeatType: "loop",
              delay: 2
            }}
          />
          <motion.div 
            className="absolute top-1/2 right-20 w-8 h-8 bg-blue-400 rounded-md rotate-45"
            animate={{ 
              rotate: [45, 90, 45],
              opacity: [0, 0.8, 0],
              scale: [0.5, 1, 0.5]
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity,
              repeatType: "loop",
              delay: 5
            }}
          />
        </div>

        <div className="container-custom z-10 relative">
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
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <span className="block">Immersive</span> <span className="text-primary">Digital</span> <span className="relative inline-block">
                  Solutions
                  <motion.span 
                    className="absolute bottom-2 left-0 w-full h-3 bg-primary/20 -z-10"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                  ></motion.span>
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl mb-10 text-gray-600 max-w-xl leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                I'm <span className="text-primary font-medium">Adam Mahama</span>, a developer who crafts 
                <span className="text-primary font-medium relative inline-block mx-2">
                  elegant solutions
                  <motion.span 
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-primary"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 1.5, duration: 0.5 }}
                  ></motion.span>
                </span>
                through code, specializing in responsive web experiences.
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap gap-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                <Link to="/projects" className="btn btn-primary flex items-center gap-2 px-8 py-4 shadow-lg shadow-primary/20 relative overflow-hidden group rounded-full text-lg">
                  <span className="absolute top-0 left-0 w-full h-full bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                  <span className="relative z-10 font-medium">Explore Projects</span> 
                  <motion.span 
                    className="relative z-10"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                  >
                    <FaArrowRight />
                  </motion.span>
                </Link>
                <Link to="/resume" className="btn btn-secondary flex items-center gap-2 px-8 py-4 relative overflow-hidden group rounded-full text-lg">
                  <span className="absolute top-0 left-0 w-full h-full bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                  <span className="relative z-10 font-medium">Resume</span> 
                  <FaArrowRight className="relative z-10" />
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
                  className="text-gray-600 hover:text-primary transition-colors p-3 rounded-full hover:bg-gray-100 border border-gray-200"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub size={24} />
                </motion.a>
                <motion.a 
                  href="https://linkedin.com/in/adammahama" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-600 hover:text-primary transition-colors p-3 rounded-full hover:bg-gray-100 border border-gray-200"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaLinkedin size={24} />
                </motion.a>
                <motion.a 
                  href="https://twitter.com/adammahama" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-600 hover:text-primary transition-colors p-3 rounded-full hover:bg-gray-100 border border-gray-200"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaTwitter size={24} />
                </motion.a>
                <motion.a 
                  href="mailto:adams24mahama@gmail.com" 
                  className="text-gray-600 hover:text-primary transition-colors p-3 rounded-full hover:bg-gray-100 border border-gray-200"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaEnvelope size={24} />
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

                  {/* Rotating orbit path */}
                  <motion.div 
                    className="absolute inset-[-60px] rounded-full border-2 border-dashed border-primary/20"
                    animate={{ 
                      rotate: 360
                    }}
                    transition={{ 
                      duration: 40, 
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                </motion.div>
                
                {/* Decorative elements as a wheel around the profile */}
                <div className="absolute -inset-14 w-[calc(100%+7rem)] h-[calc(100%+7rem)]">
                  {/* Experience badge positioned along orbital path */}
                  <motion.div 
                    className="absolute top-1/2 left-1/2 bg-white shadow-lg rounded-lg p-3 z-20 transform -translate-x-1/2 -translate-y-1/2"
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: 1,
                      rotate: [0, 360],
                    }}
                    style={{
                      translateX: "calc(-50% + 170px * cos(360deg * 0.1))",
                      translateY: "calc(-50% + 170px * sin(360deg * 0.1))"
                    }}
                    transition={{ 
                      opacity: { delay: 1.5, duration: 0.6 },
                      rotate: {
                        duration: 40,
                        repeat: Infinity,
                        ease: "linear"
                      }
                    }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="flex items-center gap-2">
                      <FaLaptopCode className="text-primary" />
                      <div>
                        <div className="text-primary font-bold text-xl">3+</div>
                        <div className="text-xs text-gray-600">Years Experience</div>
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Projects completed badge positioned along orbital path */}
                  <motion.div 
                    className="absolute top-1/2 left-1/2 bg-white shadow-lg rounded-lg p-3 z-20 transform -translate-x-1/2 -translate-y-1/2"
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: 1,
                      rotate: [0, 360],
                    }}
                    style={{
                      translateX: "calc(-50% + 170px * cos(360deg * 0.3))",
                      translateY: "calc(-50% + 170px * sin(360deg * 0.3))"
                    }}
                    transition={{ 
                      opacity: { delay: 1.7, duration: 0.6 },
                      rotate: {
                        duration: 40,
                        repeat: Infinity,
                        ease: "linear"
                      }
                    }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="flex items-center gap-2">
                      <FaMobileAlt className="text-primary" />
                      <div>
                        <div className="text-primary font-bold text-xl">20+</div>
                        <div className="text-xs text-gray-600">Projects</div>
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Clients badge positioned along orbital path */}
                  <motion.div 
                    className="absolute top-1/2 left-1/2 bg-white shadow-lg rounded-lg p-3 z-20 transform -translate-x-1/2 -translate-y-1/2"
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: 1,
                      rotate: [0, 360],
                    }}
                    style={{
                      translateX: "calc(-50% + 170px * cos(360deg * 0.5))",
                      translateY: "calc(-50% + 170px * sin(360deg * 0.5))"
                    }}
                    transition={{ 
                      opacity: { delay: 1.9, duration: 0.6 },
                      rotate: {
                        duration: 40,
                        repeat: Infinity,
                        ease: "linear"
                      }
                    }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="flex items-center gap-2">
                      <FaUsers className="text-primary" />
                      <div>
                        <div className="text-primary font-bold text-xl">12+</div>
                        <div className="text-xs text-gray-600">Clients</div>
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Technologies badge positioned along orbital path */}
                  <motion.div 
                    className="absolute top-1/2 left-1/2 bg-white shadow-lg rounded-lg p-3 z-20 transform -translate-x-1/2 -translate-y-1/2"
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: 1,
                      rotate: [0, 360],
                    }}
                    style={{
                      translateX: "calc(-50% + 170px * cos(360deg * 0.7))",
                      translateY: "calc(-50% + 170px * sin(360deg * 0.7))"
                    }}
                    transition={{ 
                      opacity: { delay: 2.1, duration: 0.6 },
                      rotate: {
                        duration: 40,
                        repeat: Infinity,
                        ease: "linear"
                      }
                    }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="flex items-center gap-2">
                      <FaCode className="text-primary" />
                      <div>
                        <div className="text-primary font-bold text-xl">8+</div>
                        <div className="text-xs text-gray-600">Technologies</div>
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Awards badge positioned along orbital path */}
                  <motion.div 
                    className="absolute top-1/2 left-1/2 bg-white shadow-lg rounded-lg p-3 z-20 transform -translate-x-1/2 -translate-y-1/2"
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: 1,
                      rotate: [0, 360],
                    }}
                    style={{
                      translateX: "calc(-50% + 170px * cos(360deg * 0.9))",
                      translateY: "calc(-50% + 170px * sin(360deg * 0.9))"
                    }}
                    transition={{ 
                      opacity: { delay: 2.3, duration: 0.6 },
                      rotate: {
                        duration: 40,
                        repeat: Infinity,
                        ease: "linear"
                      }
                    }}
                    whileHover={{ scale: 1.1 }}
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
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Skills */}
      <section className="section bg-white py-32 relative overflow-hidden">
        {/* Background decoration - enhanced with more elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
          <div className="absolute top-16 right-16 w-64 h-64 border-8 border-primary/10 rounded-full"></div>
          <div className="absolute bottom-16 left-16 w-72 h-72 border-8 border-primary/10 rounded-full"></div>
          <div className="absolute top-1/4 left-1/3 w-40 h-40 border-8 border-primary/10 rounded-xl -rotate-12"></div>
          <motion.div 
            className="absolute bottom-1/3 right-1/3 w-20 h-20 border-4 border-primary/20 rounded-xl"
            animate={{ 
              rotate: [0, 180, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ 
              duration: 15,
              repeat: Infinity,
              repeatType: "reverse" 
            }}
          />
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
              className="text-center mb-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.span 
                className="text-primary font-medium mb-3 inline-block text-lg"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                EXPERTISE
              </motion.span>
              <motion.h2 
                className="text-4xl md:text-5xl font-bold mb-5 relative inline-block"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                I am an innovator in 
                <span className="text-primary ml-2">creative web design</span>
                <motion.span 
                  className="absolute -bottom-3 left-0 w-full h-1 bg-primary"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                ></motion.span>
              </motion.h2>
            </motion.div>
            
            <motion.p 
              className="text-center mb-16 text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              My skills have been refined through years of creating solutions that blend creativity with technical excellence. 
              Here are the technologies and frameworks I specialize in to build exceptional digital experiences.
            </motion.p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
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
      <section className="section bg-gray-50 py-32 relative overflow-hidden">
        {/* Decorative background elements - enhanced with more dynamic elements */}
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl"></div>
        <motion.div 
          className="absolute right-20 bottom-40 w-24 h-24 bg-primary/10 rounded-xl"
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
        <motion.div 
          className="absolute left-1/4 top-1/4 w-16 h-16 bg-yellow-400/10 rounded-full"
          animate={{ 
            y: [0, 30, 0],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ 
            duration: 15, 
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
            <div className="flex flex-col md:flex-row justify-between items-center mb-20">
              <div className="mb-6 md:mb-0">
                <motion.span 
                  className="text-primary font-medium mb-2 block text-lg"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  FEATURED PROJECTS
                </motion.span>
                <motion.h2 
                  className="text-4xl md:text-5xl font-bold relative inline-block"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Immersive Digital Stories
                  <motion.span 
                    className="absolute -bottom-3 left-0 w-1/2 h-1 bg-primary"
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
                <Link to="/projects" className="text-primary font-medium flex items-center gap-2 hover:underline group transition-all px-6 py-3 rounded-lg hover:bg-primary/10 text-lg border border-primary/20">
                  View All Projects <FaArrowRight className="text-sm group-hover:translate-x-2 transition-transform" />
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
      <section className="section py-32 bg-gradient-to-br from-primary to-primary-dark text-white relative overflow-hidden">
        {/* Decorative elements - enhanced with more dynamic elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <motion.div 
            className="absolute top-10 left-10 w-40 h-40 rounded-full bg-white opacity-10" 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          ></motion.div>
          <motion.div 
            className="absolute bottom-10 right-20 w-56 h-56 rounded-full bg-white opacity-10"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          ></motion.div>
          <motion.div 
            className="absolute top-1/2 left-1/4 w-32 h-32 rounded-full bg-white opacity-10"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
          ></motion.div>
          <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-r from-white/5 via-white/10 to-white/5"></div>
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
              className="w-28 h-28 bg-white/10 backdrop-blur-sm rounded-full mx-auto mb-10 flex items-center justify-center border border-white/20"
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
              <FaEnvelope className="text-5xl" />
            </motion.div>

            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Interested in working together?
            </motion.h2>
            
            <motion.p 
              className="mb-12 max-w-3xl mx-auto text-xl opacity-90 leading-relaxed"
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
              <Link to="/contact" className="btn bg-white text-primary hover:bg-gray-100 inline-flex items-center gap-3 px-10 py-5 rounded-full font-medium text-xl shadow-xl hover:shadow-2xl transition-all group relative overflow-hidden">
                <span className="absolute inset-0 bg-primary/10 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
                <span className="relative">Let's Talk</span>
                <motion.span 
                  className="relative"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Infinity, repeatDelay: 1 }}
                >
                  <FaArrowRight className="text-lg" />
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
        {/* Stronger gradient overlay for better readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/30 transition-opacity duration-300"></div>
      </div>
      
      {/* Content Container */}
      <div className="absolute inset-0 z-10 flex flex-col justify-end p-6 text-white">
        {/* Tech Badge */}
        <div className="absolute top-4 right-4">
          <motion.span 
            className="bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg"
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
        
        {/* Content - No more glass effect, just a darker overlay for readability */}
        <div className="mt-auto">
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
                className="block h-[2px] bg-primary"
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
            className="mb-4 text-white line-clamp-2 text-sm leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {description}
          </motion.p>
          
          {/* Technologies */}
          <motion.div 
            className="mb-4 opacity-90"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.9 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-xs font-light text-gray-200">{tech}</div>
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
              className="text-sm text-white font-medium flex items-center gap-1 hover:text-primary transition-colors group/btn"
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
              <span className="bg-black/50 p-2 rounded-full">
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
                  className="text-sm bg-primary text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-primary/80 transition-colors"
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
                    className="text-sm bg-primary text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-primary/80 transition-colors cursor-pointer"
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
                  <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-3 py-1 rounded opacity-0 group-hover/tooltip:opacity-100 transition-opacity w-40 text-center">
                    Demo link not currently deployed
                  </span>
                </div>
              )
            )}
          </motion.div>
        </div>
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