import React, { Component } from 'react';
import styles from './index.css';

import Square from '../Square';

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      squares: Array(9).fill(null)
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = 'X';
    this.setState({ squares });
  }

  renderSquare(i) {
    const { squares } = this.state;

    return (
      <Square
        value={squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    return (
      <div>
        <div className={styles.row}>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className={styles.row}>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className={styles.row}>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

export default Board;