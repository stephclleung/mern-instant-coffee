import React from 'react';
import InstantCoffeeForm from './InstantCoffeeForm';
import { connect } from 'react-redux';
import { removeInstantCoffee, editInstantCoffee } from '../actions/instant-coffee';

//TODO: 
// - Change to class base (props)
// - Connect to store : dispatch and props
// Pause notes : Update id is somehow missing...
// Files involved : actons/instant-coffee, reducers/instant-coffee, edit.js....

export class Edit extends React.Component {
    onRemoveCoffee = () => {
        this.props.removeInstantCoffee(this.props.instantCoffee.id)
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
        removeInstantCoffee: (coffee) => dispatch(removeInstantCoffee(coffee)),
        editInstantCoffee: (id, coffeeUpdates) => dispatch(editInstantCoffee(id, coffeeUpdates))
    }
}

const mapStateToProps = (state, props) => ({
    instantCoffee: state.instantCoffee.find((ic) => ic.id === props.match.params.id)
});

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
//export default Edit;