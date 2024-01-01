// Map
// Creates a new array with the results of some operation. The value its callback returns are
// used to form new array
// } )
// let newArr = arr.map( ( val ) => {
// return val * 2;
// arr.map( callbackFnx( value, index, array ) )
let arr = [1,2,3,4,5];

// // Using only Current Element
// //normal function
// arr.map(function print(val){
//     console.log(val);
// })
// //arrow function
// arr.map((val)=>{
//     console.log(val);
// })

// // Using only Current Element and Index
// //normal function
// arr.map(function print(val,i){
//     console.log(val,i);
// })
// //arrow function
// arr.map((val,i)=>{
//     console.log(val,i);
// })

// // Using  Current Element, Index and array
// // normal function
// arr.map(function print(val,i,arr){
//     console.log(val,i,arr);
// })
//arrow function
arr.map((val,i,arr)=>{
    console.log(val,i,arr);
})