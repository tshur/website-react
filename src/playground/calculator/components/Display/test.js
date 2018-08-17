import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Display from '.';

describe('Display', () => {

  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Display />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('has a valid snapshot', () => {
    const wrapper = shallow(
      <Display />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
