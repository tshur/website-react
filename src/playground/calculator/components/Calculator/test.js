import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Calculator from '.';

describe('Calculator', () => {

  it('renders without crashing', () => {
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
