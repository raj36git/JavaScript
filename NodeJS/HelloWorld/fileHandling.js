const fh = require('fs');

// writeFileSync
// sync
fh.writeFileSync('./test.txt/','testing fs');
// async
fh.writeFile("./test.txt","test async",(err) => {});

// readFileSync
//sync
const result1 = fh.readFileSync("./text.txt","utf-8");
console.log(result1);
//async
const result2 = fh.readFile("./text.txt","utf-8",(res,err) => {
    if(res){
        console.log(result2);
    }else{
        console.log("Error",err);
    }
});
console.log(result2);
//appendFileSync
fh.appendFileSync("./text.txt","\nraju:7878");

fh.appendFile("./text.txt","\n google.id","utf-8",(err)=>{
    if(err){
        console.log("Error in apending",err);
    }
});

