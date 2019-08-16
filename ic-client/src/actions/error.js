
export const handle404Error = () => ({
    type: 'HTTP_404_ERROR',
    errorMessage: 'The instant coffee object cannot be found. Please try again.'
});

export const handle409Error = () => ({
    type: 'HTTP_409_ERROR',
    errorMessage: 'The instant coffee name already exists in the database. Your entry was not added to the database.'
});

export const handleOtherError = () => ({
    type: 'HTTP_OTHER_ERROR',
    errorMessage: 'An error has occured. Please contact the site master for additional assistance.'
});

export const removeError = () => ({
    type: 'ERROR_ACKNOWLEDGED'
})