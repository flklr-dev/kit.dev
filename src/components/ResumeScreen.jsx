import React from 'react';
import jsPDF from 'jspdf';

const ResumeScreen = () => {
  // Updated PDF generation with all content
  const handleDownload = () => {
    const doc = new jsPDF();
    
    // Set font styles
    doc.setFont('helvetica');
    
    // Header
    doc.setFontSize(24);
    doc.text('Kit Adrian', 105, 20, { align: 'center' });
    
    // Contact Info
    doc.setFontSize(10);
    doc.text('Davao Oriental, Philippines | +63 966 356 0283', 105, 30, { align: 'center' });
    doc.text('kitadriand@gmail.com | github.com/flklr-dev', 105, 35, { align: 'center' });
    doc.text('linkedin.com/in/kitadrian', 105, 40, { align: 'center' });
    
    // Sections helper function
    const addSection = (title, y) => {
      doc.setFontSize(14);
      doc.setFont('helvetica', 'bold');
      doc.text(title, 20, y);
      doc.line(20, y + 1, 190, y + 1);
      return y + 10;
    };

    // Education
    let y = addSection('EDUCATION', 50);
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('Davao Oriental State University', 20, y);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.text('Bachelor of Science in Information Technology', 20, y + 5);
    doc.text('Major in Mobile Systems Development | 2022 - Present', 20, y + 10);
    doc.text('• Dean\'s Lister for 2 semesters', 25, y + 15);
    doc.text('• Lead Developer for Most Web Development Projects', 25, y + 20);

    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('Manuel S. Nasser Sr. National High School', 20, y + 30);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.text('Senior High School - GAS | 2016 - 2022', 20, y + 35);
    doc.text('• With Honors', 25, y + 40);
    doc.text('• Best in Research', 25, y + 45);
    doc.text('• ICT Club Member', 25, y + 50);

    // Experience
    y = addSection('PROFESSIONAL EXPERIENCE', y + 60);
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('Freelance Web Developer', 20, y);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.text('Upwork & Fiverr | 2023 - Present', 20, y + 5);
    doc.text('• Actively seeking and working on web development projects', 25, y + 10);
    doc.text('• Building portfolio through various freelance platforms', 25, y + 15);
    doc.text('• Specializing in React.js and Next.js development', 25, y + 20);
    doc.text('• Creating responsive and modern web applications', 25, y + 25);

    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('Web Development Projects', 20, y + 35);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.text('Academic and Personal Projects | 2022 - 2023', 20, y + 40);
    doc.text('• Developed multiple web applications for university coursework', 25, y + 45);
    doc.text('• Created personal projects to enhance programming skills', 25, y + 50);
    doc.text('• Collaborated with classmates on team development projects', 25, y + 55);

    // Add new page for remaining content
    doc.addPage();

    // Projects with adjusted spacing
    y = addSection('PROJECTS', 20);
    const addProject = (title, tech, details, yPos) => {
      doc.setFontSize(12);
      doc.setFont('helvetica', 'bold');
      doc.text(title, 20, yPos);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(10);
      doc.text(tech, 20, yPos + 5);
      details.forEach((detail, index) => {
        doc.text('• ' + detail, 25, yPos + 10 + (index * 5));
      });
      return yPos + 10 + (details.length * 5) + 10; // Increased spacing between projects
    };

    y = addProject('Online Voting System', 'Full Stack Developer | Laravel, MySQL, Website', [
      'Developed a secure and efficient online voting platform',
      'Implemented user authentication and vote verification',
      'Created an intuitive admin dashboard for election management',
      'Ensured data security and vote integrity'
    ], y + 5);

    y = addProject('Collaborative Cooking App', 'Full Stack Developer | React, Node.js, MongoDB', [
      'Built a social platform for sharing recipes and cooking experiences',
      'Implemented real-time collaboration features',
      'Created responsive and user-friendly interface',
      'Integrated social sharing capabilities'
    ], y + 5);

    y = addProject('Research Project - AI in Education', 'Lead Researcher | Research, AI, Education', [
      'Published research on AI\'s impact on IT students\' programming skills at DOrSU',
      'Conducted comprehensive data analysis and surveys',
      'Presented findings at academic conferences'
    ], y + 5);

    y = addProject('E-commerce Landing Page', 'Frontend Developer | React, Tailwind, UI/UX', [
      'Designed and developed modern e-commerce landing page',
      'Implemented responsive design principles',
      'Optimized user experience and interface'
    ], y + 5);

    // Technical Skills (immediately after projects)
    y = addSection('TECHNICAL SKILLS', y + 5);
    doc.setFontSize(10);
    doc.text('Programming Languages: JavaScript (ES6+), TypeScript, Python, PHP, HTML5, CSS3', 20, y + 5);
    doc.text('Frameworks & Libraries: React, Node.js, Express.js, TailwindCSS, Laravel', 20, y + 10);
    doc.text('Tools & Platforms: Git, VS Code, Vercel', 20, y + 15);
    doc.text('Databases: MongoDB, MySQL', 20, y + 20);

    // Save PDF
    doc.save('Kit_Adrian_Resume.pdf');
  };

  return (
    <div className="w-full min-h-screen bg-[#2A2D3E] text-white pt-32 px-8 md:px-16 lg:px-32">
      <div className="max-w-[1920px] mx-auto">
        {/* Header Section with Updated Button */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">My Resume</h1>
          <button 
            onClick={handleDownload}
            className="bg-[#E5B075] text-white px-8 py-3 rounded-xl hover:bg-[#d39a60] transition-all duration-300 flex items-center gap-2 mx-auto group"
          >
            <i className="fas fa-download group-hover:-translate-y-1 transition-transform duration-300"></i>
            <span>Download PDF</span>
          </button>
        </div>

        {/* Resume Content */}
        <div className="bg-[#353849] rounded-xl p-8 md:p-12 lg:p-16 shadow-xl mx-auto">
          {/* Contact Information */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#E5B075] mb-6">Kit Adrian Diocares</h2>
            <p className="text-gray-300 text-lg">
              Davao Oriental, Philippines | +63 966 356 0283
              <br />
              kitadriand@gmail.com | github.com/flklr-dev
              <br />
              linkedin.com/in/kitadrian
            </p>
          </div>

          {/* Professional Summary */}
          <section className="mb-12">
            <h3 className="text-2xl font-bold text-[#8E9AEB] mb-4 border-b border-gray-700 pb-2">
              PROFESSIONAL SUMMARY
            </h3>
            <p className="text-gray-300 ml-4">
              Dedicated and innovative Full Stack Developer with a strong foundation in web development and a passion for creating efficient, user-friendly applications. Experienced in modern JavaScript frameworks and responsive design principles. Committed to writing clean, maintainable code and staying current with emerging technologies.
            </p>
          </section>

          {/* Education */}
          <section className="mb-12">
            <h3 className="text-2xl font-bold text-[#8E9AEB] mb-4 border-b border-gray-700 pb-2">
              EDUCATION
            </h3>
            <div className="ml-4 space-y-6">
              <div>
                <div className="flex justify-between items-start">
                  <h4 className="font-bold text-xl">Davao Oriental State University</h4>
                  <span className="text-[#E5B075]">2022 - Present</span>
                </div>
                <p className="text-gray-300">Bachelor of Science in Information Technology</p>
                <p className="text-gray-400">Major in Mobile Systems Development</p>
                <p className="text-gray-400">GPA: 1.65</p>
                <ul className="list-disc ml-6 text-gray-400 mt-2">
                  <li>Dean's Lister for 2 semesters</li>
                  <li>Lead Developer for Most Web Development Projects</li>
                </ul>
              </div>
              
              <div>
                <div className="flex justify-between items-start">
                  <h4 className="font-bold text-xl">Manuel S. Nasser Sr. National High School</h4>
                  <span className="text-[#E5B075]">2016 - 2022</span>
                </div>
                <p className="text-gray-300">Senior High School - GAS</p>
                <p className="text-gray-400">General Academic Strand</p>
                <ul className="list-disc ml-6 text-gray-400 mt-2">
                  <li>With Honors</li>
                  <li>Best in Research</li>
                  <li>ICT Club Member</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Experience */}
          <section className="mb-12">
            <h3 className="text-2xl font-bold text-[#8E9AEB] mb-4 border-b border-gray-700 pb-2">
              PROFESSIONAL EXPERIENCE
            </h3>
            <div className="ml-4 space-y-8">
              <div>
                <div className="flex justify-between items-start">
                  <h4 className="font-bold text-xl">Freelance Web Developer</h4>
                  <span className="text-[#E5B075]">2023 - Present</span>
                </div>
                <p className="text-gray-300">Upwork & Fiverr</p>
                <ul className="list-disc ml-6 text-gray-400 mt-3">
                  <li>Actively seeking and working on web development projects</li>
                  <li>Building portfolio through various freelance platforms</li>
                  <li>Specializing in React.js and Next.js development</li>
                  <li>Creating responsive and modern web applications</li>
                  <li>Learning and implementing latest web technologies</li>
                </ul>
              </div>
              
              <div>
                <div className="flex justify-between items-start">
                  <h4 className="font-bold text-xl">Web Development Projects</h4>
                  <span className="text-[#E5B075]">2022 - 2023</span>
                </div>
                <p className="text-gray-300">Academic and Personal Projects</p>
                <ul className="list-disc ml-6 text-gray-400 mt-3">
                  <li>Developed multiple web applications for university coursework</li>
                  <li>Created personal projects to enhance programming skills</li>
                  <li>Collaborated with classmates on team development projects</li>
                  <li>Implemented modern web development best practices</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section className="mb-12">
            <h3 className="text-2xl font-bold text-[#8E9AEB] mb-4 border-b border-gray-700 pb-2">
              PROJECTS
            </h3>
            <div className="ml-4 space-y-6">
              <div>
                <h4 className="font-bold text-xl">Online Voting System</h4>
                <p className="text-gray-300">Full Stack Developer | Laravel, MySQL, Website</p>
                <ul className="list-disc ml-6 text-gray-400 mt-3">
                  <li>Developed a secure and efficient online voting platform</li>
                  <li>Implemented user authentication and vote verification</li>
                  <li>Created an intuitive admin dashboard for election management</li>
                  <li>Ensured data security and vote integrity</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-xl">Collaborative Cooking App</h4>
                <p className="text-gray-300">Full Stack Developer | React, Node.js, MongoDB</p>
                <ul className="list-disc ml-6 text-gray-400 mt-3">
                  <li>Built a social platform for sharing recipes and cooking experiences</li>
                  <li>Implemented real-time collaboration features</li>
                  <li>Created responsive and user-friendly interface</li>
                  <li>Integrated social sharing capabilities</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-xl">Research Project - AI in Education</h4>
                <p className="text-gray-300">Lead Researcher | Research, AI, Education</p>
                <ul className="list-disc ml-6 text-gray-400 mt-3">
                  <li>Published research on AI\'s impact on IT students\' programming skills at DOrSU</li>
                  <li>Conducted comprehensive data analysis and surveys</li>
                  <li>Presented findings at academic conferences</li>
                  <li>Contributed to educational technology research</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-xl">E-commerce Landing Page</h4>
                <p className="text-gray-300">Frontend Developer | React, Tailwind, UI/UX</p>
                <ul className="list-disc ml-6 text-gray-400 mt-3">
                  <li>Designed and developed modern e-commerce landing page</li>
                  <li>Implemented responsive design principles</li>
                  <li>Optimized user experience and interface</li>
                  <li>Created reusable component library</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Skills */}
          <section className="mb-12">
            <h3 className="text-2xl font-bold text-[#8E9AEB] mb-4 border-b border-gray-700 pb-2">
              TECHNICAL SKILLS
            </h3>
            <div className="ml-4 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-xl mb-2">Programming Languages</h4>
                <p className="text-gray-400">JavaScript (ES6+), TypeScript, Python, PHP, HTML5, CSS3</p>
              </div>
              <div>
                <h4 className="font-bold text-xl mb-2">Frameworks & Libraries</h4>
                <p className="text-gray-400">React, Node.js, Express.js, TailwindCSS, Laravel</p>
              </div>
              <div>
                <h4 className="font-bold text-xl mb-2">Tools & Platforms</h4>
                <p className="text-gray-400">Git, VS Code, Vercel</p>
              </div>
              <div>
                <h4 className="font-bold text-xl mb-2">Databases</h4>
                <p className="text-gray-400">MongoDB, MySQL</p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default ResumeScreen; 