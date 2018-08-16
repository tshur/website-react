import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import KeyPad from '.';

describe('KeyPad', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<KeyPad />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('has a valid snapshot', () => {
    const wrapper = shallow(
      <KeyPad />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
