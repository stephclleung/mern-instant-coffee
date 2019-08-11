import React from 'react';
import InstantCoffeeForm from './InstantCoffeeForm';
import { connect } from 'react-redux';
import { removeInstantCoffee } from '../actions/instant-coffee';

//TODO: 
// - Change to class base (props)
// - Connect to store : dispatch and props
// - Add remove button
// 

export class Edit extends React.Component {
    onRemoveCoffee = () => {
        this.props.removeInstantCoffee(this.props.instantCoffee.id)
        this.props.history.push('/')
    }
    render() {
        return (
            <div>
                <InstantCoffeeForm />
                <button onClick={this.onRemoveCoffee}>Remove Coffee</button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeInstantCoffee: (coffee) => dispatch(removeInstantCoffee(coffee))
    }
}

const mapStateToProps = (state, props) => ({
    instantCoffee: state.instantCoffee.find((ic) => ic.id === props.match.params.id)
});

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
//export default Edit;