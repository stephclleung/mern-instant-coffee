import {
    addInstantCoffee,
    addInstantCoffeeToDB,
    editInstantCoffee,
    removeInstantCoffee,
    removeInstantCoffeeFromDB,
    loadInstantCoffee,
    loadInstantCoffeeFromDB,
} from '../../actions/instant-coffee';
import { instantCoffee } from '../fixtures/instant-coffee-data';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import axios from 'axios';

const createMockStore = configureMockStore([thunk]);

let sampleCoffeeId;

test("Should setup add instant coffee object 'Blendy - Otona no Black' ", () => {
    const action = addInstantCoffee(instantCoffee[0]);
    expect(action).toEqual({
        type: 'ADD_INSTANT_COFFEE',
        instantCoffee: instantCoffee[0]
    });
});

//done : Jest is now forced to wait
test("Should add coffee data to database.", (done) => {
    const store = createMockStore({});
    const ICData = {
        coffeeName: "Blendy - Otona no Black",
        packageSize: 6,
        price: 5,
        containerSize: 0,
        currency: "CAD",
        acidity: 3,
        aroma: 4
    }

    //store should fire data to database, then get action back.
    store.dispatch(addInstantCoffeeToDB(ICData))
        .then(() => {
            const actions = store.getActions(); //mock function
            expect(actions[0]).toEqual({     //Check returning action
                type: 'ADD_INSTANT_COFFEE',
                instantCoffee: {
                    id: expect.any(String),
                    ...ICData
                }
            });

            return axios.get(`http://localhost:5001/coffee/${actions[0].instantCoffee.id}`)
        })
        .then((res) => {
            sampleCoffeeId = res.data._id;
            expect(res.data).toEqual({
                __v: 0,
                _id: expect.any(String),
                totalPurchased: 0,
                ...ICData
            });
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


test("Should remove instant coffee object from db", () => {
    //store to dispatch first action : remove from db
    //store to dispatch second action.
    const store = createMockStore({});
    store.dispatch(removeInstantCoffeeFromDB(sampleCoffeeId))
        .then(() => {
            //check action object
            //return another request to ensure the item is not here.
            const actions = store.getActions();
            expect(actions).toEqual({
                type: 'REMOVE_INSTANT_COFFEE',
                id: sampleCoffeeId
            })

            return axios.get(`http://localhost:5001/coffee/${sampleCoffeeId}`)
        })
        .then((res) => {
            //assert object missing.
            expect(res.status).toBe(404);

        });
});

test("Should setup remove instant coffee object", () => {
    const action = removeInstantCoffee('123abc');
    expect(action).toEqual({
        type: 'REMOVE_INSTANT_COFFEE',
        id: '123abc',
    })
});

test("Should setup load instant coffee objects", () => {
    const action = loadInstantCoffee(instantCoffee);
    expect(action).toEqual({
        type: 'LOAD_INSTANT_COFFEE',
        instantCoffees: instantCoffee
    })
})

test("Should load data from database", async () => {
    const store = createMockStore({});
    store.dispatch(loadInstantCoffeeFromDB())
        .then(() => {
            const actions = store.getActions();
            expect(actions[0]).toEqual({     //Check returning action
                type: 'LOAD_INSTANT_COFFEE',
                instantCoffees: expect.any(Array)
            });
        }).catch((e) => {
            console.log("Error ", e);
        })
})