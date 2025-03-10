
//1. 이름, 부서, 직급, 급여의 네 개의 데이터를 갖는 객체 emp를 생성해보세요. 각 데이터의 값은 임의의 값으로 설정하면 됩니다.

const emp = {
  name : 'kim',
  department : '개발부',
  position : '대리',
  salary : 10000
};

//2. 5번에서 만든 emp 객체 하나를 매개변수로 받아, 전달받은 객체의 부서가 '개발부'라면 해당 객체의 급여를 출력하고, '개발부'가 아니라면 '부서가 잘못되었습니다'를 출력하는 함수를 화살표함수로 구현하고 호출하세요.
const test1 = (emp) => {
  // if (emp.department === '개발부') {
  //   console.log(emp.salary);
  // } 
  // else {
  //   console.log('부서가 잘못되었습니다');
  // }

  console.log(emp.department === '개발부' ? emp.salary : '부서가 잘못되었습니다')
  
};

test1(emp);


////////////////////////////////////////////////
// const data = [
//   {
//     name : 'kim'
//     age : 20,
//     scores : [50, 60, 70]
//   },
//   {
//     name : 'lee'
//     age : 30
//   },
// ];
// console.log(data[0].name);//kim
// console.log(data[0].scores[1]); //60


//////////////////////////////////////////////////////


//3.  5번에서 만든 emp객체 두 개를 매개변수로 받아, 매개변수로 전달된 두 객체 중 급여가 높은 객체의 이름을 리턴하는 함수를 함수표현식으로 구현하고 호출해보세요.

const test2 = function(emp1, emp2) {
  return emp1.salary > emp2.salary ? emp1.name : emp2.name;
};

console.log(test2.salary);












