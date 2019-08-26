import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import instantCoffeeReducer from '../reducers/instant-coffee';
import instantCoffeeFilterReducer from '../reducers/filter';
import errorReducer from '../reducers/error';
import locationReducer from '../reducers/location';
import thunk from 'redux-thunk';

const composeEnhancers =
    typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

export default () => {
    const store = createStore(
        combineReducers({
            instantCoffees: instantCoffeeReducer,
            filters: instantCoffeeFilterReducer,
            errors: errorReducer,
            location: locationReducer
        }), enhancer
        //middleware for ajax
    );
    return store;
}

// export default store;