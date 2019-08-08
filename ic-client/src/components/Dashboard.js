import React from 'react';
import InstantCoffeeList from './InstantCoffeeList';

const Dashboard = () =>{
    return (
        <div>
            {console.log("ICL: ", InstantCoffeeList)}
            <p>Dashboard</p>
            <InstantCoffeeList />
        </div>
    );
};

export default Dashboard;
