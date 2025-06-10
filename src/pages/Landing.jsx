import { Code, Monitor, PenTool } from 'lucide-react';
import React from 'react'
import Reacticon from '../assets/images/react.png'
import Jsicon from '../assets/images/js.png'
import Figma from '../assets/images/figma.png'
import Node from '../assets/images/nodejs.png'
import Canva from '../assets/images/canva.png'
import Tailwind from '../assets/images/tailwind.png'
import Profile from '../assets/images/profile.jpg'
import { motion } from 'framer-motion';

const Landing = () => {

  const services = [
    {
      icon: <Code className="w-8 h-8 text-[#FD0315]" />,
      title: "Web Development",
      description: "Creating responsive websites that work seamlessly across all devices using modern frameworks and best practices."
    },
    {
      icon: <Monitor className="w-8 h-8 text-[#FD0315]" />,
      title: "Web Application Development",
      description: "Crafting dynamic web applications with modern frameworks, responsive design, and seamless user experiences. From single-page applications to full-stack solutions, I focus on creating scalable and maintainable web applications that meet business requirements."
    },
    {
      icon: <PenTool className="w-8 h-8 text-[#FD0315]" />,
      title: "Web Design & UI/UX",
      description: "Designing intuitive and engaging web interfaces that enhance user experience and drive engagement."
    }
  ];
  return (
    <div className='bg-gray-50 dark:bg-gray-900'>
      <section className="bg-gray-50 dark:bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content Side */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                  Hi, I'm Ellen{' '}
                  <span className="bg-gradient-to-r from-black to-blue-500 text-transparent bg-clip-text">Mensah</span>

                </h1>

                <h2 className="text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-300">
                  Front-End Developer
                </h2>

                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">
                  I'm a junior frontend developer (React.js) passionate about
                  building (and sometimes designing!) engaging digital experiences
                  that are fast, accessible, visually appealing, and responsive. I'm
                  at the beginning of my journey, but I approach every project with
                  excitement and a strong desire to learn and grow in the world of
                  web development.
                </p>
              </div>

              {/* Call to Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
                  View My Work
                </button>
                <button className="px-8 py-4 bg-blue-500  text-white font-semibold rounded-lg hover:bg-blue-700 hover:text-white transform hover:scale-105 transition-all duration-200">
                  Contact Me
                </button>
              </div>
            </div>

            {/* Profile Image Side */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Profile Image Container */}
                <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-blue-500">
                  <img
                    src={Profile}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-orange-200 dark:bg-orange-800 rounded-full opacity-20"></div>
                <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-blue-200 dark:bg-blue-800 rounded-full opacity-20"></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* what i do */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-500 mb-8">
              What I Do
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              I build beautiful, functional, and user-friendly websites and web applications using modern
              technologies. My goal is to create robust digital solutions that help businesses grow,
              streamline operations, and provide users with exceptional experiences. Whether it's a
              responsive website, a complex web application, or websites designs, I focus on delivering
              high-quality, scalable solutions that meet both business and user needs.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="text-center group bg-blue-100 rounded-lg p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-blue-500/50 hover:bg-blue-200 dark:hover:bg-blue-900/40"
              >
                {/* Icon Container */}
                <div className="w-20 h-20 mx-auto mb-6 bg-orange-50 dark:bg-orange-900/20 rounded-full flex items-center justify-center group-hover:bg-orange-100 dark:group-hover:bg-orange-900/30 transition-colors duration-300">
                  {service.icon}
                </div>

                {/* Service Title */}
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* skills */}
      <section className="pb-20  p-8 text-center">
        <h2 className="text-3xl font-bold text-blue-500 bg-clip-text mb-10">
          Technologies I Work With
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-center mb-10">
          <div className="text-center group bg-white rounded-lg p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-blue-500/50 hover:bg-blue-200 dark:hover:bg-blue-900/40"
              >
            <img src={Reacticon} alt="React" className="w-12 mx-auto" />
            <p className="mt-2 text-sm font-semibold">React</p>
          </div>
          <div className="text-center group bg-white rounded-lg p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-blue-500/50 hover:bg-blue-200 dark:hover:bg-blue-900/40"
              >
            <img src={Node} alt="Node.js" className="w-12 mx-auto" />
            <p className="mt-2 text-sm font-semibold">Node.js</p>
          </div>
          <div className="text-center group bg-white rounded-lg p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-blue-500/50 hover:bg-blue-200 dark:hover:bg-blue-900/40"
              >
            <img src={Jsicon} alt="TypeScript" className="w-12 mx-auto" />
            <p className="mt-2 text-sm font-semibold">JavaScript</p>
          </div>
          <div className="text-center group bg-white rounded-lg p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-blue-500/50 hover:bg-blue-200 dark:hover:bg-blue-900/40"
              >
            <img src={Tailwind} alt="Tailwind" className="w-12 mx-auto" />
            <p className="mt-2 text-sm font-semibold">Tailwind</p>
          </div>
          <div className="text-center group bg-white rounded-lg p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-blue-500/50 hover:bg-blue-200 dark:hover:bg-blue-900/40"
              >
            <img src={Canva} alt="Canva" className="w-8 mx-auto" />
            <p className="mt-2 text-sm font-semibold">Canva</p>
          </div>
          <div className="text-center group bg-white rounded-lg p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-blue-500/50 hover:bg-blue-200 dark:hover:bg-blue-900/40"
              >
            <img src={Figma} alt="Figma" className="w-8 mx-auto" />
            <p className="mt-2 text-sm font-semibold">Figma</p>
          </div>
        </div>

        <button className="bg-gradient-to-r from-blue-500 to-blue-400 text-white px-6 py-2 rounded-md shadow-md font-semibold hover:opacity-90 transition">
          View All Skills
        </button>
      </section>

      <motion.section
        className="text-center py-16 min-h-96 "
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-500 mb-4">
          Ready to start your project?
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-8">
          Let's work together to bring your ideas to life. I'm available for freelance projects and full-time opportunities.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-blue-500 to-blue-400 text-white px-6 py-3 rounded-md shadow hover:opacity-90 transition"
        >
          Get In Touch
        </motion.button>
      </motion.section>

    </div>
  )
}

export default Landing