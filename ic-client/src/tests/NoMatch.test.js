import React from 'react';
import { shallow } from 'enzyme';
import NoMatch from '../components/NoMatch';

test("Should render NoMatch correctly", () => {
    const wrapper = shallow(<NoMatch />);
    expect(wrapper).toMatchSnapshot();
});