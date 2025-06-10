import React, { useState, useEffect, useRef } from "react";
import { Check } from "lucide-react";
import Reacticon from "../assets/images/react.png";
import Jsicon from "../assets/images/js.png";
import Figma from "../assets/images/figma.png";
import Node from "../assets/images/nodejs.png";
import Canva from "../assets/images/canva.png";
import Tailwind from "../assets/images/tailwind.png";

const skills = [
  { name: "HTML5 & CSS3", level: "98%" },
  { name: "JavaScript (ES6+)", level: "90%" },
  { name: "React.js", level: "92%" },
  { name: "Tailwind CSS", level: "88%" },
  { name: "Next.js", level: "85%" },
];

const professionalSkills = [
  { name: "Problem Solving", level: "95%" },
  { name: "Communication", level: "95%" },
  { name: "Team Work", level: "90%" },
  { name: "Leadership", level: "85%" },
  { name: "Creativity", level: "90%" },
  { name: "Organization", level: "92%" },
];

const responsibilities = [
  "Develop responsive and user-friendly web applications",
  "Create and manage databases for efficient data storage",
  "Optimize web performance for faster loading times",
  "Implement user authentication and authorization systems",
  "Deploy and maintain applications in cloud environments",
];

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate skills bars with staggered delay
          skills.forEach((skill, index) => {
            setTimeout(() => {
              setAnimatedSkills((prev) => [...prev, index]);
            }, index * 200);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Animated Frontend Skills Progress Bars */}
      <section
        ref={sectionRef}
        className="py-20 bg-gray-50 text-center overflow-hidden"
      >
        {/* Header Animation */}
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-4xl font-bold text-blue-500 mb-6 relative">
            MY SKILLS
            <div
              className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-blue-500 transition-all duration-1000 delay-500 ${
                isVisible ? "w-20" : "w-0"
              }`}
            ></div>
          </h2>
        </div>

        <div
          className={`transition-all duration-1000 delay-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <p className="text-gray-600 max-w-xl mx-auto mb-12">
            With expertise in frontend technologies, I bring a comprehensive
            skill set to every project. Below is a showcase of my technical
            proficiencies and tools I work with.
          </p>
        </div>

        {/* Skills Container */}
        <div className="max-w-4xl mx-auto text-left px-4">
          <div
            className={`transition-all duration-1000 delay-500 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Frontend Development
            </h3>
          </div>

          {/* Animated Skills List */}
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ${
                  isVisible
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-10 opacity-0"
                }`}
                style={{ transitionDelay: `${600 + index * 100}ms` }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-gray-800 transition-colors duration-300 hover:text-blue-600">
                    {skill.name}
                  </span>
                  <span className="text-gray-700 font-semibold">
                    {skill.level}
                  </span>
                </div>

                {/* Animated Progress Bar */}
                <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden shadow-inner">
                  <div
                    className={`h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-1500 ease-out relative ${
                      animatedSkills.includes(index) ? "" : "w-0"
                    }`}
                    style={{
                      width: animatedSkills.includes(index)
                        ? skill.level
                        : "0%",
                      transitionDelay: `${800 + index * 200}ms`,
                    }}
                  >
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 animate-pulse"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Floating Elements for Visual Interest */}
          <div className="relative mt-12">
            <div
              className={`absolute -top-8 -right-4 w-20 h-20 bg-blue-100 rounded-full opacity-20 transition-all duration-2000 ${
                isVisible ? "animate-bounce" : ""
              }`}
            ></div>
            <div
              className={`absolute -bottom-4 -left-8 w-16 h-16 bg-blue-200 rounded-full opacity-30 transition-all duration-2000 delay-1000 ${
                isVisible ? "animate-pulse" : ""
              }`}
            ></div>
          </div>
        </div>
      </section>

      {/* skills */}
      <section className="pb-20  p-8 text-center">
        <h2 className="text-3xl font-bold text-blue-500 bg-clip-text mb-10">
          Technologies I Work With
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-center mb-10">
          <div className="text-center group bg-white rounded-lg p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-blue-500/50 hover:bg-blue-200 dark:hover:bg-blue-900/40">
            <img src={Reacticon} alt="React" className="w-12 mx-auto" />
            <p className="mt-2 text-sm font-semibold">React</p>
          </div>
          <div className="text-center group bg-white rounded-lg p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-blue-500/50 hover:bg-blue-200 dark:hover:bg-blue-900/40">
            <img src={Node} alt="Node.js" className="w-12 mx-auto" />
            <p className="mt-2 text-sm font-semibold">Node.js</p>
          </div>
          <div className="text-center group bg-white rounded-lg p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-blue-500/50 hover:bg-blue-200 dark:hover:bg-blue-900/40">
            <img src={Jsicon} alt="TypeScript" className="w-12 mx-auto" />
            <p className="mt-2 text-sm font-semibold">JavaScript</p>
          </div>
          <div className="text-center group bg-white rounded-lg p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-blue-500/50 hover:bg-blue-200 dark:hover:bg-blue-900/40">
            <img src={Tailwind} alt="Tailwind" className="w-12 mx-auto" />
            <p className="mt-2 text-sm font-semibold">Tailwind</p>
          </div>
          <div className="text-center group bg-white rounded-lg p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-blue-500/50 hover:bg-blue-200 dark:hover:bg-blue-900/40">
            <img src={Canva} alt="Canva" className="w-8 mx-auto" />
            <p className="mt-2 text-sm font-semibold">Canva</p>
          </div>
          <div className="text-center group bg-white rounded-lg p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-blue-500/50 hover:bg-blue-200 dark:hover:bg-blue-900/40">
            <img src={Figma} alt="Figma" className="w-8 mx-auto" />
            <p className="mt-2 text-sm font-semibold">Figma</p>
          </div>
        </div>

        <button className="bg-gradient-to-r from-blue-500 to-blue-400 text-white px-6 py-2 rounded-md shadow-md font-semibold hover:opacity-90 transition">
          View All Skills
        </button>
      </section>

      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          {/* What I Can Do */}
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              What I Can Do
            </h3>
            <ul className="space-y-4 text-gray-700">
              {responsibilities.map((item, idx) => (
                <li key={idx} className="flex items-start space-x-2">
                  <span className="text-blue-500 pt-1">
                    <Check size={16} strokeWidth={3} />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Professional Skills */}
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Professional Skills
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {professionalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 font-medium">
                      {skill.name}
                    </span>
                  </div>
                  <div className="h-2 w-full bg-gray-300 rounded-full">
                    <div
                      className="h-2 bg-blue-500 rounded-full"
                      style={{ width: skill.level }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              My Development Approach
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              I follow a structured approach to web development that ensures
              high-quality, maintainable code and excellent user experiences. My
              process includes thorough planning, modern development practices,
              and rigorous testing.
            </p>
          </div>

          {/* Process Steps */}
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-8 left-0 right-0 h-0.5 bg-blue-200 hidden lg:block"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
              {/* Step 1 */}
              <div className="text-center group">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-300 transition-colors duration-300">
                    <span className="text-2xl font-bold text-[#FD0315]">
                      01
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Planning
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Understanding requirements and architecting solutions
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center group">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-300 transition-colors duration-300">
                    <span className="text-2xl font-bold text-[#FD0315]">
                      02
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Design
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Creating intuitive and responsive interfaces
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center group">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-300 transition-colors duration-300">
                    <span className="text-2xl font-bold text-[#FD0315]">
                      03
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Development
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Writing clean, efficient, and maintainable code
                </p>
              </div>

              {/* Step 4 */}
              <div className="text-center group">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-300 transition-colors duration-300">
                    <span className="text-2xl font-bold text-[#FD0315]">
                      04
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Deployment
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Testing and delivering high-quality applications
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
