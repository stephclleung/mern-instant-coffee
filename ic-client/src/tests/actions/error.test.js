import { handle404Error } from '../../actions/error';

test("Should return 404 error handler object", () => {
    const action = handle404Error();
    expect(action).toEqual({
        type: "HTTP_404_ERROR",
        errorMessage: "The instant coffee object cannot be found. Please try again."
    });
})