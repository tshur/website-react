import React, { Component } from 'react';
import styles from './index.css';

import Display from '../Display';
import KeyPad from '../KeyPad';

import { calculate, valid_symbol } from '../../logic/calculate';


class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: null,
      current: null,
      operator: null,
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleClick(symbol) {
    this.setState(
      calculate({
        ...this.state,
        symbol
      })
    );
  }

  handleKeyDown(event) {
    let { key } = event;

    if (key === 'Enter')
      key = '=';
    else if (key === 'Backspace' ||
             key === 'Delete')
      key = 'C';
    else if (key === 'Escape')
      key = 'AC';

    if (valid_symbol(key)) {
      event.preventDefault();
      this.handleClick(key);
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
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
