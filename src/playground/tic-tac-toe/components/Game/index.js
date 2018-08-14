import React, { Component } from 'react';
import styles from './index.css';

import Board from '../Board';

class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      history: [
        {
          squares: Array(9).fill(null)
        }
      ],
      x_is_next: true
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(i) {
    const { history, x_is_next } = this.state;
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    if (calculate_winner(squares) || squares[i])
      return;

    squares[i] = x_is_next ? 'X' : 'O';
    this.setState({
      history: [
        ...history,
        {squares: squares}
      ],
      x_is_next: !x_is_next
    });
  }

  render() {
    const { history, x_is_next } = this.state;
    const current = history[history.length - 1];
    const winner = calculate_winner(current.squares);

    const moves = history.map((step, move) => {
      const desc =
        move
        ? `Go to move # ${move}`
        : `Go to game start`;
      return (
        <li>
          {desc}
        </li>
      );
    });

    let status;
    if (winner)
      status = `Winner: ${winner}`
    else
      status = `Next player: ${x_is_next ? 'X' : 'O'}`

    return (
      <div>
        <h1> Tic Tac Toe! </h1>
        <Board squares={current.squares} onClick={(i) => this.handleClick(i)}/>
        <div className={styles.status}>
          <div> {status} </div>
          <ul> {moves} </ul>
        </div>
      </div>
    );
  }
}

const calculate_winner = squares => {
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
      return squares[a];
  }
  return null;
}

export default Game;