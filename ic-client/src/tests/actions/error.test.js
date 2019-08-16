import {
    handle404Error,
    handle409Error,
    handleOtherError,
    removeError,
} from '../../actions/error';

test("Should return 404 error handler object", () => {
    const action = handle404Error();
    expect(action).toEqual({
        type: "HTTP_404_ERROR",
    });
})

test("Should return 409 error handler object", () => {
    const action = handle409Error();
    expect(action).toEqual({
        type: "HTTP_409_ERROR",
    });
})

test("Should return other error handler object", () => {
    const action = handleOtherError();
    expect(action).toEqual({
        type: "OTHER_ERROR",
    });
})

test("Should return remove error handler object", () => {
    const action = removeError();
    expect(action).toEqual({
        type: "ERROR_ACKNOWLEDGED",
    });
})
