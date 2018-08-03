import React from 'react';
import styles from './index.css';

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
    <div className={`container ${styles.body}`}>
      {content}
    </div>
  );
}

export default Body;