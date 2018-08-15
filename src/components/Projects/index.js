import React from 'react';
import styles from './index.css';

import Game from '../../playground/tic-tac-toe/components/Game';

const Projects = () =>
  <div className={`container ${styles.projects}`}>
    <h1> Projects </h1>
    <br />
    <Game />
  </div>

export default Projects;