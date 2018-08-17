import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Board from '.';

describe('Board', () => {
  const squares = Array(9).fill(null);

  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Board
        squares={squares}
        onClick={() => ''}
      />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('has a valid snapshot', () => {
    const wrapper = shallow(
      <Board
        squares={squares}
        onClick={() => ''}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('renders 9 Squares', () => {
    const wrapper = shallow(
      <Board
        squares={squares}
        onClick={() => ''}
      />
    );
    expect(wrapper.find('Square').length).toBe(9);
  });
});
