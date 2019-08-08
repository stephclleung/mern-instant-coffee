import React from 'react';
import InstantCoffee from './InstantCoffee';
import { connect } from 'react-redux';

// Need all instant coffee, thus need access to state's storage of the coffee list.
export const InstantCoffeeList = () => {
    return (
        <div>
           <InstantCoffee />
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        instantCoffee : state
    }
}

//export default InstantCoffeeList;
export default connect(mapStateToProps)(InstantCoffeeList)