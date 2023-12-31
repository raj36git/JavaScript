// JavaScript forEach()
// The forEach() array method loops through any array, executing a provided function once for each array element in ascending index order. This function is referred to as a callback function.

// Syntax and Parameters of a forEach() Loop
// Array.forEach(callbackFunction)

// The callback function can accept up to three different arguments
//We usually write forEach using arrow function

// let arr = [1,2,3,4,5];
// // Using only Current Element-. val
// // normal function
// arr.forEach(function printElement(idx){
//     console.log(idx);
// })
// // arrow function
// arr.forEach((val)=>{
//     console.log(val);
// })

// // Using only Current Element and Index
// //normal function
// arr.forEach(function print(val,idx){
//     console.log(val,idx);
// })
// //arrow function
// arr.forEach((val,idx)=>{
//     console.log(val,idx);
// })

// // Using only Current Element, Index and array
// //normal function
// arr.forEach(function print(val,idx,arr){
//     console.log(val,idx,arr);
// })
// //arrow function
// arr.forEach((val,idx,arr)=>{
//     console.log(val,idx,arr);
// })

//practice for forEach function
// Qs. For a given array of numbers, print the square of each value using the forEach loop.

let arr = [1,2,3,4,5];
arr.forEach((val)=>{
   console.log(val*val);
})
