import {
    setTextFilter,
    sortByPrice,
    setCurrencyFilter,
    sortByAroma,
    sortByAcidity,
    sortByAmount,
} from '../../actions/filter';


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

test("Should return aroma sort object", () => {
    const action = sortByAroma();
    expect(action).toEqual({
        type: "SORT_BY_AROMA",
    });
})

test("Should return acidity sort object", () => {
    const action = sortByAcidity();
    expect(action).toEqual({
        type: "SORT_BY_ACIDITY",
    });
})

test("Should return price sort object", () => {
    const action = sortByPrice();
    expect(action).toEqual({
        type: "SORT_BY_PRICE",
    });
})

test("Should return amount sort object", () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: "SORT_BY_AMOUNT",
    });
})

