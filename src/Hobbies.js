import React from 'react';

class Hobbies extends React.Component {
  render() {
    return (
      <div>
        <h3> Hobbies: </h3>
        <ul>
          {this.props.hobbies.map((hobby) => {
            return <li> {hobby} </li>
          })}
        </ul>
      </div>
    );
  }
}

Hobbies.defaultProps = {
  names: []
}

export default Hobbies;