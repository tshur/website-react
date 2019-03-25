import React from 'react';
import './index.scss';

import projectData from './project-data';
// import Game from '../../../playground/tic-tac-toe/components/Game';

const Projects = () =>
  <div className='projects'>
    <div className='container'>
      <div className='projects-body'>
        <h1 className='title'>Projects</h1>
        <div className='project-grid'>
          {projectData.map((project, i) =>
            <div className='project-card' key={i}>
              <h1 className='project-name'>{project.name}</h1>
              <p className='project-desc'>{project.desc}</p>
              {project.link === '' ? <p className='coming-soon'>Coming soon!</p> : ''}
            </div>
          )}
        </div>
      </div>
    </div>
  </div>

export default Projects;
