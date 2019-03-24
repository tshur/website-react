import React, { Component } from 'react';
import './index.scss';

import Board from '../Board';

class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
          moveLocation: [null, null]
        }
      ],
      moveNumber: 0,
      reversed: false,
      xIsNext: true
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleReverse = this.handleReverse.bind(this);
    this.jumpTo = this.jumpTo.bind(this);
  }

  handleClick(i) {
    const { moveNumber, xIsNext } = this.state;
    const history = this.state.history.slice(0, moveNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    const moveLocation = [Math.floor(i / 3), i % 3];

    if (calculateWinner(squares).winner || squares[i])
      return;

    squares[i] = xIsNext ? 'X' : 'O';
    this.setState({
      history: [
        ...history,
        {
          squares,
          moveLocation
        }
      ],
      moveNumber: history.length,
      xIsNext: !xIsNext
    });
  }

  handleReverse() {
    this.setState({
      reversed: !this.state.reversed
    });
  }

  jumpTo(move) {
    this.setState({
      moveNumber: move,
      xIsNext: (move % 2) === 0
    });
  }

  render() {
    const { history, moveNumber, reversed, xIsNext } = this.state;
    const current = history[moveNumber];
    const { winner, winningLine } = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const [row, col] = step.moveLocation;
      const desc =
        move
        ? `Go to move #${move} at (${row}, ${col})`
        : `Go to game start`;

      return (
        <button
          key={move}
          className={`move button ${move === moveNumber ? 'selected' : ''}`}
          onClick={() => this.jumpTo(move)}
        >
          {desc}
        </button>
      );
    });

    if (reversed)
      moves.reverse();

    let status;
    if (!winner)
      status = `Next player: ${xIsNext ? 'X' : 'O'}`;
    else if (winner === 'tie')
      status = `It's a draw!`;
    else
      status = `Winner: ${winner}`;

    return (
      <div className='tic-tac-toe'>
        <div>
          <h1>Tic Tac Toe!</h1>
          <Board
            winningLine={winningLine}
            squares={current.squares}
            onClick={i => this.handleClick(i)}
          />
        </div>
        <div className='info'>
          <div className='status'>{status}</div>
          <button className='button' onClick={this.handleReverse}> Reverse </button>
          <div className='moveList'>{moves}</div>
        </div>
      </div>
    );
  }
}

const calculateWinner = squares => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let line of lines) {
    let [a, b, c] = line;
    if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c])
      return {winner: squares[a], winningLine: line};
  }

  for (let i = 0; i < squares.length; i++)
    if (!squares[i])
      return {winner: null, winningLine: null};  // game in progress

  return {winner: 'tie', winningLine: null};  // tie
};

export default Game;