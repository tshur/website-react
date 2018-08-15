import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Key from '.';

describe('Key', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Key />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('has a valid snapshot', () => {
    const wrapper = shallow(
      <Key />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
