import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.css';

const Square = ({ value, onClick, winningSquare }) =>
  <button
    className={`${styles.square} ${winningSquare ? styles.highlight : ''}`}
    onClick={onClick}
  >
    {value}
  </button>

Square.defaultProps = {
  value: null,
  winningSquare: false
};

Square.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  winningSquare: PropTypes.bool
}

export default Square;