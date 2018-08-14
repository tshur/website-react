import React, { Component } from 'react';

import Board from '../Board';

class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      squares: Array(9).fill(null),
      x_is_next: true
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(i) {
    if (this.state.squares[i])
      return;

    const { x_is_next } = this.state;
    const squares = this.state.squares.slice();
    squares[i] = x_is_next ? 'X' : 'O';
    this.setState({
      squares,
      x_is_next: !x_is_next
    });
  }

  render() {
    const { squares, x_is_next } = this.state;

    return (
      <div>
        <h1> Tic Tac Toe! </h1>
        <p> Next player: {x_is_next ? 'X' : 'O'} </p>
        <Board squares={squares} onClick={(i) => this.handleClick(i)}/>
      </div>
    );
  }
}

export default Game;