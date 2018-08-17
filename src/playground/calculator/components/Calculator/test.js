import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
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
});

describe('Calculator logic', () => {
  let wrapper, keypad, click, clicks;

  beforeEach(() => {
    wrapper = shallow(
      <Calculator />
    );
    keypad = wrapper.find('KeyPad');
    click = symbol => keypad.simulate('click', String(symbol));
    clicks = symbols => symbols.forEach(s => click(s));
  });

  test('inputs numbers correctly', () => {
    clicks([0, 1]);
    expect(wrapper.state('current')).toEqual('1');

    clicks([2, 3, 4, 5, 6, 7, 9, 0]);
    expect(wrapper.state('current')).toEqual('123456790');

    // Too many digits
    clicks([5, 6, 7]);
    expect(wrapper.state('current')).toEqual('123456790');
  });

  // Test different operator combinations
  for (let op of ['+', '-', '*', '/']) {
    for (let a of [2]) {
      for (let b of [-3, 0, 1]) {
        let c = OPERATOR_FN[op](a, b);

        test(`correct result for ${a} ${op} ${b} = ${c}`, () => {
          clicks([a, op, b, '=']);
          expect(wrapper.state('total')).toEqual(c);
        });
      }
    }
  }

  test('clear works correctly', () => {
    clicks([1, 2, '=', 3, 4]);
    expect(wrapper.state('total')).toEqual(12);
    expect(wrapper.state('current')).toEqual('34');

    // Single clear
    click('C');
    expect(wrapper.state('total')).toEqual(12);
    expect(wrapper.state('current')).toEqual('0');

    // Double clear (AC)
    click('AC');
    expect(wrapper.state('total')).toEqual(null);
    expect(wrapper.state('current')).toEqual(null);

    // Clear mid-operation
    clicks([1, 2, '+', 3, 4, 'C', 4, 8, '=']);
    expect(wrapper.state('total')).toEqual(60);

    // Clear operator
    clicks([1, '+', 1, 'AC']);
    expect(wrapper.state('operator')).toEqual(null);
  });

  test('equals works correctly', () => {
    clicks([1, '=']);
    expect(wrapper.state('total')).toEqual(1);

    clicks([5, '+', '=']);
    expect(wrapper.state('total')).toEqual(5);
    expect(wrapper.state('operator')).toEqual(null);
  });

  test('decimal point works correctly', () => {
    clicks([1, '.', 0, '.', 1, '.']);
    expect(wrapper.state('current')).toEqual('1.01');

    clicks(['+', '.', 1, 2]);
    expect(wrapper.state('current')).toEqual('0.12');

    clicks(['+', '.']);
    expect(wrapper.state('total')).toEqual(1.13);
    expect(wrapper.state('current')).toEqual('0.');
  });

  test('percent (%) works correctly', () => {
    clicks([5, '%', '%']);
    expect(wrapper.state('current')).toEqual('0.0005');

    clicks(['AC', 1, '.', 0, '%']);
    expect(wrapper.state('current')).toEqual('0.01');
  });

  test('+/- works correctly', () => {
    clicks([1, '+/-']);
    expect(wrapper.state('current')).toEqual('-1');

    clicks(['+', 2, '+/-', '+/-', '+/-', '=']);
    expect(wrapper.state('total')).toEqual(-3);

    clicks(['1', '+', '+/-']);
    expect(wrapper.state('current')).toEqual('-0');

    clicks(['AC', 1, '+', '+/-', 1, '=']);
    expect(wrapper.state('total')).toEqual(0);
  });
});
