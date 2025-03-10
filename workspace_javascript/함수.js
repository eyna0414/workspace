
//리턴타입 작성X 
function printHello(){
  console.log('hello');
}

//printHello();

//매개변수로 두 정수를 받아 두 정수의 합을 출력
function printSum(a, b){
  console.log(a + b);
}

printSum(10, 20);

//매개변수로 두 수를 전달받아, 두 수의 곱을 리턴하는 함수
function getMulti(a, b){
  return a * b;
}

let result = getMulti(2, 5);

//기본 함수 선언 방식
function printData1(){
  console.log('hello');
}

//함수 표현식
const printData2 = function(){
  console.log('hello');
}

//화살표 함수
const printData3 = ()=>{
  console.log('hello');
}

function f1(a, b){
console.log(a + b);
}

//함수 표현식
const f2 = function(a, b){
  console.log(a + b);
}

//화살표 함수
const f3 = (a, b)=>{
  console.log(a + b);
}

