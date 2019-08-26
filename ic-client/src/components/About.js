import React from 'react';
import { connect } from 'react-redux';
import { setLocation } from '../actions/location';
import { Container, Row, Col } from 'reactstrap';

export const About = (props) => {
    props.setLocation();
    return (
        <Container>
            <Row>
                <Col xs="auto">
                    <img src={"https://i.imgur.com/ebLwdYJ.png"} alt={"this is steph."} style={{ width: 100 + "%" }}></img>
                </Col>
            </Row>
            <Row>
                <Col xs="auto" >
                    <h3>Hi there!
                    Thanks for checking out my app.</h3>
                    I made this app as a practice for developing with MongoDB, Express, React and Node.
                    <p>Feel free to poke around.</p>
                    <p>If you haven't already done so, please also visit my portfolio at</p>
                    <div className="externalLinks"><center><a className="links" href="https://www.cl-leung.com" target="_blank" rel="noopener noreferrer"> www.cl-leung.com.</a></center></div>
                    <p>Hope you have a great day :).</p>
                </Col>
            </Row>
        </Container>
    )

}

const mapDispatchToProps = (dispatch) => {
    return {
        setLocation: () => dispatch(setLocation('about'))
    }
}

export default connect(undefined, mapDispatchToProps)(About);
//export default About;