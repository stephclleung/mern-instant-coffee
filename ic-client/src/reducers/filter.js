
const filterReducerInitialState = {
    text: '',
    sortBy: ''
}

export default (state = filterReducerInitialState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY_AROMA':
            return {
                ...state,
                sortBy: 'aroma'
            }
        default: return state
    }
}