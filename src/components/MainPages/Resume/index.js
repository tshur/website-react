import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

import './index.scss';

const Resume = () =>
  <div className='container resume'>
    <div className='nav-background'></div>
    <div className='resume-paper'></div>
    <a href='timothy_shur_resume.pdf' className='link' download>
      <div className='download'>
        <p className='download-text'>Download</p>
        <FontAwesomeIcon className='download-icon' icon={faDownload}></FontAwesomeIcon>
      </div>
    </a>
  </div>

export default Resume;