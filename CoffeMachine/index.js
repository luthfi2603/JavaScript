/* console.log("Menyalakan mesin kopi");
console.log("Menggiling biji kopi");
console.log("Memanaskan air");
console.log("Mencampurkan air dan kopi");
console.log("Menuangkan kopi ke dalam gelas");
console.log("Menuangkan susu ke dalam gelas");
console.log("Kopi Anda sudah siap!"); */

// cara CommonJS untuk import module
// const {coffeeStock, isCoffeeMachineReady} = require('./state');
 
// cara ES6 untuk import module
import {coffeeStock, isCoffeeMachineReady} from './state.js'
/* menggunakan keyword as jika penamaan variabel lokal nya ingin
 * berbeda dengan nama variabel yang diekspor
 * contoh : import {coffeeStock as stock, isCoffeeMachineReady} from './state.js'; 
 */

// console.log(coffeeStock);

if(isCoffeeMachineReady == true){
    console.log("Mesin siap.");
}else{
    console.log("Mesin belum siap.")
}

const makeCoffee = (type, miligrams) => {
    if(coffeeStock[type] >= miligrams){
        console.log("Kopi berhasil dibuat!");
    }else{
        console.log("Biji kopi habis!");
    }
}

makeCoffee("robusta", 80);

const displayStock = stock => {
    for(const type in stock){
        console.log(type);
    }
}
 
displayStock(coffeeStock);

console.log(isCoffeeMachineReady);

/* import _ from 'lodash';

const myArray = [1, 2, 3, 4];
const sum = _.sum(myArray);
 
console.log(sum); */

// "test": "echo \"Error: no test specified\" && exit 1",