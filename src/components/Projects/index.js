import React from 'react';
import styles from './index.css';

import Calculator from '../../playground/calculator/components/Calculator';

const Projects = () =>
  <div className={`container ${styles.projects}`}>
    <h1> Projects </h1>
    <br />
    <Calculator />
  </div>

export default Projects;