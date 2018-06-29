import React from 'react';

class AddHobby extends React.Component {
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
    return (
      <div>
        <input
          type="text"
          value={this.state.newHobby}
          onChange={this.updateNewHobby}
        />
        <button onClick={this.handleAddNew}> Add Hobby </button>
      </div>
    );
  }
}

export default AddHobby;