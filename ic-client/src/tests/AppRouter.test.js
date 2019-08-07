import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { shallow } from 'enzyme';
import AppRouter from '../components/AppRouter';

test("Should render AppRouter correctly", () => {
    const wrapper = shallow(<AppRouter />);
    expect(wrapper).toMatchSnapshot();
})