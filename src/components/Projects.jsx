import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ExternalLink, Github, Eye, Star, GitFork } from 'lucide-react';

const projects = [
  { 
    title: "JobPortal", 
    desc: "A comprehensive job portal built with the MERN stack, featuring advanced search, real-time notifications, and secure authentication. Includes recruiter dashboard and candidate management.", 
    link: "https://github.com/firoz1860/JobPortal",
    demo: "#",
    image: "https://images.pexels.com/photos/4195504/pexels-photo-4195504.jpeg",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    category: "fullstack",
    featured: true,
    stats: { stars: 15, forks: 8, views: 230 }
  },
  { 
    title: "NewsApp", 
    desc: "React-based news application with infinite scrolling, category filtering, and real-time updates. Features responsive design and optimized performance.", 
    link: "https://github.com/firoz1860/news",
    demo: "#",
    image: "/news.png", 
    tech: ["React", "News API", "CSS3", "JavaScript"],
    category: "frontend",
    featured: false,
    stats: { stars: 12, forks: 5, views: 180 }
  },
  { 
    title: "Apollo247", 
    desc: "Healthcare platform offering online consultations, medicine delivery, and health records management. Built with modern web technologies for optimal user experience.", 
    link: "https://apolo247.vercel.app/",
    demo: "https://apolo247.vercel.app/",
    // image: "https://images.pexels.com/photos/4269274/pexels-photo-4269274.jpeg",
    image: "./apollo.png",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    category: "fullstack",
    featured: true,
    stats: { stars: 20, forks: 12, views: 350 }
  },
  { 
    title: "3D Portfolio", 
    desc: "Interactive 3D portfolio showcasing modern web development with Three.js, featuring smooth animations and immersive user experience.", 
    link: "https://3-d-portfolio-psi-gold.vercel.app/",
    demo: "https://3-d-portfolio-psi-gold.vercel.app/",
    image: "https://images.pexels.com/photos/8566526/pexels-photo-8566526.jpeg",
    tech: ["React", "Three.js", "WebGL", "Framer Motion"],
    category: "frontend",
    featured: true,
    stats: { stars: 25, forks: 10, views: 420 }
  },
  { 
    title: "YouTube Backend", 
    desc: "Scalable backend service powering video streaming platform with user authentication, video processing, and real-time features.", 
    link: "https://github.com/firoz1860/youtube",
    demo: "#",
    image: "https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg",
    tech: ["Node.js", "Express", "MongoDB", "JWT"],
    category: "backend",
    featured: false,
    stats: { stars: 18, forks: 7, views: 290 }
  },
  { 
    title: "Job-finder", 
    desc: "A job-finding platform connecting job seekers with employers, featuring advanced search and filtering options.", 
    link: "https://github.com/firoz1860/job-finder",
    demo: "#",
    image: "/job.png",
    tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS","Axios","html","css"],
    category: "fullstack",
    featured: false,
    stats: { stars: 18, forks: 7, views: 290 }
  },
];

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="600"
      data-aos-delay={index * 100}
      className={`relative group cursor-pointer transform transition-all duration-500 hover:scale-105 ${
        project.featured ? 'lg:col-span-2' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative bg-gray-900/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 h-full">
        {/* Project Image */}
        <div className="relative h-64 overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80"></div>
          
          {/* Featured Badge */}
          {project.featured && (
            <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-purple-600 to-cyan-600 text-white text-xs font-bold rounded-full">
              Featured
            </div>
          )}

          {/* Stats Overlay */}
          <div className="absolute top-4 right-4 flex space-x-2">
            <div className="flex items-center space-x-1 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full text-xs text-white">
              <Star className="w-3 h-3 text-yellow-400" />
              <span>{project.stats.stars}</span>
            </div>
            <div className="flex items-center space-x-1 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full text-xs text-white">
              <GitFork className="w-3 h-3 text-gray-400" />
              <span>{project.stats.forks}</span>
            </div>
          </div>

          {/* Hover Action Buttons */}
          <div className={`absolute inset-0 flex items-center justify-center space-x-4 transition-all duration-300 ${
            isHovered ? 'opacity-100 bg-black/50 backdrop-blur-sm' : 'opacity-0'
          }`}>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full transition-all duration-300 transform hover:scale-110"
              onClick={(e) => e.stopPropagation()}
            >
              <Github className="w-5 h-5" />
            </a>
            {project.demo !== "#" && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-full transition-all duration-300 transform hover:scale-110"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        {/* Project Content */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
              {project.title}
            </h3>
            <div className="flex items-center space-x-1 text-gray-400 text-sm">
              <Eye className="w-4 h-4" />
              <span>{project.stats.views}</span>
            </div>
          </div>
          
          <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
            {project.desc}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-purple-300 text-xs font-medium rounded-full border border-purple-500/30 hover:border-purple-500/50 transition-colors duration-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Category Tag */}
          <div className="flex items-center justify-between">
            <span className={`px-3 py-1 text-xs font-medium rounded-full ${
              project.category === 'fullstack' 
                ? 'bg-gradient-to-r from-green-500/20 to-blue-500/20 text-green-300 border border-green-500/30' 
                : project.category === 'frontend' 
                ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 border border-blue-500/30'
                : 'bg-gradient-to-r from-orange-500/20 to-red-500/20 text-orange-300 border border-orange-500/30'
            }`}>
              {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
            </span>
            
            <div className="flex space-x-2">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
              >
                <Github className="w-4 h-4" />
              </a>
              {project.demo !== "#" && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Animated Border */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-500 p-[1px]">
            <div className="w-full h-full bg-gray-900/80 rounded-2xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    AOS.init({ 
      once: true,
      duration: 600,
      easing: 'ease-out-cubic'
    });
  }, []);

  useEffect(() => {
    if (filter === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === filter));
    }
  }, [filter]);

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'fullstack', label: 'Full Stack' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' }
  ];

  return (
    <section id="projects" className="min-h-screen py-20 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-6xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              &lt; Projects /&gt;
            </span>
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
            A showcase of my technical skills and creative problem-solving through real-world applications
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filterItem) => (
            <button
              key={filterItem.key}
              onClick={() => setFilter(filterItem.key)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                filter === filterItem.key
                  ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg shadow-purple-500/25'
                  : 'bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-700/50 border border-gray-700/50 hover:border-purple-500/50'
              }`}
            >
              {filterItem.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={`${project.title}-${filter}`} project={project} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 px-8 py-4 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-full border border-purple-500/30">
            <span className="text-gray-300">Want to see more?</span>
            <a
              href="https://github.com/firoz1860"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-medium rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
            >
              Visit GitHub
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default Projects;



// // src/components/Projects.js
// import React, { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css'; // Import AOS styles
// import { image } from 'framer-motion/client';

// const projects = [
//   { 
//     title: "JobPortal", 
//     desc: "Job Portal is a web application where job seekers can find and apply for jobs, and employers can post job openings and manage applications — built using the MERN stack.", 
//     link: "https://github.com/firoz1860/JobPortal",
//     image: "/job-portal.png",
//   },
//   { 
//     title: "NewsApp", 
//     desc: "NewsApp is a React-based news application that fetches real-time headlines from the NewsAPI. It supports infinite scrolling, categorized browsing (like sports, technology, health), country-based filtering, and dynamic loading indicators. Users can seamlessly explore the latest news with a clean and responsive UI.", 
//     link: "https://github.com/firoz1860/news",
//     image: "/news-app.png", 
//   },
//   { 
//     title: "Apollo247", 
//     desc: "Apollo 24|7 is a comprehensive digital healthcare platform offering online doctor consultations, medicine delivery, lab tests, and health records management — all in one app. Backed by the trusted Apollo Hospitals, it ensures accessible, reliable, and personalized healthcare anytime, anywhere.", 
//     link: "https://apolo247.vercel.app/",
//     image: "/apollo.png" 
//   },
//   { 
//     title: "3D-Portfolio", 
//     desc: "3D Portfolio is a modern, interactive personal portfolio built using React, Three.js, and WebGL. It features smooth animations, 3D models, and responsive design to creatively showcase projects, skills, and experience in an engaging and immersive way.", 
//     link: "https://3-d-portfolio-psi-gold.vercel.app/",
//     image: "3D-Portfolio.png" 
//   },
//   { 
//     title: "YouTube Backend", 
//     desc: "YouTube Backend is a RESTful API service that powers core features of a video-sharing platform, including user authentication, video upload, streaming, likes, comments, and subscriptions. Built using Node.js, Express, MongoDB, and JWT for secure and scalable backend operations.", 
//     link: "https://github.com/firoz1860/youtube",
//     image: "/backend.png" 
//   },
//   // { 
//   //   title: "Docs", 
//   //   desc: "Website to collaboratively share documents.", 
//   //   link: "https://github.com/example/docs",
//   //   image: "https://via.placeholder.com/300x200?text=Docs" 
//   // },
// ];

// const ProjectCard = ({ project }) => (
//   <a
//     href={project.link}
//     target="_blank"
//     rel="noopener noreferrer"
//     data-aos="fade-up"
//     data-aos-duration="600"
//     className="block bg-gray-900 p-4 rounded shadow hover:shadow-lg transition duration-200"
//   >
//     <img src={project.image} alt={project.title} className="rounded mb-3 w-full h-40 object-cover" />
//     <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
//     <p className="text-gray-400">{project.desc}</p>
//   </a>
// );

// const Projects = () => {
//   useEffect(() => {
//     AOS.init({ once: true });
//   }, []);

//   const rows = [];
//   for (let i = 0; i < projects.length; i += 4) {
//     rows.push(projects.slice(i, i + 4));
//   }

//   return (
//     <section id="projects" className="py-16">
//       <h2 className="text-3xl font-bold text-purple-500">&lt; Projects /&gt;</h2>
//       <div className="space-y-6 mt-6">
//         {rows.map((row, rowIndex) => (
//           <div key={rowIndex} className="flex flex-wrap -mx-3">
//             {row.map((project, index) => (
//               <div
//                 key={index}
//                 className="w-full sm:w-1/2 lg:w-1/4 px-3 mb-6"
//               >
//                 <ProjectCard project={project} />
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Projects;

