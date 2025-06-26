import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { useNavigate } from 'react-router-dom';
import kitImg from '../assets/kit.jpg';

const HomeScreen = () => {
  const navigate = useNavigate();

  // Navigation functions
  const handleLearnMore = () => {
    navigate('/about');
  };

  const handleContact = () => {
    navigate('/contact');
  };

  return (
    <div className="w-full min-h-screen bg-[#2A2D3E] text-white relative overflow-hidden px-4 md:px-8 lg:px-16">
      {/* Main Background Circles */}
      <div className="absolute -top-10 -right-10 ml-20 w-[20rem] h-[20rem] md:w-[25rem] md:h-[25rem] bg-[#8E9AEB] rounded-full opacity-20"></div>
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

      {/* Super Small Floating Circles */}
      <div className="absolute top-[100vh] left-1/2 w-4 h-4 bg-white rounded-full opacity-10"></div>
      <div className="absolute top-[140vh] right-1/2 w-3 h-3 bg-[#E5B075] rounded-full opacity-15"></div>
      <div className="absolute top-[180vh] left-1/3 w-2 h-2 bg-[#8E9AEB] rounded-full opacity-20"></div>
      <div className="absolute top-[220vh] right-1/4 w-4 h-4 bg-white rounded-full opacity-10"></div>
      <div className="absolute top-[260vh] left-1/4 w-3 h-3 bg-[#E5B075] rounded-full opacity-15"></div>

      {/* Medium Circles for Left Side of Main Content */}
      <div className="absolute top-[55vh] left-20 w-20 h-20 md:w-24 md:h-24 bg-[#E5B075] rounded-full opacity-10"></div>
      <div className="absolute top-[100vh] -left-5 w-16 h-16 md:w-20 md:h-20 bg-white rounded-full opacity-20"></div>
      <div className="absolute top-[75vh] left-10 w-24 h-24 md:w-28 md:h-28 bg-[#8E9AEB] rounded-full opacity-15"></div>

      {/* Super Small Accent Circles */}
      <div className="absolute top-[35vh] left-32 w-3 h-3 bg-white rounded-full opacity-20"></div>
      <div className="absolute top-[55vh] left-16 w-4 h-4 bg-[#8E9AEB] rounded-full opacity-15"></div>
      <div className="absolute top-[70vh] left-28 w-2 h-2 bg-[#E5B075] rounded-full opacity-20"></div>

      {/* Main Content - Hero Section Redesigned */}
      <main className="w-full h-screen flex flex-col md:flex-row items-center justify-center mt-14 -mb-10 gap-10 md:gap-0">
        {/* Left: Text Content */}
        <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-6 md:space-y-8 lg:space-y-10 px-4 md:px-0">
          <p className="text-3xl md:text-4xl lg:text-5xl text-white">Hi! It&apos;s me,</p>
          <h1 className="text-6xl md:text-7xl lg:text-9xl font-bold">
            <span className="text-[#E5B075]">Kit Adrian</span>
          </h1>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#8E9AEB]">
            <TypeAnimation
              sequence={['Full Stack Developer', 2000, 'UI/UX Designer', 2000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-center md:justify-start mt-8">
            <button 
              onClick={handleLearnMore}
              className="bg-[#E5B075] text-white px-10 py-3 rounded-md hover:bg-[#d39a60] transition-all duration-300 text-lg md:text-xl transform hover:scale-[1.03] shadow-lg"
            >
              Learn More
            </button>
          </div>
        </div>
        {/* Right: Profile Image */}
        <div className="flex-1 flex justify-center items-center">
          <div className="relative group">
            <img
              src={kitImg}
              alt="Kit Adrian Profile"
              className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-8 border-[#353849] shadow-2xl transition-transform duration-300 group-hover:scale-105 bg-[#353849]"
            />
            {/* Decorative ring */}
            <div className="absolute -inset-2 rounded-full border-4 border-[#E5B075] opacity-40 animate-pulse"></div>
          </div>
        </div>
      </main>

      {/* Skills Section */}
      <section className="w-full py-20 relative z-10">
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
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="w-full py-20 relative z-10">
        <div className="max-w-[1920px] mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Featured <span className="text-[#E5B075]">Projects</span>
            </h2>
            <div className="h-1 w-20 bg-[#E5B075] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-8">
            {/* Online Voting System */}
            <div className="bg-[#353849] rounded-xl overflow-hidden group hover:transform hover:scale-[1.02] transition-all duration-300">
              <div className="h-48 relative overflow-hidden">
                <img 
                  src="/images/voting-system1.png" 
                  alt="Online Voting System"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#353849] to-transparent opacity-50"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-[#E5B075]">Online Voting System</h3>
                <p className="text-gray-300 mb-6">A secure and efficient online voting platform built with modern web technologies.</p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-[#2A2D3E] rounded-full text-sm">Laravel</span>
                  <span className="px-3 py-1 bg-[#2A2D3E] rounded-full text-sm">MySQL</span>
                  <span className="px-3 py-1 bg-[#2A2D3E] rounded-full text-sm">Website</span>
                </div>
              </div>
            </div>

            {/* Collaborative Cooking Application */}
            <div className="bg-[#353849] rounded-xl overflow-hidden group hover:transform hover:scale-[1.02] transition-all duration-300">
              <div className="h-48 relative overflow-hidden">
                <img 
                  src="/images/cooking-app1.png" 
                  alt="Collaborative Cooking Application"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#353849] to-transparent opacity-50"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-[#8E9AEB]">Collaborative Cooking Application</h3>
                <p className="text-gray-300 mb-6">A real-time collaborative platform for sharing recipes and cooking experiences.</p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-[#2A2D3E] rounded-full text-sm">React.js</span>
                  <span className="px-3 py-1 bg-[#2A2D3E] rounded-full text-sm">Vite</span>
                  <span className="px-3 py-1 bg-[#2A2D3E] rounded-full text-sm">Node.js</span>
                  <span className="px-3 py-1 bg-[#2A2D3E] rounded-full text-sm">MongoDB</span>
                </div>
              </div>
            </div>

            {/* Research Project */}
            <div className="bg-[#353849] rounded-xl overflow-hidden group hover:transform hover:scale-[1.02] transition-all duration-300">
              <div className="h-48 relative overflow-hidden">
                <img 
                  src="/images/ai-research.jpg" 
                  alt="AI Impact Research"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#353849] to-transparent opacity-50"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-[#E5B075]">AI Impact Research</h3>
                <p className="text-gray-300 mb-6">Published research on AI's impact on IT students' programming skills at DOrSU.</p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-[#2A2D3E] rounded-full text-sm">Research</span>
                  <span className="px-3 py-1 bg-[#2A2D3E] rounded-full text-sm">AI</span>
                  <span className="px-3 py-1 bg-[#2A2D3E] rounded-full text-sm">Education</span>
                </div>
              </div>
            </div>

            {/* E-commerce UI/UX */}
            <div className="bg-[#353849] rounded-xl overflow-hidden group hover:transform hover:scale-[1.02] transition-all duration-300">
              <div className="h-48 relative overflow-hidden">
                <img 
                  src="/images/ecommerce-ui.png" 
                  alt="E-commerce Landing Page"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#353849] to-transparent opacity-50"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-[#8E9AEB]">E-commerce Landing Page</h3>
                <p className="text-gray-300 mb-6">Modern and intuitive e-commerce landing page design focused on user experience.</p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-[#2A2D3E] rounded-full text-sm">Figma</span>
                  <span className="px-3 py-1 bg-[#2A2D3E] rounded-full text-sm">UI/UX</span>
                  <span className="px-3 py-1 bg-[#2A2D3E] rounded-full text-sm">Design</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="w-full py-32 relative z-10">
        <div className="max-w-[1920px] mx-auto">
          {/* Background Elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-[#E5B075] rounded-full blur-[100px] opacity-20"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#8E9AEB] rounded-full blur-[100px] opacity-20"></div>
          
          <div className="relative bg-[#353849] rounded-3xl p-12 md:p-20 overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#E5B075] rounded-full blur-[100px] opacity-10"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#8E9AEB] rounded-full blur-[100px] opacity-10"></div>
            
            <div className="relative z-10 text-center max-w-3xl mx-auto space-y-8">
              <div className="text-center space-y-4">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                  Let's Create Something
                  <span className="text-[#E5B075]"> Amazing </span>
                  Together
                </h2>
                <div className="h-1 w-20 bg-[#E5B075] mx-auto rounded-full"></div>
              </div>
              
              <p className="text-xl md:text-2xl text-gray-300">
                Have a project in mind? I'm always open to discussing new projects 
                and creative ideas.
              </p>
              
              <div className="flex flex-wrap gap-6 justify-center items-center mt-12">
                <button 
                  onClick={handleContact}
                  className="bg-[#E5B075] text-white px-8 py-4 rounded-xl hover:bg-[#d39a60] transition-all duration-300 transform hover:scale-[1.03] flex items-center gap-3"
                >
                  <span className="text-xl">Let's Talk</span>
                  <i className="fas fa-arrow-right"></i>
                </button>
                
                <div className="flex items-center gap-6">
                  <a href="mailto:example@email.com" className="text-white hover:text-[#E5B075] transition-colors">
                    <i className="fas fa-envelope text-2xl"></i>
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#E5B075] transition-colors">
                    <i className="fab fa-linkedin text-2xl"></i>
                  </a>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#E5B075] transition-colors">
                    <i className="fab fa-github text-2xl"></i>
                  </a>
                </div>
              </div>

              {/* Optional: Add some stats or social proof */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 text-center">
                <div>
                  <div className="text-3xl font-bold text-[#E5B075]">3</div>
                  <div className="text-gray-400">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#8E9AEB]">10+</div>
                  <div className="text-gray-400">Projects Completed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#E5B075]">5+</div>
                  <div className="text-gray-400">Happy Clients</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#8E9AEB]">98.7%</div>
                  <div className="text-gray-400">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeScreen;