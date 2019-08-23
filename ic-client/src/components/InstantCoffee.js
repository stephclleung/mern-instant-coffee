import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Card, CardBody, CardImg, CardText, CardSubtitle, CardTitle } from 'reactstrap';
import bean from '../img/bean.jpg';

const InstantCoffee = ({ id, coffeeName, packageSize, containerSize, price, currency, aroma, acidity, coffeeImage }) => {
    return (
        <Col sm="12" className="mb-3">
            <Card style={{ width: 25 + 'rem' }} className="flex-md-row border-dark shadow-sm">
                <CardBody className="align-items-start">
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
                {console.log(coffeeImage)}
                <Col md="4" className="my-auto">
                    <CardImg
                        className="img-responsive"
                        height={100 + "%"}
                        src={coffeeImage}
                        alt="Card image cap"
                    />
                </Col>

            </Card>
        </Col>
    )
}

const renderBeans = (size) => {
    let beans = [];
    for (let b = 0; b < size; b++) {
        beans.push(<img src={bean} key={b} style={{ width: 17 + 'px', height: 18 + 'px' }} alt={"beans"} />)
    }
    return beans
}

export default InstantCoffee;