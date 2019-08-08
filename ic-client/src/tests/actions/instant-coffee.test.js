import { addInstantCoffee } from '../../actions/instant-coffee';
import instantCoffee from '../fixtures/instant-coffee-data';

test("Should set up default add instant coffee object", () => {
    const action = addInstantCoffee({});
    expect(action).toEqual({
        type: 'ADD_INSTANT_COFFEE',
        instantCoffee : {
            coffeeName : null,
            packageSize : 0,
            containerSize : 0,
            price : -1,
            currency : "invalid",
            acidity : -1,
            aroma : -1
        }
    });
});

test("Should set up add instant coffee object 'Blendy - Otona no Black' ", () => {
    const action = addInstantCoffee(instantCoffee[0]);
    expect(action).toEqual({
        type: 'ADD_INSTANT_COFFEE',
        instantCoffee : {
            coffeeName: "Blendy - Otona no Black",
            packageSize: 6,
            containerSize: 0,
            price: 5,
            currency: "CAD",
            acidity: 3,
            aroma: 4
        }
    });
})