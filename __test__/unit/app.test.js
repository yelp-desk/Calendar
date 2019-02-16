import React from 'react';
import Enzyme, { mount, render, shallow } from 'enzyme';
import App from '../../public/app.jsx';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter});

describe('App tests', () => {

  test("successfully mounts App", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true)
  })
 });
