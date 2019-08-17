import React from 'react';
import { shallow } from 'enzyme';
import { Create } from '../../components/Create';

test("Should render Create correctly", () => {

    let history = jest.fn();
    let addInstantCoffee = jest.fn();
    const wrapper = shallow(<Create history={history} addInstantCoffee={addInstantCoffee} />);
    expect(wrapper).toMatchSnapshot();
});