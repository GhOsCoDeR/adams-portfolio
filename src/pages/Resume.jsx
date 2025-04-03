import { motion } from 'framer-motion';
import { FaDownload, FaGraduationCap, FaBriefcase, FaCode, FaLanguage, FaBook } from 'react-icons/fa';

const Resume = () => {
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
            <h1 className="mb-6">My Resume</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A summary of my experience, education, and skills
            </p>
            <div className="mt-6">
              <a 
                href="/documents/Adam_Mahama_Resume.pdf" 
                download 
                className="btn btn-primary inline-flex items-center gap-2"
              >
                <FaDownload /> Download Resume
              </a>
            </div>
            
            {/* Resume Preview */}
            <div className="mt-8 max-w-md mx-auto border border-gray-200 rounded-lg overflow-hidden shadow-md">
              <div className="bg-gray-50 p-2 flex justify-between items-center border-b border-gray-200">
                <div className="flex space-x-1">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-xs text-gray-500">Resume Preview</div>
              </div>
              <div 
                className="p-8 bg-white text-center"
                onClick={() => window.open('/documents/Adam_Mahama_Resume.pdf', '_blank')}
                style={{ cursor: 'pointer' }}
              >
                <div className="flex flex-col items-center justify-center mb-4">
                  <FaDownload className="text-4xl text-primary mb-3" />
                  <h3 className="text-lg font-semibold">Adams Mahama - Resume</h3>
                  <p className="text-sm text-gray-500 mt-1">Click to view the full resume</p>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg text-left">
                  <div className="h-4 bg-gray-300 rounded w-3/4 mb-3"></div>
                  <div className="h-3 bg-gray-300 rounded w-1/2 mb-2"></div>
                  <div className="h-3 bg-gray-300 rounded w-2/3 mb-2"></div>
                  <div className="h-3 bg-gray-300 rounded w-1/3 mb-2"></div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-16">
            <div className="p-8 border-b border-gray-200">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold">Adams Mahama</h2>
                  <p className="text-lg text-gray-600">Frontend & Mobile Developer</p>
                </div>
                <div className="mt-4 md:mt-0 space-y-1 text-gray-700">
                  <p>adams24mahama@gmail.com</p>
                  <p>github.com/GhOsCoDeR</p>
                  <p>Kumasi, Ghana</p>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <div className="mb-12">
                <SectionHeading icon={<FaBriefcase />} title="Professional Experience" />
                
                <div className="space-y-8">
                  <ResumeItem 
                    title="Frontend Developer & Marketing Team Organizer"
                    organization="Rapid Crew Tech"
                    location="Kumasi, Ghana"
                    period="January 2022 - Present"
                    description={[
                      "Develop and maintain React-based web applications and Flutter mobile solutions for client projects",
                      "Create responsive user interfaces that meet accessibility standards and business requirements",
                      "Implement complex features including e-commerce functionality and location-based services",
                      "Collaborate with design and backend teams to deliver integrated, full-stack solutions",
                      "Developed marketing communication plans and executed strategy across digital platforms",
                      "Expanded membership base through targeted recruitment initiatives"
                    ]}
                  />
                  
                  <ResumeItem 
                    title="IT Assistant Personnel"
                    organization="Parent Heritage School"
                    location="Kasoa, Ghana"
                    period="September 2021 - December 2023"
                    description={[
                      "Implemented and maintained school-wide data backup system with automated recovery procedures",
                      "Developed a digital examination management system, ensuring timely preparation and delivery",
                      "Provided technical support for faculty and staff on hardware and software issues",
                      "Created graphics and digital content for school advertising campaigns",
                      "Built small web applications to improve administrative processes"
                    ]}
                  />
                </div>
              </div>
              
              <div className="mb-12">
                <SectionHeading icon={<FaGraduationCap />} title="Education" />
                
                <div className="space-y-8">
                  <ResumeItem 
                    title="Bachelor of Science - Computer Science"
                    organization="Kwame Nkrumah University of Science and Technology"
                    location="Kumasi, Ghana"
                    period="November 2020 - August 2024"
                    description={[
                      "Achieved Second Class Upper honors",
                      "Relevant coursework: Web Development, Mobile App Development, Database Systems, Algorithms, Cloud Computing",
                      "Final Year Project: Campus Security Navigator – Location-based safety application for university students"
                    ]}
                  />
                  
                  <ResumeItem 
                    title="West African Senior School Certificate Examination"
                    organization="Edinaman Senior High School"
                    location="Elmina, Ghana"
                    period="2016 - 2019"
                    description={[
                      "Focus: General Science",
                      "Achievements: Red Cross Society Organizer of the Year"
                    ]}
                  />
                </div>
              </div>
              
              <div className="mb-12">
                <SectionHeading icon={<FaCode />} title="Technical Skills" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-2">Frontend Development</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>React.js, TypeScript, JavaScript (ES6+)</li>
                      <li>HTML5, CSS3, TailwindCSS</li>
                      <li>State Management (React Hooks, Context API)</li>
                      <li>Responsive Design, Web Accessibility</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-bold mb-2">Mobile Development</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>Flutter, Dart</li>
                      <li>Firebase Integration</li>
                      <li>Provider Pattern</li>
                      <li>Mobile UI/UX Design Principles</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-bold mb-2">Backend & Databases</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>Firebase, Cloud Functions</li>
                      <li>MySQL, Database Design</li>
                      <li>RESTful API Design and Integration</li>
                      <li>Authentication & Security</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-bold mb-2">Tools & Others</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>Git, Version Control</li>
                      <li>Graphic Design</li>
                      <li>Google Maps API, Geolocation Services</li>
                      <li>MS Office (Word, PowerPoint)</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <SectionHeading icon={<FaLanguage />} title="Languages" />
                  <ul className="space-y-2 mt-4">
                    <li className="flex justify-between">
                      <span className="font-medium">English</span>
                      <span className="text-gray-600">Proficient</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-medium">Fante</span>
                      <span className="text-gray-600">Proficient</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-medium">Spanish</span>
                      <span className="text-gray-600">Intermediate</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <SectionHeading icon={<FaBook />} title="Interests" />
                  <ul className="list-disc list-inside space-y-1 mt-4 text-gray-700">
                    <li>Building personal coding projects</li>
                    <li>Learning new programming languages</li>
                    <li>Advanced mathematics</li>
                    <li>Language learning (Italian, Spanish)</li>
                    <li>Music appreciation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Section Heading Component
const SectionHeading = ({ icon, title }) => {
  return (
    <div className="flex items-center gap-2 mb-6 pb-2 border-b border-gray-200">
      <span className="text-primary text-xl">{icon}</span>
      <h3 className="text-xl font-bold">{title}</h3>
    </div>
  );
};

// Resume Item Component
const ResumeItem = ({ title, organization, location, period, description }) => {
  return (
    <div>
      <h4 className="text-lg font-bold">{title}</h4>
      <div className="flex flex-col sm:flex-row sm:justify-between mb-2">
        <div className="text-gray-800 font-medium">{organization} | {location}</div>
        <div className="text-primary">{period}</div>
      </div>
      <ul className="list-disc list-inside space-y-1 text-gray-700">
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Resume; 