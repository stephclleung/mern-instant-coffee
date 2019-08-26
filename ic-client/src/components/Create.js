import React from 'react';
import InstantCoffeeForm from './InstantCoffeeForm';
import { addInstantCoffeeToDB } from '../actions/instant-coffee';
import { setLocation } from '../actions/location';
import { connect } from 'react-redux';
export class Create extends React.Component {
    onSubmit = (coffeeData) => {
        this.props.addInstantCoffeeToDB(coffeeData);
        this.props.history.push('/');
    }
    render() {
        this.props.setLocation();
        return (
            <div>
                <InstantCoffeeForm onSubmit={this.onSubmit} />
            </div>
        );
    }
};


const mapDispatchToProps = (dispatch) => {
    return {
        addInstantCoffeeToDB: (coffeeData) => dispatch(addInstantCoffeeToDB(coffeeData)),
        setLocation: () => dispatch(setLocation('create'))
    }
}

export default connect(undefined, mapDispatchToProps)(Create);
