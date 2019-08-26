import React from 'react';
import InstantCoffeeForm from './InstantCoffeeForm';
import { connect } from 'react-redux';
import { removeInstantCoffeeFromDB, editInstantCoffeeToDB } from '../actions/instant-coffee';
import { handleOtherError } from '../actions/error';
import { setLocation } from '../actions/location';
import { Button } from 'reactstrap';


export class Edit extends React.Component {
    onRemoveCoffee = () => {
        this.props.removeInstantCoffeeFromDB(this.props.instantCoffee.id)
        this.props.history.push('/')
    }
    onEditCoffee = (coffeeUpdates) => {
        if (Object.entries(coffeeUpdates.changedFields).length !== 0) {
            try {
                this.props.editInstantCoffeeToDB(this.props.instantCoffee.id, coffeeUpdates);
            } catch (error) {
                this.props.handleOtherError();
                this.props.history.push('/')
            }
        }
        this.props.history.push('/')
    }
    render() {
        this.props.setLocation();
        return (
            <div>
                <Button onClick={this.onRemoveCoffee} className="col-lg-6 mb-3 btn-block align-item-middle">Remove Coffee</Button>
                <InstantCoffeeForm instantCoffee={this.props.instantCoffee} onSubmit={this.onEditCoffee} />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeInstantCoffeeFromDB: (id) => dispatch(removeInstantCoffeeFromDB(id)),
        editInstantCoffeeToDB: (id, coffeeUpdates) => dispatch(editInstantCoffeeToDB(id, coffeeUpdates)),
        handleOtherError: () => dispatch(handleOtherError()),
        setLocation: () => dispatch(setLocation('edit'))
    }
}

const mapStateToProps = (state, props) => ({
    instantCoffee: state.instantCoffees.find((ic) => ic.id === props.match.params.id)
});

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
//export default Edit;