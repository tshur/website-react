import React from 'react';
import { Link } from 'react-router-dom';

import './index.scss';

const Navbar = () =>
  <div className='container nav'>
    <Link to='/' className='link'>
      <div className='button'>
        <div className='text'>
          Home
        </div>
      </div>
    </Link>
    <Link to='/about' className='link'>
      <div className='button'>
        <div className='text'>
          About
        </div>
      </div>
    </Link>
    <Link to='/projects' className='link'>
      <div className='button'>
        <div className='text'>
          Projects
        </div>
      </div>
    </Link>
  </div>

export default Navbar;