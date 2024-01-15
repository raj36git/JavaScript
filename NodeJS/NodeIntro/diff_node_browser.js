const x = setTimeout(function func(){
    console.log("timer ended");
},10000);
console.log(x);
clearTimeout(x);