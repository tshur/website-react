import React from 'react';
import styles from './index.css';

import Feed from '../../playground/reddit-feed/components/Feed';

const Projects = () =>
  <div className={`container ${styles.projects}`}>
    <h1> Projects </h1>
    <br />
    <Feed />
  </div>

export default Projects;