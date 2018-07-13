import React from 'react';
import './index.css';

import Footer from '../Footer';

const Body = (props) =>
  <div>
    <h1> Body </h1>
    <p> {props.match.path} </p>
    <Footer />
  </div>

export default Body;