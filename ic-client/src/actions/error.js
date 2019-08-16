
export const handle404Error = () => ({
    type: 'HTTP_404_ERROR',
});

export const handle409Error = () => ({
    type: 'HTTP_409_ERROR',
});

export const handleOtherError = () => ({
    type: 'OTHER_ERROR',
});

export const removeError = () => ({
    type: 'ERROR_ACKNOWLEDGED'
})