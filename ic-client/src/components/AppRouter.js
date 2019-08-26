import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ErrorModal from './ErrorModal';
import Create from './Create';
import Dashboard from './Dashboard';
import NoMatch from './NoMatch';
import Header from './Header';
import About from './About';
import Edit from './Edit';
import { Container } from 'reactstrap';
import { connect } from 'react-redux';

export const AppRouter = (props) => {
    return (
        <BrowserRouter>
            <Header />
            <Container pt="4" style={{ minHeight: 100 + "%" }}>
                <div className="m-3">
                    <Switch>
                        <Route exact={true} path="/" component={Dashboard} />
                        <Route path="/create" component={Create} />
                        <Route path="/edit/:id" component={Edit} />
                        <Route path="/about" component={About} />
                        <Route component={NoMatch} />
                    </Switch>
                </div>

            </Container>
            {props.errors.showErrorMessage &&
                <ErrorModal header={"Something went wrong..."} errorMessage={props.errors.errorMessage} showErrorMessage={props.errors.showErrorMessage} />}
        </BrowserRouter>
    );
};

const mapStateToProps = (state) => ({
    errors: state.errors
})

//export default AppRouter;
export default connect(mapStateToProps)(AppRouter);
