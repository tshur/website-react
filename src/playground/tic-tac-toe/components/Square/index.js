import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const Square = ({ value, onClick, winningSquare }) =>
  <button
    className={`square ${winningSquare ? 'highlight' : ''}`}
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
};

export default Square;