let arr  = [250,645,300,900,50];
let off = 10;

//using for of loop
for(let i of arr){
    let disc = i/10;
    i = i-disc
    console.log(i);
}

//using for  loop
for(let i=0; i<arr.length; i++){
    let disc = arr[i]/off;
    arr[i] = arr[i]-disc;
    console.log(arr[i]);
}

