// Qs. We are given array of marks of students. Filter our of the marks of students that scored 90+

let marks = [89,93,92,90,96,89];

let result = marks.filter((val)=>{
    return val > 90;
});
console.log(result);


//Qs. Take a number n as input from user. Create an array of numbers from 1 to n.
let n = 7;
let arr = [1,2,3,4,5,6,7];

// Use the reduce method to calculate sum of all numbers in the array.
let sum = arr.reduce((ans,val)=>{
    return ans + val;
})
console.log(sum);

// Use the reduce method to calculate product of all numbers in the array.
let product = arr.reduce((ans,val)=>{
    return ans * val;
})
console.log(product);


