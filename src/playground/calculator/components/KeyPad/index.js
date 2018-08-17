import React from 'react';
import styles from './index.css';

import Key from '../Key';

const KeyPad = ({ onClick, operator, current }) => {
  let clear_type = current || operator ? 'C' : 'AC';
  return (
    <div>
      <div className={styles.row}>
        <Key symbol={clear_type} onClick={() => onClick(clear_type)} />
        <Key symbol='+/-' onClick={() => onClick('+/-')} />
        <Key symbol='%' onClick={() => onClick('%')} />
        <Key symbol='/' onClick={() => onClick('/')} operator={operator} />
      </div>

      <div className={styles.row}>
        <Key symbol='7' onClick={() => onClick('7')} />
        <Key symbol='8' onClick={() => onClick('8')} />
        <Key symbol='9' onClick={() => onClick('9')} />
        <Key symbol='*' onClick={() => onClick('*')} operator={operator} />
      </div>

      <div className={styles.row}>
        <Key symbol='4' onClick={() => onClick('4')} />
        <Key symbol='5' onClick={() => onClick('5')} />
        <Key symbol='6' onClick={() => onClick('6')} />
        <Key symbol='-' onClick={() => onClick('-')} operator={operator} />
      </div>

      <div className={styles.row}>
        <Key symbol='1' onClick={() => onClick('1')} />
        <Key symbol='2' onClick={() => onClick('2')} />
        <Key symbol='3' onClick={() => onClick('3')} />
        <Key symbol='+' onClick={() => onClick('+')} operator={operator} />
      </div>

      <div className={styles.row}>
        <Key symbol='0' onClick={() => onClick('0')} />
        <Key symbol='.' onClick={() => onClick('.')} />
        <Key symbol='=' onClick={() => onClick('=')} />
      </div>
    </div>
  );
}

export default KeyPad;
