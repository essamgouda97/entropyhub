'use client';
import { useState, useEffect } from 'react';
import Logo from '../ui/Logo';
import MenuIcon from '@mui/icons-material/Menu';

interface HeaderProps {
  scrollToSection: (section: React.RefObject<HTMLElement>) => void;
  sections: {
    problem: React.RefObject<HTMLElement>;
    
    services: React.RefObject<HTMLElement>;
    
    about: React.RefObject<HTMLElement>;

    contact: React.RefObject<HTMLElement>;

  };
}

const Header = ({ scrollToSection, sections }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleMenuToggle = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-gradient-to-b from-black via-black to-transparent border-b border-zinc-500'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#">
          <Logo />
        </a>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-xl">
          <button
            onClick={() => scrollToSection(sections.services)}
            className="text-white hover:scale-110"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection(sections.about)}
            className="text-white hover:scale-110"
          >
            About Us
          </button>
          <button
            onClick={() => scrollToSection(sections.contact)}
            className="text-white hover:scale-110"
          >
            Contact
          </button>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={handleMenuToggle}
          >
            <MenuIcon className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden shadow-md">
          <ul className="space-y-4 px-6 py-4">
            <li>
              <button
                onClick={() => scrollToSection(sections.services)}
                className="text-white hover:scale-110"
              >
                Services
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection(sections.about)}
                className="text-white hover:scale-110"
              >
                About Us
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection(sections.contact)}
                className="text-white hover:scale-110"
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
