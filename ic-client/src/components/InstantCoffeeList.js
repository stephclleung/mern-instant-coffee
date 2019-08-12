import React from 'react';
import InstantCoffee from './InstantCoffee';
import { connect } from 'react-redux';

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
        console.log("In list", coffee)
        return <InstantCoffee key={coffee._id} {...coffee} />
    })
}

const mapStateToProps = (state) => {
    return {
        instantCoffees: state.instantCoffees
    }
}

//export default InstantCoffeeList;
export default connect(mapStateToProps)(InstantCoffeeList)