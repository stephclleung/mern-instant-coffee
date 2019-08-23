import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Card, CardBody, CardImg, CardText, CardSubtitle, CardTitle } from 'reactstrap';
import bean from '../img/bean.jpg';

const InstantCoffee = ({ id, coffeeName, packageSize, containerSize, price, currency, aroma, acidity, coffeeImage }) => {
    return (
        <Col className="mt-3 mb-3 pl-3 pr-3">
            <Card className="flex-sm-row border-dark shadow-sm mx-auto">
                <CardBody className="align-items-start" sm="8">
                    <CardTitle ><h4><Link id="coffeeCardTitle" to={`/edit/${id}`}>{coffeeName}</Link></h4></CardTitle>
                    <CardSubtitle>$ {price} {currency} </CardSubtitle>
                    <CardText>
                        <li>Aroma : {renderBeans(aroma)}</li>
                        <li>Acidity : {renderBeans(acidity)}</li>
                        {packageSize > 0 ? (
                            <li>{packageSize} sticks x {containerSize} grams</li>
                        ) : (
                                <li>{containerSize} grams </li>
                            )
                        }
                    </CardText>
                </CardBody>
                <Col sm="4" className="my-auto">
                    <CardImg

                        height={100 + "%"}
                        src={checkImage(coffeeImage)}
                        alt="Card image cap"
                    />
                </Col>

            </Card>
        </Col>
    )
}

const checkImage = (coffeeImage) => {
    if (coffeeImage === "null" || typeof coffeeImage === 'object') {
        return process.env.REACT_APP_DEFAULT_IMAGE
    }
    return coffeeImage;
}

const renderBeans = (size) => {
    let beans = [];
    for (let b = 0; b < size; b++) {
        beans.push(<img src={bean} key={b} style={{ width: 17 + 'px', height: 18 + 'px' }} alt={"beans"} />)
    }
    return beans
}

export default InstantCoffee;