import React from 'react';
import {
    Col,
    Form,
    FormGroup,
    Label,
    Input,
    Button,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    FormFeedback,
    Fade
} from 'reactstrap';

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
            aroma: props.instantCoffee ? props.instantCoffee.aroma : '',
            validate: {
                coffeeName: false,
                packageSize: false,
                containerSize: false,
                price: false,
                currency: false,
                acidity: false,
                aroma: false
            }
        };

        if (props.packageSize <= 1 || !this.state.packageSize) {
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
            this.setState((prevState) => {
                let missingInfo = [];
                let validate = {};
                Object.entries(prevState).forEach(([key, val]) => {
                    if (val === '' && key !== 'id') {
                        let words = key.split(/(?=[A-Z])/).join(' ').toLowerCase()
                        validate[key] = true;
                        missingInfo.push(`${words} `)
                    }
                })
                return { error: missingInfo.join(', '), validate }
            });
        } else {
            this.setState(() => ({
                error: '',
                validate: {
                    coffeeName: false,
                    packageSize: false,
                    containerSize: false,
                    price: false,
                    currency: false,
                    acidity: false,
                    aroma: false
                }
            }));
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
        if (!price || price.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ price, validate: { price: false } }))
        } else {
            this.setState(() => ({ validate: { price: true } }))
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
            <Fade className='col-lg-6 float-left'>
                <Form onSubmit={this.onSubmit} >
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
                            invalid={this.state.validate.coffeeName}
                        />
                        <FormFeedback className="ml-3">Needs Coffee name.</FormFeedback>
                    </FormGroup>
                    <FormGroup row>
                        <InputGroup id="price" className="pl-3">
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>$$$</InputGroupText>
                            </InputGroupAddon>
                            <Input
                                id="Price"
                                className="col-sm-10"
                                type="text"
                                placeholder="Price"
                                min="0"
                                value={this.state.price}
                                onChange={this.onPriceChange}
                                invalid={this.state.validate.price}
                            />
                            <InputGroupAddon addonType="append">
                                <InputGroupText>currency </InputGroupText>
                            </InputGroupAddon>
                            <Input
                                type="select"
                                id="currency"
                                className="col-sm-9"
                                value={this.state.currency}
                                onChange={this.onCurrencyChange}>
                                <option value="CAD">CAD</option>
                                <option value="JPY">JPY</option>
                                <option value="USD">USD</option>
                                <option value="HKD">HKD</option>
                            </Input>
                            <FormFeedback className="ml-3">Price needs to be numerical, up to 2 decimal points.</FormFeedback>
                        </InputGroup>
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
                        <Fade className="row form-group">
                            <InputGroup id="sticksCount" className="pl-3">
                                <Input
                                    type="number"
                                    placeholder="0"
                                    min='1'
                                    onChange={this.onPackageChange}
                                    value={this.state.packageSize}
                                    invalid={this.state.validate.packageSize}
                                />
                                <InputGroupAddon addonType="append">
                                    <InputGroupText>sticks, </InputGroupText>
                                </InputGroupAddon>
                                <Input
                                    type="number"
                                    id="sticksPer"
                                    placeholder="1"
                                    min='1'
                                    onChange={this.onContainerChange}
                                    value={this.state.containerSize}
                                    invalid={this.state.validate.containerSize}
                                />
                                <InputGroupAddon addonType="append">
                                    <InputGroupText>grams per stick</InputGroupText>
                                </InputGroupAddon>
                                <FormFeedback className="ml-3">Needs container/package type.</FormFeedback>
                            </InputGroup>
                        </Fade>
                    ) : (
                            <div className="row form-group">
                                <InputGroup id="sticksCount" className="pl-3">
                                    <Input
                                        type="number"
                                        placeholder="1"
                                        min='1'
                                        onChange={this.onContainerChange}
                                        value={this.state.containerSize}
                                        invalid={this.state.validate.containerSize}
                                    />
                                    <InputGroupAddon addonType="append">
                                        <InputGroupText>grams </InputGroupText>
                                    </InputGroupAddon>
                                    <FormFeedback className="ml-3">Needs container/package type.</FormFeedback>
                                </InputGroup>
                            </div>
                        )
                    }

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
                            invalid={this.state.validate.acidity}
                        />
                        <Label for="acidity" sm="2" className="text-center border rounded">{this.state.acidity || 0}</Label>
                        <FormFeedback className="ml-3">Needs acidity ranking.</FormFeedback>
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
                            invalid={this.state.validate.aroma}
                        />
                        <Label for="aroma" sm="2" className="text-center border rounded">{this.state.aroma || 0}</Label>
                        <FormFeedback className="ml-3">Needs aroma ranking.</FormFeedback>
                        {this.state.error &&
                            <Col sm="12" className="alert alert-danger mb-2 mt-4 pt-3 pb-3">
                                <p>Missing Information. Please check the following : </p>
                                <hr />
                                <p className="mb-0">
                                    {this.state.error} </p>
                            </Col>}
                    </FormGroup>
                    <Button className="btn-block ml-2 mr-2">Done</Button>

                </Form>
            </Fade>
        )
    }
}
