import React from 'react';
import InstantCoffeeForm from './InstantCoffeeForm';
import { connect } from 'react-redux';
import { removeInstantCoffeeFromDB, editInstantCoffee } from '../actions/instant-coffee';

//TODO: 
// - remove data from db
// - update data to db

export class Edit extends React.Component {
    onRemoveCoffee = () => {
        console.log("On remove : ", this.props)
        this.props.removeInstantCoffeeFromDB(this.props.instantCoffee.id)
        this.props.history.push('/')
    }
    onEditCoffee = (coffeeUpdates) => {
        console.log("Am props", this.props.instantCoffee)
        console.log("Am id", this.props.instantCoffee.id)
        this.props.editInstantCoffee(this.props.instantCoffee.id, coffeeUpdates);
        this.props.history.push('/')
    }
    render() {
        return (
            <div>
                <InstantCoffeeForm instantCoffee={this.props.instantCoffee} onSubmit={this.onEditCoffee} />
                <button onClick={this.onRemoveCoffee}>Remove Coffee</button>
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