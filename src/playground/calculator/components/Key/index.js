import React from 'react';
import styles from './index.css';
import styled from 'styled-components';

const Button = styled.button`
  background: #eee;
  border: 1px solid black;
  height: 30px;
  width: 30px;
  cursor: pointer;
  &:focus {
    outline: 0;
  }
`;

const Key = ({ symbol, onClick }) =>
  <div className={styles.key}>
    <Button onClick={onClick}>
      {symbol}
    </Button>
  </div>

export default Key;
