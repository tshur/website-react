import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Body from '.';

describe('Body', () => {
  const props = {
    match: {
      path: '/'
    }
  }

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Body {...props} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('has a valid snapshot', () => {
    const component = renderer.create(
      <Body {...props} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
