import React from 'react';
import { Link } from 'react-router-dom';
import InstantCoffeeForm from './InstantCoffeeForm';

const Create = () => {
    return (
        <div>
            <InstantCoffeeForm />
            <Link to="/">Back</Link>
        </div>
    );
};

export default Create;
