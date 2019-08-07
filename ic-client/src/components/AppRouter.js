import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

const AppRouter = () =>{
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={Dashboard}>Dashboard</Route>
                    <Route path="/create" component={Create}>Create</Route>
                    <Route path="/login">Login</Route>
                    <Route component={NoMatch}/>
                </Switch>
            </div>
        </Router>
    );
};

export default AppRouter;
