// console.log("Hey there!NodeJS");

function add(a,b){
    return a + b;
}
function sub(a,b){
    return a-b;
}
function mul(a,b){
    return a*b;
}
// module.exports = add;
// module.exports = sub;
// module.exports = mul; //this will result method overriding
//so create
module.exports = {
    addFn: add,
    subFn: sub,
    mulFn: mul
};