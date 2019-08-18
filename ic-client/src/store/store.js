import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import instantCoffeeReducer from '../reducers/instant-coffee';
import instantCoffeeFilterReducer from '../reducers/filter';
import errorReducer from '../reducers/error';
import thunk from 'redux-thunk';

export default () => {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() || compose;
    const store = createStore(
        combineReducers({
            instantCoffees: instantCoffeeReducer,
            filters: instantCoffeeFilterReducer,
            errors: errorReducer
        }),
        composeEnhancers(applyMiddleware(thunk)) //middleware for ajax
    );
    return store;
}

// export default store;