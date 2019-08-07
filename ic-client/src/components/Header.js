import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () =>{
    return (
        <div>
            <h1>Coffee ? </h1>
            <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
            <NavLink to="/create" activeClassName="is-active">Create</NavLink>
        </div>
    );
};

export default Header;
