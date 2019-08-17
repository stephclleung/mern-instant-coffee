
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
        case 'SORT_BY_ACIDITY':
            return {
                ...state,
                sortBy: 'acidity'
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SORT_BY_PRICE':
            return {
                ...state,
                sortBy: 'price'
            }

        default: return state
    }
}