import errorReducer from '../../reducers/error';

test("Should return error reducer with 404 error", () => {
    const action = {
        type: 'HTTP_404_ERROR'
    }
    const error = errorReducer(null, action);
    expect(error).toEqual({
        showErrorMessage: true,
        errorMessage: 'The instant coffee entry is not found. Please try again later.'
    })
})

test("Should return error reducer with 409 error", () => {
    const action = {
        type: 'HTTP_409_ERROR'
    }
    const error = errorReducer(null, action);
    expect(error).toEqual({
        showErrorMessage: true,
        errorMessage: 'The instant coffee name already exists in the database. Your entry was not added to the database.'
    })
})

test("Should return error reducer with other error", () => {
    const action = {
        type: 'OTHER_ERROR'
    }
    const error = errorReducer(null, action);
    expect(error).toEqual({
        showErrorMessage: true,
        errorMessage: 'An error has occured. Please contact the site master for additional assistance.'
    })
})

test("Should return a cleared state after acknowledgement", () => {
    const action = {
        type: 'ERROR_ACKNOWLEDGED'
    }
    const error = errorReducer(null, action);
    expect(error).toEqual({
        showErrorMessage: false,
        errorMessage: ''
    })
})


