import React from 'react';
import InstantCoffeeList from './InstantCoffeeList';
import { Fade } from 'reactstrap';
import { connect } from 'react-redux';

export const Dashboard = (props) => {
    return (
        <div>
            <Fade>
                {console.log("I am dashboard props", props)}
                {props.errors.showErrorMessage &&
                    <p>{props.errors.errorMessage}</p>}
                <InstantCoffeeList />
            </Fade>
        </div>
    );
};

const mapStateToProps = (state) => ({
    errors: state.errors
})

//export default Dashboard;

export default connect(mapStateToProps)(Dashboard);
