const http = require('http');
const host = '127.0.0.1';
const post = 3000;

const server = http.createServer((req,res) => {
    req.statusCode = 200;
})