import React from 'react';
import InstantCoffeeForm from './InstantCoffeeForm';

//TODO: 
// - Change to class base (props)
// - Connect to store : dispatch and props
// - Add remove button
// 

export class Edit extends React.Component {

    render() {
        return (
            <div>
                <InstantCoffeeForm />
            </div>
        )
    }

}

export default Edit;