import React from 'react';
import Enzyme, { mount, render, shallow } from 'enzyme';
import ReservationTitle from '../../public/reservationTitle.jsx';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter});

describe('Calendar input tests', () => {

  test("successfully mounts reservation title", () => {
    const wrapper = shallow(<ReservationTitle />);
    expect(wrapper.exists()).toBe(true);
  });

  test("renders title text properly", () => {
    const wrapper = mount(<ReservationTitle />);
    expect(wrapper.find('#title').exists()).toBe(true);
  });
 });
