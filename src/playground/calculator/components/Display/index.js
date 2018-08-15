import React from 'react';
import styles from './index.css';

const Display = ({ value }) =>
  <div className={styles.display}>
    <div className={styles.value}>{value}</div>
  </div>

export default Display;
