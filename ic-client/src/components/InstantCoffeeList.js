import React from 'react';
import InstantCoffee from './InstantCoffee';
import { connect } from 'react-redux';

// Need all instant coffee, thus need access to state's storage of the coffee list.
export const InstantCoffeeList = (props) => {
    return (
        <div>
            {listAllInstantCoffees(props.instantCoffee)}
        </div>
    );
}

const listAllInstantCoffees = (coffees) => {
    return coffees.map((coffee) => {
        return <InstantCoffee key={coffee._id} {...coffee} />
    })
}

const mapStateToProps = (state) => {
    return {
        instantCoffee: state.instantCoffee
    }
}

//export default InstantCoffeeList;
export default connect(mapStateToProps)(InstantCoffeeList)