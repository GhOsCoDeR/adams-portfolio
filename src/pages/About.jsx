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
                <div className="bg-primary rounded-xl overflow-hidden mb-6">
                  <img 
                    src="https://via.placeholder.com/600x800" 
                    alt="Adams Mahama" 
                    className="w-full h-auto"
                  />
                </div>
                
                <div className="flex justify-center">
                  <a 
                    href="/resume.pdf" 
                    download 
                    className="btn btn-primary flex items-center gap-2"
                  >
                    <FaDownload /> Download Resume
                  </a>
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
              
              <p className="mb-4 text-gray-700">
                I am a motivated computer scientist with a passion for innovation and problem-solving. With expertise in frontend and mobile development, I focus on creating secure, responsive web applications and functional mobile solutions.
              </p>
              
              <p className="mb-4 text-gray-700">
                My journey in tech began during my studies at Kwame Nkrumah University of Science and Technology, where I developed a strong foundation in computer science principles. Since then, I've expanded my skills through self-directed learning and practical application in real-world projects.
              </p>
              
              <p className="mb-8 text-gray-700">
                I'm especially interested in applications that solve real-world problems, as demonstrated in my Campus Security Navigator project, which helps keep university students safe by alerting them to high-risk areas.
              </p>
              
              <div className="mb-10">
                <h3 className="mb-4 flex items-center gap-2">
                  <FaLaptopCode className="text-primary" /> Technical Skills
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
                <h3 className="mb-6 flex items-center gap-2">
                  <FaGraduationCap className="text-primary" /> Education
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
                <h3 className="mb-6 flex items-center gap-2">
                  <FaBriefcase className="text-primary" /> Experience
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
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">{skill}</span>
        <span className="text-sm font-medium">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <motion.div 
          className="bg-primary h-2.5 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        ></motion.div>
      </div>
    </div>
  );
};

// Timeline Item Component
const TimelineItem = ({ years, title, organization, description }) => {
  return (
    <div className="border-l-2 border-primary pl-4 pb-2">
      <div className="text-sm text-primary font-medium mb-1">{years}</div>
      <h4 className="text-lg font-semibold mb-1">{title}</h4>
      <div className="text-gray-800 mb-2">{organization}</div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default About; 