import React from 'react';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router';
import RootLayout from './layouts/RootLayout';
import Landing from './pages/Landing';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Skills from './pages/Skills';
import Cv from './pages/Cv';


function App() {


  return (

    <div className="bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300 min-h-screen">
      < BrowserRouter>
      < Routes>
        < Route path="/" element={< RootLayout />}>
          < Route index={true} element={< Landing />} />
          < Route path="about" element={< About />} />
          < Route path="projects" element={< Projects/>} />
          < Route path="contact" element={< Contact  />} />
          < Route path="skills" element={< Skills />} />
          < Route path="cv" element={< Cv />} />

        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
