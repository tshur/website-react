import React from 'react';
import { Switch, Route } from 'react-router-dom';

import styles from './index.css';

import Navbar from '../Navbar';
import Body from '../Body';
import NotFound from '../NotFound';
import Footer from '../Footer';

const App = () =>
  <div className={styles.app}>
    <Navbar />
    <Switch>
      <Route exact path='/' component={Body} />
      <Route path='/about' component={Body} />
      <Route path='/projects' component={Body} />
      <Route component={NotFound} />
    </Switch>
    <Footer />
  </div>

export default App;
