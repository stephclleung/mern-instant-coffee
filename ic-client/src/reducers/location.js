

const initialLocation = { location: "" }
const locationReducer = (state = initialLocation, action) => {
    switch (action.type) {
        case 'SET_LOCATION':
            return { location: action.location }
        default:
            return state;
    }
}

export default locationReducer;