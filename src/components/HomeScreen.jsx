import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import kitImg from '../assets/kit.jpg';
import fintechImg from '../assets/images/fintech.jpg';
import codementorImg from '../assets/images/codementor.jpg';
import pantrypalsImg from '../assets/images/pantrypals.jpg';
import hradminImg from '../assets/images/hradmin.png';

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
  const [pantryRef, pantryVisible] = useFadeInOnScroll();
  const [hradminRef, hradminVisible] = useFadeInOnScroll();

  return (
    <div className="w-full min-h-screen bg-[#2A2D3E] text-white relative overflow-hidden px-4 md:px-8 lg:px-16">

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
             View Resume
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
                  className="w-[220px] h-[440px] md:w-[260px] md:h-[520px] object-cover rounded-2xl shadow-lg border-2 border-[#8E9AEB]"
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
                  className="w-[220px] h-[440px] md:w-[260px] md:h-[520px] object-cover rounded-2xl shadow-lg border-2 border-[#E5B075]"
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
            {/* Project 3: PantryPals */}
            <div
              ref={pantryRef}
              className={`flex flex-col md:flex-row items-center justify-end gap-20 transition-all duration-700 ease-out ${pantryVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
            >
              {/* Image left, smaller */}
              <div className="flex-1 flex justify-end pr-8 md:pr-16">
                <img
                  src={pantrypalsImg}
                  alt="PantryPals App Preview"
                  className="w-[220px] h-[440px] md:w-[260px] md:h-[520px] object-cover rounded-2xl shadow-lg border-2 border-[#FF9800]"
                  style={{maxWidth: '100%', height: 'auto'}}
                />
              </div>
              {/* Description right, larger and more right-aligned */}
              <div className="flex-[1.5] flex flex-col justify-center items-start gap-6 max-w-2xl ml-4 md:ml-12">
                <h3 className="text-3xl md:text-4xl font-bold text-[#E5B075] mb-2">PantryPals</h3>
                <p className="text-base md:text-lg lg:text-l text-white leading-relaxed">
                  PantryPals is a mobile app for discovering, sharing, and managing recipes. Users can explore trending dishes, organize their own collections, plan meals, and connect with a vibrant food community.
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
                <a href="https://github.com/flklr-dev/pantrypals" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#8E9AEB] hover:underline text-lg font-semibold mt-2">
                  <i className="fab fa-github text-2xl"></i> View on GitHub
                </a>
              </div>
            </div>
            {/* Project 4: HR Admin Management Dashboard */}
            <div
              ref={hradminRef}
              className={`flex flex-col md:flex-row-reverse items-center justify-end gap-8 md:mr-24 transition-all duration-700 ease-out ${hradminVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
            >
              {/* Image right, website style */}
              <div className="flex-1 flex justify-start">
                <img
                  src={hradminImg}
                  alt="HR Admin Management Dashboard Preview"
                  className="w-full max-w-[900px] h-auto object-cover rounded-2xl shadow-lg border-2 border-[#C084FC] bg-[#18122B]"
                  style={{aspectRatio: '16/7', minWidth: '800px'}}
                />
              </div>
              {/* Description left, larger and more left-aligned */}
              <div className="flex-[1.5] flex flex-col justify-center items-end gap-6 max-w-2xl mr-4 md:mr-12 text-right">
                <h3 className="text-3xl md:text-4xl font-bold text-[#E5B075] mb-2">HR Admin Management Dashboard</h3>
                <p className="text-base md:text-lg lg:text-l text-white leading-relaxed">
                  This project is a modern, interactive HR Admin Management Dashboard designed to streamline and visualize core human resources and project management operations for organizations.
                </p>
                <div className="flex flex-wrap gap-3 items-center justify-end mt-2">
                  <span className="flex items-center gap-2 px-4 py-2 bg-[#22243a] rounded-full text-sm font-semibold text-[#61DAFB] border border-[#61DAFB]">
                    <i className="fab fa-react"></i> React.js
                  </span>
                  <span className="flex items-center gap-2 px-4 py-2 bg-[#22243a] rounded-full text-sm font-semibold text-[#FBBF24] border border-[#FBBF24]">
                    <i className="fas fa-bolt"></i> Vite
                  </span>
                </div>
                <a href="https://github.com/flklr-dev/hr-admin-management" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#8E9AEB] hover:underline text-lg font-semibold mt-2">
                  <i className="fab fa-github text-2xl"></i> View on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="w-full py-20 relative z-10">
        <div className="max-w-[1920px] mx-auto px-4 md:px-8 lg:px-16">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              About <span className="text-[#E5B075]">Me</span>
            </h2>
            <div className="h-1 w-20 bg-[#E5B075] mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Profile Image */}
            <div className="flex justify-center lg:justify-start ml-24">
              <div className="relative">
                <img
                  src={kitImg}
                  alt="Kit Adrian Profile"
                  className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-2xl border-4 border-[#E5B075] shadow-2xl"
                />
                
                </div>
              </div>

            {/* Right: About Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-3xl md:text-4xl font-bold text-[#E5B075]">
                  Hello, I&apos;m Kit Adrian
                </h3>
                
                <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                  <p>
                    A passionate 21-year-old BSIT student at Davao Oriental State University, 
                    currently in my fourth year of studies. I blend creativity with technical expertise 
                    to create meaningful digital experiences.
                  </p>
                  
                  <p>
                    I can develop mobile applications with React Native and create responsive websites with React. 
                    My expertise includes building cross-platform mobile apps and modern web applications 
                    that deliver exceptional user experiences.
                  </p>
                </div>
              </div>

              {/* Quick Facts */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#353849] p-6 rounded-xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-[#8E9AEB] rounded-lg flex items-center justify-center">
                      <i className="fas fa-graduation-cap text-xl"></i>
                    </div>
                    <h4 className="text-xl font-semibold">Education</h4>
                  </div>
                  <p className="text-gray-300">BS Information Technology</p>
                  <p className="text-sm text-gray-400">Davao Oriental State University</p>
                </div>
                
                <div className="bg-[#353849] p-6 rounded-xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-[#E5B075] rounded-lg flex items-center justify-center">
                      <i className="fas fa-code text-xl"></i>
                    </div>
                    <h4 className="text-xl font-semibold">Specialization</h4>
                  </div>
                  <p className="text-gray-300">Mobile Systems & Development</p>
                  <p className="text-sm text-gray-400">Application Development</p>
                </div>
              </div>

              {/* Personal Tags */}
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-[#2A2D3E] rounded-full text-sm text-[#E5B075] border border-[#E5B075]">Creative Thinker</span>
                <span className="px-4 py-2 bg-[#2A2D3E] rounded-full text-sm text-[#8E9AEB] border border-[#8E9AEB]">Problem Solver</span>
                <span className="px-4 py-2 bg-[#2A2D3E] rounded-full text-sm text-[#E5B075] border border-[#E5B075]">Tech Enthusiast</span>
                <span className="px-4 py-2 bg-[#2A2D3E] rounded-full text-sm text-[#8E9AEB] border border-[#8E9AEB]">Continuous Learner</span>
              </div>

              {/* Contact CTA */}
              <div className="pt-6">
                <a 
                  href="#contact" 
                  className="inline-flex items-center gap-3 bg-[#E5B075] text-white px-8 py-4 rounded-xl hover:bg-[#d39a60] transition-all duration-300 transform hover:scale-105"
                >
                  <span className="text-lg font-semibold">View Resume</span>
                  <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full text-center py-6 text-gray-400 text-sm border-t border-[#353849] mt-8">
        &copy; {new Date().getFullYear()} Kit Adrian. All rights reserved.
      </footer>
    </div>
  );
};

export default HomeScreen;