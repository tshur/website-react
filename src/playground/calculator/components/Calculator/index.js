import React, { Component } from 'react';
import styles from './index.css';

import Display from '../Display';
import KeyPad from '../KeyPad';


const OPERATOR_FN = {
  null: (total, current) => parseFloat(current),
  '+': (total, current) => total + parseFloat(current),
  '-': (total, current) => total - parseFloat(current),
  '*': (total, current) => total * parseFloat(current),
  '/': (total, current) => total / parseFloat(current),
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

    if (symbol === 'AC') {
      total = null;
      current = null;
      operator = null;

    } else if (symbol === 'C') {
      current = '0';

    } else if (symbol === '+/-') {
      if (current) {
        if (current[0] === '-')
          current = current.slice(1);
        else
          current = '-' + current;
      } else if (total && !operator) {
        current = '-' + total;
      } else {
        current = '-0';
      }

    } else if (symbol === '%') {
      if (!current)
        current = '0';
      current = String(parseFloat(current) / 100.0)

    } else if (symbol === '.') {
      if (!current) {
        current = '0.';
      } else if (!current.includes('.')) {
        current += '.';
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
    const { current, total, operator } = this.state;

    return (
      <div className={styles.calculator}>
        <h1>Simple Calculator</h1>
        <Display value={current || total || '0'} />
        <KeyPad
          onClick={symbol => this.handleClick(symbol)}
          operator={current ? null : operator}
          current={current}
        />
      </div>
    );
  }
}

export default Calculator;
