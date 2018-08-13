import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Board from '.';

describe('Board', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Board />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('has a valid snapshot', () => {
    const component = renderer.create(
      <Board />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
