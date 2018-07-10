import React from 'react';
import PropTypes from 'prop-types';

const Hobbies = ({ hobbies }) =>
  <div>
    <h3> Hobbies: </h3>
    <ul>
      { hobbies
        ? hobbies.map((hobby, index) =>
          <li key={index}> {hobby} </li>
        )
        : <li> none </li>
      }
    </ul>
  </div>

Hobbies.defaultProps = {
  hobbies: []
};

Hobbies.propTypes = {
  hobbies: PropTypes.arrayOf(
    PropTypes.string
  ).isRequired
}

export default Hobbies;