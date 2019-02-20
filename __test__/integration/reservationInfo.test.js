import React from 'react';
import Enzyme, { mount, render, shallow } from 'enzyme';
import ReservationInfo from '../../public/reservationInfo.jsx';
import AvailabilityDropdown from '../../public/availabilityDropdown.jsx';
import CapacityDropdown from '../../public/capacityDropdown.jsx';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter});

describe('Reservation info tests', () => {

  test("successfully renders ReservationInfo", () => {
    const wrapper = shallow(<ReservationInfo />);
    expect(wrapper.exists()).toBe(true);
  });

  // test("hydrate the capacity state property of capacity drop-down component after component mount", () => {
    // const wrapper = mount(<CapacityDropdown />);
    // console.log(wrapper.state().capacity);
    // expect(wrapper.state().capacity).toBeTruthy();
  // });

  test("successfully renders capacityDropdown", () => {
    const wrapper = shallow(<CapacityDropdown />);
    expect(wrapper.exists()).toBe(true);
  })

  test("renders availability drop-down with a selected day", () => {
    const wrapper = shallow(<AvailabilityDropdown selectedDay={5} />);
    expect(wrapper.instance().props.selectedDay).toBe(5);
  });

  test("successfully renders availabiliy drop-down", () => {
    const wrapper = mount (<AvailabilityDropdown />)
    wrapper.setProps({selectedDay: 5}).setState({
      availabilities: [
        {id: 1, open_time: 1, close_time: 23, day_of_week: "0", rest_id: 3},
        {id: 2, open_time: 1, close_time: 23, day_of_week: "1", rest_id: 3},
        {id: 3, open_time: 1, close_time: 23, day_of_week: "2", rest_id: 3},
        {id: 4, open_time: 1, close_time: 23, day_of_week: "3", rest_id: 3},
        {id: 5, open_time: 1, close_time: 23, day_of_week: "4", rest_id: 3},
        {id: 6, open_time: 1, close_time: 23, day_of_week: "5", rest_id: 3},
        {id: 7, open_time: 1, close_time: 23, day_of_week: "6", rest_id: 3},
      ]
    })
    expect(wrapper.exists()).toBe(true);
  });
});
