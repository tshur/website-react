import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Hobbies from '.';

describe('Hobbies', () => {

  const props = {
    hobbies: [
      'coding',
      'cooking',
      'kayaking',
    ]
  }

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Hobbies { ...props } />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('has a valid snapshot', () => {
    const component = renderer.create(
      <Hobbies { ...props } />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
