// console.log("Hey there!NodeJS");

// function add(a,b){
//     return a + b;
// }
// function sub(a,b){
//     return a-b;
// }
// function mul(a,b){
//     return a*b;
// }
// module.exports = add;
// module.exports = sub;
// module.exports = mul; //this will result method overriding so create

// module.exports = {
//     add,
//     sub,
//     mul
// };

// other way
exports.add = (a,b)=>{
    return a + b;
}
exports.sub = (a,b)=>{
    return a-b;
}
exports.mul = (a,b)=>{
    return a*b;
}
exports.div = (a,b)=>{
    return a/b;
}