import React from 'react';
import { Link } from 'react-router-dom';

const AboutMe = () => {

  const skills = {
    technical: [
      { name: "HTML/CSS", level: 90 },
      { name: "JavaScript", level: 75 },
      { name: "React.js", level: 80 },
      { name: "Node.js", level: 75 },
      { name: "PHP", level: 83 },
    ],
    design: [
      { name: "UI Design", level: 85 },
      { name: "UX Prototype", level: 80 },
      { name: "Figma", level: 85 },
    ],
    other: [
      { name: "Problem Solving", level: 90 },
      { name: "Team Collaboration", level: 80 },
      { name: "Project Management", level: 95 },
      { name: "Communication", level: 80 },
    ]
  };

  return (
    <div className="w-full min-h-screen bg-[#2A2D3E] text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute w-[600px] h-[600px] bg-[#E5B075] rounded-full blur-[150px] opacity-20 animate-pulse -top-40 -right-40"></div>
        <div className="absolute w-[500px] h-[500px] bg-[#8E9AEB] rounded-full blur-[150px] opacity-20 animate-pulse bottom-0 left-0"></div>
        
        {/* Geometric Shapes */}
        <div className="absolute top-40 left-20 w-24 h-24 border-2 border-[#E5B075] opacity-20 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-40 right-20 w-40 h-40 border-2 border-[#8E9AEB] opacity-20 rounded-full animate-bounce-slow"></div>
        <div className="absolute top-1/3 right-1/3 w-20 h-20 border-2 border-[#E5B075] opacity-20 animate-pulse"></div>
        
        {/* Additional Decorative Elements */}
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border-[#8E9AEB] opacity-20">
          <div className="w-full h-full relative animate-spin-slow">
            <div className="absolute inset-0 border-2 border-[#8E9AEB] rotate-45"></div>
            <div className="absolute inset-0 border-2 border-[#8E9AEB]"></div>
          </div>
        </div>
        
        <div className="absolute bottom-1/4 right-1/3 w-32 h-32">
          <div className="w-full h-full relative animate-pulse">
            <div className="absolute inset-0 border-2 border-[#E5B075] opacity-20 rounded-full"></div>
            <div className="absolute inset-2 border-2 border-[#E5B075] opacity-20 rounded-full"></div>
            <div className="absolute inset-4 border-2 border-[#E5B075] opacity-20 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Main Background Circles */}
      <div className="absolute -top-10 -right-10 ml-20 w-[20rem] h-[20rem] md:w-[25rem] md:h-[25rem] bg-[#8E9AEB] rounded-full opacity-20"></div>
      <div className="absolute -bottom-10 -left-10 mr-20 w-[20rem] h-[20rem] md:w-[25rem] md:h-[25rem] bg-white rounded-full opacity-10"></div>
      
      {/* Main Content */}
      <main className="relative z-10 pt-32">
        <div className="max-w-[1920px] mx-auto px-4 md:px-32 lg:px-64">
          <div className="space-y-12">
            {/* Title Section */}
            <div className="text-center space-y-4">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold">
                About <span className="text-[#E5B075]">Me</span>
              </h1>
              <div className="h-1 w-20 bg-[#E5B075] mx-auto rounded-full"></div>
            </div>

            {/* Introduction Card */}
            <div className="bg-[#353849] rounded-2xl p-8 md:p-12 space-y-8 relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#E5B075] rounded-full blur-[100px] opacity-10"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#8E9AEB] rounded-full blur-[100px] opacity-10"></div>

              {/* Content */}
              <div className="relative space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-[#E5B075]">
                  Hello, I'm Kit Adrian
                </h2>
                
                <div className="space-y-4 text-lg text-gray-300">
                  <p className="leading-relaxed">
                    A passionate 21-year-old BSIT student at Davao Oriental State University, 
                    currently in my third year of studies. I blend creativity with technical expertise 
                    to create meaningful digital experiences.
                  </p>
                  
                  <p className="leading-relaxed">
                    My journey in technology has been driven by curiosity and a desire to innovate. 
                    From web development to UI/UX design, I'm constantly exploring new ways to push 
                    the boundaries of what's possible in the digital realm.
                  </p>
                </div>

                {/* Quick Facts */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div className="space-y-2">
                    <h3 className="text-[#8E9AEB] font-semibold text-xl">Education</h3>
                    <p className="text-gray-300">BS Information Technology</p>
                    <p className="text-sm text-gray-400">Davao Oriental State University</p>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-[#8E9AEB] font-semibold text-xl">Specialization</h3>
                    <p className="text-gray-300">Full Stack Development</p>
                    <p className="text-sm text-gray-400">UI/UX Design • Web Development</p>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-3 mt-8">
                  <span className="px-4 py-2 bg-[#2A2D3E] rounded-full text-sm text-[#E5B075]">Creative Thinker</span>
                  <span className="px-4 py-2 bg-[#2A2D3E] rounded-full text-sm text-[#8E9AEB]">Problem Solver</span>
                  <span className="px-4 py-2 bg-[#2A2D3E] rounded-full text-sm text-[#E5B075]">Tech Enthusiast</span>
                  <span className="px-4 py-2 bg-[#2A2D3E] rounded-full text-sm text-[#8E9AEB]">Continuous Learner</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Skills and Expertise Section */}
      <section className="relative z-10 py-20">
        <div className="max-w-[1920px] mx-auto px-4 md:px-32 lg:px-64">
          <div className="space-y-16">
            {/* Section Title */}
            <div className="text-center space-y-4">
              <h2 className="text-5xl md:text-6xl font-bold">
                Skills & <span className="text-[#E5B075]">Expertise</span>
              </h2>
              <div className="h-1 w-20 bg-[#E5B075] mx-auto rounded-full"></div>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Technical Skills */}
              <div className="bg-[#353849] rounded-2xl p-8 space-y-6">
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-12 w-12 bg-[#E5B075] rounded-lg flex items-center justify-center">
                    <i className="fas fa-code text-2xl"></i>
                  </div>
                  <h3 className="text-2xl font-bold">Technical</h3>
                </div>
                <div className="space-y-6">
                  {skills.technical.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-[#E5B075]">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-[#2A2D3E] rounded-full">
                        <div 
                          className="h-full bg-[#E5B075] rounded-full transition-all duration-500"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Design Skills */}
              <div className="bg-[#353849] rounded-2xl p-8 space-y-6">
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-12 w-12 bg-[#8E9AEB] rounded-lg flex items-center justify-center">
                    <i className="fas fa-pencil-ruler text-2xl"></i>
                  </div>
                  <h3 className="text-2xl font-bold">Design</h3>
                </div>
                <div className="space-y-6">
                  {skills.design.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-[#8E9AEB]">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-[#2A2D3E] rounded-full">
                        <div 
                          className="h-full bg-[#8E9AEB] rounded-full transition-all duration-500"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Other Skills */}
              <div className="bg-[#353849] rounded-2xl p-8 space-y-6 lg:col-span-1 md:col-span-2 lg:col-span-1">
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-12 w-12 bg-[#E5B075] rounded-lg flex items-center justify-center">
                    <i className="fas fa-star text-2xl"></i>
                  </div>
                  <h3 className="text-2xl font-bold">Other Skills</h3>
                </div>
                <div className="space-y-6">
                  {skills.other.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-[#E5B075]">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-[#2A2D3E] rounded-full">
                        <div 
                          className="h-full bg-[#E5B075] rounded-full transition-all duration-500"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Background Section */}
        <section className="relative z-10 py-20">
        <div className="max-w-[1920px] mx-auto px-4 md:px-32 lg:px-64">
            <div className="space-y-16">
            {/* Section Title */}
            <div className="text-center space-y-4">
                <h2 className="text-5xl md:text-6xl font-bold">
                My <span className="text-[#E5B075]">Background</span>
                </h2>
                <div className="h-1 w-20 bg-[#E5B075] mx-auto rounded-full"></div>
            </div>

            {/* Timeline Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Education Column */}
                <div className="space-y-8">
                <div className="flex items-center gap-4">
                    <div className="h-12 w-12 bg-[#8E9AEB] rounded-lg flex items-center justify-center">
                    <i className="fas fa-graduation-cap text-2xl"></i>
                    </div>
                    <h3 className="text-2xl font-bold">Education Journey</h3>
                </div>

                {/* Timeline Items */}
                <div className="space-y-8 relative">
                    {/* Vertical Line */}
                    <div className="absolute left-2.5 top-0 w-0.5 h-full bg-[#8E9AEB] opacity-20"></div>

                    {/* College */}
                    <div className="relative pl-10">
                    <div className="absolute left-0 top-2 w-5 h-5 bg-[#8E9AEB] rounded-full"></div>
                    <div className="bg-[#353849] p-6 rounded-xl space-y-2">
                        <h4 className="text-xl font-semibold text-[#8E9AEB]">Davao Oriental State University</h4>
                        <p className="text-gray-300">BS Information Technology</p>
                        <p className="text-sm text-gray-400">2022 - Present</p>
                        <p className="text-gray-300 mt-4">Currently pursuing a degree in Information Technology, focusing on web development and software engineering.</p>
                    </div>
                    </div>

                    {/* Senior High */}
                    <div className="relative pl-10">
                    <div className="absolute left-0 top-2 w-5 h-5 bg-[#8E9AEB] rounded-full"></div>
                    <div className="bg-[#353849] p-6 rounded-xl space-y-2">
                        <h4 className="text-xl font-semibold text-[#8E9AEB]">Manuel S. Nasser Sr. National High School</h4>
                        <p className="text-gray-300">Senior High School - ICT Strand</p>
                        <p className="text-sm text-gray-400">2020 - 2022</p>
                        <p className="text-gray-300 mt-4">Specialized in Information and Communications Technology, laying the foundation for my tech career.</p>
                    </div>
                    </div>

                    {/* Junior High */}
                    <div className="relative pl-10">
                    <div className="absolute left-0 top-2 w-5 h-5 bg-[#8E9AEB] rounded-full"></div>
                    <div className="bg-[#353849] p-6 rounded-xl space-y-2">
                        <h4 className="text-xl font-semibold text-[#8E9AEB]">Manuel S. Nasser Sr. National High School</h4>
                        <p className="text-gray-300">Junior High School</p>
                        <p className="text-sm text-gray-400">2016 - 2020</p>
                        <p className="text-gray-300 mt-4">Developed strong academic foundations and discovered my passion for technology.</p>
                    </div>
                    </div>
                </div>
                </div>

                {/* Experience Column */}
                <div className="space-y-8">
                <div className="flex items-center gap-4">
                    <div className="h-12 w-12 bg-[#E5B075] rounded-lg flex items-center justify-center">
                    <i className="fas fa-briefcase text-2xl"></i>
                    </div>
                    <h3 className="text-2xl font-bold">Professional Experience</h3>
                </div>

                {/* Timeline Items */}
                <div className="space-y-8 relative">
                    {/* Vertical Line */}
                    <div className="absolute left-2.5 top-0 w-0.5 h-full bg-[#E5B075] opacity-20"></div>

                    {/* Freelance Experience */}
                    <div className="relative pl-10">
                    <div className="absolute left-0 top-2 w-5 h-5 bg-[#E5B075] rounded-full"></div>
                    <div className="bg-[#353849] p-6 rounded-xl space-y-2">
                        <h4 className="text-xl font-semibold text-[#E5B075]">Freelance Web Developer</h4>
                        <p className="text-gray-300">Self-Employed</p>
                        <p className="text-sm text-gray-400">2022 - Present</p>
                        <div className="text-gray-300 mt-4 space-y-2">
                        <p>• Developed and maintained responsive websites for various clients</p>
                        <p>• Specialized in React.js and modern web technologies</p>
                        <p>• Created custom UI/UX designs using Figma</p>
                        <p>• Managed multiple projects simultaneously while meeting deadlines</p>
                        </div>
                    </div>
                    </div>

                    {/* Notable Projects */}
                    <div className="relative pl-10">
                    <div className="absolute left-0 top-2 w-5 h-5 bg-[#E5B075] rounded-full"></div>
                    <div className="bg-[#353849] p-6 rounded-xl space-y-2">
                        <h4 className="text-xl font-semibold text-[#E5B075]">Notable Projects</h4>
                        <p className="text-gray-300">Portfolio Highlights</p>
                        <div className="text-gray-300 mt-4 space-y-2">
                        <p>• E-commerce website development</p>
                        <p>• Portfolio websites for professionals</p>
                        <p>• Custom web applications</p>
                        <p>• UI/UX design projects</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>

        {/* Values and Interests Section */}
        <section className="relative z-10 py-20">
          <div className="max-w-[1920px] mx-auto px-4 md:px-32 lg:px-64">
            <div className="space-y-16">
              {/* Section Title */}
              <div className="text-center space-y-4">
                <h2 className="text-5xl md:text-6xl font-bold">
                  Values & <span className="text-[#E5B075]">Interests</span>
                </h2>
                <div className="h-1 w-20 bg-[#E5B075] mx-auto rounded-full"></div>
              </div>

              {/* Values Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Core Values */}
                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 bg-[#8E9AEB] rounded-lg flex items-center justify-center">
                      <i className="fas fa-heart text-2xl"></i>
                    </div>
                    <h3 className="text-2xl font-bold">Core Values</h3>
                  </div>

                  <div className="grid grid-cols-1 gap-6">
                    {/* Innovation */}
                    <div className="bg-[#353849] p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-[#2A2D3E] rounded-lg">
                          <i className="fas fa-lightbulb text-[#8E9AEB]"></i>
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold text-[#8E9AEB] mb-2">Innovation First</h4>
                          <p className="text-gray-300">Constantly exploring new technologies and creative solutions to push the boundaries of what's possible in web development.</p>
                        </div>
                      </div>
                    </div>

                    {/* Quality */}
                    <div className="bg-[#353849] p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-[#2A2D3E] rounded-lg">
                          <i className="fas fa-gem text-[#8E9AEB]"></i>
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold text-[#8E9AEB] mb-2">Quality Driven</h4>
                          <p className="text-gray-300">Committed to delivering exceptional results with attention to detail and clean, efficient code.</p>
                        </div>
                      </div>
                    </div>

                    {/* Continuous Learning */}
                    <div className="bg-[#353849] p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-[#2A2D3E] rounded-lg">
                          <i className="fas fa-book text-[#8E9AEB]"></i>
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold text-[#8E9AEB] mb-2">Continuous Learning</h4>
                          <p className="text-gray-300">Passionate about staying current with industry trends and expanding my skill set.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Personal Interests */}
                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 bg-[#E5B075] rounded-lg flex items-center justify-center">
                      <i className="fas fa-star text-2xl"></i>
                    </div>
                    <h3 className="text-2xl font-bold">Personal Interests</h3>
                  </div>

                  <div className="bg-[#353849] p-8 rounded-xl space-y-8">
                    {/* Interest Categories */}
                    <div className="grid grid-cols-2 gap-6">
                      {/* Tech & Gaming */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <i className="fas fa-gamepad text-[#E5B075] text-xl"></i>
                          <h4 className="text-lg font-semibold">Tech & Gaming</h4>
                        </div>
                        <ul className="text-gray-300 space-y-2">
                          <li>• Freelancing</li>
                          <li>• Strategy Games</li>
                          <li>• Tech Reviews</li>
                        </ul>
                      </div>

                      {/* Creative Arts */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <i className="fas fa-palette text-[#E5B075] text-xl"></i>
                          <h4 className="text-lg font-semibold">Creative Arts</h4>
                        </div>
                        <ul className="text-gray-300 space-y-2">
                          <li>• Frontend Development</li>
                          <li>• UI Design</li>
                          <li>• Graphic Design</li>
                        </ul>
                      </div>
                    </div>

                    {/* Hobbies Showcase */}
                    <div className="pt-6 border-t border-gray-700">
                      <h4 className="text-lg font-semibold mb-4">Other Interests</h4>
                      <div className="flex flex-wrap gap-3">
                        <span className="px-4 py-2 bg-[#2A2D3E] rounded-full text-sm text-[#E5B075]">Reading</span>
                        <span className="px-4 py-2 bg-[#2A2D3E] rounded-full text-sm text-[#8E9AEB]">Music</span>
                        <span className="px-4 py-2 bg-[#2A2D3E] rounded-full text-sm text-[#E5B075]">Badminton</span>
                        <span className="px-4 py-2 bg-[#2A2D3E] rounded-full text-sm text-[#8E9AEB]">Watching Movies</span>
                        <span className="px-4 py-2 bg-[#2A2D3E] rounded-full text-sm text-[#E5B075]">Stay at Home</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="w-full py-32 relative z-10">
          <div className="max-w-[1920px] mx-auto px-4 md:px-32 lg:px-64">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-[#E5B075] rounded-full blur-[100px] opacity-20"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#8E9AEB] rounded-full blur-[100px] opacity-20"></div>
            
            <div className="relative bg-[#353849] rounded-3xl p-12 md:p-20 overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#E5B075] rounded-full blur-[100px] opacity-10"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#8E9AEB] rounded-full blur-[100px] opacity-10"></div>
              
              <div className="relative z-10 text-center max-w-3xl mx-auto space-y-8">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                  Want to Know
                  <span className="text-[#E5B075]"> More </span>
                  About Me?
                </h2>
                
                <p className="text-xl md:text-2xl text-gray-300">
                  Feel free to reach out! I'm always excited to connect, share experiences, 
                  and discuss potential collaborations.
                </p>
                
                <div className="flex flex-wrap gap-6 justify-center items-center mt-12">
                  <Link 
                    to="/contact" 
                    className="bg-[#E5B075] text-white px-8 py-4 rounded-xl hover:bg-[#d39a60] transition-all duration-300 transform hover:scale-105 flex items-center gap-3"
                  >
                    <span className="text-xl">Contact Me</span>
                    <i className="fas fa-arrow-right"></i>
                  </Link>
                  
                  <div className="flex items-center gap-6">
                    <a href="https://facebook.com/kitadrian31" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#E5B075] transition-colors">
                      <i className="fab fa-facebook text-2xl"></i>
                    </a>
                    <a href="mailto:kitadriand@gmail.com" className="text-white hover:text-[#E5B075] transition-colors">
                      <i className="fas fa-envelope text-2xl"></i>
                    </a>
                    <a href="https://github.com/flklr-dev" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#E5B075] transition-colors">
                      <i className="fab fa-github text-2xl"></i>
                    </a>
                    <a href="https://linkedin.com/in/kit-adrian-diocares-349a20338/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#E5B075] transition-colors">
                      <i className="fab fa-linkedin text-2xl"></i>
                    </a>
                  </div>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 text-center">
                  <div>
                    <div className="text-3xl font-bold text-[#E5B075]">3rd Year</div>
                    <div className="text-gray-400">BSIT Student</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[#8E9AEB]">20+</div>
                    <div className="text-gray-400">Projects</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[#E5B075]">5+</div>
                    <div className="text-gray-400">Certifications</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[#8E9AEB]">3+</div>
                    <div className="text-gray-400">Years Coding</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  );
};

export default AboutMe; 