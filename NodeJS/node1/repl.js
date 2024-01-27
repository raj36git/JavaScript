//repl = Read Evaluate Print Loop
const repl = require('repl');

const local = repl.start("node started");
// console.log("Repl");

local.on('exit', ()=>{
    console.log("exiting repl");
    process.exit();
});