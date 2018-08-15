import React, { Component } from 'react';
import styles from './index.css';

import Display from '../Display';
import Key from '../Key';

class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
      result: 0,
      showResult: true
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(symbol) {
    let { value, result, showResult } = this.state;

    if (symbol === 'C') {
      if (value === 0)
        result = 0;
      value = 0;
      showResult = true;
    } else if (symbol === '+') {
      // TODO: need to store _previous_ operator
      // because this is currently a polish calculator!
      result = result + value;
      value = 0;
      showResult = true;
    } else {
      value = value * 10 + parseInt(symbol, 10);
      showResult = false;
    }

    this.setState({
      value,
      result,
      showResult
    });
  }

  render() {
    const { value, result, showResult } = this.state;

    return (
      <div className={styles.calculator}>
        <h1>Simple Calculator</h1>
        <Display value={showResult ? result : value} />
        <div className={styles.keys}>
          <Key symbol='C' onClick={() => this.handleClick('C')} />
          <Key symbol='1' onClick={() => this.handleClick('1')} />
          <Key symbol='2' onClick={() => this.handleClick('2')} />
          <Key symbol='3' onClick={() => this.handleClick('3')} />
          <Key symbol='+' onClick={() => this.handleClick('+')} />
        </div>
      </div>
    );
  }
}

export default Calculator;
