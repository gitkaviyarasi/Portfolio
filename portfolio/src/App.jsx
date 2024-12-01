import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Project from './components/Project';
import Contact from './components/Contactform';
import About from './components/About';

const projectData = [
  {
    title: "Surf-Report",
    stack: "MERN stack",
    image: "https://place.abh.ai/s3fs-public/placeholder/things2_400x400.jpeg"
  },
  {
    title: "Weather-App",
    stack: "React",
    image: "https://place.abh.ai/s3fs-public/placeholder/things2_400x400.jpeg"
  }
]
function App() {
  return (
      <div>
        <Navigation />
        <Outlet />
        <Footer />
      </div>
    );

  //   <>
  //   <Header />
  //   <Navigation />
  //   <Outlet />
  //   {projectData.map((project, index) => (
  //       <Project 
  //         key={index} 
  //         title={project.title} 
  //         stack={project.stack} 
  //         image={project.image} 
  //       />
  //     ))}
  //   <Footer />
  //   <Contact />
  //   </>
  // )
}

export default App;