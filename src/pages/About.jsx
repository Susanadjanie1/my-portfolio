import React from "react";
import { motion } from "framer-motion";
import Profile from "../assets/images/profile.jpg";

const About = () => {
  return (
    <>
      <section className="max-w-7xl mx-auto py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto py-16 px-4 md:px-8 flex justify-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-500 mb-8">
            About Me
          </h1>
        </div>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex-shrink-0"
          >
            <img
              src={Profile}
              alt="Profile"
              className="rounded-3xl shadow-xl border-[3px] border-blue-500 w-[300px] md:w-[360px] min-h-full"
            />

            {/* Social Links */}
            <div className="flex gap-6 mt-4 justify-center md:justify-center pt-6">
              {/* Email */}
              <a
                href="mailto:mensahellen873@gmail.com"
                className="text-blue-500 hover:text-blue-600 transition-colors"
                aria-label="Email"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/ellen-mensah-738680313/"
                className="text-blue-500 hover:text-blue-600 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5S0.02 4.881 0.02 3.5C0.02 2.12 1.13 1 2.5 1s2.48 1.12 2.48 2.5zM5 8h-5v16h5V8zm8 0h-5v16h5v-8.4c0-4.67 6-5.05 6 0V24h5V13.87c0-7.88-8.92-7.59-11.02-3.71V8z" />
                </svg>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/EllenMensah"
                className="text-blue-500 hover:text-blue-600 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="space-y-5 text-center md:text-left"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              A Front-End Developer | BASED IN GHANA
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-md md:text-lg leading-relaxed">
              I am a passionate web developer with a curious mind, a love for
              learning, and a knack for solving problems. My journey into tech
              was not linear, it began in the world of economics and financial
              services, where I developed a sharp analytical mindset and a
              detail-driven approach to work.
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-md md:text-lg leading-relaxed">
              During my time in auditing and document coordination, I worked
              with numbers, processes, and people. I became someone who could
              quickly spot inefficiencies and offer practical, structured
              solutions. But something was missing: creativity and innovation.
              That is when I discovered front-end development and everything
              clicked.
            </p>

            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
              <InfoCard label="Experience" value="2+ Years" />
              <InfoCard label="Location" value="Accra, Ghana" />
              <InfoCard label="Education" value="B.A Economics" />
              <InfoCard label="Freelance" value="Available" />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <h2 className="text-center text-3xl font-bold text-blue-500 mb-10">
          MY JOURNEY
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          {/* Frontend Developer */}
          <div className="bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-gray-900">
              Frontend Developer
            </h3>
            <p className="text-blue-500 font-medium">MEST AFRICA • 2025</p>
            <p className="text-gray-700 mt-2">
              Actively participated in web application and development projects
              under senior I.T staff mentorship. Designed and implemented
              interactive user interfaces for websites and applications.
            </p>
          </div>

          {/* Network Engineer */}
          <div className="bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-gray-900">Internship</h3>
            <p className="text-blue-500 font-medium">
              AFB GOLDEN ENTERPRICE • 2025
            </p>
            <p className="text-gray-700 mt-2">
              Designed and implemented an interactive eCommerce dashboard
              interface. Displayed real-time data visualizations for weekly
              sales, orders, total sales, and active users. Integrated
              responsive charts, dropdown filters, and progress bars to improve
              user experience and data accessibility. Used React components and
              Tailwind CSS for clean, modular UI design.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 text-center">
        <motion.h2
          className="text-3xl font-bold text-blue-500 mb-10"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          CLIENT TESTIMONIALS
        </motion.h2>

        <motion.div
          className="flex flex-col items-center max-w-3xl mx-auto px-6"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <motion.img
            src={Profile}
            alt="Client"
            className="w-24 h-24 rounded-full object-cover mb-4"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          />

          <motion.h3
            className="text-xl font-semibold text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Alice Frimpomaa Boateng
          </motion.h3>

          <motion.p
            className="text-blue-500 font-medium mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            CEO, AFB GOLDEN ENTERPRICE
          </motion.p>

          <motion.p
            className="text-gray-600 italic leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            "Working with Mr. Felix Ashong was a game-changer for our business.
            He delivered our e-commerce platform ahead of schedule and with more
            features than we initially requested. His technical expertise and
            communication skills made the development process smooth and
            stress-free."
          </motion.p>
        </motion.div>
      </section>
    </>
  );
};

const InfoCard = ({ label, value }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-shadow duration-300 rounded-xl px-5 py-4 text-left"
  >
    <h4 className="text-blue-500 font-semibold">{label}</h4>
    <p className="text-gray-700 dark:text-gray-300">{value}</p>
  </motion.div>
);

export default About;
