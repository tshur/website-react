import React, { Component } from 'react';
import styles from './index.css';

import Display from '../Display';
import KeyPad from '../KeyPad';

import { calculate } from '../../logic/calculate';


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
    this.setState(
      calculate({
        ...this.state,
        symbol
      })
    );
  }

  render() {
    const { current, total, operator } = this.state;

    return (
      <div className={styles.calculator}>
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
