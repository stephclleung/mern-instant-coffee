import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Col, Collapse, Card, CardBody, Form, InputGroup, Input, InputGroupAddon, Button } from 'reactstrap';


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false
        }
    }
    onToggle = () => {
        this.setState(prevState => ({ collapse: !prevState.collapse }))
    }
    render() {
        return (
            <div>
                <Navbar color="light" expand="md">
                    <div className="flex-md-column">
                        <h1 onClick={this.onToggle}>Coffee?</h1>
                        <Collapse isOpen={this.state.collapse}>
                            <Card >
                                <CardBody>
                                    Hi there!
                                </CardBody>
                            </Card>
                        </Collapse>
                    </div>
                    <Button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </Button>
                    <div className="collapse navbar-collapse w-100 flex-md-column" id="navbarCollapse">
                        <ul className="navbar-nav ml-auto small mb-2 mb-md-2">
                            <li><h4><NavLink to="/" activeClassName="is-active" exact={true} >☕</NavLink></h4></li>
                            <li><h4><NavLink to="/create" activeClassName="is-active">📝</NavLink></h4></li>
                        </ul>
                        <Form className="form-inline ml-auto flex-md-row">
                            <InputGroup>
                                <Input type="text" className="form-control col-form-label-sm border-dark" placeholder="Find an instant coffee.." />
                                <InputGroupAddon addonType="append">
                                    <Button className="btn-sm">🔍</Button>
                                </InputGroupAddon>
                            </InputGroup>
                        </Form>
                    </div>
                </Navbar>
            </div >
        );
    }

};

export default Header;
