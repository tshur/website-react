import React from 'react';
import './index.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () =>
  <div className='container footer'>
    <div className='contact'>
      <div className='item'>
        <a href='mailto:tim.shur@gmail.com'
           className='link'>
          <FontAwesomeIcon icon={faEnvelope} className='icon' size='lg'/>
        </a>
        <a href='mailto:tim.shur@gmail.com'
           className='text link'>
          tim.shur@gmail.com
        </a>
      </div>
      <div className='item linkedin'>
        <a href='https://www.linkedin.com/in/timshur'
           className='link'>
          <FontAwesomeIcon icon={faLinkedin} className='icon' size='lg'/>
        </a>
        <a href='https://www.linkedin.com/in/timshur'
           className='text link'>
          linkedin.com/in/timshur
        </a>
      </div>
    </div>
  </div>

export default Footer;