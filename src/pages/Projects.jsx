import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaMobileAlt, FaShoppingCart } from 'react-icons/fa';
import React from 'react';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'Campus Security Navigator',
      description: 'A mobile application that plots crime data on interactive maps and alerts university students when approaching high-risk areas. Utilizes geofencing to provide alternative safe routes.',
      image: '/images/campus-security/campusSecurityadmin.jpg',
      technologies: ['Flutter', 'Firebase', 'Google Maps API', 'Cloud Functions'],
      category: 'mobile',
      links: {
        github: 'https://github.com/GhOsCoDeR/campus-security-navigator',
        live: null
      },
      featured: true
    },
    {
      id: 2,
      title: 'E-Commerce Platform',
      description: 'A fully functional e-commerce website with product catalog, cart functionality, and secure checkout. Includes user authentication, role-based access, and order management.',
      image: '/images/ecommerce/ecommerce.jpg',
      technologies: ['React', 'TailwindCSS', 'MySQL', 'Node.js'],
      category: 'web',
      links: {
        github: 'https://github.com/GhOsCoDeR/HopAndShop_main.git',
        live: 'https://ecommerce-demo.example.com'
      },
      featured: true
    },
    {
      id: 3,
      title: 'Mosaic Grove',
      description: 'An agriculture website for exotic fruits and nuts including cashewnuts, dragon fruits, tigernuts, and wanbugu apples. Features product listings, growing guides, and online ordering.',
      image: '/images/mosaic/agriculture.jpg',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
      category: 'web',
      links: {
        github: 'https://github.com/GideonWill/Mosaic-Grove.git',
        live: 'https://mosaicgrov.netlify.app/'
      },
      featured: true
    },
    {
      id: 4,
      title: 'Personal Portfolio',
      description: 'A modern, responsive portfolio website built with React and TailwindCSS to showcase my projects and skills. Features smooth animations and transitions.',
      image: '/images/portfolio/Screenshot 2025-04-03 101506.png',
      technologies: ['React', 'TailwindCSS', 'Framer Motion'],
      category: 'web',
      links: {
        github: 'https://github.com/GhOsCoDeR/adams-portfolio.git',
        live: 'https://adamsmahamaportfolio.netlify.app/'
      },
      featured: false
    },
    {
      id: 5,
      title: 'Weather Dashboard',
      description: 'A weather application that provides current weather data and forecasts for any location. Features include search by city name, geolocation, and saved locations.',
      image: '/images/weather/Screenshot 2025-04-03 115446.png',
      technologies: ['React', 'WeatherAPI', 'CSS'],
      category: 'web',
      links: {
        github: 'https://github.com/GhOsCoDeR/weather.git',
        live: 'https://adamsweatherapp.netlify.app/'
      },
      featured: false
    },
    {
      id: 6,
      title: 'Student Voting System',
      description: 'A secure online platform for university student elections with real-time results, candidate profiles, and voter authentication. Includes admin dashboard for managing elections.',
      image: '/images/voting/voting.jpg',
      technologies: ['React', 'Firebase', 'TailwindCSS', 'Authentication'],
      category: 'web',
      links: {
        github: 'https://github.com/GhOsCoDeR/student-voting-system',
        live: 'https://student-voting-demo.example.com'
      },
      featured: false
    }
  ];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="pt-24">
      <section className="section">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="mb-6">My Projects</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A showcase of my web and mobile development work
            </p>
          </motion.div>
          
          {/* Filter Buttons */}
          <div className="flex justify-center mb-12">
            <div className="flex space-x-4 bg-white rounded-lg border border-gray-200 p-1">
              <FilterButton 
                label="All Projects" 
                value="all" 
                current={filter} 
                onClick={setFilter}
                icon={<FaCode />}
              />
              <FilterButton 
                label="Web" 
                value="web" 
                current={filter} 
                onClick={setFilter}
                icon={<FaExternalLinkAlt />}
              />
              <FilterButton 
                label="Mobile" 
                value="mobile" 
                current={filter} 
                onClick={setFilter}
                icon={<FaMobileAlt />}
              />
            </div>
          </div>
          
          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={index}
              />
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

