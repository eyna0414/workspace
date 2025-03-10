import React, { useEffect, useState } from 'react'

//useEffect : 컴포넌트의 생애주기에 따라 기능을 구현하는 훅
//           +useEffect안의 내용은 화면 다 그린 후 가장 마지막에 실행
//컴포넌트의 생애주기
//1. mount : 컴포넌트가 최초 랜더링 되는 시점
//2. update : 컴포넌트가 리렌더링 되는 시점
//3. unmount : 컴포넌트가 더 이상 사용되지 않아 화면에서 사라지는 시점

//useEffect(실행코드, 의존성 배열); *의존성 배열은 필요할 때만 작성
const UseEffectTest = () => {
  const [num, setNum] = useState(0);
  const [age, setAge] = useState(20);

  //컴포넌트가 마운트 될 때 + 컴포넌트가 리렌더링 될 때
  useEffect(() => {
    console.log(1);
  });

  //컴포넌트가 마운트 될 때만
  useEffect(() => {
    console.log(2);
  }, []);

  //컴포넌트가 마운트 될 때
  //num 이라는 state 변수의 변경으로 리렌더링 될 때도 실행
  useEffect(() => {
    console.log(3);
  }, [num]);

  //컴포넌트가 마운트 될 때
  //age state 변수의 변경으로 리렌더링 될 때
  useEffect(() => {
    console.log(4);
  }, [age]);

  //컴포넌트가 마운트 될 때
  //age, num 변수의 변경으로 리렌더링 될 때
  useEffect(() => {
    console.log(5);
  }, [age, num]);

  //mount 될 때도 실행 (return문 안 제외)
  //return 문 안의 내용은 unmount 시점에 실행 됨
  //return 문만 작성시 ummount 시점에만 실행
  useEffect(() => {
    console.log(6);
    return () => {
      console.log(7);
    }
  }, []);
  
  
  useEffect(() => {}, [])
  
  return (
    <>
      <div>UseEffectTest</div>
      <button type='button' onClick={e => setNum(num + 1)}>num 버튼</button>
      <button type='button' onClick={e => setAge(age + 1)}>age 버튼</button>
    </>
  )
}

export default UseEffectTest