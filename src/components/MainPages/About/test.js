import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import About from '.';

describe('About', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<About />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('has a valid snapshot', () => {
    const component = renderer.create(
      <About />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
