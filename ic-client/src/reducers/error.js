
const initialState = {
    showErrorMessage: false,
    errorMessage: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ERROR_ACKNOWLEDGED':
            return initialState;
        case 'HTTP_404_ERROR':
            //handle404Error
            return {
                showErrorMessage: true,
                errorMessage: action.errorMessage
            };
        case 'HTTP_409_ERROR':
            //handle409ERror
            return {
                showErrorMessage: true,
                errorMessage: action.errorMessage
            };
        case 'HTTP_OTHER_ERROR':
            //handleOtherError
            break;
        default:
            return state
    }
}