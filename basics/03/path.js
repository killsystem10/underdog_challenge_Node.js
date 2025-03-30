// path 모듈 연습하기 ( 결과 비교 파일 : 03\results\path.js)
const path = require('path');

const fullPath = path.join('some','work', 'ex.txt');
console.log(fullPath);

const dir = path.dirname(fullPath);
console.log(dir);

const name = path.basename(__filename);
console.log(name);