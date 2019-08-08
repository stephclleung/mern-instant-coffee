import uuid from 'uuid'; //TODO: Remove when connected to database.

export const addInstantCoffee = ({
    coffeeName = null,
    packageSize = 0,
    containerSize = 0,
    price = -1,
    currency = "invalid",
    acidity = -1,
    aroma = -1
}) => ({
    type: 'ADD_INSTANT_COFFEE',
    instantCoffee : {
        id: uuid(),
        coffeeName,
        packageSize,
        containerSize,
        price,
        currency,
        acidity,
        aroma
    }
});

export const editInstantCoffee = ((id, updates) => ({
    type: 'EDIT_INSTANT_COFFEE',
    id,
    updates
}));

export const removeInstantCoffee = ( id = "" ) => ({
    type: 'REMOVE_INSTANT_COFFEE',
    id
});