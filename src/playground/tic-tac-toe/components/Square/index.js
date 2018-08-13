import React from 'react';
import styles from './index.css';

const Square = ({ value, onClick }) =>
  <button className={styles.square} onClick={onClick}>
    {value}
  </button>

export default Square;