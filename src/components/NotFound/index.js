import React from 'react';
import styles from './index.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFrown } from '@fortawesome/free-solid-svg-icons';

const NotFound = () =>
  <div className={`container ${styles.not_found}`}>
    <div className={styles.center}>
      <FontAwesomeIcon icon={faFrown} size='8x' />
      <div className={styles.big}>
        404
      </div>
      <div className={styles.text}>
        Oops! This page does not exist!
      </div>
    </div>
  </div>

export default NotFound;