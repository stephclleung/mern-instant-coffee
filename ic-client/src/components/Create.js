import React from 'react';
import { Link } from 'react-router-dom';
import InstantCoffeeForm from './InstantCoffeeForm';
import { addInstantCoffeeToDB } from '../actions/instant-coffee';
import { connect } from 'react-redux';
import { Row } from 'reactstrap';
export class Create extends React.Component {
    onSubmit = (coffeeData) => {
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


// <Row>
//     <Link to="/" ><div className="mt-3">Back</div></Link>
// </Row>

const mapDispatchToProps = (dispatch) => {
    return {
        addInstantCoffeeToDB: (coffeeData) => dispatch(addInstantCoffeeToDB(coffeeData))
    }
}

export default connect(undefined, mapDispatchToProps)(Create);
