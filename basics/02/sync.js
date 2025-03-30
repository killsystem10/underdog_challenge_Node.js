// 순서대로 실행하기  (결과 비교: 02\results\sync.js)
let A = function() {
    console.log("A");
}
let B = function(callback) {
    setTimeout(() => {
        console.log("B");
        callback();
    },2000)

}
let C = function() {
    console.log("C");
}

A();
B(C);