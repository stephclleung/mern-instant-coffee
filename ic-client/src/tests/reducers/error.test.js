import errorReducer from '../../reducers/error';

test("Should return error reducer with 404 error", () => {
    const action = {
        type: 'HTTP_404_ERROR',
        text: "coffee"
    }
    const error = errorReducer(null, action);
    expect(error).toEqual({ text: "coffee" })
})
