import { setTextFilter } from '../../actions/filter';


test("Should return text filter object", () => {
    const action = setTextFilter("coffee");
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: "coffee"
    });
})