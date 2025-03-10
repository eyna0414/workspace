
const foodList = [
  {
    name : '김치찌개',
    price : 12000,
    type : '한식',
    material : ['김치','두부', '돼지고기']
  }, 
  {
    name : '짜장면',
    price : 8000,
    type : '중식',
    material : ['춘장','밀가루', '양파', '오이']
  }, 
  {
    name : '불고기',
    price : 15000,
    type : '한식',
    material : ['소고기','양파', '대파']
  }, 
  {
    name : '탕수육',
    price : 25000,
    type : '중식',
    material : ['돼지고기','밀가루']
  }
];

console.log(foodList.length);
console.log(foodList);

//4. 매개변수로 foodList가 전달되면 모든 음식의 이름을 출력하는 함수를 화살표함수로 구현하고 호출하세요.
const test4 = (foodList) => {
  for (let i = 0 ; i < foodList.length ; i++) {
    console.log(foodList[i].name);
  }
};
test4(foodList);


//5. 매개변수로 foodList가 전달되면 한식 음식의 가격의 합을 출력하는 함수를 함수표현식으로 구현하고 호출하세요.

const test5 = function(foodList) {
  let sum = 0;
  for(let food of foodList){
    if (food.type === '한식') { 
      sum = sum + food.price; 
    }
  }
  console.log(`한식 가격의 합은 ${sum}원 입니다.`);
}

test5(foodList);



//6. 매개변수로 foodList가 전달되면 음식재료가 3개 이상인 음식정보만 새로운 배열에 담아 리턴하는 함수를 구현하고 호출하세요.
const test6 = function(foodList){
  const arr = [];
  for(let i = 0 ; i < foodList.length ; i++){
    if(foodList[i].material >= 3){
      
    }
  }
}


//7. 첫번째 매개변수로 foodList, 두번째 매개변수로 음식명이 전달되면 전달된 음식명의 모든 요리재료를 출력하는 함수를 화살표함수로 구현하고 호출하세요. 만약, 두번째 매개변수로 전달된 음식명이 없다면 '정보없음'을 출력하세요.

const test7 = (list, foodName) => {
  let isFind = false;

  for(let i ; i < list.length ; i++){
    if(list[0].name === foodname){
        console.log(list[i].material);
        return;
    }
  }
  //못찾았을 때 출력 기능
  //isFind가 false면 실행, truw면 실행 안 함!
  // if(!isFind){
  //   console.log('정보없음');
  //}
  console.log('정보없음');
}
test7(foodList, '김치찌개'); 

//매개변수로 5보다 큰 숫자가 들어올때만 안녕 출력
function aaa(num){
  if(num < 5){
    console.log('안녕');
  }
}

//매개변수로 5보다 큰 숫자가 들어올때만 안녕 출력
//return 키워드 작성 후 데이터를 작성하지 않으면 return을 만나면 함수 종료
function bbb(num){
  if(num < 5){
    return
  }
  console.log('안녕');
}