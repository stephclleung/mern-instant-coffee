import { createStore, combineReducers } from 'redux';
import instantCoffeeReduer from '../store/store';

const store = createStore(
    combineReducers({
        instantCoffee: instantCoffeeReduer
    })
)

export default store;