import React from 'react';
import styles from './index.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () =>
  <div className={`container ${styles.footer}`}>
    <div className={styles.contact}>
      <div className={styles.item}>
        <a href='mailto:tim.shur@gmail.com'
           className='link'>
          <FontAwesomeIcon icon={faEnvelope} className={styles.icon} size='lg'/>
        </a>
        <a href='mailto:tim.shur@gmail.com'
           className={`${styles.text} link`}>
          tim.shur@gmail.com
        </a>
      </div>
      <div className={`${styles.item} ${styles.linkedin}`}>
        <a href='https://www.linkedin.com/in/timshur'
           className='link'>
          <FontAwesomeIcon icon={faLinkedin} className={styles.icon} size='lg'/>
        </a>
        <a href='https://www.linkedin.com/in/timshur'
           className={`${styles.text} link`}>
          linkedin.com/in/timshur
        </a>
      </div>
    </div>
  </div>

export default Footer;