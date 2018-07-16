import React from 'react';
import styles from './index.css';

import Footer from '../Footer';

const Body = (props) =>
  <div className='container'>
    <div className={styles.body}>
      <h1> Body </h1>
      <p> {props.match.path} </p>
    </div>
    <div className={styles.footer}>
      <Footer />
    </div>
  </div>

export default Body;