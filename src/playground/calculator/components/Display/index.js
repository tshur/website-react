import React from 'react';
import styles from './index.css';

import { format_value } from '../../logic/format.js';

const Display = ({ value }) => {
  value = format_value(value, 9);

  return (
    <div className={styles.display}>
      <div className={styles.value}>{value}</div>
    </div>
  );
}

export default Display;
