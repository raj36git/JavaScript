//JS first code
console.log("JS");

//Variables in JS-> container for data(memory)
let person = "Razz";
let num = 20;

//var -> can be re-assign and updated
var name = "Razz";
var name = "Shizu";
var name = "Rubee";//no error giving so we'nt be using it anywhere
console.log(name);

//let -> can't re-assign but can be updated
let age = 22;
// let age = 22;//gives error but
// age = 66; //can be updated
console.log(age);

//const->can't re-assign and can't updated
const PI = 3.237;
// const PI = 3.237;//error
// PI = 6.88; //gives error while compiling
console.log(PI);

////DataTypes->
// Primitive
// Number -> 1,2,3,4...
// String-> char, str
// Boolean-> true, false
// Undefined-> everything is undefined at first
// Null-> varialbe have no value
// BigInt-> 63254n,2387n
// Symbol->...

//Non-Primitive
//Objects[key:value]->Array,function,...
const students = {
    Name : "Razz",
    Roll_No : 22,
    CGPA : 7.88,
    isPass : true,
};
console.log(students); //display full objects
console.log(students.Name);
console.log(students.Roll_No);
console.log(students.CGPA);
console.log(students.isPass);
console.log(students["isPass"]);

//to change value inside Obj
students["Roll_No"] = 56;
console.log(students["Roll_No"]);

//Assignment
const product = {
  Name: "Parker BallPen",
  Color : "Black",
  Rating : 7.002,
  MRP : 270,
  Discount : 5,
  isDeal : true,
};

console.log(product);
