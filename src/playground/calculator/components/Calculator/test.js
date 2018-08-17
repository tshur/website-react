import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Calculator from '.';

const OPERATOR_FN = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => a / b,
}

describe('Calculator', () => {

  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Calculator />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('has a valid snapshot', () => {
    const wrapper = shallow(
      <Calculator />
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('inputs numbers correctly', () => {
    const wrapper = shallow(
      <Calculator />
    );
    const keypad = wrapper.find('KeyPad');
    const click = symbol => keypad.simulate('click', String(symbol));

    click(0), click(1);
    expect(wrapper.state('current')).toEqual('1');

    click(1), click(2), click(3), click(4), click(5);
    click(6), click(7), click(8), click(9), click(0);
    expect(wrapper.state('current')).toEqual('11234567890');
  });

  // Test different operator combinations
  for (let op of ['+', '-', '*', '/']) {
    for (let a of [2]) {
      for (let b of [-3, 0, 1]) {
        let c = OPERATOR_FN[op](a, b);
        test(`correct result for ${a} ${op} ${b} = ${c}`, () => {
          const wrapper = shallow(
            <Calculator />
          );
          const keypad = wrapper.find('KeyPad');
          const click = symbol => keypad.simulate('click', String(symbol));

          click(a), click(op), click(b), click('=');
          expect(wrapper.state('total')).toEqual(c);
        });
      }
    }
  }

  test('clear works correctly', () => {
    const wrapper = shallow(
      <Calculator />
    );
    const keypad = wrapper.find('KeyPad');
    const click = symbol => keypad.simulate('click', String(symbol));

    click(1), click(2), click('=');
    click(3), click(4);
    expect(wrapper.state('total')).toEqual(12);
    expect(wrapper.state('current')).toEqual('34');

    // Single clear
    click('C');
    expect(wrapper.state('total')).toEqual(12);
    expect(wrapper.state('current')).toEqual(null);

    // Double clear (AC)
    click('C');
    expect(wrapper.state('total')).toEqual(null);
    expect(wrapper.state('current')).toEqual(null);

    // Clear mid-operation
    click(1), click(2), click('+');
    click(3), click(4), click('C');
    click(4), click(8), click('=');
    expect(wrapper.state('total')).toEqual(60);
  });

  test('equals works correctly', () => {

  });

  test('+/- works correctly', () => {

  });
});
