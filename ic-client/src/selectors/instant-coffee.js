

const getInstantCoffee = (instantCoffees, filter) => {
    return instantCoffees.filter((ic) => {
        return ic.coffeeName.toLowerCase().includes(filter.text.toLowerCase());
    })
}

export default getInstantCoffee;