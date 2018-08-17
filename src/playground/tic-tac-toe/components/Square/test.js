import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Square from '.';

describe('Square', () => {

  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Square
        onClick={() => this.props.value = 'O'}
      />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('has a valid snapshot', () => {
    const wrapper = shallow(
      <Square
        onClick={() => this.props.value = 'O'}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
