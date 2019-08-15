

const getInstantCoffee = (instantCoffees, filter) => {
    return instantCoffees.filter((ic) => {
        return ic.coffeeName.toLowerCase().includes(filter.text.toLowerCase());
    }).sort((coffeeA, coffeeB) => {
        switch (filter.sortBy) {
            case 'aroma':
                return coffeeA.aroma < coffeeB.aroma ? 1 : -1;
            case 'acidity':
                return coffeeA.acidity < coffeeB.acidity ? -1 : 1;
            case 'price':
                return priceComparison(coffeeA, coffeeB)
            case 'amount':
                return amountComparison(coffeeA, coffeeB)
            default:
                console.log("Sorting: No need")
        }
        return 1;
    });
};

const amountComparison = (coffeeA, coffeeB) => {
    const coffeeASize = convertAmount(coffeeA);
    const coffeeBSize = convertAmount(coffeeB);
    return coffeeASize < coffeeBSize ? 1 : -1;
}

const convertAmount = (coffee) => {
    return coffee.packageSize ? coffee.packageSize * coffee.containerSize : coffee.containerSize;
}

const convertPrice = (coffee) => {
    switch (coffee.currency) {
        case "JPY":
            return coffee.price / 80;
        case "USD":
            return coffee.price / 0.75;
        case "HKD":
            return coffee.price / 5.8
        default:
            return coffee.price
    }
}

const priceComparison = (coffeeA, coffeeB) => {
    const coffeeAPrice = convertPrice(coffeeA) / convertAmount(coffeeA);
    const coffeeBPrice = convertPrice(coffeeB) / convertAmount(coffeeB)

    return coffeeAPrice < coffeeBPrice ? 1 : -1;
}


export default getInstantCoffee;