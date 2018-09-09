import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Projects from '.';

describe('Projects', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Projects />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('has a valid snapshot', () => {
    const wrapper = shallow(
      <Projects />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
