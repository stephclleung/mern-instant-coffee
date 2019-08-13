import './custom.scss';
import React from 'react';
import ReactDOM from 'react-dom';

import AppRouter from './components/AppRouter';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';

import { Container, Row, Col, Spinner } from 'reactstrap';
//Store:
import setStore from './store/store';
import { loadInstantCoffeeFromDB } from './actions/instant-coffee';

const store = setStore();

const loading = (
    <Container>
        <div className="row h-100 justify-content-center align-items-center">
            <Spinner />
        </div>
    </Container>
);

//TODO: remove this :
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(loading, document.getElementById('root'));

store.dispatch(loadInstantCoffeeFromDB()).then(() => {
    console.log("Checking store: ", store.getState())
    ReactDOM.render(jsx, document.getElementById('root'));
});


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

