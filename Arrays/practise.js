let store = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];

//1 Remove the first company from the array
// store.shift();
// console.log(store);

//2.Remove Uber & Add Ola in its plac
store.splice(2,1,"Ola");
console.log(store);

//3.Add Amazon at the end
store.push("Amazon");
console.log(store);