import React from 'react';
import Enzyme, { mount, render, shallow } from 'enzyme';
import FindTable from '../../public/findTable.jsx';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter});

describe('FindTable input tests', () => {

  test("successfully mounts FindTable", () => {
    const wrapper = shallow(<FindTable />);
    expect(wrapper.exists()).toBe(true)
  });
 });
