// try-catch

// try {
// ... normal code
// } catch ( err ) { //err is error object
// ... handling error
// }

let a = 12;
let b = 12;
let c = 12;

console.log(a+b);
console.log(a*b);
console.log(a-b);
console.log(a/b);
try{
    console.log("a+c",a+b); //here might be errror
} catch(err){
    console.log(err);
}

console.log(a>b);
console.log(a<b);
console.log(a==b);
console.log(a+++b);