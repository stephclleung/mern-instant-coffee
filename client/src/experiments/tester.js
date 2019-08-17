import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

///Filters :
const setTextFilter = (text = "") => ({
    type: 'SET_TEXT_FILTER',
    text
});

const icFilter = (state = filterReducerInitialState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        default: return state
    }
}

//ICs
export const loadInstantCoffee = (instantCoffees) => ({
    type: 'LOAD_INSTANT_COFFEE',
    instantCoffees
});


export const loadInstantCoffeeFromDB = () => {
    let instantCoffees = [];
    return (dispatch) => {
        return axios.get("http://localhost:5001/coffee")
            .then((res) => {
                res.data.forEach((instantCoffee) => {
                    instantCoffees.push({
                        id: instantCoffee._id,
                        ...instantCoffee
                    })
                })
                dispatch(loadInstantCoffee(instantCoffees))
            });
    }
}

const store = createStore(
    combineReducers({
        instantCoffees: instantCoffeeReducer,
        filters: instantCoffeeFilter
    })
);