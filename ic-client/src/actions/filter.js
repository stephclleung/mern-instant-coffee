
export const setTextFilter = (text = "") => ({
    type: 'SET_TEXT_FILTER',
    text
});

export const sortByPrice = () => ({
    type: 'SORT_BY_PRICE'
});

export const sortByAroma = () => ({
    type: 'SORT_BY_AROMA'
});


export const setCurrencyFilter = (currency = "") => ({
    type: 'SET_CURRENCY_FILTER',
    currency
})