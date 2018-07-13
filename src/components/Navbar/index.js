import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import './index.css';

import Body from '../Body';
import NotFound from '../NotFound';

const Navbar = () =>
  <div>
    <ul>
      <li>
        <Link to='/'> Home </Link>
      </li>
      <li>
        <Link to='/about'> About </Link>
      </li>
      <li>
        <Link to='/projects'> Projects </Link>
      </li>
    </ul>

    <Switch>
      <Route exact path='/' component={Body} />
      <Route path='/about' component={Body} />
      <Route path='/projects' component={Body} />
      <Route component={NotFound} />
    </Switch>
  </div>

export default Navbar;