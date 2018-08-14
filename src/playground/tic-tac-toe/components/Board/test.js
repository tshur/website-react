import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Board from '.';

describe('Board', () => {
  const squares = Array(9).fill(null);

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Board
        squares={squares}
        onClick={() => ''}
      />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('has a valid snapshot', () => {
    const component = renderer.create(
      <Board
        squares={squares}
        onClick={() => ''}
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
