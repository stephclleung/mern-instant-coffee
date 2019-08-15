import filterReducer from '../../reducers/filter';

test("Should return filter reducer with text filter", () => {
    const action = {
        type: 'SET_TEXT_FILTER',
        text: "coffee"
    }
    const filter = filterReducer(null, action);
    expect(filter).toEqual({ text: "coffee" })
})

test("Should return filter reducer with sort-by aroma filter", () => {
    const action = {
        type: 'SORT_BY_AROMA'
    }
    const filter = filterReducer(null, action);
    expect(filter).toEqual({ sortBy: 'aroma' })
})

test("Should return filter reducer with sort-by acidity filter", () => {
    const action = {
        type: 'SORT_BY_ACIDITY'
    }
    const filter = filterReducer(null, action);
    expect(filter).toEqual({ sortBy: 'acidity' })
})

test("Should return filter reducer with sort-by amount filter", () => {
    const action = {
        type: 'SORT_BY_AMOUNT'
    }
    const filter = filterReducer(null, action);
    expect(filter).toEqual({ sortBy: 'amount' })
})

test("Should return filter reducer with sort-by price filter", () => {
    const action = {
        type: 'SORT_BY_PRICE'
    }
    const filter = filterReducer(null, action);
    expect(filter).toEqual({ sortBy: 'price' })
})
