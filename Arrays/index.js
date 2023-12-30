let arr  = [3,3,5,7,2];
// console.log(arr.length);
// console.log(arr[3]);
let n = arr.length;
// for(let i =0; i<n; i++){
//     console.log(arr[i]);
// }

let persons = ["razz", "raj", "raju", "shizu"];
//print normally
for(let person of persons){
    console.log(person.toUpperCase());
}
//print in array form
for(let person of persons){
    console.log(persons);
    break; //so it can print only one
}