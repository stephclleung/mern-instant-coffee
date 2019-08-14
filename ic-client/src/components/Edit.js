import React from 'react';
import InstantCoffeeForm from './InstantCoffeeForm';
import { connect } from 'react-redux';
import { removeInstantCoffeeFromDB, editInstantCoffee } from '../actions/instant-coffee';
import { Button } from 'reactstrap';

//TODO: 
// - update data to db

export class Edit extends React.Component {
    onRemoveCoffee = () => {
        this.props.removeInstantCoffeeFromDB(this.props.instantCoffee.id)
        this.props.history.push('/')
    }
    onEditCoffee = (coffeeUpdates) => {
        this.props.editInstantCoffee(this.props.instantCoffee.id, coffeeUpdates);
        this.props.history.push('/')
    }
    render() {
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
        editInstantCoffee: (id, coffeeUpdates) => dispatch(editInstantCoffee(id, coffeeUpdates))
    }
}

const mapStateToProps = (state, props) => ({
    instantCoffee: state.instantCoffees.find((ic) => ic.id === props.match.params.id)
});

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
//export default Edit;