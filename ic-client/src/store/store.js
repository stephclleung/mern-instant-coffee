import { createStore, combineReducers } from 'redux';
import instantCoffeeReducer from '../reducers/instant-coffee';

const store = createStore(
    combineReducers({
        instantCoffee: instantCoffeeReducer
    })
)

export default store;