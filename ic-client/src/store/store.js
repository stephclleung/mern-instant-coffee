import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import instantCoffeeReducer from '../reducers/instant-coffee';
import instantCoffeeFilter from '../reducers/filter';
import thunk from 'redux-thunk';

export default () => {
    const store = createStore(
        combineReducers({
            instantCoffees: instantCoffeeReducer,
            filters: instantCoffeeFilter
        }),
        compose(applyMiddleware(thunk), //Middleware for AJAX
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    );
    return store;
}

// export default store;