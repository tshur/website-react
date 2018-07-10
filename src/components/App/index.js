import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';

import Hobbies from '../Hobbies';
import AddHobby from '../AddHobby';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: 'tim.shur',
      hobbies: [],
    };

    this.onNameChange = this.onNameChange.bind(this);
    this.addHobby = this.addHobby.bind(this);
  }

  onNameChange(event) {
    this.setState({
      username: event.target.value
    });
  }

  addHobby(hobby) {
    this.setState({
      hobbies: [...this.state.hobbies, hobby]
    });
  }

  render() {
    const { username, hobbies } = this.state;
    const { name } = this.props;

    return (
      <div>
        <div className="splash">
          <h1> Hello, there {username} -- is your name {name}? </h1>
          Change name:
          <input
            type="text"
            value={username}
            onChange={this.onNameChange}
          />
        </div>
        <br />
        <div className="hobbies">
          <h3> Name: {name} </h3>
          <AddHobby addNew={this.addHobby} />
          <Hobbies hobbies={hobbies} />
        </div>
      </div>
    );
  }
}

App.defaultProps = {
  name: 'Name'
}

App.propTypes = {
  name: PropTypes.string.isRequired
}

export default App;
