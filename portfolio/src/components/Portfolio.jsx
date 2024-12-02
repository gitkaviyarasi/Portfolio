import React from 'react';
import Project from './Project';
import '../style/Portfolio.css';
import Readmegen from '../assets/Readmegen.png';
import Weatherapp from '../assets/WeatherApp.png';
import EmployeeTracker from '../assets/EmployeeTracker.png';
import Project5 from '../assets/project5.jpg';
import Project6 from '../assets/project6.jpg';
import Apollo from '../assets/ApolloGreek.jpg';

const projectData = [
  {
    title: 'Readme Generator',
    image: Readmegen,
    githubLink: 'https://github.com/gitkaviyarasi/readmegenerator',
  },
  {
    title: 'Weather Dashboard',
    image:Weatherapp ,
    githubLink: 'https://github.com/gitkaviyarasi/weatherapp',
    deployedLink: 'https://weatherforecast-i0zm.onrender.com/',
  },
  {
    title: 'Employee Tracker',
    image: EmployeeTracker,
    githubLink: 'https://github.com/gitkaviyarasi/employeeDetailsTracker',
  },
  {
    title: 'Apollo Greek Tavern',
    image: Apollo,
    deployedLink: 'https://gitkaviyarasi.github.io/apollogreektavern/',
    githubLink: 'https://github.com/gitkaviyarasi/apollogreektavern',
  },
  {
    title: 'Project 5',
    image: Project5,
    deployedLink: 'https://example.com/project5',
    githubLink: 'https://github.com/gitkaviyarasi',
  },
  {
    title: 'Project 6',
    image: Project6,
    deployedLink: 'https://example.com/project6',
    githubLink: 'https://github.com/gitkaviyarasi',
  },
];

function Portfolio() {
  return (
    <div className="portfolio-section">
      <h2>Portfolio</h2>
      <div className="flex-container">
        {projectData.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            image={project.image}
            deployedLink={project.deployedLink}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
