import React from 'react';
import { InstantCoffeeList } from '../../components/InstantCoffeeList';
import { instantCoffee } from '../fixtures/instant-coffee-data';
import { shallow } from 'enzyme';

test("Should render instant coffee list component correctly", () => {
    const wrapper = shallow(<InstantCoffeeList instantCoffees={instantCoffee} />)
    expect(wrapper).toMatchSnapshot();
});

