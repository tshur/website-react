import React from 'react';
import { Link } from 'react-router-dom';

import './index.scss';

const Navbar = () =>
  <div className='container nav'>
    <div className='nav-item'>
      <Link to='/' className='link'>
        <div className='button'>
          <div className='text'>
            Home
          </div>
        </div>
      </Link>
    </div>
    <div className='nav-item'>
      <Link to='/about' className='link'>
        <div className='button'>
          <div className='text'>
            About
          </div>
        </div>
      </Link>
    </div>
    <div className='nav-item'>
      <Link to='/projects' className='link'>
        <div className='button'>
          <div className='text'>
            Projects
          </div>
        </div>
      </Link>
    </div>
    <div className='nav-item'>
      <Link to='/resume' className='link'>
        <div className='button'>
          <div className='text'>
            Resume
          </div>
        </div>
      </Link>
    </div>
  </div>

export default Navbar;