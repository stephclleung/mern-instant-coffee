import InstantCoffeeList from '../../components/InstantCoffeeList';
import React from 'react';
import { shallow } from 'enzyme';

test("Should render instant coffee list component correctly", () => {
    const wrapper = shallow(<InstantCoffeeList />)
    expect(wrapper).toMatchSnapshot();
})