import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './index.scss';

import Navbar from '../Navbar';
import Body from '../Body';
import NotFound from '../NotFound';

const App = () =>
  <div className='app'>
    <Navbar />
    <Switch>
      <Route exact path='/' component={Body} />
      <Route path='/about' component={Body} />
      <Route path='/projects' component={Body} />
      <Route component={NotFound} />
    </Switch>
  </div>

export default App;
