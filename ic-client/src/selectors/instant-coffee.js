

const getInstantCoffee = (instantCoffees, filter) => {
    console.log('Caught filter', filter)
    console.log('ICs', instantCoffees)
    return instantCoffees.filter((ic) => {
        console.log("THis ic : ", ic.coffeeName)
        console.log(ic.coffeeName.toLowerCase().includes(filter.text.toLowerCase()))
        return ic.coffeeName.toLowerCase().includes(filter.text.toLowerCase());
    })
}

export default getInstantCoffee;