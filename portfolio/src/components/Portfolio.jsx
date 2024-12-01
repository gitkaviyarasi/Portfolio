import React from 'react';
import Project from './Project';
import '../style/Portfolio.css';
import Readmegen from '../assets/Readmegen.png';
import Weatherapp from '../assets/WeatherApp.png';
import EmployeeTracker from '../assets/EmployeeTracker.png';
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
  },
  {
    title: 'Employee Tracker',
    image: EmployeeTracker,
    githubLink: 'https://github.com/gitkaviyarasi/employeeDetailsTracker',
  },
  {
    title: 'Project 4',
    image: 'https://via.placeholder.com/300',
    deployedLink: 'https://example.com/project4',
    githubLink: 'https://github.com/user/project4',
  },
  {
    title: 'Project 5',
    image: 'https://via.placeholder.com/300',
    deployedLink: 'https://example.com/project5',
    githubLink: 'https://github.com/user/project5',
  },
  {
    title: 'Project 6',
    image: 'https://via.placeholder.com/300',
    deployedLink: 'https://example.com/project6',
    githubLink: 'https://github.com/user/project6',
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
