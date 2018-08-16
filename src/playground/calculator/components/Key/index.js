import React from 'react';
import styles from './index.css';
import styled from 'styled-components';

const Button = styled.button`
  background: #eee;
  border: 1px solid black;
  height: 60px;
  width: 60px;
  cursor: pointer;
  &:focus {
    outline: 0;
  }
  &:hover {
    background: #ddd;
  }
`;

const Key = ({ symbol, onClick }) =>
  <div className={styles.key}>
    <Button
      className={symbol === '0' ? styles.wide : ''}
      onClick={onClick}
    >
      {symbol}
    </Button>
  </div>

export default Key;
