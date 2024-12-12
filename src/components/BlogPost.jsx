import React from 'react';
import { useParams, Link } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams();

  // This would typically come from an API or database
  const posts = {
    "ui-trends-2024": {
      id: "ui-trends-2024",
      title: "UI Design Trends to Watch in 2024",
      date: "December 11, 2024",
      readTime: "4 min read",
      category: "Design",
      image: "/images/blog/ui-trends.png",
      author: {
        name: "Kit Adrian",
        avatar: "/images/kit.jpg",
        role: "UI/UX Designer"
      },
      content: {
        introduction: `As we step into 2024, the realm of user interface (UI) design is evolving at an unprecedented pace. With technological advancements and changing user expectations, designers must stay ahead of the curve to create engaging and effective digital experiences. Here are the key UI design trends to watch this year.`,
        sections: [
          {
            title: "1. Interactive 3D Objects",
            content: `One of the most exciting trends for 2024 is the increased use of interactive 3D objects in web design. Unlike previous years where 3D elements were often static, this year will see them integrated more dynamically into user experiences. These objects can enhance storytelling on websites, making interactions more immersive and engaging for users (UX Studio, 2024).`
          },
          {
            title: "2. Feature Showcasing on Landing Pages",
            content: `Feature showcasing on landing pages is becoming a vital strategy for capturing user attention immediately. By highlighting key features with compelling visuals and animations, designers can effectively communicate the value of a product or service right from the first interaction. This approach not only informs users but also guides them through their journey on the site (UX Studio, 2024).`
          },
          {
            title: "3. Augmented Reality (AR) and Virtual Reality (VR)",
            content: `The integration of AR and VR technologies is set to revolutionize UI design in 2024. These technologies allow designers to create immersive experiences that blend the digital and physical worlds. As tools like Unity and Blender become more accessible, expect to see a rise in applications that utilize AR and VR to enhance user engagement (Shakuro, 2023).`
          },
          {
            title: "4. System Theme Adaptability",
            content: `With users increasingly favoring personalized experiences, system theme adaptability is gaining traction. Websites that can automatically adjust their appearance based on a user's system theme—whether light or dark—provide a seamless experience across devices. This feature not only enhances usability but also aligns with users' preferences for visual comfort (UX Studio, 2024).`
          },
          {
            title: "5. Bento Grids",
            content: `Bento grids are emerging as a popular layout choice for their flexibility and responsiveness. This grid system allows designers to create complex layouts that are visually appealing and user-friendly across various devices. In 2024, expect to see more websites adopting bento grids to improve content organization and accessibility (UX Studio, 2024).`
          },
          {
            title: "6. Skeuomorphism's Comeback",
            content: `After years of flat design dominance, skeuomorphism is making a comeback in a modernized form. This design style incorporates realistic representations of real-world objects into digital interfaces, adding depth and familiarity to user experiences. The blend of skeuomorphism with flat design principles will create visually rich environments that enhance usability (Shakuro, 2023).`
          },
          {
            title: "7. Highly Detailed Illustrations",
            content: `The use of highly detailed illustrations is set to elevate visual storytelling in UI design. These intricate visuals serve not only as decoration but also as a means of conveying brand personality and information effectively. As brands seek unique ways to stand out, expect detailed illustrations to play a pivotal role in creating memorable user experiences (UX Studio, 2024).`
          },
          {
            title: "Conclusion",
            content: `As we navigate through 2024, these UI design trends will significantly shape how users interact with digital platforms. From interactive elements to personalized experiences, designers must embrace these changes to create engaging and effective interfaces. Staying updated with these trends will not only enhance your design skills but also ensure that your projects resonate with users in an increasingly competitive landscape.`
          }
        ],
        references: [
          {
            title: "UX Studio",
            year: "2024",
            authors: "UX Studio Team",
            link: "https://www.uxstudioteam.com/ux-blog/ui-trends-2019",
            citation: "Top 10 UI Trends of 2024"
          },
          {
            title: "Shakuro",
            year: "2023",
            authors: "Shakuro Design Team",
            link: "https://shakuro.com/blog/ui-ux-design-trends-for-2024",
            citation: "Top 11 UI/UX Design Trends for 2024"
          },
          {
            title: "MuseMind Agency",
            year: "2023",
            authors: "MuseMind Agency Team",
            link: "https://musemind.agency/blog/ui-design-trends",
            citation: "UI Design Trends in 2025: Find Your Next Big Inspiration"
          }
        ]
      }
    },
    "ai-future": {
      id: "ai-future",
      title: "The Future of AI in Web Development",
      date: "October 31, 2024",
      readTime: "5 min read",
      category: "Technology",
      image: "/images/blog/ai-future.png",
      author: {
        name: "Kit Adrian",
        avatar: "/images/kit.jpg",
        role: "Full Stack Developer"
      },
      content: {
        introduction: `Artificial Intelligence (AI) is rapidly transforming the landscape of web development, introducing innovative solutions that enhance efficiency, personalization, and user experience. As we move forward, the integration of AI into web development processes will not only streamline workflows but also redefine how developers and users interact with websites.`,
        sections: [
          {
            title: "Automation: Revolutionizing Development Processes",
            content: `One of the most significant impacts of AI in web development is automation. AI-driven tools can automate repetitive tasks such as code generation, testing, and content creation. For instance, platforms like GitHub Copilot can generate code snippets based on developer input, dramatically reducing the time required to write code from scratch (DiviFlash, 2024). This automation allows developers to focus on more complex and creative aspects of their projects, thereby increasing overall productivity.

            Moreover, automated testing ensures that applications are free from glitches and perform optimally. By utilizing AI to conduct thorough testing, developers can identify and resolve issues faster than traditional methods would allow (Classic Informatics, 2023). This capability not only accelerates the development cycle but also enhances the quality of the final product.`
          },
          {
            title: "Personalization: Enhancing User Experience",
            content: `AI's ability to analyze user data enables a level of personalization that was previously unattainable. By observing user behavior and preferences, AI algorithms can tailor content and interfaces to meet individual needs. For example, e-commerce websites often use AI to provide personalized product recommendations based on browsing history and purchasing patterns (CareerFoundry, 2023). This personalization not only improves user engagement but also increases conversion rates.

            As AI continues to evolve, we can expect even more sophisticated personalization techniques. Future websites may intuitively learn about user preferences and adjust their offerings accordingly, creating a seamless browsing experience akin to interacting with a knowledgeable assistant (Unicorn Platform, 2024).`
          },
          {
            title: "Intelligent Design Assistance",
            content: `AI is also making strides in design assistance. Tools powered by AI can analyze design trends and suggest layout options, color schemes, and typography that enhance visual appeal (CMSWire.com, 2024). This guidance allows developers to create aesthetically pleasing websites more efficiently. Furthermore, AI can optimize images for better performance and accessibility, ensuring that all users have a smooth experience regardless of their device or capabilities.`
          },
          {
            title: "Data-Driven Decision Making",
            content: `The integration of AI facilitates data-driven decision-making in web development. By analyzing large datasets regarding user interactions and traffic patterns, developers can gain valuable insights into how to optimize their websites for better performance (Classic Informatics, 2023). This capability enables them to make informed decisions that enhance user satisfaction and drive business success.`
          },
          {
            title: "Security Enhancements",
            content: `AI also plays a crucial role in improving website security. By continuously monitoring for threats and anomalies, AI systems can identify potential vulnerabilities before they are exploited (DiviFlash, 2024). This proactive approach helps protect sensitive user data and maintains trust between users and businesses. As cyber threats become increasingly sophisticated, leveraging AI for security will be essential for all web applications.`
          },
          {
            title: "Conclusion: A Collaborative Future",
            content: `The future of web development with AI is bright. Rather than replacing web developers, AI tools will serve as collaborative partners that enhance human creativity and efficiency (Unicorn Platform, 2024). Developers who adapt to these changes by learning new skills related to AI programming will find themselves at a significant advantage in the evolving job market. As we embrace these advancements, the possibilities for creating smarter, more engaging websites are limitless.

            In summary, the integration of AI into web development will lead to more efficient workflows, personalized user experiences, enhanced design capabilities, data-driven strategies, and improved security measures. As we look ahead, it is clear that embracing AI will be crucial for developers aiming to stay relevant in this dynamic field.`
          }
        ],
        references: [
          {
            title: "DiviFlash",
            year: "2024",
            authors: "DiviFlash Team",
            link: "https://diviflash.com/will-ai-replace-web-developers/",
            citation: "Will AI replace web developers: The dark truth revealed"
          },
          {
            title: "Classic Informatics",
            year: "2023",
            authors: "Classic Informatics Team",
            link: "https://www.classicinformatics.com/blog/the-future-of-web-development",
            citation: "The future of web development: The impact of artificial intelligence"
          },
          {
            title: "CareerFoundry",
            year: "2023",
            authors: "CareerFoundry Team",
            link: "https://careerfoundry.com/en/blog/web-development/ai-and-web-development/",
            citation: "AI and web development: A coder's perspective for 2024"
          },
          {
            title: "Unicorn Platform",
            year: "2024",
            authors: "Unicorn Platform Team",
            link: "https://unicornplatform.com/blog/the-future-of-ai-and-web-development/",
            citation: "The future of web development and AI"
          },
          {
            title: "CMSWire",
            year: "2024",
            authors: "CMSWire Editorial Team",
            link: "https://www.cmswire.com/digital-experience/can-traditional-web-development-survive-ai/",
            citation: "AI and the web developer's future"
          }
        ]
      }
    },
    "coding-productivity": {
      id: "coding-productivity",
      title: "Boosting Your Code Productivity: Strategies for 2024",
      date: "December 12, 2024",
      readTime: "6 min read",
      category: "Development",
      image: "/images/blog/productivity.png",
      author: {
        name: "Kit Adrian",
        avatar: "/images/kit.jpg",
        role: "Full Stack Developer"
      },
      content: {
        introduction: `In the fast-paced world of software development, maintaining high productivity levels is essential for delivering quality code on time. As we move into 2024, developers are increasingly looking for effective strategies to enhance their productivity. Here are some proven techniques and tools that can help you code more efficiently and effectively.`,
        sections: [
          {
            title: "1. Master Your Development Environment",
            content: `Understanding your development environment is crucial for maximizing productivity. Familiarize yourself with the features and shortcuts of your Integrated Development Environment (IDE) or text editor. For instance, knowing how to quickly navigate files, refactor code, or utilize built-in tools can save you significant time (Actitime, 2024). Spend some time learning about the libraries and frameworks relevant to your projects; this knowledge will enable you to avoid reinventing the wheel and streamline your coding process.`
          },
          {
            title: "2. Implement the Pomodoro Technique",
            content: `The Pomodoro Technique is a time management strategy that encourages focused work sessions followed by short breaks. This technique involves working in intervals of 25 minutes (called "Pomodoros") followed by a 5-minute break (Evergrowing Dev, 2024). This method helps maintain concentration while preventing burnout. During breaks, consider stepping away from your desk or engaging in light physical activity to recharge your mind.`
          },
          {
            title: "3. Use Kanban Boards for Task Management",
            content: `Visualizing your workflow can significantly enhance productivity. Kanban boards allow developers to manage tasks visually, making it easier to prioritize work and identify bottlenecks (Evergrowing Dev, 2024). Tools like Trello or Jira can help you create a Kanban board that suits your project needs. By breaking down tasks into smaller components and tracking their progress, you can maintain clarity and focus throughout the development process.`
          },
          {
            title: "4. Keep Your Code Clean and Concise",
            content: `Writing clean and concise code is essential for maintaining productivity over time. Shorter code blocks are easier to read, debug, and modify (Actitime, 2024). Adopt naming conventions that enhance readability and make sure to document your code adequately. This practice not only aids in personal understanding but also facilitates collaboration with other developers.`
          },
          {
            title: "5. Leverage Keyboard Shortcuts",
            content: `Learning keyboard shortcuts for your IDE can drastically reduce the time spent on repetitive tasks. For example, Visual Studio Code offers numerous shortcuts that streamline navigation and editing processes (Nearsure, 2024). Familiarize yourself with these shortcuts to minimize reliance on the mouse and improve your coding speed.`
          },
          {
            title: "6. Embrace Automation",
            content: `Automating repetitive tasks can free up valuable time for more complex coding challenges. Consider using tools like GitHub Copilot for code suggestions or employing scripts to automate routine processes (Actitime, 2024). Additionally, integrating Continuous Integration/Continuous Deployment (CI/CD) practices can streamline testing and deployment phases.`
          },
          {
            title: "7. Break Tasks into Manageable Chunks",
            content: `Large tasks can be overwhelming and lead to procrastination. Break down complex projects into smaller, manageable subtasks that can be completed in a reasonable timeframe (LinkedIn, 2023). This approach not only makes tasks feel less daunting but also provides a sense of accomplishment as you check items off your list.`
          },
          {
            title: "8. Focus on Communication",
            content: `Effective communication within development teams is vital for maintaining productivity. Implementing techniques such as Ho-Ren-So—which stands for Hokoku (reporting), Renraku (informing), and Sodan (consulting)—can improve team dynamics and reduce misunderstandings (Evergrowing Dev, 2024). Regular stand-ups or status updates help keep everyone aligned on project goals.`
          },
          {
            title: "9. Prioritize Self-Care",
            content: `Taking care of yourself physically and mentally is crucial for sustained productivity. Ensure you get enough sleep, maintain a balanced diet, and incorporate regular exercise into your routine (Actitime, 2024). Additionally, consider mindfulness practices such as meditation to enhance focus before diving into coding sessions.`
          },
          {
            title: "Conclusion",
            content: `Boosting your coding productivity in 2024 requires a combination of effective strategies and tools tailored to your workflow. By mastering your development environment, implementing time management techniques like the Pomodoro Technique, utilizing Kanban boards for task management, keeping code clean, leveraging automation, and prioritizing self-care, you can significantly enhance your efficiency as a developer. Embrace these strategies to not only improve your productivity but also enjoy the coding process more fully.`
          }
        ],
        references: [
          {
            title: "Actitime",
            year: "2024",
            authors: "Actitime Team",
            link: "https://www.actitime.com/developers-time-tracking/how-developers-increase-productivity",
            citation: "How to improve developer productivity in 11 easy steps"
          },
          {
            title: "Evergrowing Dev",
            year: "2024",
            authors: "Evergrowing Dev Team",
            link: "https://www.evergrowingdev.com/p/15-japanese-techniques-for-developers",
            citation: "15 Japanese techniques for developers to boost your productivity"
          },
          {
            title: "LinkedIn",
            year: "2023",
            authors: "LinkedIn Professional Community",
            link: "https://www.linkedin.com/advice/3/how-do-you-increase-programming-productivity-skills-programming",
            citation: "How do you increase programming productivity?"
          },
          {
            title: "Nearsure",
            year: "2024",
            authors: "Nearsure Team",
            link: "https://www.nearsure.com/blog/visual-studio-code-tips-and-tricks-to-boost-your-productivity",
            citation: "Visual Studio Code: Tips and tricks to boost your productivity"
          }
        ]
      }
    }
  };

  const post = posts[id];

  if (!post) return <div>Post not found</div>;

  return (
    <div className="w-full min-h-screen bg-[#2A2D3E] text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[600px] h-[600px] bg-[#E5B075] rounded-full blur-[150px] opacity-20 animate-pulse -top-40 -right-40"></div>
        <div className="absolute w-[500px] h-[500px] bg-[#8E9AEB] rounded-full blur-[150px] opacity-20 animate-pulse bottom-0 left-0"></div>
      </div>

      {/* Main Content */}
      <main className="relative z-10 pt-32 pb-20">
        <article className="max-w-[1920px] mx-auto px-4 md:px-32 lg:px-64">
          {/* Header */}
          <header className="mb-16">
            <div className="flex items-center gap-2 text-[#E5B075] mb-6">
              <Link to="/portfolio" className="hover:text-[#d39a60] transition-colors">
                <i className="fas fa-arrow-left mr-2"></i>
                Back to Blog
              </Link>
              <span className="text-gray-500">|</span>
              <span>{post.category}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
              {post.title}
            </h1>

            {/* Author Info */}
            <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-4">
                <img 
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-medium">{post.author.name}</p>
                  <p className="text-sm text-gray-400">{post.author.role}</p>
                </div>
              </div>
              <div className="flex items-center gap-6 text-gray-400">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
            </div>

            {/* Featured Image */}
            <div className="rounded-2xl overflow-hidden mb-12">
              <img 
                src={post.image}
                alt={post.title}
                className="w-full h-[400px] object-cover"
              />
            </div>
          </header>

          {/* Content */}
          <div className="prose prose-lg prose-invert max-w-none">
            {/* Introduction */}
            <p className="text-xl leading-relaxed mb-12 text-gray-300">
              {post.content.introduction}
            </p>

            {/* Sections */}
            {post.content.sections.map((section, index) => (
              <section key={index} className="mb-12">
                <h2 className="text-3xl font-bold text-[#E5B075] mb-6">
                  {section.title}
                </h2>
                <div className="text-gray-300 space-y-4">
                  {section.content.split('\n\n').map((paragraph, pIndex) => (
                    <p key={pIndex}>{paragraph.trim()}</p>
                  ))}
                </div>
              </section>
            ))}

            {/* References */}
            <section className="mt-16 pt-8 border-t border-gray-700">
              <h2 className="text-2xl font-bold mb-6">References</h2>
              <ul className="space-y-6 text-gray-300">
                {post.content.references.map((ref, index) => (
                  <li key={index} className="flex flex-col space-y-1">
                    <div className="flex items-start">
                      <span className="mr-2">{index + 1}.</span>
                      <div>
                        <span className="font-medium">{ref.authors}</span>
                        <span className="text-gray-400"> ({ref.year}). </span>
                        <span className="italic">{ref.citation}. </span>
                        <a 
                          href={ref.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#E5B075] hover:text-[#d39a60] transition-colors break-all"
                        >
                          {ref.link}
                        </a>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Share Section */}
          <div className="mt-16 flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <span className="text-gray-400">Share this article:</span>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-[#E5B075] transition-colors">
                  <i className="fab fa-twitter text-xl"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-[#E5B075] transition-colors">
                  <i className="fab fa-linkedin text-xl"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-[#E5B075] transition-colors">
                  <i className="fab fa-facebook text-xl"></i>
                </a>
              </div>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
};

export default BlogPost; 