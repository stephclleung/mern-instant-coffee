import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar } from 'reactstrap';

const Header = () => {
    return (
        <div>
            <Navbar color="light" expand="md">
                <h1>Coffee ? </h1>
                <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
                <NavLink to="/create" activeClassName="is-active">Create</NavLink>
            </Navbar>
        </div>
    );
};

export default Header;
