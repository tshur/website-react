import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import AddHobby from '.';

describe('AddHobby', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AddHobby />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('has a valid snapshot', () => {
    const component = renderer.create(
      <AddHobby />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
