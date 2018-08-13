import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Square from '.';

describe('Square', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Square />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('has a valid snapshot', () => {
    const component = renderer.create(
      <Square />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
