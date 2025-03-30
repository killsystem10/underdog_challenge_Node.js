// 라우팅 연습하기  (결과 비교 파일 : 04\results\server-5.js)
const http = require('http');

const server = http.createServer((req,res) => {
    res.setHeader('content-type', 'text/plain');
    const {url,method} = req;
    if (method === 'get' && url==='/home') {
        res.write('home');
        res.end();
    } else if (method === 'get' && url==='/about') {
        res.end('about');
    } else {
        res.end('not found');
    }
})

server.listen(3000, () => {
    console.log('server running');
})