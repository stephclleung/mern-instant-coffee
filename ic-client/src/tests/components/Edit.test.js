import React from 'react';
import { Edit } from '../../components/Edit';

import { instantCoffee } from '../fixtures/instant-coffee-data';
import { shallow } from 'enzyme';

test("Should render Edit page correctly", () => {
    const wrapper = shallow(<Edit props={instantCoffee[0]} />)
    expect(wrapper).toMatchSnapshot();
});

test("Should redirect to dashboard after deleting", () => {
    let coffee = instantCoffee[0];
    coffee.id = "123ABCDEFG";
    let removeInstantCoffee = jest.fn();    //Mock functions
    let history = { push: jest.fn() }
    const wrapper = shallow(
        <Edit
            instantCoffee={coffee}
            removeInstantCoffee={removeInstantCoffee}
            history={history}
        />)
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
})