const http = require('http');

const server = http.createServer((req, res) => {
    // console.log(req.url);
    // res.end('Hello World');
    if(req.url === '/') {
        res.end('Welcome to our home page');
    }

    if(req.url === '/about') {
        res.end('Welcome to our About page');
    }
});

server.listen(3000, () => {
    console.log('Server is running on port 3000: http://localhost:3000');
});