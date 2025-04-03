import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white py-8">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Adams Mahama</h3>
            <p className="text-gray-300">Frontend & Mobile Developer</p>
          </div>

          <div className="flex space-x-4 text-2xl">
            <a href="https://github.com/GhOsCoDeR" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com/your-twitter" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <FaTwitter />
            </a>
            <a href="mailto:adams24mahama@gmail.com" className="hover:text-primary transition-colors">
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {currentYear} Adams Mahama. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 