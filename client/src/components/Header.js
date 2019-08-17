import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    Navbar,
    Collapse,
    Card,
    CardBody,
    Form,
    InputGroup,
    Input,
    Button,
    InputGroupButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import {
    setTextFilter,
    sortByAroma,
    sortByPrice,
    sortByAcidity,
    sortByAmount,
} from '../actions/filter';
import { connect } from 'react-redux';

export class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            introCollapse: false,
            dropDownToggle: false,
            sortBy: "Sort By.."
        }
    }
    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value);
    }
    onSortByChange = (sortBy) => {
        switch (sortBy) {
            case "aroma":
                return this.props.sortByAroma();
            case "acidity":
                return this.props.sortByAcidity();
            case "price":
                return this.props.sortByPrice();
            case "amount":
                return this.props.sortByAmount();
            default:
                break;
        }
    }
    onDropDownMenuChange = (e) => {
        const sortBy = e.target.value;
        this.setState(() => ({ sortBy }))
        this.onSortByChange(sortBy);
    }
    onDropDownToggle = () => {
        this.setState((prevState) => ({ dropDownToggle: !prevState.dropDownToggle }))
    }
    onIntroToggle = () => {
        this.setState(prevState => ({ introCollapse: !prevState.introCollapse }))
    }
    render() {
        return (
            <div>
                <Navbar id="header" expand="md" fixed="top">
                    <div className="flex-md-column">
                        <h1 onClick={this.onIntroToggle}>...Coffee...?</h1>
                        <Collapse isOpen={this.state.introCollapse}>
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
                            <li><h4><NavLink to="/" activeClassName="is-active" exact={true} ><span role="img" aria-label="coffee">☕</span></NavLink></h4></li>
                            <li><h4><NavLink to="/create" activeClassName="is-active"><span role="img" aria-label="new">📝</span></NavLink></h4></li>
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
                                <InputGroupButtonDropdown
                                    addonType="append"
                                    toggle={this.onDropDownToggle}
                                    isOpen={this.state.dropDownToggle}
                                >
                                    <DropdownToggle
                                        caret
                                        size="sm"
                                        className="form-control col-form-label-sm border-dark"
                                    >
                                        {this.state.sortBy}
                                    </DropdownToggle>
                                    <DropdownMenu
                                        size="sm"
                                    >
                                        <DropdownItem value="price" onClick={this.onDropDownMenuChange}>Price</DropdownItem>
                                        <DropdownItem value="amount" onClick={this.onDropDownMenuChange}>Amount</DropdownItem>
                                        <DropdownItem value="aroma" onClick={this.onDropDownMenuChange}>Aroma</DropdownItem>
                                        <DropdownItem value="acidity" onClick={this.onDropDownMenuChange}>Acidity</DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem value="Sort By.." onClick={this.onDropDownMenuChange}>...</DropdownItem>
                                    </DropdownMenu>
                                </InputGroupButtonDropdown>
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
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByAroma: () => dispatch(sortByAroma()),
    sortByPrice: () => dispatch(sortByPrice()),
    sortByAcidity: () => dispatch(sortByAcidity()),
    sortByAmount: () => dispatch(sortByAmount())
})


export default connect(mapStateToProps, mapDispatchToProps)(Header);
//export default Header;