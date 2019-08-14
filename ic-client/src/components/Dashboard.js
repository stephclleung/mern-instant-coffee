import React from 'react';
import InstantCoffeeList from './InstantCoffeeList';
import { Fade } from 'reactstrap';
const Dashboard = () => {
    return (
        <div>
            <Fade>
                <InstantCoffeeList />
            </Fade>
        </div>
    );
};

export default Dashboard;
