import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import kitImg from '../assets/kit.jpg';
import fintechImg from '../assets/images/fintech.jpg';
import codementorImg from '../assets/images/codementor.jpg';

const HomeScreen = () => {
  const navigate = useNavigate();

  // Typing effect for 'Frontend Developer'
  const fullText = 'Frontend Developer';
  const [typedText, setTypedText] = React.useState('');
  const [showCursor, setShowCursor] = React.useState(true);

  React.useEffect(() => {
    let current = 0;
    const typing = setInterval(() => {
      setTypedText(fullText.slice(0, current + 1));
      current++;
      if (current === fullText.length) {
        clearInterval(typing);
      }
    }, 80);
    return () => clearInterval(typing);
  }, []);

  React.useEffect(() => {
    const cursorBlink = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorBlink);
  }, []);

  // Navigation functions
  const handleLearnMore = () => {
    navigate('/about');
  };

  // Project fade-in animation hook
  function useFadeInOnScroll() {
    const ref = useRef();
    const [visible, setVisible] = useState(false);
    useEffect(() => {
      const observer = new window.IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setVisible(true);
        },
        { threshold: 0.2 }
      );
      if (ref.current) observer.observe(ref.current);
      return () => observer.disconnect();
    }, []);
    return [ref, visible];
  }

  // Fade-in hooks for each project
  const [fintechRef, fintechVisible] = useFadeInOnScroll();
  const [cmRef, cmVisible] = useFadeInOnScroll();

  return (
    <div className="w-full min-h-screen bg-[#2A2D3E] text-white relative overflow-hidden px-4 md:px-8 lg:px-16">
      {/* Main Background Circles */}
      
      <div className="absolute -bottom-10 -left-10 mr-20 w-[20rem] h-[20rem] md:w-[25rem] md:h-[25rem] bg-white rounded-full opacity-10"></div>
      
      {/* Additional Small Circles for Hero Section */}
      <div className="absolute top-1/4 -left-20 w-24 h-24 md:w-32 md:h-32 bg-[#8E9AEB] rounded-full opacity-15"></div>
      <div className="absolute bottom-1/3 -right-10 w-16 h-16 md:w-24 md:h-24 bg-white rounded-full opacity-20"></div>
      <div className="absolute top-2/3 left-1/3 w-12 h-12 md:w-16 md:h-16 bg-[#8E9AEB] rounded-full opacity-10"></div>
      <div className="absolute top-20 right-1/4 w-8 h-8 md:w-12 md:h-12 bg-white rounded-full opacity-15"></div>
      
      {/* Skills Section Circles */}
      <div className="absolute top-[90vh] right-1/3 w-16 h-16 bg-[#E5B075] rounded-full opacity-10"></div>
      <div className="absolute top-[95vh] left-1/4 w-24 h-24 bg-[#8E9AEB] rounded-full opacity-15"></div>
      <div className="absolute top-[105vh] right-1/4 w-12 h-12 bg-white rounded-full opacity-20"></div>
      <div className="absolute top-[110vh] left-1/3 w-8 h-8 bg-[#E5B075] rounded-full opacity-15"></div>
      
      {/* Projects Section Circles */}
      <div className="absolute top-[150vh] left-10 w-20 h-20 bg-[#8E9AEB] rounded-full opacity-10"></div>
      <div className="absolute top-[160vh] right-20 w-16 h-16 bg-white rounded-full opacity-15"></div>
      <div className="absolute top-[170vh] left-1/4 w-12 h-12 bg-[#E5B075] rounded-full opacity-20"></div>
      <div className="absolute top-[180vh] right-1/3 w-10 h-10 bg-[#8E9AEB] rounded-full opacity-15"></div>
      <div className="absolute top-[190vh] left-1/3 w-6 h-6 bg-white rounded-full opacity-10"></div>
      
      {/* CTA Section Additional Circles */}
      <div className="absolute top-[220vh] right-1/4 w-14 h-14 bg-[#E5B075] rounded-full opacity-15"></div>
      <div className="absolute top-[230vh] left-20 w-10 h-10 bg-[#8E9AEB] rounded-full opacity-20"></div>
      <div className="absolute top-[240vh] right-1/3 w-8 h-8 bg-white rounded-full opacity-10"></div>
      <div className="absolute top-[245vh] left-1/4 w-12 h-12 bg-[#E5B075] rounded-full opacity-15"></div>
      <div className="absolute top-[250vh] right-20 w-6 h-6 bg-[#8E9AEB] rounded-full opacity-20"></div>

      

      {/* Main Content - Hero Section Redesigned */}
      <main className="w-full h-screen flex flex-col md:flex-row items-center justify-center mt-14 -mb-10 gap-10 md:gap-0 px-4 md:px-8 lg:px-16">
        {/* Left: Text Content */}
        <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-6 md:space-y-8 lg:space-y-10 px-4 md:px-0">
          <p className="text-3xl md:text-4xl lg:text-5xl text-white">Hi! It&apos;s me,</p>
          <h1 className="text-6xl md:text-7xl lg:text-9xl font-bold">
            <span className="text-[#E5B075]">Kit Adrian</span>
          </h1>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#8E9AEB] flex items-center gap-2 min-h-[3.5rem] md:min-h-[4.5rem] lg:min-h-[5.5rem]">
            <span>{typedText}</span>
            <span className="text-[#8E9AEB] text-5xl md:text-6xl lg:text-7xl" style={{visibility: showCursor ? 'visible' : 'hidden'}}>|</span>
          </h2>
          <div className="flex justify-center md:justify-start mt-8">
            <button 
              onClick={handleLearnMore}
              className="bg-[#E5B075] text-white px-10 py-3 rounded-md hover:bg-[#d39a60] transition-all duration-300 text-lg md:text-xl transform hover:scale-[1.03] shadow-lg"
            >
              Download CV
            </button>
          </div>
        </div>
        {/* Right: Profile Image - Clean Large Style */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <img
            src={kitImg}
            alt="Kit Adrian Profile"
            className="w-80 h-80 md:w-[26rem] md:h-[26rem] object-cover rounded-full border-[10px] border-[#E5B075] bg-[#353849] z-10"
          />
          {/* Social Icons below image */}
          <div className="flex gap-6 mt-6">
            <a href="https://github.com/flklr-dev" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full bg-[#353849] border-2 border-[#8E9AEB] text-[#8E9AEB] hover:bg-[#8E9AEB] hover:text-[#353849] transition-colors text-2xl shadow">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/kitadrian" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full bg-[#353849] border-2 border-[#E5B075] text-[#E5B075] hover:bg-[#E5B075] hover:text-[#353849] transition-colors text-2xl shadow">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </main>

      {/* Skills Section */}
      <section id="skills" className="w-full py-20 relative z-10">
        <div className="max-w-[1920px] mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-6xl md:text-6xl font-bold text-center">
            My <span className="text-[#E5B075]">Skills</span>
          </h2>
          <div className="h-1 w-20 bg-[#E5B075] mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-8">
            {/* UI/UX Design Card */}
            <div className="bg-[#353849] p-8 rounded-xl hover:transform hover:scale-105 transition-all duration-300 group">
              <div className="h-16 w-16 bg-[#E5B075] rounded-lg mb-6 flex items-center justify-center group-hover:rotate-12 transition-transform">
                <i className="fas fa-pencil-ruler text-2xl"></i>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-[#E5B075]">UI/UX Design</h3>
              <p className="text-gray-300">Creating intuitive and engaging user experiences with modern design principles.</p>
            </div>

            {/* Web Development Card */}
            <div className="bg-[#353849] p-8 rounded-xl hover:transform hover:scale-105 transition-all duration-300 group">
              <div className="h-16 w-16 bg-[#8E9AEB] rounded-lg mb-6 flex items-center justify-center group-hover:rotate-12 transition-transform">
                <i className="fas fa-code text-2xl"></i>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-[#8E9AEB]">Web Development</h3>
              <p className="text-gray-300">Building responsive and dynamic websites using modern frameworks and technologies.</p>
            </div>

            {/* Programming Card */}
            <div className="bg-[#353849] p-8 rounded-xl hover:transform hover:scale-105 transition-all duration-300 group">
              <div className="h-16 w-16 bg-[#E5B075] rounded-lg mb-6 flex items-center justify-center group-hover:rotate-12 transition-transform">
                <i className="fas fa-laptop-code text-2xl"></i>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-[#E5B075]">Programming</h3>
              <p className="text-gray-300">Developing efficient solutions through clean and maintainable code.</p>
            </div>

            {/* Graphic Design Card */}
            <div className="bg-[#353849] p-8 rounded-xl hover:transform hover:scale-105 transition-all duration-300 group">
              <div className="h-16 w-16 bg-[#8E9AEB] rounded-lg mb-6 flex items-center justify-center group-hover:rotate-12 transition-transform">
                <i className="fas fa-palette text-2xl"></i>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-[#8E9AEB]">Graphic Design</h3>
              <p className="text-gray-300">Creating visually stunning designs that communicate and inspire.</p>
            </div>
          </div>
          {/* Technologies */}
          <div className="mt-12 flex flex-col items-center">
            <span className="text-lg font-semibold mb-2 text-[#E5B075]">Technologies</span>
            <div className="flex gap-6 text-4xl">
              <i className="fab fa-html5 text-[#E44D26]" title="HTML5"></i>
              <i className="fab fa-css3-alt text-[#1572B6]" title="CSS3"></i>
              <i className="fab fa-js-square text-[#F7DF1E]" title="JavaScript"></i>
              <i className="fab fa-php text-[#777BB4]" title="PHP"></i>
              <i className="fab fa-react text-[#61DAFB]" title="React"></i>
              <i className="fab fa-laravel text-[#FF2D20]" title="Laravel"></i>
              <i className="fab fa-node-js text-[#3C873A]" title="Node.js"></i>
              <i className="fas fa-leaf text-[#47A248]" title="MongoDB"></i>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section (scrollable, one at a time) */}
      <section id="projects" className="w-full py-20 relative z-10">
        <div className="max-w-[1920px] mx-auto px-4 md:px-8 lg:px-16">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Projects
            </h2>
            <div className="h-1 w-20 bg-[#E5B075] mx-auto rounded-full"></div>
          </div>
          {/* Horizontal scrollable projects */}
          <div className="flex flex-col gap-24">
            {/* Project 1: Fintech */}
            <div
              ref={fintechRef}
              className={`flex flex-col md:flex-row items-center justify-end gap-20 transition-all duration-700 ease-out ${fintechVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
            >
              {/* Image left, smaller */}
              <div className="flex-1 flex justify-end pr-8 md:pr-16">
                <img
                  src={fintechImg}
                  alt="Fintech App Preview"
                  className="w-[220px] h-[440px] md:w-[260px] md:h-[520px] object-cover rounded-2xl shadow-lg border-4 border-[#8E9AEB]"
                  style={{maxWidth: '100%', height: 'auto'}}
                />
              </div>
              {/* Description right, larger and more right-aligned */}
              <div className="flex-[1.5] flex flex-col justify-center items-start gap-6 max-w-2xl ml-4 md:ml-12">
                <h3 className="text-3xl md:text-4xl font-bold text-[#E5B075] mb-2">Financial Budgeting & Expense Tracker</h3>
                <p className="text-base md:text-lg lg:text-l text-white leading-relaxed">
                  Fintech is a modern mobile application designed to help you effortlessly track your expenses, manage your budgets, and gain insights into your financial habits. With an intuitive interface, real-time summaries, and powerful analytics, Fintech empowers users to take control of their finances and achieve their savings goals with ease.
                </p>
                <div className="flex flex-wrap gap-3 items-center mt-2">
                  <span className="flex items-center gap-2 px-4 py-2 bg-[#22243a] rounded-full text-sm font-semibold text-[#61DAFB] border border-[#61DAFB]">
                    <i className="fab fa-react"></i> React Native
                  </span>
                  <span className="flex items-center gap-2 px-4 py-2 bg-[#22243a] rounded-full text-sm font-semibold text-[#f3f3f3] border border-[#f3f3f3]">
                    <i className="fab fa-js-square"></i> Expo
                  </span>
                  <span className="flex items-center gap-2 px-4 py-2 bg-[#22243a] rounded-full text-sm font-semibold text-[#3C873A] border border-[#3C873A]">
                    <i className="fab fa-node-js"></i> Node.js
                  </span>
                  <span className="flex items-center gap-2 px-4 py-2 bg-[#22243a] rounded-full text-sm font-semibold text-[#f3f3f3] border border-[#f3f3f3]">
                    <i className="fas fa-server"></i> Express.js
                  </span>
                  <span className="flex items-center gap-2 px-4 py-2 bg-[#22243a] rounded-full text-sm font-semibold text-[#47A248] border border-[#47A248]">
                    <i className="fas fa-leaf"></i> MongoDB
                  </span>
                </div>
                <a href="https://github.com/flklr-dev/fintech" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#8E9AEB] hover:underline text-lg font-semibold mt-2">
                  <i className="fab fa-github text-2xl"></i> View on GitHub
                </a>
              </div>
            </div>
            {/* Project 2: CodeMentor AI */}
            <div
              ref={cmRef}
              className={`flex flex-col md:flex-row-reverse items-center justify-end gap-20 md:mr-24 transition-all duration-700 ease-out ${cmVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
            >
              {/* Image right, smaller */}
              <div className="flex-1 flex justify-start pl-8 md:pl-16">
                <img
                  src={codementorImg}
                  alt="CodeMentor App Preview"
                  className="w-[220px] h-[440px] md:w-[260px] md:h-[520px] object-cover rounded-2xl shadow-lg border-4 border-[#E5B075]"
                  style={{maxWidth: '100%', height: 'auto'}}
                />
              </div>
              {/* Description left, larger and more left-aligned */}
              <div className="flex-[1.5] flex flex-col justify-center items-end gap-6 max-w-2xl mr-4 md:mr-12 text-right">
                <h3 className="text-3xl md:text-4xl font-bold text-[#E5B075] mb-2">CodeMentor AI</h3>
                <p className="text-base md:text-lg lg:text-l text-white leading-relaxed">
                  CodeMentor is an interactive learning platform designed to make coding education engaging and accessible. The platform combines gamification elements with comprehensive learning materials to create an immersive educational experience.
                </p>
                <div className="flex flex-wrap gap-3 items-center justify-end mt-2">
                  <span className="flex items-center gap-2 px-4 py-2 bg-[#22243a] rounded-full text-sm font-semibold text-[#61DAFB] border border-[#61DAFB]">
                    <i className="fab fa-react"></i> React Native
                  </span>
                  <span className="flex items-center gap-2 px-4 py-2 bg-[#22243a] rounded-full text-sm font-semibold text-[#f3f3f3] border border-[#f3f3f3]">
                    <i className="fab fa-js-square"></i> Expo
                  </span>
                  <span className="flex items-center gap-2 px-4 py-2 bg-[#22243a] rounded-full text-sm font-semibold text-[#3C873A] border border-[#3C873A]">
                    <i className="fab fa-node-js"></i> Node.js
                  </span>
                  <span className="flex items-center gap-2 px-4 py-2 bg-[#22243a] rounded-full text-sm font-semibold text-[#f3f3f3] border border-[#f3f3f3]">
                    <i className="fas fa-server"></i> Express.js
                  </span>
                  <span className="flex items-center gap-2 px-4 py-2 bg-[#22243a] rounded-full text-sm font-semibold text-[#47A248] border border-[#47A248]">
                    <i className="fas fa-leaf"></i> MongoDB
                  </span>
                </div>
                <a href="https://github.com/flklr-dev/codementor" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#8E9AEB] hover:underline text-lg font-semibold mt-2">
                  <i className="fab fa-github text-2xl"></i> View on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeScreen;