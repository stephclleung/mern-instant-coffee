import filterReducer from '../../reducers/filter';

test("Should return filter reducer with text filter", () => {
    const action = {
        type: 'SET_TEXT_FILTER',
        text: "coffee"
    }
    const filter = filterReducer(null, action);
    expect(filter).toEqual({ text: "coffee" })
})