import React from "react";
import { Github, Linkedin, Instagram, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router";
import Profile from "../assets/images/profile.jpg";

const Footer = () => {
  return (
    <footer className="bg-white py-12 px-6 sm:px-16 md:px-24 text-gray-800">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-6">
        {/* Logo & Intro */}
        <div>
          <h1 className="text-xl font-bold flex items-center">
            <img
              src={Profile}
              alt="logo"
              className="w-10 h-10 rounded-full mr-2"
            />
            Ellen|Dev
          </h1>
          <p className="mt-2 text-sm">
            Creating modern web and software solutions that bring ideas to life.
          </p>
          <div className="flex space-x-4 mt-4 text-gray-600">
            <a
              href="https://github.com/EllenMensah"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/ellen-mensah-738680313/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <div className="space-y-2 text-sm flex  flex-col">
            <Link to="/">Home</Link>
            <Link to="about">About</Link>
            <Link to="skills">Skills</Link>
            <Link to="projects">Projects</Link>
            <Link to="contact">Contact</Link>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold mb-3">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>Web Development</li>
            <li>Web Designing</li>
            <li>UI/UX Design</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-3">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center text-gray-700">
              <Phone className="text-[#FD0315] mr-2" size={16} />
              +233 50 131 1800
            </li>
            <div className="flex items-center text-gray-700">
              <Mail className="text-[#FD0315] mr-2" size={16} />
              <a
                href="mailto:mensahellen873@gmail.com"
                className="hover:text-blue-500"
              >
                mensahellen873@gmail.com
              </a>

            </div>

            <li className="flex items-center text-gray-700">
              <MapPin className="text-[#FD0315] mr-2" size={16} />
              Ghana, Accra
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <hr className="my-6 border-gray-300" />
      <div className="flex flex-col md:flex-row justify-between text-sm text-gray-500">
        <p>© 2025 Ellen Mensah. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
