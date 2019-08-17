import instantCoffeeReducer from '../../reducers/instant-coffee';
import { instantCoffee as instantCoffeeArray } from '../fixtures/instant-coffee-data';


test("Should set default instant coffee reducer state", () => {
    const state = instantCoffeeReducer([], { type: '@@INIT' });
    expect(state).toEqual([])
});

test("Should remove instant coffee by ID", () => {
    const action = {
        type: 'REMOVE_INSTANT_COFFEE',
        id: "1"
    };
    const state = instantCoffeeReducer(instantCoffeeArray, action);
    expect(state).toEqual([instantCoffeeArray[0], instantCoffeeArray[2], instantCoffeeArray[3]]);
})

test("Should add new instant coffee to array", () => {
    const instantCoffee = {
        id: '5',
        coffeeName: "Blendy - Tester",
        packageSize: 36,
        containerSize: 0,
        price: 12,
        currency: "CAD",
        acidity: 1,
        aroma: 4
    }

    const action = {
        type: 'ADD_INSTANT_COFFEE',
        instantCoffee
    };

    const state = instantCoffeeReducer(instantCoffeeArray, action);
    expect(state).toEqual([...instantCoffeeArray, instantCoffee]);
})

test("Should edit specific instant coffee", () => {

    const action = {
        type: 'EDIT_INSTANT_COFFEE',
        id: '1',
        updates: {
            packageSize: 10
        }
    };

    const state = instantCoffeeReducer(instantCoffeeArray, action);
    expect(state[1].packageSize).toEqual(10);
})