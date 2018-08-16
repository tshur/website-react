import React, { Component } from 'react';
import styles from './index.css';

import Display from '../Display';
import KeyPad from '../KeyPad';


const OPERATOR_FN = {
  null: (total, current) => parseInt(current, 10),
  '+': (total, current) => total + parseInt(current, 10),
  '-': (total, current) => total - parseInt(current, 10),
  '*': (total, current) => total * parseInt(current, 10),
  '/': (total, current) => total / parseInt(current, 10),
}

class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: null,
      current: null,
      operator: null,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(symbol) {
    let { total, current, operator } = this.state;

    if (symbol === 'C') {
      if (current === null)
        total = null;
      current = null;

    } else if (symbol === '+/-') {
      if (current) {
        if (current[0] === '-')
          current = current.slice(1);
        else
          current = '-' + current;
      } else if (total && !operator) {
        current = '-' + total;
      }

    } else if (symbol in OPERATOR_FN || symbol === '=') {
      if (current) {
        total = OPERATOR_FN[operator](total, current);
        current = null;
      }
      operator = symbol === '=' ? null : symbol;

    } else {
      if (!current || current === '0')
        current = ''
      else if (current === '-0')
        current = '-';

        current += symbol;
    }

    this.setState({
      total,
      current,
      operator
    });
  }

  render() {
    const { current, total } = this.state;

    return (
      <div className={styles.calculator}>
        <h1>Simple Calculator</h1>
        <Display value={current || total || '0'} />
        <KeyPad onClick={symbol => this.handleClick(symbol)} />
      </div>
    );
  }
}

export default Calculator;
