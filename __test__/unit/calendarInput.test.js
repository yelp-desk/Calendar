import React from 'react';
import Enzyme, { mount, render, shallow } from 'enzyme';
import CalendarInput from '../../public/calendarInput.jsx';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter});

describe('Calendar input tests', () => {

  test("successfully mounts CalendarInput", () => {
    const wrapper = shallow(<CalendarInput />);
    expect(wrapper.exists()).toBe(true)
  });
 });
