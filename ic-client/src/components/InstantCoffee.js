import React from 'react';

const InstantCoffee = ({coffee}) => {
    return (
        
        <div>
        {console.log("Am here, ", coffee)}
            <h3>{coffee.coffeeName}</h3>
            <ul>
                {coffee.packageSize > 0 ? ( 
                        <li>Package Size : { coffee.packageSize } sticks </li>
                    ) : (
                        <li>Container Size : {coffee.containerSize} sticks </li>
                    )
                }
                <li>Price : {coffee.price}</li>
                <li>Aroma : {stars(coffee.aroma)}</li>
                <li>Acidity : {stars(coffee.acidity)}</li>
            </ul>
        </div>
    )
}

const stars = (size) => {
    let star = "⚝";
    return star.repeat(size)
}

export default InstantCoffee;