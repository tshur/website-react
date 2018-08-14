import React from 'react';
import styles from './index.css';

const Square = ({ value, onClick, winningSquare }) =>
  <button
    className={`${styles.square} ${winningSquare ? styles.highlight : ''}`}
    onClick={onClick}
  >
    {value}
  </button>

export default Square;