import React from 'react';
import { Link } from 'react-router-dom';

const NoMatch = () =>{
    return (
        <div>
            <p>Cannot find the page. Return to <Link to="/">Dashboard.</Link></p>
        </div>
    );
};

export default NoMatch;
