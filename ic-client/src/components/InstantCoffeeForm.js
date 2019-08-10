import React from 'react';

// TODO:
// - Change to Class base, so local component state can track inputs
// - state needs to be declared ( + base on edit / create )
// - React : onXXXXChanges...
// - React : onSubmit

export default class InstantCoffeeForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id : '',
            coffeeName: '',
            packageSize: '',
            containerSize: '',
            price: '',
            currency: '',
            acidity: '',
            aroma: ''
        };
    };
    onSubmit = (e) => {
        e.preventDefault();
        console.log(e)
        if( !this.coffeeName    || 
            !this.price         || 
            !this.currency      || 
            !this.acidity       || 
            !this.aroma         ||
            !(this.packageSize && this.containerSize)) {
                this.setState(() => ({ error : "Missing information."}))
            }
    }
    onCoffeeNameChange = (e) => {
        const coffeeName = e.target.value;
        this.setState(() => ({ coffeeName }))
    }
    onPriceChange = (e) => {
        const price = e.target.value;
        if ( parseInt(price) > 0 || !price ) {
            this.setState(() => ({ price }));
        }
    }
    onQuantityChange = (e) => {
        const quantity = e.target.value;
        if ( parseInt(quantity) > 0 || !quantity ) {
            this.setState(() => ({ quantity }));
        }
    }
    onAromaChange = (e) => {
        const aroma = e.target.value
        if ( parseInt(aroma) >= 1 && parseInt(aroma) <= 5 || !aroma ) {
            this.setState(() => ({ aroma }));
        }
    }
    onAcidityChange = (e) => {
        const acidity = e.target.value
        if ( parseInt(acidity) >= 1 && parseInt(acidity) <= 5 || !acidity ) {
            this.setState(() => ({ acidity }));
        }
    }
    onCurrencyChange = (e) => {
        const currency = e.target.value
        this.setState(() => ({ currency }))
    }
    render() {
        return (
            <div>
                { this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        placeholder="Name of brand, type..."
                        autoFocus={true}
                        value={this.state.coffeeName}
                        onChange={this.onCoffeeNameChange}
                    />
                    <input
                        type="number"
                        placeholder="0"
                        min="1"
                        max="500"
                    />
                    <select>
                        <option defaultValue="package">sticks</option>
                        <option value="container">grams</option>
                    </select>
                    <input
                        type="number"
                        placeholder="Price"
                        min="0"
                    />
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

