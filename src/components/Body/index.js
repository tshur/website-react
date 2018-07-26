import React from 'react';
import styles from './index.css';

const Body = props => {
  let content;
  switch (props.match.path) {
    case '/':
      content = <p> HOME </p>;
      break;

    case '/about':
      content = <p> ABOUT </p>;
      break;

    case '/projects':
      content = <p> PROJECTS </p>;
      break;

    default:
      content = <p> Oh no! Something went wrong! </p>;
  }

  return (
    <div className={`container ${styles.body}`}>
      <h1> Body </h1>
      <p> {props.match.path} </p>
      {content}
    </div>
  );
}

export default Body;