//built-in module
// const bulit = require('fs');
// console.log(bulit);

// const math = require('./math');
// console.log(math.add(2,3));
// console.log(math.sub(2,3));
// console.log(math.mul(2,3));

// //destructureing it
const {add,sub,mul,div} = require('./math');
console.log(add(2,3));
console.log(sub(2,3));
console.log(mul(2,3));
console.log(div(8,4));

//to know the no. of core in own system CPU
//  const os = require('os');
//  console.log(os.cpus().length);
