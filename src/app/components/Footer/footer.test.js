/* eslint-disable no-undef */
import React from './node_modules/react';
import Footer, { footerText } from './footer';
import { configure, shallow } from './node_modules/enzyme';
import Adapter from './node_modules/enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<Footer />', () => {
  it('renders Footer', () => {
    const footer = shallow(<Footer />);
    const text = footer.find('p').text();
    expect(text).toEqual(footerText);
  });
});
