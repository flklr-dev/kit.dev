import React from 'react';

const ContactScreen = () => {
  return (
    <div className="w-full min-h-screen bg-[#2A2D3E] text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-[#E5B075] rounded-full blur-[150px] opacity-20 animate-pulse -top-20 -right-20"></div>
        <div className="absolute w-[400px] h-[400px] bg-[#8E9AEB] rounded-full blur-[150px] opacity-20 animate-pulse bottom-0 left-0"></div>
        
        {/* Geometric Shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 border-2 border-[#E5B075] opacity-20 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 border-2 border-[#8E9AEB] opacity-20 rounded-full animate-bounce-slow"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 border-2 border-[#E5B075] opacity-20 animate-pulse"></div>
      </div>

      {/* Main Content */}
      <main className="relative z-10 pt-32">
        <div className="max-w-[1920px] mx-auto px-4 md:px-32 lg:px-64">
          <div className="space-y-12">
            {/* Title Section */}
            <div className="text-center space-y-4">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold">
                Let's <span className="text-[#E5B075]">Connect</span>
              </h1>
              <div className="h-1 w-20 bg-[#E5B075] mx-auto rounded-full"></div>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto mt-8">
                Have a question or want to work together? I'd love to hear from you. 
                Drop me a message below or connect through social media.
              </p>
            </div>

            {/* Contact Form Card */}
            <div className="grid md:grid-cols-3 gap-8">
              {/* Contact Form */}
              <div className="md:col-span-2">
                <div className="bg-[#353849]/50 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl border border-white/5">
                  <form className="space-y-8">
                    {/* Name Input */}
                    <div className="group relative">
                      <input 
                        type="text" 
                        required
                        className="w-full bg-[#2A2D3E] rounded-xl px-6 py-4 outline-none border-2 border-transparent focus:border-[#E5B075] transition-all duration-300 peer"
                        placeholder=" "
                      />
                      <label className="absolute text-gray-400 left-6 top-4 peer-focus:text-[#E5B075] peer-focus:text-sm peer-focus:-top-3 peer-focus:left-4 peer-focus:bg-[#353849] peer-focus:px-2 transition-all duration-300 peer-[:not(:placeholder-shown)]:text-sm peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:left-4 peer-[:not(:placeholder-shown)]:bg-[#353849] peer-[:not(:placeholder-shown)]:px-2">
                        Your Name
                      </label>
                    </div>

                    {/* Email Input */}
                    <div className="group relative">
                      <input 
                        type="email" 
                        required
                        className="w-full bg-[#2A2D3E] rounded-xl px-6 py-4 outline-none border-2 border-transparent focus:border-[#E5B075] transition-all duration-300 peer"
                        placeholder=" "
                      />
                      <label className="absolute text-gray-400 left-6 top-4 peer-focus:text-[#E5B075] peer-focus:text-sm peer-focus:-top-3 peer-focus:left-4 peer-focus:bg-[#353849] peer-focus:px-2 transition-all duration-300 peer-[:not(:placeholder-shown)]:text-sm peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:left-4 peer-[:not(:placeholder-shown)]:bg-[#353849] peer-[:not(:placeholder-shown)]:px-2">
                        Your Email
                      </label>
                    </div>

                    {/* Message Input */}
                    <div className="group relative">
                      <textarea 
                        required
                        rows="6"
                        className="w-full bg-[#2A2D3E] rounded-xl px-6 py-4 outline-none border-2 border-transparent focus:border-[#E5B075] transition-all duration-300 resize-none peer"
                        placeholder=" "
                      ></textarea>
                      <label className="absolute text-gray-400 left-6 top-4 peer-focus:text-[#E5B075] peer-focus:text-sm peer-focus:-top-3 peer-focus:left-4 peer-focus:bg-[#353849] peer-focus:px-2 transition-all duration-300 peer-[:not(:placeholder-shown)]:text-sm peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:left-4 peer-[:not(:placeholder-shown)]:bg-[#353849] peer-[:not(:placeholder-shown)]:px-2">
                        Your Message
                      </label>
                    </div>

                    {/* Submit Button */}
                    <button 
                      type="submit"
                      className="w-full bg-[#E5B075] text-white py-4 rounded-xl hover:bg-[#d39a60] transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 group"
                    >
                      <span className="text-xl">Send Message</span>
                      <i className="fas fa-paper-plane group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"></i>
                    </button>
                  </form>
                </div>
              </div>

            {/* Contact Info & Social Links */}
            <div className="space-y-8">
            {/* Contact Information */}
            <div className="bg-[#353849]/50 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/5">
                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                <div className="space-y-6">
                <a href="mailto:kitadriand@gmail.com<" className="flex items-center gap-4 text-gray-300 hover:text-[#E5B075] transition-colors">
                    <div className="w-12 h-12 bg-[#2A2D3E] rounded-lg flex items-center justify-center">
                    <i className="fas fa-envelope text-[#E5B075]"></i>
                    </div>
                    <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm">kitadriand@gmail.com</p>
                    </div>
                </a>
                
                <a href="tel:+639663560283" className="flex items-center gap-4 text-gray-300 hover:text-[#E5B075] transition-colors">
                    <div className="w-12 h-12 bg-[#2A2D3E] rounded-lg flex items-center justify-center">
                    <i className="fas fa-phone text-[#E5B075]"></i>
                    </div>
                    <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-sm">+63 966 356 0283</p>
                    </div>
                </a>
                </div>
            </div>

            {/* Social Media Links */}
            <div className="bg-[#353849]/50 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/5">
                <h3 className="text-2xl font-bold mb-6">Follow Me</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a href="https://github.com/flklr-dev" target="_blank" rel="noopener noreferrer" 
                    className="flex items-center gap-3 p-4 bg-[#2A2D3E] rounded-xl text-white hover:text-[#E5B075] transition-all duration-300 hover:scale-105 whitespace-nowrap">
                    <i className="fab fa-github text-2xl"></i>
                    <span>GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/kit-adrian-diocares-349a20338/" target="_blank" rel="noopener noreferrer" 
                    className="flex items-center gap-3 p-4 bg-[#2A2D3E] rounded-xl text-white hover:text-[#E5B075] transition-all duration-300 hover:scale-105 whitespace-nowrap">
                    <i className="fab fa-linkedin text-2xl"></i>
                    <span>Ll</span>
                </a>
                <a href="https://www.facebook.com/kitadriandiocares31" target="_blank" rel="noopener noreferrer" 
                    className="flex items-center gap-3 p-4 bg-[#2A2D3E] rounded-xl text-white hover:text-[#E5B075] transition-all duration-300 hover:scale-105 whitespace-nowrap">
                    <i className="fab fa-facebook text-2xl"></i>
                    <span>FB</span>
                </a>
                <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" 
                    className="flex items-center gap-3 p-4 bg-[#2A2D3E] rounded-xl text-white hover:text-[#E5B075] transition-all duration-300 hover:scale-105 whitespace-nowrap">
                    <i className="fab fa-instagram text-2xl"></i>
                    <span>IG</span>
                </a>
                </div>
            </div>
            </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactScreen;