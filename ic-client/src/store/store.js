import { createStore, combineReducers } from redux;
import instantCoffeeReduer from '../store/store';

const store = createStore(
    combineReducer({
        instantCoffee: instantCoffeeReduer
    })
)

export default store;