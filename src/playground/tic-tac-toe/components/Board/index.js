import React from 'react';
import styles from './index.css';

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
      board.push(<div key={i} className={styles.row}>{row}</div>);
    }
    return board;
  }

  return (
    <div className={styles.board}>
      {renderBoard(3)}
    </div>
  );
}

export default Board;