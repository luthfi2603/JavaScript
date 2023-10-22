const coffeeStock = {
    arabica: 100,
    robusta: 150,
    liberica: 200
}

const isCoffeeMachineReady = true;

// cara CommonJS untuk export module
// module.exports = {coffeeStock, isCoffeeMachineReady};

// cara ES6 untuk export module
export {coffeeStock, isCoffeeMachineReady};

// console.log(module);