import { createStore, combineReducers } from 'redux';
import instantCoffeeReducer from '../reducers/instant-coffee';


export default () => {
    const store = createStore(
        combineReducers({
            instantCoffee: instantCoffeeReducer
        }));
    return store;
}

// export default store;