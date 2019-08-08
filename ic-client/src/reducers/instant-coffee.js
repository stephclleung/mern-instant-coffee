

const instantCoffeeReducer = (state, action) => {
    //return [];
    const initialState = { instantCoffee: [] }
    switch(action.type) {
        case 'ADD_INSTANT_COFFEE':
            return addNewInstantCoffee(state, action);
        case 'REMOVE_INSTANT_COFFEE':
            return filterInstantCoffee(state, action);
        case 'EDIT_INSTANT_COFFEE':
            return editInstantCoffee(state, action);
        default :
            return initialState;
    }
}


const filterInstantCoffee = (state, action) => {
    return state.filter((ic) => ic.id !== action.id );
}

const addNewInstantCoffee = (state, action) => {
    return [ ...state, action.instantCoffee ]
}

const editInstantCoffee = (state, action ) => {
    return state.map((ic) => {
        if(ic.id === action.id){
            return Object.assign(ic, action.updates)
        } else {
            return ic;
        }
    })
}
export default instantCoffeeReducer;