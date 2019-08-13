import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Create from './Create';
import Dashboard from './Dashboard';
import NoMatch from './NoMatch';
import Header from './Header';
import Edit from './Edit';
import { Container, Row, Col } from 'reactstrap';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <div>
                <Container>
                    <Col xs="6" md="8" lg="12">
                        <Header />
                        <Switch>
                            <Route exact={true} path="/" component={Dashboard} />
                            <Route path="/create" component={Create} />
                            <Route path="/login" />
                            <Route path="/edit/:id" component={Edit} />
                            <Route component={NoMatch} />
                        </Switch>
                    </Col>
                </Container>
            </div>
        </BrowserRouter>
    );
};

export default AppRouter;