// Filter Button Component
const FilterButton = ({ label, value, current, onClick, icon }) => {
  const isActive = current === value;
  
  return (
    <button
      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
        isActive 
          ? 'bg-primary text-white' 
          : 'text-gray-700 hover:bg-gray-100'
      }`}
      onClick={() => onClick(value)}
    >
      {icon}
      {label}
    </button>
  );
};

// Project Card Component
const ProjectCard = ({ project, index }) => {
  const getCategoryIcon = (category) => {
    switch(category) {
      case 'web':
        return <FaExternalLinkAlt className="text-primary" />;
      case 'mobile':
        return <FaMobileAlt className="text-primary" />;
      case 'ecommerce':
        return <FaShoppingCart className="text-primary" />;
      default:
        return <FaCode className="text-primary" />;
    }
  };

  return (
    <motion.div 
      className="group relative h-96 overflow-hidden rounded-2xl shadow-lg transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: 1, 
        y: [0, -10, 0],
        rotate: [0, 0.5, 0, -0.5, 0],
      }}
      transition={{ 
        opacity: { duration: 0.5, delay: index * 0.1 },
        y: {
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: index * 0.2
        },
        rotate: {
          duration: 12,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: index * 0.3
        }
      }}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          src={typeof project.image === 'string' ? project.image : project.image[0]} 
          alt={project.title}
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
        {/* Featured Badge */}
        {project.featured && (
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
              Featured
            </motion.span>
          </div>
        )}
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <motion.span 
            className="bg-primary/80 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1"
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
            {getCategoryIcon(project.category)}
            <span>{project.category.charAt(0).toUpperCase() + project.category.slice(1)}</span>
          </motion.span>
        </div>
        
        {/* Content - No more glass effect, just a darker overlay for readability */}
        <div className="mt-auto">
          {/* Project Title with Animated Underline */}
          <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-primary transition-colors">
            {project.title}
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
          
          {/* Project Description */}
          <p className="mb-4 text-white text-sm leading-relaxed line-clamp-3">
            {project.description}
          </p>
          
          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, techIndex) => (
              <motion.span 
                key={techIndex} 
                className="bg-black/50 text-white text-xs font-medium px-2.5 py-1 rounded"
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{ 
                  duration: 4 + (techIndex * 0.5),
                  repeat: Infinity,
                  repeatType: "reverse" 
                }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
          
          {/* Links */}
          <div className="flex gap-3 mt-4">
            {project.links.github && (
              <motion.a 
                href={project.links.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-black/50 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-black/70 transition-colors"
                animate={{ 
                  x: [0, 2, 0],
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse" 
                }}
              >
                <FaGithub className="text-sm" /> View Code
              </motion.a>
            )}
            
            {project.links.live && (
              (project.title === "Mosaic Grove" || project.title === "Personal Portfolio" || project.title === "Weather Dashboard") ? (
                <motion.a 
                  href={project.links.live} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-primary/80 transition-colors"
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
                    <FaExternalLinkAlt className="text-sm" />
                  </motion.span>
                </motion.a>
              ) : (
                <div className="relative group/tooltip">
                  <motion.button 
                    className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-primary/80 transition-colors cursor-pointer"
                    onClick={() => alert(`This is a demo project. Live demo is not currently deployed.`)}
                    animate={{ 
                      y: [0, -2, 0],
                    }}
                    transition={{ 
                      duration: 6,
                      repeat: Infinity,
                      repeatType: "reverse" 
                    }}
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
                      <FaExternalLinkAlt className="text-sm" />
                    </motion.span>
                  </motion.button>
                  <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-3 py-1 rounded opacity-0 group-hover/tooltip:opacity-100 transition-opacity w-40 text-center">
                    Demo link not currently deployed
                  </span>
                </div>
              )
            )}
          </div>
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

export default Projects; 