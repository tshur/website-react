import React, { Component } from 'react';
import styles from './index.css';

import Display from '../Display';
import Key from '../Key';

class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(symbol) {
    const { value } = this.state;
    let newValue;
    if (symbol === 'C') {
      newValue = '0';
    } else {
      newValue = value * 10 + parseInt(symbol, 10);
    }

    this.setState({
      value: newValue
    });
  }

  render() {
    const { value } = this.state;

    return (
      <div className={styles.calculator}>
        <h1>Simple Calculator</h1>
        <Display value={value} />
        <div className={styles.keys}>
          <Key symbol='C' onClick={() => this.handleClick('C')} />
          <Key symbol='1' onClick={() => this.handleClick('1')} />
          <Key symbol='2' onClick={() => this.handleClick('2')} />
          <Key symbol='3' onClick={() => this.handleClick('3')} />
        </div>
      </div>
    );
  }
}

export default Calculator;
