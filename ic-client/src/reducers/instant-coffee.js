
const instantCoffeeReducer = (state, action) => {
    //return [];
    const initialState = { instantCoffee: [] }
    switch(action.type) {
        case 'ADD_INSTANT_COFFEE':
            break;
        case 'REMOVE_INSTANT_COFFEE':
            return filterInstantCoffee(state, action);
        default :
            return initialState;
    }
}


const filterInstantCoffee = (state, action) => {
    return state.filter((ic) => ic.id !== action.id );
}
export default instantCoffeeReducer;