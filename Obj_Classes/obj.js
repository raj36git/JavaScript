const students = {
    FullName : "Raj Yadav",
    marks : 78.89,
    printMark : function(){
        console.log("Marks: ", this.marks);
    },
    printMarks(){
        console.log("Marks: ",this.marks);
    },
};

// console.log(students);
// console.log(students.FullName);
// console.log(students.marks);
console.log(students.printMark());
console.log(students.printMarks());