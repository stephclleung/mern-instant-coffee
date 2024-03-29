import React from 'react';
import InstantCoffee from './InstantCoffee';
import { connect } from 'react-redux';
import getInstantCoffee from '../selectors/instant-coffee';
import { Fade, Alert } from 'reactstrap';


export class InstantCoffeeList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            priceAlertVisible: false,
            acidityAlertVisible: false
        }
    }
    componentDidUpdate(prevProps) {
        if (this.props.sortBy !== prevProps.sortBy) {
            if (this.props.sortBy === "price") {
                this.setState(() => ({ priceAlertVisible: true }))
            }
            else if (this.props.sortBy === "acidity") {
                this.setState(() => ({ acidityAlertVisible: true }))
            }

        }
    }
    onPriceAlertDismiss = () => {
        this.setState(() => ({ priceAlertVisible: false }))
    }
    onAcidityAlertDismiss = () => {
        this.setState(() => ({ acidityAlertVisible: false }))
    }
    render() {
        return (
            <div>
                {this.state.priceAlertVisible &&
                    <Alert
                        color="secondary"
                        toggle={this.onPriceAlertDismiss}
                    >
                        Prices are sort base on best grams per $ !
                    </Alert>
                }
                {this.state.acidityAlertVisible &&
                    <Alert
                        className="sm-6"
                        color="warning"
                        toggle={this.onAcidityAlertDismiss}
                    >
                        Sitemaster is not a fan of sour coffee. These are ranked from LEAST sour to most.
                    </Alert>
                }
                {this.props.instantCoffees.length > 0 ?
                    (<div style={{ "maxWidth": 450 + "px" }} >
                        {listAllInstantCoffees(this.props.instantCoffees)}
                    </div>
                    ) : (<p>No coffees right now! </p>)}
            </div>
        );
    }
}

const listAllInstantCoffees = (coffees) => {
    return coffees.map((coffee) => {
        return <Fade key={coffee.id}><InstantCoffee key={coffee.id} {...coffee} /></Fade>
    })
}

//Coffee needs to be the filtered ones.
const mapStateToProps = (state) => {
    return {
        instantCoffees: getInstantCoffee(state.instantCoffees, state.filters),
        sortBy: state.filters.sortBy
    }
}

//export default InstantCoffeeList;
export default connect(mapStateToProps)(InstantCoffeeList)