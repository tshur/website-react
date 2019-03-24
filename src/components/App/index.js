import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './index.scss';

import Navbar from '../Navbar';
import Home from '../Home';
import About from '../About';
import Projects from '../Projects';
import NotFound from '../NotFound';

const App = () =>
  <div className='app'>
    <Navbar />
    <div className='body-container'>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/projects' component={Projects} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </div>

export default App;
