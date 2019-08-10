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

test("Should set coffeeName on change", () => {
    const coffeeName = "I am a coffee name";
    const wrapper = shallow(<InstantCoffeeForm/>);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('input').at(0).simulate('change', {
        target : { value : coffeeName }
    });
    expect(wrapper.state('coffeeName')).toBe(coffeeName)

})

test("Should not change price if invalid input", () => {
    const price = "I am a coffee name";
    const wrapper = shallow(<InstantCoffeeForm/>);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('input').at(2).simulate('change', {
        target : { value : price }
    });
    expect(wrapper.state('price')).toBe('')
});


test("Should change price if input is valid", () => {
    const price = 123;
    const wrapper = shallow(<InstantCoffeeForm/>);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('input').at(1).simulate('change', {
        target : { value : price }
    });
    expect(wrapper.state('price')).toBe(123)
})

test("Should toggle component when isStick is set", () => {
    const wrapper = shallow(<InstantCoffeeForm/>);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('select').at(0).simulate('change');
    expect(wrapper).toMatchSnapshot();
})