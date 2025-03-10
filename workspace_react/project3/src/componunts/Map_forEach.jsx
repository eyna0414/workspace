import React from 'react'

const Map_forEach = () => {
  function aaa(){
    console.log(3);
  }
  //반복문 : for, for of, forEach(), map() 17 22
  
  const arr = [1, 3, 5];
  //forEach()
  //()안의 내용을 반복 실행!
  arr.forEach((item, i) => {
    console.log(`a = ${item}, b = ${i}`);
  });

  //() 안의 내용을 반복 실행!
  const result = arr.map((e, i) => {
    console.log(`e = $(e), b = $(i)`)
    return e * 2;
  });
  console.log(result);

  
  return (
    <>
      <div>Map_forEach</div>
    </>
  )
}

export default Map_forEach