import uuid from 'uuid'; //TODO: Remove when connected to database.
import axios from 'axios'

export const addInstantCoffee = (instantCoffee) => ({
    type: 'ADD_INSTANT_COFFEE',
    instantCoffee
});

 //Returning a function, with dispatch as arguement
 //where upon the execution of this function
 // you return database post results for promise chaining (see test case )
 // without return axios... , test case cannot access the response data.
export const addInstantCoffeeToDB = ( data ) => {

    const {
        coffeeName = null,
        packageSize = 0,
        containerSize = 0,
        price = -1,
        currency = "invalid",
        acidity = -1,
        aroma = -1
    } = data;

    const instantCoffee = { coffeeName, packageSize, containerSize, price, currency, acidity, aroma };
    console.log("Actions, " , instantCoffee )
    return (dispatch) => {
        return axios.post('http://localhost:5001/coffee/', instantCoffee)
        .then((res) => {
            dispatch(addInstantCoffee({
                id: res.data._id,
                ...instantCoffee
            }));
        })
    }
};

export const editInstantCoffee = ((id, updates) => ({
    type: 'EDIT_INSTANT_COFFEE',
    id,
    updates
}));

export const removeInstantCoffee = ( id = "" ) => ({
    type: 'REMOVE_INSTANT_COFFEE',
    id
});