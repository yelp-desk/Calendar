import React from 'react';
import Enzyme, { mount, render, shallow } from 'enzyme';
import Reservation from '../../public/reservation.jsx';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter});

describe('Reservation tests', () => {
  test("successfully mounts Reservation", () => {
    const wrapper = shallow(<Reservation />);
    expect(wrapper.exists()).toBe(true)
  });
 });