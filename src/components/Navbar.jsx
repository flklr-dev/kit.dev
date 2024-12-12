import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 w-full bg-[#2A2D3E] text-white px-6 md:px-12 lg:px-24 z-50">
      <div className="max-w-[1920px] mx-auto py-6 flex items-center justify-between">
        {/* Mobile Menu Button */}
        <div className="md:hidden order-1">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>

        {/* Logo/Name - Centered on mobile */}
        <div className="text-xl font-semibold whitespace-nowrap text-center flex-1 md:flex-none md:text-left order-2 md:order-1">
          Kit Adrian Diocares
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 md:gap-16 lg:gap-20 ml-4 md:ml-8 lg:ml-12 order-3">
          <Link to="/" className="text-white hover:text-[#E5B075]">Home</Link>
          <Link to="/about" className="text-white hover:text-[#E5B075] whitespace-nowrap">About Me</Link>
          <Link to="/portfolio" className="text-white hover:text-[#E5B075]">Portfolio</Link>
          <Link to="/contact" className="text-white hover:text-[#E5B075]">Contact</Link>
          
          <div className="flex items-center gap-6">
            <a href="https://facebook.com/kitadrian31" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#E5B075]">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="mailto:kitadriand@gmail.com" className="text-white hover:text-[#E5B075]">
              <i className="fas fa-envelope"></i>
            </a>
            <a href="https://github.com/flklr-dev" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#E5B075]">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`${isOpen ? 'flex' : 'hidden'} md:hidden fixed top-[80px] left-0 right-0 bg-[#2A2D3E] flex-col items-center py-4 shadow-lg order-4`}>
          <Link to="/" className="text-white hover:text-[#E5B075] py-3">Home</Link>
          <Link to="/about" className="text-white hover:text-[#E5B075] py-3">About Me</Link>
          <Link to="/portfolio" className="text-white hover:text-[#E5B075] py-3">Portfolio</Link>
          <Link to="/contact" className="text-white hover:text-[#E5B075] py-3">Contact</Link>
          
          <div className="flex items-center gap-6 mt-4 pt-4 border-t border-gray-700 w-full justify-center">
            <a href="https://facebook.com/kitadrian31" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#E5B075]">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="mailto:kitadriand@gmail.com" className="text-white hover:text-[#E5B075]">
              <i className="fas fa-envelope"></i>
            </a>
            <a href="https://github.com/flklr-dev" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#E5B075]">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 