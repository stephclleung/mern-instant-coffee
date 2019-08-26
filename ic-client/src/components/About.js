import React from 'react';
import { connect } from 'react-redux';
import { setLocation } from '../actions/location';

export const About = (props) => {
    props.setLocation();
    return (
        <div>
            Hi there! Thanks for checking out my app.
            I made this app as a practice for developing with MongoDB, Express, React and Node. Feel free to poke around. If you haven't already done so, please also visit my portfolio site at www.cl-leung.com. Hope you have a great day :).
    </div>
    )

}

const mapDispatchToProps = (dispatch) => {
    return {
        setLocation: () => dispatch(setLocation('about'))
    }
}

export default connect(undefined, mapDispatchToProps)(About);
//export default About;