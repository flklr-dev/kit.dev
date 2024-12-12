import React from 'react';
import { useParams, Link } from 'react-router-dom';

const PortfolioScreen = () => {
  const { id } = useParams();
  const projects = [
    {
      id: "online-voting",
      title: "Online Voting System",
      description: "A secure and efficient online voting platform built with modern web technologies.",
      image: "/images/voting-system1.png",
      tags: ["Laravel", "MySQL", "Website"],
      category: "Web Development",
      link: "https://voting-demo.com",
      github: "https://github.com/yourusername/voting-system"
    },
    {
      id: "cooking-app",
      title: "Collaborative Cooking App",
      description: "A social platform for sharing recipes and cooking experiences.",
      image: "/images/cooking-app.png",
      tags: ["React", "Node.js", "MongoDB"],
      category: "Full Stack",
      link: "https://cooking-app.com",
      github: "https://github.com/yourusername/cooking-app"
    },
    {
        id: "research-project",
        title: "Research Project",
        description: "Published research on AI's impact on IT students' programming skills at DOrSU.",
        image: "/images/ai-research.jpg",
        tags: ["Research", "AI", "Education"],
        category: "Research",
        link: "https://research-paper.com",
        github: "https://github.com/yourusername/research-project"
      },
      {
        id: "ecommerce-ui",
        title: "E-commerce Landing Page",
        description: "Modern and intuitive e-commerce landing page design focused on user experience.",
        image: "/images/ecommerce-ui.png",
        tags: ["React", "Tailwind", "UI/UX"],
        category: "Web Development",
        link: "https://ecommerce-ui.com",
        github: "https://github.com/yourusername/ecommerce-ui"
      }
    ];

  const blogPosts = [
    {
      id: "ai-future",
      title: "The Future of AI in Web Development",
      excerpt: "Exploring how artificial intelligence is reshaping the way we build websites and applications.",
      date: "October 31, 2024",
      readTime: "5 min read",
      category: "Technology",
      image: "/images/blog/ai-future.png",
      author: {
        name: "Kit Adrian",
        avatar: "/images/kit.jpg"
      }
    },
    {
      id: "ui-trends-2024",
      title: "UI Design Trends to Watch in 2024",
      excerpt: "Breaking down the most innovative and impactful UI design trends that are defining the digital landscape.",
      date: "December 11, 2024",
      readTime: "4 min read",
      category: "Design",
      image: "/images/blog/ui-trends.png",
      author: {
        name: "Kit Adrian",
        avatar: "/images/kit.jpg"
      }
    },
    {
      id: "coding-productivity",
      title: "Boosting Your Coding Productivity",
      excerpt: "Essential tips and tools that can significantly improve your coding efficiency and workflow.",
      date: "December 12, 2024",
      readTime: "6 min read",
      category: "Development",
      image: "/images/blog/productivity.png",
      author: {
        name: "Kit Adrian",
        avatar: "/images/kit.jpg"
      }
    }
  ];

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
                My <span className="text-[#E5B075]">Portfolio</span>
              </h1>
              <div className="h-1 w-20 bg-[#E5B075] mx-auto rounded-full"></div>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto mt-8">
                Showcasing my creative journey through various projects and designs.
              </p>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <Link 
                  to={`/portfolio/${project.id}`} 
                  key={index} 
                  className="group relative overflow-hidden rounded-xl bg-[#353849] hover:transform hover:scale-[1.02] transition-all duration-300"
                >
                  {/* Project Image */}
                  <div className="relative h-[300px] overflow-hidden">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2A2D3E] to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                        <p className="text-gray-300 mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag, tagIndex) => (
                            <span key={tagIndex} className="px-3 py-1 bg-[#2A2D3E] rounded-full text-sm">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center gap-4">
                          <a 
                            href={project.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-[#E5B075] hover:text-[#d39a60] transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <i className="fas fa-external-link-alt mr-2"></i>
                            Live Demo
                          </a>
                          <a 
                            href={project.github} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-[#8E9AEB] hover:text-[#7a84d3] transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <i className="fab fa-github mr-2"></i>
                            View Code
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Blog Section */}
      <section className="relative z-10 py-32">
        <div className="max-w-[1920px] mx-auto px-4 md:px-32 lg:px-64">
          {/* Blog Title */}
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold">
              Latest <span className="text-[#E5B075]">Insights</span>
            </h2>
            <div className="h-1 w-20 bg-[#E5B075] mx-auto rounded-full"></div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mt-8">
              Exploring ideas, sharing knowledge, and discussing the latest trends in technology and design.
            </p>
          </div>

          {/* Featured Blog Post */}
          <div className="mb-16">
            <Link 
              to={`/blog/${blogPosts[0].id}`}
              className="group block bg-[#353849] rounded-2xl overflow-hidden hover:transform hover:scale-[1.01] transition-all duration-300"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative h-[300px] md:h-full overflow-hidden">
                  <img 
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#2A2D3E] to-transparent opacity-50"></div>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <span className="text-[#E5B075] text-sm mb-4">{blogPosts[0].category}</span>
                  <h3 className="text-3xl font-bold mb-4 group-hover:text-[#E5B075] transition-colors">
                    {blogPosts[0].title}
                  </h3>
                  <p className="text-gray-300 mb-6">{blogPosts[0].excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <img 
                        src={blogPosts[0].author.avatar}
                        alt={blogPosts[0].author.name}
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <p className="text-sm font-medium">{blogPosts[0].author.name}</p>
                        <p className="text-sm text-gray-400">{blogPosts[0].date}</p>
                      </div>
                    </div>
                    <span className="text-sm text-gray-400">{blogPosts[0].readTime}</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <Link 
                to={`/blog/${post.id}`}
                key={index}
                className="group bg-[#353849] rounded-xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#353849] to-transparent opacity-50"></div>
                  <span className="absolute top-4 left-4 bg-[#2A2D3E] text-[#E5B075] px-3 py-1 rounded-full text-sm">
                    {post.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-[#E5B075] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <img 
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="w-8 h-8 rounded-full"
                      />
                      <span className="text-sm text-gray-400">{post.date}</span>
                    </div>
                    <span className="text-sm text-gray-400">{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* View All Posts Button */}
          <div className="text-center mt-12">
            <Link 
              to="/blog"
              className="inline-flex items-center gap-2 bg-[#353849] text-white px-8 py-4 rounded-xl hover:bg-[#2A2D3E] transition-all duration-300"
            >
              <span>View All Posts</span>
              <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* After the Blog Section, add the CTA Section */}
      <section className="relative z-10 py-32 bg-gradient-to-b from-[#2A2D3E] to-[#353849]">
        <div className="max-w-[1920px] mx-auto px-4 md:px-32 lg:px-64">
          {/* CTA Container */}
          <div className="relative bg-[#353849] rounded-3xl p-8 md:p-16 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute w-[300px] h-[300px] bg-[#E5B075] rounded-full blur-[100px] opacity-20 animate-pulse -top-20 -right-20"></div>
              <div className="absolute w-[250px] h-[250px] bg-[#8E9AEB] rounded-full blur-[100px] opacity-20 animate-pulse bottom-0 left-0"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center space-y-8">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Let's Create Something <span className="text-[#E5B075]">Amazing</span> Together
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Whether you're looking to build a new project, need technical expertise, or just want to connect, I'm here to help turn your ideas into reality.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-wrap justify-center gap-6 mt-12">
                <Link 
                  to="/contact" 
                  className="bg-[#E5B075] text-white px-8 py-4 rounded-xl hover:bg-[#d39a60] transition-all duration-300 flex items-center gap-3"
                >
                  <span>Get in Touch</span>
                  <i className="fas fa-arrow-right"></i>
                </Link>
                <Link 
                  to="/resume" 
                  className="bg-[#E5B075] text-white px-8 py-4 rounded-xl hover:bg-[#d39a60] transition-all duration-300"
                >
                  View Resume
                </Link>
              </div>

              {/* Quick Links */}
              <div className="flex justify-center gap-8 mt-12">
                <a 
                  href="https://github.com/yourusername" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#E5B075] transition-colors"
                >
                  <i className="fab fa-github text-2xl"></i>
                </a>
                <a 
                  href="https://linkedin.com/in/yourusername" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#E5B075] transition-colors"
                >
                  <i className="fab fa-linkedin text-2xl"></i>
                </a>
                <a 
                  href="mailto:your.email@example.com"
                  className="text-gray-400 hover:text-[#E5B075] transition-colors"
                >
                  <i className="fas fa-envelope text-2xl"></i>
                </a>
              </div>

              {/* Additional Info */}
              <div className="flex flex-wrap justify-center gap-8 mt-12 text-gray-400">
                <div className="flex items-center gap-2">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>Available for Remote Work</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fas fa-clock"></i>
                  <span>Quick Response Time</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fas fa-check-circle"></i>
                  <span>Open to Collaborations</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioScreen;