import React from 'react';
import { shallow } from 'enzyme';
import InstantCoffeeForm from '../../components/InstantCoffeeForm';
import { instantCoffee } from '../fixtures/instant-coffee-data';

test('should render Coffee form correctly', () => {
    const wrapper = shallow(<InstantCoffeeForm/>)
    expect(wrapper).toMatchSnapshot();
})

test('Should render error for form submissions with missing stuff', () => {
    const wrapper = shallow(<InstantCoffeeForm/>);
    expect(wrapper).toMatchSnapshot();

    wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
})