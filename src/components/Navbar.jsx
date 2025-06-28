const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 w-full bg-[#2A2D3E] text-white px-6 md:px-12 lg:px-24 z-50">
      <div className="max-w-[1920px] mx-auto py-6 flex items-center justify-between">
        {/* No mobile menu button, icons removed */}

        {/* Logo/Name - Centered on mobile */}
        <div className="text-xl font-semibold whitespace-nowrap text-center flex-1 md:flex-none md:text-left order-2 md:order-1">
          Kit Adrian Diocares
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 md:gap-16 lg:gap-20 ml-4 md:ml-8 lg:ml-12 order-3">
          <a href="#" className="text-white hover:text-[#E5B075]">Home</a>
          <a href="#skills" className="text-white hover:text-[#E5B075] whitespace-nowrap">Skills</a>
          <a href="#projects" className="text-white hover:text-[#E5B075]">Projects</a>
          <a href="#about" className="text-white hover:text-[#E5B075] whitespace-nowrap">About Me</a>
        </div>

        {/* Mobile Navigation Menu */}
        <div className="hidden md:hidden fixed top-[80px] left-0 right-0 bg-[#2A2D3E] flex-col items-center py-4 shadow-lg order-4">
          <a href="#" className="text-white hover:text-[#E5B075] py-3">Home</a>
          <a href="#skills" className="text-white hover:text-[#E5B075] py-3">Skills</a>
          <a href="#projects" className="text-white hover:text-[#E5B075] py-3">Projects</a>
          <a href="#about" className="text-white hover:text-[#E5B075] py-3">About Me</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 