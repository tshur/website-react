import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import TicTacToe from '.';

describe('TicTacToe', () => {

  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TicTacToe />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('has a valid snapshot', () => {
    const wrapper = shallow(
      <TicTacToe />
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('ignores click appropriately', () => {
    const wrapper = shallow(
      <TicTacToe />
    );
    const board = wrapper.find('Board');

    // click same Square twice
    board.simulate('click', 0);
    const firstState = wrapper.state();
    board.simulate('click', 0);
    expect(wrapper.state()).toEqual(firstState);

    // click after game is won
    board.simulate('click', 3);
    board.simulate('click', 1);
    board.simulate('click', 4);
    board.simulate('click', 2);
    const winState = wrapper.state();
    board.simulate('click', 5);
    expect(wrapper.state()).toEqual(winState);
  });

  test('calculates next player correctly', () => {
    const wrapper = shallow(
      <TicTacToe />
    );
    const board = wrapper.find('Board');
    expect(wrapper.find('div.status').text()).toEqual('Next player: X');
    board.simulate('click', 0);
    expect(wrapper.find('div.status').text()).toEqual('Next player: O');
  })

  test('calculates game winner correctly', () => {
    const wrapper = shallow(
      <TicTacToe />
    );
    const board = wrapper.find('Board');
    board.simulate('click', 0);
    board.simulate('click', 2);
    board.simulate('click', 5);
    board.simulate('click', 4);
    board.simulate('click', 8);
    board.simulate('click', 6);
    expect(wrapper.find('div.status').text()).toEqual('Winner: O');
    expect(wrapper.find('Board').props()).toMatchObject({
      winningLine: [2, 4, 6],
      squares: [
        'X', null, 'O',
        null, 'O', 'X',
        'O', null, 'X'
      ]
    });
  })
});
