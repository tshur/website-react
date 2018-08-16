import React from 'react';
import styles from './index.css';
import styled from 'styled-components';

const Button = styled.button`
  background: #eee;
  transition: background 0.2s linear;
  border: 1px solid black;
  height: 60px;
  width: 60px;
  cursor: pointer;
  &:focus {
    outline: 0;
  }
  &:hover {
    background: #ccc;
  }
`;

const Key = ({ symbol, onClick, operator }) =>
  <div className={styles.key}>
    <Button
      className={`
        ${symbol === '0' ? styles.wide : ''}
        ${operator === symbol ? styles.highlight : ''}
      `}
      onClick={onClick}
    >
      {symbol}
    </Button>
  </div>

export default Key;
