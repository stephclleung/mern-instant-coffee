import React from 'react';
import { Container, Form, FormGroup, Label, Input, Button, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';

export default class InstantCoffeeForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isStick: true,
            id: props.instantCoffee ? props.instantCoffee.id : '',
            coffeeName: props.instantCoffee ? props.instantCoffee.coffeeName : '',
            packageSize: props.instantCoffee ? props.instantCoffee.packageSize : '',
            containerSize: props.instantCoffee ? props.instantCoffee.containerSize : '',
            price: props.instantCoffee ? props.instantCoffee.price : '',
            currency: props.instantCoffee ? props.instantCoffee.currency : 'CAD',
            acidity: props.instantCoffee ? props.instantCoffee.acidity : '',
            aroma: props.instantCoffee ? props.instantCoffee.aroma : ''
        };

        if (props.packageSize <= 1 || !this.state.packageSize) {
            console.log("Packagesize : ", props.packageSize)
            console.log("False? : ", this.state.packageSize)
            this.state.isStick = false;
        }
    };
    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.coffeeName ||
            !this.state.price ||
            !this.state.currency ||
            !this.state.acidity ||
            !this.state.aroma ||
            (!this.state.packageSize && !this.state.containerSize)) {
            this.setState(() => ({ error: "Missing information." }))
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                coffeeName: this.state.coffeeName,
                packageSize: this.state.packageSize,
                containerSize: this.state.containerSize,
                price: this.state.price,
                currency: this.state.currency,
                acidity: this.state.acidity,
                aroma: this.state.aroma
            })
        }
    }
    onCoffeeNameChange = (e) => {
        const coffeeName = e.target.value;
        this.setState(() => ({ coffeeName }))
    }
    onPriceChange = (e) => {
        const price = e.target.value;
        if (parseInt(price) > 0 || !price) {
            this.setState(() => ({ price }));
        }
    }
    onContainerChange = (e) => {
        const containerSize = e.target.value;
        if (parseInt(containerSize) > 0 || !containerSize) {
            this.setState(() => ({ containerSize }));
        }
    }
    onPackageChange = (e) => {
        const packageSize = e.target.value;
        if (parseInt(packageSize) > 0 || !packageSize) {
            this.setState(() => ({ packageSize }));
        }
    }
    onAromaChange = (e) => {
        const aroma = e.target.value
        if ((parseInt(aroma) >= 1 && parseInt(aroma)) <= 5 || !aroma) {
            this.setState(() => ({ aroma }));
        }
    }
    onAcidityChange = (e) => {
        const acidity = e.target.value
        if ((parseInt(acidity) >= 1 && parseInt(acidity) <= 5) || !acidity) {
            this.setState(() => ({ acidity }));
        }
    }
    onCurrencyChange = (e) => {
        const currency = e.target.value
        this.setState(() => ({ currency }))
    }
    onIsStickToggle = () => {
        this.setState((prevState) => ({
            isStick: !prevState.isStick,
            packageSize: 0,
            containerSize: 0
        }));
    }
    render() {
        return (
            <Container >
                <Form onSubmit={this.onSubmit} >
                    {this.state.error && <p>{this.state.error}</p>}
                    <FormGroup row>
                        <Label for="coffeeName" sm="2">Coffee</Label>
                        <Input
                            id="coffeeName"
                            className="col-sm-10"
                            type="text"
                            placeholder="Name of brand, type..."
                            autoFocus={true}
                            value={this.state.coffeeName}
                            onChange={this.onCoffeeNameChange}
                        />
                    </FormGroup>
                    <FormGroup row>
                        <Label for="Price" sm="2" >$$$</Label>
                        <Input
                            id="Price"
                            className="col-sm-10"
                            type="number"
                            placeholder="Price"
                            min="0"
                            value={this.state.price}
                            onChange={this.onPriceChange}
                        />
                    </FormGroup>
                    <FormGroup row>
                        <Label for="packageType" sm="2">Type</Label>
                        <Input
                            id="packageType"
                            className="col-sm-10"
                            type="select"
                            onChange={this.onIsStickToggle}
                        >
                            <option value="container">Jar</option>
                            <option value="package">Individual Sticks</option>
                        </Input>
                    </FormGroup>
                    {this.state.isStick ? (
                        <div class="row form-group">
                            <InputGroup id="sticksCount" className="pl-3">
                                <Input
                                    type="number"
                                    placeholder="1"
                                    min='1'
                                    onChange={this.onPackageChange}
                                    value={this.state.packageSize}
                                />
                                <InputGroupAddon addonType="append">
                                    <InputGroupText>sticks, </InputGroupText>
                                </InputGroupAddon>
                                <Input
                                    type="number"
                                    id="sticksPer"
                                    form-control
                                    placeholder="1"
                                    min='1'
                                    onChange={this.onContainerChange}
                                    value={this.state.containerSize}
                                />
                                <InputGroupAddon addonType="append">
                                    <InputGroupText>grams per stick</InputGroupText>
                                </InputGroupAddon>
                            </InputGroup>
                        </div>) : (
                            <div className="row form-group">
                                <InputGroup id="sticksCount" className="pl-3">
                                    <Input
                                        type="number"
                                        placeholder="1"
                                        min='1'
                                        onChange={this.onContainerChange}
                                        value={this.state.containerSize}
                                    />
                                    <InputGroupAddon addonType="append">
                                        <InputGroupText>grams </InputGroupText>
                                    </InputGroupAddon>
                                </InputGroup>
                            </div>
                        )
                    }
                    <FormGroup row>
                        <Label for="currency" sm="2">Currency</Label>
                        <Input
                            type="select"
                            id="currency"
                            className="col-sm-10"
                            value={this.state.currency}
                            onChange={this.onCurrencyChange}>
                            <option value="CAD">CAD</option>
                            <option value="JPY">JPY</option>
                            <option value="USD">USD</option>
                            <option value="HKD">HKD</option>
                        </Input>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="acidity" sm="2">Acidity</Label>
                        <Input
                            type="range"
                            id="acidity"
                            className="col-sm-8"
                            min="1"
                            max="5"
                            value={this.state.acidity}
                            onChange={this.onAcidityChange}
                        />
                        <Label for="acidity" sm="2" className="text-center">{this.state.acidity}</Label>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="aroma" sm="2">Aroma</Label>
                        <Input
                            type="range"
                            id="aroma"
                            className="col-sm-8"
                            min="1"
                            max="5"
                            value={this.state.aroma}
                            onChange={this.onAromaChange}
                        />
                        <Label for="aroma" sm="2" className="text-center">{this.state.aroma}</Label>
                    </FormGroup>
                    <Button className="btn-block">Done</Button>
                </Form>
            </Container>
        )
    }
}

