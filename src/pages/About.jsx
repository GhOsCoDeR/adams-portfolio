import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaLaptopCode, FaBriefcase, FaDownload } from 'react-icons/fa';

const About = () => {
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
            <h1 className="mb-6">About Me</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Frontend and mobile developer with a passion for creating impactful applications
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div 
              className="md:col-span-1"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="sticky top-24">
                <motion.div 
                  className="rounded-xl overflow-hidden mb-6 border-4 border-white shadow-xl relative group"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  {/* Decorative elements */}
                  <div className="absolute -top-2 -left-2 w-12 h-12 bg-primary/20 rounded-full blur-md"></div>
                  <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-primary/30 rounded-full blur-md"></div>
                  
                  {/* Profile image with gradient overlay */}
                  <div className="relative">
                    <img 
                      src="/images/profile/adams.jpeg" 
                      alt="Adams Mahama" 
                      className="w-full h-auto rounded-lg z-10 relative"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                  </div>
                </motion.div>
                
                <div className="flex justify-center">
                  <motion.a 
                    href="/documents/Adam_Mahama_Resume.pdf" 
                    download 
                    className="btn btn-primary flex items-center gap-2 px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaDownload /> Download Resume
                  </motion.a>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="md:col-span-2"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="mb-6">Who I Am</h2>
              
              <div className="bg-white rounded-xl p-6 shadow-md mb-8 border border-gray-100">
                <p className="mb-4 text-gray-700">
                  I am a motivated computer scientist with a passion for innovation and problem-solving. With expertise in frontend and mobile development, I focus on creating secure, responsive web applications and functional mobile solutions.
                </p>
                
                <p className="mb-4 text-gray-700">
                  My journey in tech began during my studies at Kwame Nkrumah University of Science and Technology, where I developed a strong foundation in computer science principles. Since then, I've expanded my skills through self-directed learning and practical application in real-world projects.
                </p>
                
                <p className="mb-4 text-gray-700">
                  I'm especially interested in applications that solve real-world problems, as demonstrated in my Campus Security Navigator project, which helps keep university students safe by alerting them to high-risk areas.
                </p>
                
                <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-100">
                  <h4 className="text-primary font-medium mb-3">Personal Interests</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Network Administration & Security</li>
                    <li>Mobile Application Development</li>
                    <li>Web Design & User Experience</li>
                    <li>Educational Technology Solutions</li>
                    <li>Cloud Infrastructure & DevOps</li>
                  </ul>
                </div>
              </div>
              
              <div className="mb-10">
                <h3 className="mb-4 flex items-center gap-2 text-xl font-bold">
                  <span className="text-primary text-2xl"><FaLaptopCode /></span> Technical Skills
                </h3>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <SkillProgressBar skill="React.js" percentage={90} />
                  <SkillProgressBar skill="JavaScript" percentage={85} />
                  <SkillProgressBar skill="Flutter" percentage={80} />
                  <SkillProgressBar skill="TypeScript" percentage={75} />
                  <SkillProgressBar skill="Firebase" percentage={80} />
                  <SkillProgressBar skill="HTML/CSS" percentage={95} />
                </div>
              </div>
              
              <div className="mb-10">
                <h3 className="mb-6 flex items-center gap-2 text-xl font-bold">
                  <span className="text-primary text-2xl"><FaGraduationCap /></span> Education
                </h3>
                
                <div className="space-y-4">
                  <TimelineItem 
                    years="2020 - 2024" 
                    title="Bachelor of Science - Computer Science" 
                    organization="Kwame Nkrumah University of Science and Technology"
                    description="Second Class Upper. Coursework in Web Development, Mobile App Development, Database Systems, Algorithms, Cloud Computing"
                  />
                  
                  <TimelineItem 
                    years="2016 - 2019" 
                    title="West African Senior School Certificate Examination" 
                    organization="Edinaman Senior High School"
                    description="General Science"
                  />
                </div>
              </div>
              
              <div>
                <h3 className="mb-6 flex items-center gap-2 text-xl font-bold">
                  <span className="text-primary text-2xl"><FaBriefcase /></span> Experience
                </h3>
                
                <div className="space-y-4">
                  <TimelineItem 
                    years="2022 - Present" 
                    title="Frontend Developer & Marketing Team Organizer" 
                    organization="Rapid Crew Tech, Kumasi, Ghana"
                    description="Develop React-based web applications and Flutter mobile solutions. Create responsive user interfaces and implement complex features including e-commerce functionality."
                  />
                  
                  <TimelineItem 
                    years="2021 - 2023" 
                    title="IT Assistant Personnel" 
                    organization="Parent Heritage School, Kasoa, Ghana"
                    description="Implemented and maintained school-wide data backup system. Developed digital examination management system and provided technical support for faculty and staff."
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Skill Progress Bar Component
const SkillProgressBar = ({ skill, percentage }) => {
  return (
    <motion.div 
      className="mb-5 bg-white p-3 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow group"
      whileHover={{ y: -2 }}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium group-hover:text-primary transition-colors">{skill}</span>
        <motion.span 
          className="text-sm font-medium bg-primary/10 px-2 rounded"
          initial={{ scale: 0.9 }}
          whileInView={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 300, delay: 0.4 }}
        >
          {percentage}%
        </motion.span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
        <motion.div 
          className="bg-primary h-2.5 rounded-full relative"
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="absolute right-0 w-2 h-full bg-white/40"
            animate={{ x: [5, -5] }}
            transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

// Timeline Item Component
const TimelineItem = ({ years, title, organization, description }) => {
  return (
    <motion.div 
      className="border-l-2 border-primary pl-4 pb-6 relative group hover:bg-gray-50 rounded-r-lg transition-colors duration-300"
      whileHover={{ x: 5 }}
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Timeline dot */}
      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary group-hover:scale-125 transition-transform duration-300"></div>
      
      <div className="text-sm text-primary font-medium mb-1 bg-primary/10 inline-block px-2 py-1 rounded">{years}</div>
      <h4 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors">{title}</h4>
      <div className="text-gray-800 mb-2 font-medium">{organization}</div>
      <p className="text-gray-600 border-l-2 border-gray-200 pl-3">{description}</p>
    </motion.div>
  );
};

export default About; 