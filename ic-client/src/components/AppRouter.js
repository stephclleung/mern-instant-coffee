import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Create from './Create';
import Dashboard from './Dashboard';
import NoMatch from './NoMatch';
import Header from './Header';



const AppRouter = () =>{
    return (
            <BrowserRouter>
                <div>
                    <Header/>
                    <Switch>
                        <Route exact={true} path="/" component={Dashboard} />
                        <Route path="/create" component={Create} />
                        <Route path="/login" />
                        <Route component={NoMatch}/>
                    </Switch>
                </div>
            </BrowserRouter>
    );
};

export default AppRouter;
