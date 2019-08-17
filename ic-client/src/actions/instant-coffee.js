import axios from 'axios'
import { handle409Error, handleOtherError, handle404Error } from './error';


const handleInstantCoffeeErrors = (status) => {
    if (status === 409) {
        return handle409Error()
    } else if (status === 400) {
        return handleOtherError()
    } else if (status === 404) {
        return handle404Error()
    } else {
        return handleOtherError()
    }
}

export const addInstantCoffee = (instantCoffee) => ({
    type: 'ADD_INSTANT_COFFEE',
    instantCoffee
});

// Returning a function, with dispatch as arguement
// where upon the execution of this function
// you return database post results for promise chaining (see test case )
// without return axios... , test case cannot access the response data.
export const addInstantCoffeeToDB = (data) => {
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
    return (dispatch) => {
        return axios.post('/coffee/', instantCoffee)
            .then((res) => {
                dispatch(addInstantCoffee({
                    //Separate ID : Much harder to test without this.
                    id: res.data._id,
                    ...instantCoffee
                }));
            })
            .catch((err) => {
                dispatch(handleInstantCoffeeErrors(err.response.status))
            })
    }
};

export const editInstantCoffee = (id, updates) => {
    return {
        type: 'EDIT_INSTANT_COFFEE',
        id,
        updates
    }
}

export const editInstantCoffeeToDB = (id, updates) => {
    //dispatch needs to be accessible.
    return (dispatch) => {
        return axios.patch(`/coffee/${id}`, updates)
            .then((res) => {
                //call edit for redux to update store
                dispatch(editInstantCoffee(id, updates))
            })
            .catch((error) => {
                dispatch(handleInstantCoffeeErrors(error.response.status))
            })
    }
}

export const removeInstantCoffee = (id = "") => ({
    type: 'REMOVE_INSTANT_COFFEE',
    id
});

export const removeInstantCoffeeFromDB = (id = "") => {
    return (dispatch) => { //give access to dispatch
        return axios.delete(`/coffee/${id}`)
            .then((res) => {
                //TODO: redirect accordingly by status code.
                dispatch(removeInstantCoffee(id));
            })
            .catch((error) => {
                dispatch(handleInstantCoffeeErrors(error.response.status))
            });
    }
};

export const loadInstantCoffee = (instantCoffees) => ({
    type: 'LOAD_INSTANT_COFFEE',
    instantCoffees
});


export const loadInstantCoffeeFromDB = () => {
    let instantCoffees = [];
    return (dispatch) => {
        return axios.get("/coffee")
            .then((res) => {
                console.log(res)
                res.data.forEach((instantCoffee) => {
                    instantCoffees.push({
                        id: instantCoffee._id,
                        ...instantCoffee
                    })
                })
                dispatch(loadInstantCoffee(instantCoffees))
            })
            .catch((err) => {
                console.log("An error has occured, ", err)
            });
    }
}