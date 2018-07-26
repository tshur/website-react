import React from 'react';
import { Link } from 'react-router-dom';

import styles from './index.css';

const Navbar = () =>
  <div className={`container ${styles.nav}`}>
    <Link to='/' className='link'>
      <div className={styles.button}>
        <div className={styles.text}>
          Home
        </div>
      </div>
    </Link>
    <Link to='/about' className='link'>
      <div className={styles.button}>
        <div className={styles.text}>
          About
        </div>
      </div>
    </Link>
    <Link to='/projects' className='link'>
      <div className={styles.button}>
        <div className={styles.text}>
          Projects
        </div>
      </div>
    </Link>
  </div>

export default Navbar;