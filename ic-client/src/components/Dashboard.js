import React from 'react';
import InstantCoffeeList from './InstantCoffeeList';
import { Fade } from 'reactstrap';
import { connect } from 'react-redux';
import { setLocation } from '../actions/location';

export const Dashboard = (props) => {
    props.setLocation()
    return (
        <div>
            <Fade>
                <InstantCoffeeList />
            </Fade>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        setLocation: () => dispatch(setLocation('dashboard'))
    }
}

export default connect(undefined, mapDispatchToProps)(Dashboard);
//export default Dashboard;


