import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddHobby extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newHobby: ''
    };

    this.onNewHobby = this.onNewHobby.bind(this);
    this.onAddNew = this.onAddNew.bind(this);
  }

  onNewHobby(event) {
    this.setState({
      newHobby: event.target.value
    });
  }

  onAddNew() {
    if (this.state.newHobby) {
      this.props.addNew(this.state.newHobby);
      this.setState({
        newHobby: ''
      });
    }
  }

  render() {
    const { newHobby } = this.state;

    return (
      <div>
        <input
          type="text"
          value={newHobby}
          onChange={this.onNewHobby}
        />
        <button onClick={this.onAddNew}> Add Hobby </button>
      </div>
    );
  }
}

AddHobby.propTypes = {
  addNew: PropTypes.func
}

export default AddHobby;