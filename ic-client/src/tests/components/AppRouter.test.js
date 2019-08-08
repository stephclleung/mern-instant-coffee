import React from 'react';
import { shallow } from 'enzyme';
import AppRouter from '../../components/AppRouter';

test("Should render AppRouter correctly", () => {
    const wrapper = shallow(<AppRouter />);
    expect(wrapper).toMatchSnapshot();

    // const div = document.createElement('div');
    // ReactDOM.render(<AppRouter/>, div);
})