//built-in module
const bulit = require('fs');
console.log(bulit);

// const {add,sub} = require('./Hello')
// console.log(add(2,3));
// console.log(sub(2,3));

// const sub = require('./Hello')
// console.log(sub(2,3));

// const math = require('./Hello');
// console.log(math.addFn(2,3));
// console.log(math.subFn(2,3));
// console.log(math.mulFn(2,3));

//destructureing it
const {addFn,subFn,mulFn} = require('./Hello')
console.log(mulFn(3,3));



