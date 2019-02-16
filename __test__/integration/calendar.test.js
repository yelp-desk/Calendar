import React from 'react';
import Enzyme, { mount, render, shallow } from 'enzyme';
import Calendar from '../../public/calendar.jsx';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter});

describe('Calendar tests', () => {
  test ('re-renders calendar when next button is clicked', () => {
    jest.spyOn(Calendar.prototype, 'nextMonth');
    const wrapper = mount(<Calendar />);
    wrapper.find('#arrowRight').simulate('click');
    expect(Calendar.prototype.nextMonth).toHaveBeenCalled();
  })
  
  test ('re-renders calendar when previous button is clicked', () => {
    jest.spyOn(Calendar.prototype, 'previousMonth');
    const wrapper = mount(<Calendar />);
    wrapper.find('#arrowLeft').simulate('click');
    expect(Calendar.prototype.previousMonth).toHaveBeenCalled();
  })
  
  // test ('highlights a different date when a selectable date is clicked', () => {
  //   jest.spyOn(Calendar.prototype, 'selectDate');
  //   const wrapper = mount(<Calendar />);
  //   console.log(wrapper.find('.hasValue'));
  //   wrapper.find('.hasValue').simulate('click');
  //   expect(Calendar.prototype.selectDate).toHaveBeenCalled();
  // })
 });