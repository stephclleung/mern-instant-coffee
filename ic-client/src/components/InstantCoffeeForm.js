import React from 'react';

const InstantCoffeeForm = () => {
    return (
        <div>
            <form>
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
            </form>
        </div>
    )
}


export default InstantCoffeeForm;