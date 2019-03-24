import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

import Square from '../Square';

const Board = ({ winningLine, squares, onClick }) => {
  const renderSquare = i =>
    <Square
      key={i}
      value={squares[i]}
      onClick={() => onClick(i)}
      winningSquare={(winningLine && winningLine.includes(i)) || null}
    />

  const renderBoard = () => {
    const board = [];
    for (let i = 0; i < 3; i++) {
      const row = [];
      for (let j = 0; j < 3; j++) {
        row.push(renderSquare(3 * i + j));
      }
      board.push(<div key={i} className='row'>{row}</div>);
    }
    return board;
  };

  return (
    <div className='board'>
      {renderBoard(3)}
    </div>
  );
}

Board.defaultProps = {
  winningLine: null
};

Board.propTypes = {
  winningLine: PropTypes.arrayOf(
    PropTypes.number
  ),
  squares: PropTypes.arrayOf(
    PropTypes.string
  ).isRequired,
  onClick: PropTypes.func.isRequired
};

export default Board;