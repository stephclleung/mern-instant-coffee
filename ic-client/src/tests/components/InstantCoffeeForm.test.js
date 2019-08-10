import React from 'react';
import { shallow } from 'enzyme';
import InstantCoffeeForm from '../../components/InstantCoffeeForm';
import { instantCoffee } from '../fixtures/instant-coffee-data';

test('should render Coffee form correctly', () => {
    const wrapper = shallow(<InstantCoffeeForm/>)
    expect(wrapper).toMatchSnapshot();
})