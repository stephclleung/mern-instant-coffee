import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../components/Header';

test("should render Header correctly ", () => {
    const setTextFilter = jest.fn();
    const sortByAcidity = jest.fn();
    const sortByAmount = jest.fn();
    const sortByAroma = jest.fn();
    const sortByPrice = jest.fn();
    const filter = {
        text: "",
        sortBy: "",
    }
    const wrapper = shallow(<Header
        filter={filter}
        sortByAroma={sortByAroma}
        sortByPrice={sortByPrice}
        sortByAmount={sortByAmount}
        sortByAcidity={sortByAcidity}
        setTextFilter={setTextFilter} />);
    expect(wrapper).toMatchSnapshot();
});