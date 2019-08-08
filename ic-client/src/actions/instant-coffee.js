import uuid from 'uuid';

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