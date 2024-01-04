// Synchronous : Synchronous means the code runs in a particular sequence of instructions given in the program.
// Each instruction waits for the previous instruction to complete its execution.
// console.log("first");
// console.log("second");
// console.log("Third");

//ASynchronous :  Due to synchronous programming, sometimes imp instructions get blocked due to some previous instructions, which causes a delay in the UI.Asynchronous code execution allows to execute next instructions immediately and doesn't block the flow.
console.log("first");
console.log("second");
console.log("Third");
// //normal function
// setTimeout(function () {
//   console.log("Hello");
// }, 2000);
//arrow function
setTimeout( ()=> {
  console.log("Hello");
}, 2000);

console.log("Forth");
console.log("Fifth");
