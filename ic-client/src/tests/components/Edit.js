import React from 'react';
import {Edit} from '../../components/Edit';
import { instantCoffee } from '../fixtures/instant-coffee-data';
import { shallow } from 'enzyme';

test("Should render Edit page correctly", () => {
    const wrapper = shallow(<Edit props={instantCoffee}/>)
    expect(wrapper).toMatchSnapshot();
});

