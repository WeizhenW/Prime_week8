//import the module
let plantsArray = require('./plants-array.js');
let divider = require('./divider');

plantsArray.forEach(function(plant) {
    console.log('plant name:', plant);
})

console.log('result is:', divider(10, 5));