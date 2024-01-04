let promise = new Promise((res,rej)=>{
    console.log("I ma promise");
    // res("Done");
    rej("Error");
})
console.log(promise);