import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Collapse, Card, CardBody, Form, InputGroup, Input, Button } from 'reactstrap';
import { setTextFilter } from '../actions/filter';
import { connect } from 'react-redux';

export class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false
        }
    }
    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value);
    }
    onToggle = () => {
        this.setState(prevState => ({ collapse: !prevState.collapse }))
    }
    render() {
        return (
            <div>
                <Navbar color="light" expand="md" fixed="top">
                    <div className="flex-md-column">
                        <h1 onClick={this.onToggle}>Coffee...?</h1>
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
                                <Input
                                    type="text"
                                    className="form-control col-form-label-sm border-dark"
                                    placeholder="Find an instant coffee.."
                                    value={this.props.filter.text}
                                    onChange={this.onTextChange}
                                />
                            </InputGroup>
                        </Form>
                    </div>
                </Navbar>
            </div>
        );
    }
};

const mapStateToProps = (state) => ({
    filter: state.filters
});

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text))
})


export default connect(mapStateToProps, mapDispatchToProps)(Header);
//export default Header;
