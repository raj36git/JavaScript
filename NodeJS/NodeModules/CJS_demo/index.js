// const searchFun = require('./searching');
// console.log(searchFun.linearSearch([2,4,7,1,8],48));
// console.log(searchFun.binarySearch([2,4,7,1,8],4));

//destructure of module
const {linearSearch,binarySearch} = require('./searching');
console.log(linearSearch([2,4,7,1,8],48));
console.log(binarySearch([2,4,7,1,8],4));