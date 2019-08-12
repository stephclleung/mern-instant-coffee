import React from 'react';

// TODO:
// - React : onXXXXChanges...

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
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit} className="form-group">
                    <input
                        type="text"
                        placeholder="Name of brand, type..."
                        autoFocus={true}
                        value={this.state.coffeeName}
                        onChange={this.onCoffeeNameChange}
                    />
                    <input
                        type="number"
                        placeholder="Price"
                        min="0"
                        value={this.state.price}
                        onChange={this.onPriceChange}
                    />
                    <select onChange={this.onIsStickToggle} >
                        <option value="package" >Individual stick</option>
                        <option value="container" >Jar</option>
                    </select>
                    {this.state.isStick ? (
                        <div >
                            <label>sticks : </label>
                            <input
                                type="number"
                                placeholder="1"
                                min='1'
                                onChange={this.onPackageChange}
                                value={this.state.packageSize}
                            />
                            <label>each weighs : </label>
                            <input
                                type="number"
                                placeholder="1"
                                min='1'
                                onChange={this.onContainerChange}
                                value={this.state.containerSize}
                            />
                        </div>) : (
                            <div>
                                <label>Grams: </label>
                                <input
                                    type="number"
                                    placeholder="1"
                                    min='1'
                                    onChange={this.onContainerChange}
                                    value={this.state.containerSize}
                                />
                            </div>
                        )
                    }


                    <select
                        value={this.state.currency}
                        onChange={this.onCurrencyChange}
                    >
                        <option value="CAD">CAD</option>
                        <option value="JPY">JPY</option>
                        <option value="USD">USD</option>
                        <option value="HKD">HKD</option>
                    </select>
                    <input
                        type="number"
                        placeholder="Acidity"
                        min="1"
                        max="5"
                        value={this.state.acidity}
                        onChange={this.onAcidityChange}
                    />
                    <input
                        type="number"
                        placeholder="Aroma"
                        min="1"
                        max="5"
                        value={this.state.aroma}
                        onChange={this.onAromaChange}
                    />
                    <button>Done</button>
                </form>
            </div>
        )
    }
}

