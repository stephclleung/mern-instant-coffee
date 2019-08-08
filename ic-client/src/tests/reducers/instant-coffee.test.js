import instantCoffeeReducer from '../../reducers/instant-coffee';

test("Should set default instant coffee reducer state", () => {
    const state = instantCoffeeReducer(null, { type: '@@INIT'});
    expect(state).toEqual([])
});

test("Should remove instant coffee by ID", () => {
    const action = {
        type: 'REMOVE_INSTANT_COFFEE',
        id: instantCoffee[0].id
    };
    const state = instantCoffeeReducer(instantCoffee[0].id, action);
    expect(state).toEqual([instantCoffee[1], instantCoffee[2]]);
})