/* eslint-disable no-undef */
import React from 'react';
import Footer, { footerText } from './footer';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<Footer />', () => {
  it('renders Footer', () => {
    const footer = shallow(<Footer />);
    const text = footer.find('p').text();
    expect(text).toEqual(footerText);
  });
});
