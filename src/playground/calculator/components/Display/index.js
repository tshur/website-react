import React from 'react';
import styles from './index.css';

const Display = ({ value }) => {
  if (!isFinite(value))
    value = 'Error';

  value = String(value);
  if (
    value.length > 9 ||
    (value.startsWith('-') && value.length === 9))
  {
    let guess = parseFloat(value).toPrecision(5);
    if (String(guess).length < 9) {
      if (parseFloat(value) < 1)
        value = parseFloat(value).toFixed(8);
      else
        value = parseFloat(value).toPrecision(8);
    } else {
      value = guess;
    }
  }

  return (
    <div className={styles.display}>
      <div className={styles.value}>{value}</div>
    </div>
  );
}

export default Display;
