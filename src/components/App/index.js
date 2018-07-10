import React, { Component } from 'react';
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

    return (
      <div className="app">
        <div className="splash">
          <h1> Hello, {username}. Welcome to my blog! </h1>
          Change name:
          <input
            type="text"
            value={username}
            onChange={this.onNameChange}
          />
        </div>
        <br />
        <div className="hobbies">
          <AddHobby addNew={this.addHobby} />
          <Hobbies hobbies={hobbies} />
        </div>
      </div>
    );
  }
}

export default App;
