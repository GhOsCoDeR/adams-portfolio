import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
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

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container-custom">
        <div className="flex justify-between items-center">
          <NavLink to="/" className="text-2xl font-bold text-primary">
            Adams<span className="text-dark">.dev</span>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              About
            </NavLink>
            <NavLink to="/projects" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              Projects
            </NavLink>
            <NavLink to="/resume" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              Resume
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
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
      <div className={`md:hidden bg-white ${isOpen ? 'block' : 'hidden'}`}>
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
      </div>
    </header>
  );
};

export default Navbar; 