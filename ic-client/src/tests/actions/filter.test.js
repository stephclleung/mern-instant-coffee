import { setTextFilter, sortByPrice, setCurrencyFilter } from '../../actions/filter';


test("Should return text filter object", () => {
    const action = setTextFilter("coffee");
    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text: "coffee"
    });
})

test("Should return sort by price object", () => {
    const action = sortByPrice();
    expect(action).toEqual({
        type: "SORT_BY_PRICE"
    });
})

test("Should return currency filter object", () => {
    const action = setCurrencyFilter("JPY");
    expect(action).toEqual({
        type: "SET_CURRENCY_FILTER",
        currency: "JPY"
    });
})