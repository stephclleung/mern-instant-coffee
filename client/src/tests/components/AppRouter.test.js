import React from 'react';
import { shallow } from 'enzyme';
import { AppRouter } from '../../components/AppRouter';

test("Should render AppRouter correctly", () => {
    const errorProps = {
        showErrorMessage: false,
        errorMessage: ''
    };
    const wrapper = shallow(<AppRouter errors={errorProps} />);
    expect(wrapper).toMatchSnapshot();

})