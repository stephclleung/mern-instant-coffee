import InstantCoffee from '../../components/InstantCoffee';
import React from 'react';
import { shallow } from 'enzyme';

test("Should render instant coffee component correctly", () => {
    const wrapper = shallow(<InstantCoffee />)
    expect(wrapper).toMatchSnapshot();
})