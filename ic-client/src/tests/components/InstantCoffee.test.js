import InstantCoffee from '../../components/InstantCoffee';
import React from 'react';
import { shallow } from 'enzyme';
import { instantCoffee } from '../fixtures/instant-coffee-data';

test("Should render instant coffee component correctly", () => {
    const wrapper = shallow(<InstantCoffee coffee={instantCoffee[0]}/>)
    expect(wrapper).toMatchSnapshot();
})