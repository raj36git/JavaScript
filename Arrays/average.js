let marks = [78,90,95,77,64];
let sum = 0;
for(let mark of marks){
    sum = sum + mark;
}

let avg = sum / marks.length;
console.log(avg);