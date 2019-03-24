import React from 'react';
import './index.scss';

import Game from '../../../playground/tic-tac-toe/components/Game';

const Projects = () =>
  <div className='page-container projects'>
    <div className='container'>
      <h1> Projects </h1>
      <br />
      <Game />
    </div>
  </div>

export default Projects;