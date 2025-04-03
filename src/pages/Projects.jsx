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
        live: 'https://mosaic-grove.example.com'
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
        live: 'https://your-portfolio-url.com'
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
        live: 'https://weather-app-demo.example.com'
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

  // Carousel functionality
  const hasMultipleImages = Array.isArray(project.image);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Auto slide functionality
  React.useEffect(() => {
    if (!hasMultipleImages) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % project.image.length);
    }, 3000); // Change slide every 3 seconds
    
    return () => clearInterval(interval);
  }, [hasMultipleImages, project.image]);

  return (
    <motion.div 
      className="card relative group overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Project Image */}
      <div className="relative h-56 overflow-hidden">
        <img 
          src={typeof project.image === 'string' ? project.image : project.image[0]} 
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">
            Featured
          </div>
        )}
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4 bg-white text-dark px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
          {getCategoryIcon(project.category)}
          {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
        </div>
      </div>
      
      {/* Project Info */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span 
              key={index} 
              className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {/* Links */}
        <div className="flex gap-3">
          {project.links.github && (
            <a 
              href={project.links.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-outline text-sm py-2"
            >
              <FaGithub className="mr-1" /> View Code
            </a>
          )}
          
          {project.links.live && (
            <a 
              href={project.links.live} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary text-sm py-2"
            >
              <FaExternalLinkAlt className="mr-1" /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects; 