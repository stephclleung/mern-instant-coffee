import React from 'react';

const InstantCoffee = ({coffee}) => {
    return (
        <div>
            <h3>{coffee.coffeeName}</h3>
            <ul>
                <li>Package Size : {coffee.packageSize}</li>
                <li>Price : {coffee.price}</li>
                <li>Aroma {coffee.aroma}</li>
                <li>Acidity {coffee.acidity}</li>
            </ul>
        </div>
    )
}

export default InstantCoffee;