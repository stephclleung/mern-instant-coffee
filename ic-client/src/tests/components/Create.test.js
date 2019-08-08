import React from 'react';
import { shallow } from 'enzyme';
import Create from '../../components/Create';

test("Should render Create correctly", () => {
    const wrapper = shallow(<Create />);
    expect(wrapper).toMatchSnapshot();
});