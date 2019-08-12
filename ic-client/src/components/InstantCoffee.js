import React from 'react';
import { Link } from 'react-router-dom';

const InstantCoffee = ({ _id, coffeeName, packageSize, containerSize, price, aroma, acidity }) => {
    return (

        <div>
            <h3><Link to={`/edit/${_id}`}>{coffeeName}</Link></h3>
            <ul>
                {packageSize > 0 ? (
                    <li>{packageSize} sticks x {containerSize} grams</li>
                ) : (
                        <li>{containerSize} grams </li>
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