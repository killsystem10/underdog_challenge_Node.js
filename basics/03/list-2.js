// fs 모듈의 readdir 함수 연습하기 ( 결과 비교 파일 : 03\results\list-2.js)
const fs = require("fs");

fs.readdir("./",(err,files)=>{
    if (err) {
        console.log(err);
    }
    console.log(files);
})