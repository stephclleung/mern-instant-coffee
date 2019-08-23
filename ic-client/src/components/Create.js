import React from 'react';
import InstantCoffeeForm from './InstantCoffeeForm';
import { addInstantCoffeeToDB } from '../actions/instant-coffee';
import { connect } from 'react-redux';
export class Create extends React.Component {
    onSubmit = (coffeeData) => {
        console.log("Create", coffeeData);
        this.props.addInstantCoffeeToDB(coffeeData);

        this.props.history.push('/');
    }
    render() {
        return (
            <div>
                <InstantCoffeeForm onSubmit={this.onSubmit} />
            </div>
        );
    }
};


const mapDispatchToProps = (dispatch) => {
    return {
        addInstantCoffeeToDB: (coffeeData) => dispatch(addInstantCoffeeToDB(coffeeData))
    }
}

export default connect(undefined, mapDispatchToProps)(Create);
