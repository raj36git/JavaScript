// A javaScript object is an entity having state and behavior (properties and method).
// JS objects have a special property called prototype
// We can set prototype using _ _ proto _ _
// *If object & prototype have same method,
// object’s method will be used.

const students = {
     calMark(){
        console.log("dudected marks is 10%");
     }
}

const student1 = {
    marks : 89,
}
const student2  = {
    marks : 96,
    calMark(){
        console.log("dudected marks is 30%");
     }
}

student1.__proto__ = students;
student2.__proto__ = students;

console.log(student1); //checks this in browser console