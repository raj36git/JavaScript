const fh = require('fs');
// writeFileSync
// sync
// fh.writeFileSync('./test.txt/',"writing file test");
// async
// fh.writeFile("./test1.txt","writing file async",(err) => {});

// readFileSync
// //sync
// const result1 = fh.readFileSync("./text.txt","utf-8");
// console.log(result1);
//async
// fh.readFile("./text.txt","utf-8", (err,result) => {
//     if(err){
//         console.log("Error",err);
//     }else{
//         console.log(result);
//     }
// });

//appendFileSync
// sync
// fh.appendFileSync("./text.txt","\nraju:+91 2222222");
// // async
// fh.appendFile("./text.txt","\n google.id",(err)=>{
//     if(err){
//         console.log("Error in apending",err);
//     }
// });

//to copy a file to new file_name
// fh.copyFileSync("./text.txt","./copy.txt");

// fh.copyFile("./text.txt","./copyAsync.txt", (err)=>{
//     if(err) throw err;
// });


//to delete file
fh.unlinkSync("./copy.txt");



