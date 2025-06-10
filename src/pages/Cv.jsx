import React from 'react';

export default function Cv() {
  const handleDownloadCV = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/felix-ashong-cv.pdf'; // Path to your CV in public folder
    link.download = 'Felix_Ashong_CV.pdf'; // Name for downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
       {/* Header Section */}
        <div className=" p-20">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              {/* Profile Image */}
              <div className="w-24 h-24 rounded-full border-4 border-ble-500 overflow-hidden flex-shrink-0">
                <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">em</span>
                </div>
              </div>
              
              {/* Name and Title */}
              <div>
                <h1 className="text-4xl font-bold text-blue-500 mb-2">ELLEN MENSAH</h1>
                <h2 className="text-xl font-semibold text-gray-800">Front-End Developer</h2>
              </div>
            </div>
            
            {/* Download CV Button */}
            <button
              onClick={handleDownloadCV}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium flex items-center space-x-2 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              </svg>
              <span>Download CV</span>
            </button>
          </div>
        </div>

      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Professional Summary */}
            <section>
              <h3 className="text-2xl font-bold text-blue-500 mb-4 border-b-2 border-blue-500 pb-2">
                PROFESSIONAL SUMMARY
              </h3>
              <p className="text-gray-700 leading-relaxed">
                A results-oriented individual and a motivated student eager to apply classroom knowledge to real-world 
                experiences, with a strong willingness to learn and contribute. Effective communicator with a collaborative 
                mindset, ready to bring fresh perspectives and a strong work ethic to any team.
              </p>
            </section>

            {/* Work Experience */}
            <section>
              <h3 className="text-2xl font-bold text-blue-500 mb-6 border-b-2 border-blue-500 pb-2">
                WORK EXPERIENCE
              </h3>
              
              {/* Front-End Intern */}
              <div className="mb-8">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800">Front-End Intern</h4>
                    <p className="text-gray-600 font-medium">NAVANTRICS LTD | Kasoa</p>
                  </div>
                  <span className="text-[#F54A00] font-medium text-sm bg-blue-100 px-3 py-1 rounded">
                    08/2023 - 10/2023
                  </span>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Actively participated in web application and development projects under senior I.T staff mentorship</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Designed and implemented interactive user interfaces for websites and applications</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Developed user-facing webpages using HTML, CSS, JavaScript and jQuery</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Translated concepts into user flows, wireframes, and prototypes using Figma</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Worked with cross-functional teams to achieve goals</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Identified needs of customers promptly and efficiently</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Engaged with clients, understanding requirements, and collecting feedback</span>
                  </li>
                </ul>
              </div>

              {/* Networking Intern */}
              <div className="mb-8">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800">Networking Intern</h4>
                    <p className="text-gray-600 font-medium">University Of Ghana Computing Systems | Legon</p>
                  </div>
                  <span className="text-[#F54A00] font-medium text-sm bg-blue-100 px-3 py-1 rounded">
                    01/2024 - 03/2024
                  </span>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Collaborated with IT professionals to identify system needs and implement solutions</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Configured and installed network hardware including routers, switches, and firewalls</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Replaced faulty network hardware components to improve performance</span>
                  </li>
                </ul>
              </div>
            </section>
          </div>

          {/* Right Column - Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-lg p-6 sticky top-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {/* Location */}
                <div>
                  <h4 className="text-[#F54A00] font-semibold mb-2 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Location
                  </h4>
                  <p className="text-gray-700">Accra, Ghana</p>
                </div>

                {/* Phone */}
                <div>
                  <h4 className="text-orange-500 font-semibold mb-2 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Phone
                  </h4>
                  <p className="text-gray-700">0593125279</p>
                </div>

                {/* Email */}
                <div>
                  <h4 className="text-[#F54A00] font-semibold mb-2 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Email
                  </h4>
                  <p className="text-gray-700 break-all">mensahellen873@gmail.com</p>
                </div>
              </div>

              {/* Additional sections can be added here */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="text-[#F54A00] font-semibold mb-3">Skills</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-[#F54A00] px-3 py-1 rounded-full text-sm">HTML/CSS</span>
                  <span className="bg-blue-100 text-[#F54A00] px-3 py-1 rounded-full text-sm">JavaScript</span>
                  <span className="bg-blue-100 text-[#F54A00] px-3 py-1 rounded-full text-sm">jQuery</span>
                  <span className="bg-blue-100 text-[#F54A00] px-3 py-1 rounded-full text-sm">Figma</span>
                  <span className="bg-blue-100 text-[#F54A00] px-3 py-1 rounded-full text-sm">Networking</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}