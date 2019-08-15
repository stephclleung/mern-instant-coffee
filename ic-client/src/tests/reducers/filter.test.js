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