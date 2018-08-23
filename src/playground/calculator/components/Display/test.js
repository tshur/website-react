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

  test('represents numbers with many digits', () => {
    const wrapper = shallow(
      <Display />
    );
    const displayText = () => wrapper.find('div>div').text();

    // Large numbers
    wrapper.setProps({ value: 999999999 });
    expect(displayText()).toEqual('999999999');
    wrapper.setProps({ value: 1000000000 });
    expect(displayText()).toEqual('1.0000e+9');

    // Small numbers
    wrapper.setProps({ value: 0.1234567 });
    expect(displayText()).toEqual('0.1234567');
    wrapper.setProps({ value: 6.1234567 });
    expect(displayText()).toEqual('6.1234567');
    wrapper.setProps({ value: 0.0123456789 });
    expect(displayText()).toEqual('0.01234568');

    // Mixed precision
    wrapper.setProps({ value: 12345.6789 });
    expect(displayText()).toEqual('12345.6789');
    wrapper.setProps({ value: 12.3456789 });
    expect(displayText()).toEqual('12.3456789');

    // Negative numbers
    wrapper.setProps({ value: -123456789 });
    expect(displayText()).toEqual('-1.2346e+8');
  });
});
