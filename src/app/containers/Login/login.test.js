/* eslint-disable no-undef */
import Login from './login';
import React from './node_modules/react';
import { configure, shallow, mount } from './node_modules/enzyme';
import Adapter from './node_modules/enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

// const credentials = { email: 'esharma1995@gmail.com', password: '123' };
const loginInfo = shallow(<Login />);
const emailInput = loginInfo.find('email');
// const passwordInput = loginInfo.find('password');
// const email = 'Email: esharma1995@gmail.com';

// const mockFunction = jest.fn();

it('input field email is required', () => {
  emailInput.length == 1;
});

// it('input field password is required', () => {
//     passwordInput.length == 1;
// });

// it('input field email should be filled correctly', () => {
//     emailInput.value = credentials.email;
//     expect(emailInput.value).toBe('esharma1995@gmail.com');
// });

// it('input field password should be filled correctly', () => {
//     passwordInput.value = credentials.password;
//     expect(passwordInput.value).toBe('123');
// });

// it('on button click', () => {
//     // const component = mount(<Login onClickFunction={mockFunction} />);
//     const onSubmitBtn = loginInfo.find('button.submitBtn');
//     onSubmitBtn.simulate('click');
//     const text = loginInfo.find('p').text();
//     expect(text).toEqual(email);
//     // expect(mockFunction).toHaveBeenCalled();

//     // component.unmount();
// });
