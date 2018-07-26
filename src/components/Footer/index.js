import React from 'react';
import styles from './index.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () =>
  <div className={`container ${styles.footer}`}>
    <div className={styles.contact}>
      <div className={styles.item}>
        <FontAwesomeIcon icon={faEnvelope} className={styles.icon} size='lg'/>
        <div className={styles.text}>
          tim.shur@gmail.com
        </div>
      </div>
      <div className={`${styles.item} ${styles.linkedin}`}>
        <FontAwesomeIcon icon={faLinkedin} className={styles.icon} size='lg'/>
        <div className={styles.text}>
          linkedin.com/in/timshur
        </div>
      </div>
    </div>
  </div>

export default Footer;