import instantCoffeeReducer from '../../reducers/instant-coffee';
import { instantCoffee } from '../fixtures/instant-coffee-data';


test("Should set default instant coffee reducer state", () => {
    const state = instantCoffeeReducer(null, { type: '@@INIT'});
    expect(state.instantCoffee).toEqual([])
});

test("Should remove instant coffee by ID", () => {
    const action = {
        type: 'REMOVE_INSTANT_COFFEE',
        id: instantCoffee[0].id
    };
    const state = instantCoffeeReducer(instantCoffee, action);
    expect(state).toEqual([instantCoffee[1], instantCoffee[2], instantCoffee[3]]);
})