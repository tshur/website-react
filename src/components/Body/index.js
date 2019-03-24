import React from 'react';
import './index.scss';

import Home from '../Home';
import About from '../About';
import Projects from '../Projects';

const Body = props => {
  let content;
  switch (props.match.path) {
    case '/':
      content = <Home />;
      break;

    case '/about':
      content = <About />;
      break;

    case '/projects':
      content = <Projects />;
      break;

    default:
      content = <p> Oh no! Something went wrong! </p>;
  }

  return (
    <div className='container body'>
      {content}
    </div>
  );
}

export default Body;