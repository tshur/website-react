import React from 'react';
import './App.css';

import Hobbies from './Hobbies.js';
import AddHobby from './AddHobby.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: 'tim.shur',
      hobbies: [
        'cooking',
        'coding',
        'gaming'
      ]
    };

    this.handleChange = this.handleChange.bind(this);
    this.addHobby = this.addHobby.bind(this);
  }

  handleChange(e) {
    this.setState({
      username: e.target.value
    });
  }

  addHobby(hobby) {
    this.setState((state) => ({
      hobbies: state.hobbies.concat([hobby])
    }));
  }

  render() {
    return (
      <div>
        <div className="splash">
          <h1> Hello, there {this.state.username} -- is your name {this.props.name}? </h1>
          Change name:
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleChange}
          />
        </div>
        <br />
        <div className="hobbies">
          <h3> Name: {this.props.name} </h3>
          <AddHobby addNew={this.addHobby} />
          <Hobbies hobbies={this.state.hobbies} />
        </div>
      </div>
    );
  }
}

export default App;
