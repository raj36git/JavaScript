// inheritance is passing down properties & methods from parent class to child class

//Syntax
class Parent {
}
class Child extends Parent {
}
//Note :  Method Overriding
// If Child & Parent have same method, child’smethod will be used.

class Kiit{
    greet(){
        console.log("Hello");
    }
}

class student extends Kiit{}
let obj = new student;