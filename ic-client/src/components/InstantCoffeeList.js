import React from 'react';
import InstantCoffee from './InstantCoffee';
import { connect } from 'react-redux';
import getInstantCoffee from '../selectors/instant-coffee';

// Need all instant coffee, thus need access to state's storage of the coffee list.
export const InstantCoffeeList = (props) => {
    return (
        <div>
            {listAllInstantCoffees(props.instantCoffees)}
        </div>
    );
}

const listAllInstantCoffees = (coffees) => {
    return coffees.map((coffee) => {
        return <InstantCoffee key={coffee.id} {...coffee} />
    })
}

//Coffee needs to be the filtered ones.
const mapStateToProps = (state) => {
    console.log('ICL - State now : ', state)
    return {
        instantCoffees: getInstantCoffee(state.instantCoffees, state.filters),
    }
}

//export default InstantCoffeeList;
export default connect(mapStateToProps)(InstantCoffeeList)