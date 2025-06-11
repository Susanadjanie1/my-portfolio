import React, { useState, useEffect, useRef } from "react";
import Roycare from "../assets/images/roycare.png";
import Recipe from "../assets/images/recipe.png";
import Digitech from "../assets/images/digitech.png";
import Library from "../assets/images/library.png";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [isVisible, setIsVisible] = useState(false);
  const [animatedCards, setAnimatedCards] = useState([]);
  const sectionRef = useRef(null);

  const filters = [
    "All",
    "Web Development",
    "UI/UX Design",
    "Mobile Apps",
  ];

  const projects = [
    {
      id: 1,
      title: "Roycare",
      description:
        "A holistic baby care e-commerce platform offering organic skincare, eco-friendly diapering, and natural bath products. Features include product listings, customer reviews, and secure payment options. Built with a responsive design, it supports educational content for parents and promotes sustainable living.",
      image: Roycare,
      category: "Web Development",
      tags: ["React", "Node.js", "JavaScript"],
    },
    {
      id: 2,
      title: "Ghana Eats",
      description:
        "This website is a dedicated platform for discovering and sharing authentic Ghanaian recipes. It helps tourists, Ghanaians abroad, and the younger generation easily access and learn how to cook local dishes. The site focuses exclusively on Ghanaian cuisine, preserving and promoting the country’s rich culinary heritage.",
      image: Recipe,
      category: "Mobile Apps",
      tags: ["React", "Node.js", "JavaScript"],
    },
    {
      id: 3,
      title: "Digitech",
      description:
        "This technology website is a modern platform that highlights the latest innovations, tech news, and digital solutions. It serves as a hub for sharing knowledge, showcasing tech projects, and connecting users with cutting-edge tools and resources in the African tech space and beyond.",
      image: Digitech,
      category: "Web Development",
      tags: ["React", "Node.js", "JavaScript"],
    },
    {
      id: 3,
      title: "Library",
      description:
        "This library website is a user-friendly digital platform designed to give users easy access to books, research materials, and library services. It allows users to browse the catalog, reserve or borrow books, explore digital resources, and stay updated on events or programs. The site aims to promote reading, support education, and make the library accessible anytime, anywhere.",
      image: Library,

      category: "Web Development",
      tags: ["React", "Node.js", "JavaScript"],
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          filteredProjects.forEach((_, index) => {
            setTimeout(() => {
              setAnimatedCards((prev) => [...prev, index]);
            }, index * 200);
          });
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [filteredProjects]);

  useEffect(() => {
    setAnimatedCards([]);
    if (isVisible) {
      filteredProjects.forEach((_, index) => {
        setTimeout(() => {
          setAnimatedCards((prev) => [...prev, index]);
        }, index * 150);
      });
    }
  }, [activeFilter, isVisible]);

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6 relative">
            My Portfolio
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore my recent projects showcasing modern web development,
            software solutions, and innovative digital experiences.
          </p>
        </div>

        <div
          className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                activeFilter === filter
                  ? "bg-blue-500 text-white shadow-lg shadow-orange-500/25"
                  : "bg-white text-gray-700 hover:bg-blue-100 hover:text-[#FD0315] shadow-sm"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                animatedCards.includes(index)
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${600 + index * 150}ms` }}
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full"
                />
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.category === "Web Development"
                        ? "bg-blue-100 text-red-700"
                        : project.category === "Software Development"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#FD0315] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-100 text-[#FD0315] rounded-full text-xs font-medium hover:bg-blue-200 transition-colors duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <button className="flex-1 bg-blue-500 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-600 transition-colors duration-300 transform hover:scale-105">
                    View code
                  </button>
                  <button className="flex-1 border-2 border-blue-500 text-[#FD0315] py-2 px-4 rounded-lg font-medium hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-105">
                    Live Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 animate-pulse"></div>
            <p className="text-gray-500 text-lg">
              No projects found for this category.
            </p>
          </div>
        )}

        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-100 rounded-full opacity-20 animate-float"></div>
        <div
          className="absolute bottom-20 right-10 w-24 h-24 bg-blue-100 rounded-full opacity-30 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
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
