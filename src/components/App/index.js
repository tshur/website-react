import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './index.scss';

import Navbar from '../Navbar';
import Home from '../MainPages/Home';
import About from '../MainPages/About';
import Projects from '../MainPages/Projects';
import Resume from '../MainPages/Resume';
import NotFound from '../NotFound';

const App = () =>
  <div className='app'>
    <Navbar />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/projects' component={Projects} />
      <Route path='/resume' component={Resume} />
      <Route component={NotFound} />
    </Switch>
  </div>

export default App;
