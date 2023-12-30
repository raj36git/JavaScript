let arr = [3, 6, 9, 1, 5];
let arr1 = [11,22];

//methods in Array
// //1.Push(element) : add to end
// arr.push(88,44);
// console.log(arr);

// // 2.pop() : delete from end & return
// arr.pop()
// print(arr);

// //3.toString() : converts array to string
// console.log(arr.toString()); //array in string form
// console.log(arr); //original array

// //4.concat() : joins multiple arr's
// console.log(arr.concat(arr1));

// //5.unshift() : add to start & return new length of array
// console.log(arr.unshift(44));
// console.log(arr.toString());

// //6.shift() : delete to start & return it
// console.log(arr.shift());
// console.log(arr.toString());

// //7.slice(i,j) : returns the peices of array -> slice(startIdx, endIdx) -> j is excluded
// console.log(arr.slice(2,4));

//8.splice() : change original array(add,remove,replace)-> splice(startIdx,delCount, newElement)
arr.splice(2,2,77,88);
console.log(arr);