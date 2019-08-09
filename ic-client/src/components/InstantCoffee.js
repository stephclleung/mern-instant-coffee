import React from 'react';
import { Link } from 'react-router-dom';

const InstantCoffee = ({id, coffeeName, packageSize, containerSize, price, aroma, acidity}) => {
    return (
        
        <div>
            <h3><Link to={`/edit${id}`}>{coffeeName}</Link></h3>
            <ul>
                {packageSize > 0 ? ( 
                        <li>Package Size : { packageSize } sticks </li>
                    ) : (
                        <li>Container Size : {containerSize} sticks </li>
                    )
                }
                <li>Price : {price}</li>
                <li>Aroma : {stars(aroma)}</li>
                <li>Acidity : {stars(acidity)}</li>
            </ul>
        </div>
    )
}

const stars = (size) => {
    let star = "⚝";
    return star.repeat(size)
}

export default InstantCoffee;