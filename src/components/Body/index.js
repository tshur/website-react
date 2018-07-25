import React from 'react';
import styles from './index.css';

const Body = (props) =>
  <div className={`container ${styles.body}`}>
    <h1> Body </h1>
    <p> {props.match.path} </p>
  </div>

export default Body;