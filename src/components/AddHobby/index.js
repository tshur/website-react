import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddHobby extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newHobby: ''
    };

    this.updateNewHobby = this.updateNewHobby.bind(this);
    this.handleAddNew = this.handleAddNew.bind(this);
  }

  updateNewHobby(e) {
    this.setState({
      newHobby: e.target.value
    });
  }

  handleAddNew() {
    if (!!this.state.newHobby) {
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
          onChange={this.updateNewHobby}
        />
        <button onClick={this.handleAddNew}> Add Hobby </button>
      </div>
    );
  }
}

AddHobby.propTypes = {
  addNew: PropTypes.func
}

export default AddHobby;