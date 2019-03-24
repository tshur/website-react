import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Projects from '.';

describe('Projects', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Projects />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('has a valid snapshot', () => {
    const component = renderer.create(
      <Projects />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
