/* eslint-disable no-undef */
import React from 'react';
import Home, { message } from './home';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<Home />', () => {
  it('renders Home', () => {
    const home = shallow(<Home />);
    const text = home.find('h3').text();
    expect(text).toBeTruthy();
  });
});
