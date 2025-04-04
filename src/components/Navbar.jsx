import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes, FaCode, FaLaptopCode, FaMobileAlt, FaServer, FaDatabase, FaRocket, FaProjectDiagram, FaFolderOpen, FaFileAlt, FaBriefcase, FaUser, FaEnvelope } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Dropdown content definitions
  const dropdownContent = {
    projects: {
      title: "Projects",
      description: "Explore my latest work across various technologies",
      items: [
        { icon: <FaLaptopCode className="text-primary" />, name: "Web Applications", path: "/projects?category=web" },
        { icon: <FaMobileAlt className="text-primary" />, name: "Mobile Apps", path: "/projects?category=mobile" },
        { icon: <FaRocket className="text-primary" />, name: "E-Commerce", path: "/projects?category=ecommerce" },
        { icon: <FaServer className="text-primary" />, name: "All Projects", path: "/projects" }
      ],
      featured: {
        title: "Featured Project",
        name: "Weather Dashboard",
        description: "Real-time weather forecasting with location detection",
        path: "/projects/weather-dashboard",
        imagePath: "/images/weather/Screenshot 2025-04-03 115446.png"
      }
    },
    about: {
      title: "About Me",
      description: "Learn more about my skills and background",
      items: [
        { icon: <FaUser className="text-primary" />, name: "My Story", path: "/about" },
        { icon: <FaCode className="text-primary" />, name: "Skills & Expertise", path: "/about#skills" },
        { icon: <FaBriefcase className="text-primary" />, name: "Work Experience", path: "/about#experience" }
      ]
    },
    resume: {
      title: "Resume",
      description: "View my qualifications and experience",
      items: [
        { icon: <FaFileAlt className="text-primary" />, name: "View Resume", path: "/resume" },
        { icon: <FaDatabase className="text-primary" />, name: "Technical Skills", path: "/resume#skills" },
        { icon: <FaRocket className="text-primary" />, name: "Download PDF", path: "/resume.pdf", external: true }
      ]
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Animation variants for the dropdown
  const dropdownVariants = {
    hidden: { 
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.2
      }
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -5 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-white/90 backdrop-blur-md shadow-lg py-5'}`}>
      <div className="container-custom">
        <div className="flex justify-between items-center">
          <NavLink to="/" className="text-2xl font-bold text-primary">
            Adam<span className="text-dark">.dev</span>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 relative">
            <NavLink 
              to="/" 
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              onMouseEnter={() => setActiveDropdown(null)}
            >
              Home
            </NavLink>
            
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('about')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <NavLink 
                to="/about" 
                className={({ isActive }) => isActive ? 'nav-link active flex items-center' : 'nav-link flex items-center'}
              >
                About
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </NavLink>
              
              <AnimatePresence>
                {activeDropdown === 'about' && (
                  <motion.div 
                    className="absolute left-1/2 transform -translate-x-1/2 mt-6 w-[400px] bg-white shadow-xl rounded-xl overflow-hidden z-50"
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                  >
                    <div className="p-6">
                      <div className="mb-4">
                        <h3 className="text-lg font-bold text-gray-800">{dropdownContent.about.title}</h3>
                        <p className="text-sm text-gray-500">{dropdownContent.about.description}</p>
                      </div>
                      
                      <div className="grid gap-3">
                        {dropdownContent.about.items.map((item, index) => (
                          <motion.div key={index} variants={itemVariants}>
                            <NavLink 
                              to={item.path} 
                              className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
                              onClick={() => setActiveDropdown(null)}
                            >
                              <span className="mr-3">{item.icon}</span>
                              <span className="font-medium">{item.name}</span>
                            </NavLink>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('projects')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <NavLink 
                to="/projects" 
                className={({ isActive }) => isActive ? 'nav-link active flex items-center' : 'nav-link flex items-center'}
              >
                Projects
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </NavLink>
              
              <AnimatePresence>
                {activeDropdown === 'projects' && (
                  <motion.div 
                    className="absolute left-1/2 transform -translate-x-1/2 mt-6 w-[600px] bg-white shadow-xl rounded-xl overflow-hidden z-50"
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                  >
                    <div className="flex">
                      <div className="w-1/2 p-6 border-r border-gray-100">
                        <div className="mb-4">
                          <h3 className="text-lg font-bold text-gray-800">{dropdownContent.projects.title}</h3>
                          <p className="text-sm text-gray-500">{dropdownContent.projects.description}</p>
                        </div>
                        
                        <div className="grid gap-3">
                          {dropdownContent.projects.items.map((item, index) => (
                            <motion.div key={index} variants={itemVariants}>
                              <NavLink 
                                to={item.path} 
                                className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
                                onClick={() => setActiveDropdown(null)}
                              >
                                <span className="mr-3">{item.icon}</span>
                                <span className="font-medium">{item.name}</span>
                              </NavLink>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="w-1/2 bg-gray-50">
                        <div className="p-6">
                          <h4 className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">{dropdownContent.projects.featured.title}</h4>
                          <NavLink 
                            to={dropdownContent.projects.featured.path}
                            className="block"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <div className="rounded-lg overflow-hidden mb-3 shadow-md">
                              <img 
                                src={dropdownContent.projects.featured.imagePath} 
                                alt={dropdownContent.projects.featured.name} 
                                className="w-full h-32 object-cover"
                              />
                            </div>
                            <h3 className="font-bold text-gray-800 mb-1">{dropdownContent.projects.featured.name}</h3>
                            <p className="text-sm text-gray-500">{dropdownContent.projects.featured.description}</p>
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('resume')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <NavLink 
                to="/resume" 
                className={({ isActive }) => isActive ? 'nav-link active flex items-center' : 'nav-link flex items-center'}
              >
                Resume
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </NavLink>
              
              <AnimatePresence>
                {activeDropdown === 'resume' && (
                  <motion.div 
                    className="absolute right-0 mt-6 w-[350px] bg-white shadow-xl rounded-xl overflow-hidden z-50"
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                  >
                    <div className="p-6">
                      <div className="mb-4">
                        <h3 className="text-lg font-bold text-gray-800">{dropdownContent.resume.title}</h3>
                        <p className="text-sm text-gray-500">{dropdownContent.resume.description}</p>
                      </div>
                      
                      <div className="grid gap-3">
                        {dropdownContent.resume.items.map((item, index) => (
                          <motion.div key={index} variants={itemVariants}>
                            {item.external ? (
                              <a 
                                href={item.path} 
                                className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <span className="mr-3">{item.icon}</span>
                                <span className="font-medium">{item.name}</span>
                              </a>
                            ) : (
                              <NavLink 
                                to={item.path} 
                                className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
                                onClick={() => setActiveDropdown(null)}
                              >
                                <span className="mr-3">{item.icon}</span>
                                <span className="font-medium">{item.name}</span>
                              </NavLink>
                            )}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <NavLink 
              to="/contact" 
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              onMouseEnter={() => setActiveDropdown(null)}
            >
              Contact
            </NavLink>
          </nav>

          {/* Mobile Navigation Button */}
          <button className="md:hidden text-2xl focus:outline-none" onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="md:hidden bg-white"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container-custom py-4 flex flex-col space-y-3">
              <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={toggleMenu}>
                Home
              </NavLink>
              <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={toggleMenu}>
                About
              </NavLink>
              <NavLink to="/projects" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={toggleMenu}>
                Projects
              </NavLink>
              <NavLink to="/resume" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={toggleMenu}>
                Resume
              </NavLink>
              <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={toggleMenu}>
                Contact
              </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar; 