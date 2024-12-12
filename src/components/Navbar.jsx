import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 w-full bg-[#2A2D3E] text-white px-6 md:px-12 lg:px-24 z-50">
      <div className="max-w-[1920px] mx-auto py-6 flex items-center justify-between">
        <div className="text-xl font-semibold whitespace-nowrap">
          Kit Adrian Diocares
        </div>
        
        <div className="flex items-center gap-8 md:gap-16 lg:gap-20 ml-4 md:ml-8 lg:ml-12">
          <Link to="/" className="text-white hover:text-[#E5B075]">Home</Link>
          <Link to="/about" className="text-white hover:text-[#E5B075] whitespace-nowrap">About Me</Link>
          <Link to="/portfolio" className="text-white hover:text-[#E5B075]">Portfolio</Link>
          <Link to="/contact" className="text-white hover:text-[#E5B075]">Contact</Link>
          
          <div className="flex items-center gap-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#E5B075]">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="mailto:example@email.com" className="text-white hover:text-[#E5B075]">
              <i className="fas fa-envelope"></i>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#E5B075]">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 