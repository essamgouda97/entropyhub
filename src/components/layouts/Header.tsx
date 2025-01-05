'use client'
import { useState } from "react";
import Logo from "../Logo";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className="fixed top-0 left-0 w-full shadow-md z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#">
          <Logo />
        </a>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-xl">
          <a href="#services" className="text-white hover:scale-110">
            Services
          </a>
          <a href="#about" className="text-white hover:scale-110">
            About Us
          </a>
          <a href="#projects" className="text-white hover:scale-110">
            Projects
          </a>
          <a href="#contact" className="text-white hover:scale-110">
            Contact
          </a>
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
              <a href="#services" className="text-white hover:scale-110">
                Services
              </a>
            </li>
            <li>
              <a href="#about" className="text-white hover:scale-110">
                About Us
              </a>
            </li>
            <li>
              <a href="#projects" className="text-white hover:scale-110">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="text-white hover:scale-110">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;