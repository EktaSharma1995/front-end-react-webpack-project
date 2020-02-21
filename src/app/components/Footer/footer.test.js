/* eslint-disable no-undef */
import React from "react";
import Footer, { footerText } from "./footer";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
// import { footerText } from './Footer';

configure({ adapter: new Adapter() });

describe("<Footer />", () => {
  it("renders Footer", () => {
    const footer = shallow(<Footer />);
    const text = footer.find("p").text();
    expect(text).toEqual(footerText);
  });
});

// it('Footer text check', () => {
//     expect(footerText).toBe('Copyright &copy; www.reactproject.com');
// });
