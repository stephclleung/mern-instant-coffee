import { addInstantCoffee, addInstantCoffeeToDB, editInstantCoffee, removeInstantCoffee  } from '../../actions/instant-coffee';
import { instantCoffee } from '../fixtures/instant-coffee-data';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import axios from 'axios';

const createMockStore = configureMockStore([thunk]);

test("Should set up default add instant coffee object", () => {
    const action = addInstantCoffee({});
    expect(action).toEqual({
        type: 'ADD_INSTANT_COFFEE',
        instantCoffee : {
            id : expect.any(String),
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

test("Should setup add instant coffee object 'Blendy - Otona no Black' ", () => {
    const action = addInstantCoffee(instantCoffee[0]);
    expect(action).toEqual({
        type: 'ADD_INSTANT_COFFEE',
        instantCoffee : {
            id : expect.any(String),
            coffeeName: "Blendy - Otona no Black",
            packageSize: 6,
            containerSize: 0,
            price: 5,
            currency: "CAD",
            acidity: 3,
            aroma: 4
        }
    });
});

test("Should add coffee data to database.",  (done) => {
    
    const store = createMockStore({});

    const ICData = {
        coffeeName: "Blendy - Otona no Black",
        packageSize: 6,
        price: 5,
        currency: "CAD",
        acidity: 3,
        aroma: 4
    }

    //store should fire writing data to database, then get action back.
    store.dispatch(addInstantCoffeeToDB(ICData))
        .then(() => {
            const actions = store.getActions();
            console.log("Actions: ", actions);
            expect(actions[0].toEqual({     //Check returning action
                type: 'ADD_INSTANT_COFFEE',
                instantCoffee : {
                    id : expect.any(String),
                    ...ICData
                }
            }));

            return axios.get(`http://localhost:5001/coffee/${actions[0].instantCoffee.id}`)
        })
        .then((data) => {
            expect(data).toEqual(ICData);
            done();
        });
});

test("Should setup edit instant coffee object", () => {
    const action = editInstantCoffee('123abc', {
        coffeeName: "Blendy - Amai",
        packageSize: 5,
    });
    expect(action).toEqual({
        type: 'EDIT_INSTANT_COFFEE',
        id: '123abc',
        updates: {
            coffeeName: "Blendy - Amai",
            packageSize: 5,
        }
    })
});

test("Should setup remove instant coffee object", () => {
    const action = removeInstantCoffee('123abc');
    expect(action).toEqual({
        type: 'REMOVE_INSTANT_COFFEE',
        id: '123abc',
    })
});