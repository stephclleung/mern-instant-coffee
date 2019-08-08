import React from 'react';
import ReactDOM from 'react-dom';

import AppRouter from './components/AppRouter';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
//Store:
import setStore from './store/store';
import { addInstantCoffee } from './actions/instant-coffee';

const store = setStore();
store.dispatch(addInstantCoffee({
    coffeeName: "Blendy - Otona no Black",
    packageSize: 6,
    price: 5,
    currency: "CAD",
    acidity: 3,
    aroma: 4
}));

store.dispatch(addInstantCoffee({
    coffeeName: "Blendy - Caffe Au Lait",
    packageSize: 3,
    price: 3,
    currency: "CAD",
    acidity: 1,
    aroma: 5
}));


const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);
ReactDOM.render(jsx, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
