const http=require ("http");

const PORT =5000;
const calcul = require("./localModules")

let a = 2;
let b = 3;

// http.createServer((request,response)=>{response.end(`the sum of ${a} and ${b} is ${calcul.sum(a,b)}`)}).listen(5000)

http.createServer((request,response)=>{
    response.end("<h1>Hello node!</h1>")

}).listen(PORT)

console.log(`server is running on http://localhost:${PORT}`);


console.log("server is running on http://127.0.0.1:5000");

