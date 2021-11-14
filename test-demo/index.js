const say = require('./hello');
const fs = require('fs');
say.sayHello();

fs.readFile("./test.txt",(error,data) => {
    if(error) throw error;
    console.log('异步',data.toString());
})

const file = fs.readFileSync('./test.txt');
console.log('同步',file.toString());