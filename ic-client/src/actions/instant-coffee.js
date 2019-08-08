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
        coffeeName,
        packageSize,
        containerSize,
        price,
        currency,
        acidity,
        aroma
    }
});