import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Create from './Create';
import Dashboard from './Dashboard';
import NoMatch from './NoMatch';
import Header from './Header';



const AppRouter = () =>{
    return (
            <Router>
                <div>
                    <Header/>
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
