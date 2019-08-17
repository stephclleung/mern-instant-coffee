import {
    addInstantCoffee,
    addInstantCoffeeToDB,
    editInstantCoffee,
    editInstantCoffeeToDB,
    removeInstantCoffee,
    removeInstantCoffeeFromDB,
    loadInstantCoffee,
    loadInstantCoffeeFromDB,
} from '../../actions/instant-coffee';
import { instantCoffee as instantCoffeeFixture } from '../fixtures/instant-coffee-data';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import axios from 'axios';

const createMockStore = configureMockStore([thunk]);
let testCoffeeArray = [];
const { coffeeName, price, packageSize, containerSize, currency, acidity, aroma } = instantCoffeeFixture[3];
const ICData = { coffeeName, price, packageSize, containerSize, currency, acidity, aroma };


const databaseSetup = (ic) => {
    return new Promise((resolve, reject) => {
        axios.post("IC_APP_URL/coffee", instantCoffeeFixture[ic])
            .then((res) => {
                testCoffeeArray.push(res.data._id);
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            })
    })
}

const databaseTearDown = (ic) => {
    return new Promise((resolve, reject) => {
        axios.delete(`IC_APP_URL/coffee/${ic}`)
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            })
    })
}

beforeAll(async () => {
    for (let ic = 0; ic < 2; ic++) {
        await databaseSetup(ic);
    }
});

afterAll(async () => {
    for (let ic = 0; ic < testCoffeeArray.length; ic++) {
        await databaseTearDown(testCoffeeArray[ic])
    }
})

test("Should setup add instant coffee object 'Blendy - Otona no Black' ", () => {
    const action = addInstantCoffee(instantCoffeeFixture[0]);
    expect(action).toEqual({
        type: 'ADD_INSTANT_COFFEE',
        instantCoffee: instantCoffeeFixture[0]
    });
});

//done : Jest is now forced to wait
test("Should add coffee data to database.", (done) => {
    const store = createMockStore({});
    let actions, length;
    //store should fire data to database, then get action back.
    axios.get('IC_APP_URL/coffee/')
        .then((res) => {
            length = res.data.length;
            return store.dispatch(addInstantCoffeeToDB(instantCoffeeFixture[3]))
        })
        .then(() => {
            actions = store.getActions(); //mock function
            expect(actions[0]).toEqual({     //Check returning action
                type: 'ADD_INSTANT_COFFEE',
                instantCoffee: {
                    ...instantCoffeeFixture[3],
                    id: expect.any(String)
                }
            });
            testCoffeeArray.push(actions[0].instantCoffee.id);
            return axios.get(`IC_APP_URL/coffee/${actions[0].instantCoffee.id}`)
        })
        .then((res) => {
            expect(res.data).toEqual({
                __v: 0,
                _id: expect.any(String),
                totalPurchased: 0,
                ...ICData
            });

            return axios.get('IC_APP_URL/coffee');
        })
        .then((res) => {
            expect(res.data.length).toBe(length + 1);// should be one more.
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

test("Should send instant coffee object edits to DB", (done) => {
    const store = createMockStore({});
    const updates = { coffeeName: "Name got edited!" };
    store.dispatch(editInstantCoffeeToDB(testCoffeeArray[1], updates))
        .then(() => {
            const action = store.getActions();
            expect(action[0]).toEqual({
                type: 'EDIT_INSTANT_COFFEE',
                id: testCoffeeArray[1],
                updates
            })

            return axios.get(`IC_APP_URL/coffee/${testCoffeeArray[1]}`)
        })
        .then((res) => {
            expect(res.data.coffeeName).toBe(updates.coffeeName);
            done();
        })

});


test("Should remove instant coffee object from db", (done) => {
    //store to dispatch first action : remove from db
    //store to dispatch second action.
    const store = createMockStore({});
    axios.get(`IC_APP_URL/coffee`)
        .then((res) => {
            let coffees = res.data.length;
            store.dispatch(removeInstantCoffeeFromDB(testCoffeeArray[0]))
                .then(() => {
                    //check action object
                    //return another request to ensure the item is not here.
                    const actions = store.getActions();
                    expect(actions[0]).toEqual({
                        type: 'REMOVE_INSTANT_COFFEE',
                        id: testCoffeeArray[0]
                    })

                    return axios.get('IC_APP_URL/coffee');
                })
                .then((res) => {
                    expect(res.data.length).toBe(coffees - 1);
                    done();
                })
        })
});

test("Should setup remove instant coffee object", () => {
    const action = removeInstantCoffee('123abc');
    expect(action).toEqual({
        type: 'REMOVE_INSTANT_COFFEE',
        id: '123abc',
    })
});

test("Should setup load instant coffee objects", () => {
    const action = loadInstantCoffee(instantCoffeeFixture);
    expect(action).toEqual({
        type: 'LOAD_INSTANT_COFFEE',
        instantCoffees: instantCoffeeFixture
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