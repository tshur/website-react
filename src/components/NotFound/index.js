import React from 'react';
import './index.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFrown } from '@fortawesome/free-solid-svg-icons';

const NotFound = () =>
  <div className='container not_found'>
    <div className='center'>
      <FontAwesomeIcon icon={faFrown} size='8x' />
      <div className='big'>
        404
      </div>
      <div className='text'>
        Oops! This page does not exist!
      </div>
    </div>
  </div>

export default NotFound;