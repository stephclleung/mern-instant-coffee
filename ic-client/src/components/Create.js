import React from 'react';
import { Link } from 'react-router-dom';
import InstantCoffeeForm from './InstantCoffeeForm';
import { addInstantCoffee } from '../actions/instant-coffee';
import { connect } from 'react-redux';

export class Create extends React.Component {
    onSubmit = (coffeeData) => {
        this.props.addInstantCoffee(coffeeData);
        this.props.history.push('/');
    }
    render() {
        return (
            <div>
                <InstantCoffeeForm onSubmit={this.onSubmit} />
                <Link to="/">Back</Link>
            </div>
        );
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addInstantCoffee: (coffeeData) => dispatch(addInstantCoffee(coffeeData))
    }
}

export default connect(undefined, mapDispatchToProps)(Create);
