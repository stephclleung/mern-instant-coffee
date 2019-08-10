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
    render() {
        return (
            <div>
                { this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        placeholder="Name of brand, type..."
                        autoFocus
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
                    <select>
                        <option defaultValue="CAD">CAD</option>
                        <option value="JPY">JPY</option>
                        <option value="USD">USD</option>
                        <option value="HKD">HKD</option>
                    </select>
                    <input
                        type="number"
                        placeholder="Acidity"
                        min="1"
                        max="5"
                    />
                    <input
                        type="number"
                        placeholder="Aroma"
                        min="1"
                        max="5"
                    />
                    <button>Done</button>
                </form>
            </div>
        )
    }
    
}

