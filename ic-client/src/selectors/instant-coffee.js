

const getInstantCoffee = (instantCoffees, filter) => {
    return instantCoffees.filter((ic) => {
        return ic.coffeeName.toLowerCase().includes(filter.text.toLowerCase());
    }).sort((coffeeA, coffeeB) => {
        switch (filter.sortBy) {
            case 'aroma':
                return coffeeA.aroma < coffeeB.aroma ? 1 : -1;
            default:
                console.log("Sorting: No need")
        }

        return 1;
    });
};

export default getInstantCoffee;