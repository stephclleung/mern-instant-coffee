import React from 'react';
import InstantCoffeeList from './InstantCoffeeList';
import { Fade } from 'reactstrap';


export const Dashboard = (props) => {
    return (
        <div>
            <Fade>
                <InstantCoffeeList />
            </Fade>
        </div>
    );
};


export default Dashboard;


