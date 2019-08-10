import React from 'react';
import { Link } from 'react-router-dom';
import InstantCoffeeForm from './InstantCoffeeForm';

//TODO : dispatch "add" when InstantCoffeeForm submits.
class Create extends React.Component {
   
    
    render() {
        return (
            <div>
                <InstantCoffeeForm />
                <Link to="/">Back</Link>
            </div>
        );
    }
};

export default Create;
