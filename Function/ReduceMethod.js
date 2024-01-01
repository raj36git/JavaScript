//Reduce Method
// Performs some operations & reduces the array to a single value. It returns
// that single value.

let arr = [1,24,3,4,5];
//calculate the sum of element in arr

let result = arr.reduce((ans,val)=>{
    return ans + val;
});

console.log(result);

//calculate the max value
let max = arr.reduce((res, val)=>{
    return res > val ? res : val;
})

console.log(max);