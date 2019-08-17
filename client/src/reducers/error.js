
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
                errorMessage: 'The instant coffee entry is not found. Please try again later.'
            };
        case 'HTTP_409_ERROR':
            //handle409ERror
            return {
                showErrorMessage: true,
                errorMessage: 'The instant coffee name already exists in the database. Your entry was not added to the database.'
            };
        case 'OTHER_ERROR':
            //handleOtherError
            return {
                showErrorMessage: true,
                errorMessage: 'An error has occured. Please contact the site master for additional assistance.'
            }
        default:
            return state;
    }
}