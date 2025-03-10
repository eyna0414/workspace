import React, { useState } from 'react'


const InputTest = () => {
  //id input 태그에 입력한 데이터를 저장할 변수
  //input태그의 초기값은 화면이 뜰 때 보여주고 싶은 데이터로 초기화
  const [id, setId] = useState('');

  //나이 input 태그에 입력한 데이트를 저장할 변수
  const [age, setAge] = useState('');

  //변수를 하나 씩 만들기 힘드니까 객체로 
  //input 태그에 데이터를 여러개 저정할 변수
  const [data, setData] = useState({
    id : '',
    age : '',
    name : ''
  });

  //반복됨
  const changeData = (e) => {
    setData({
      ...data,
      //키값에는 변수가 못들어옴 []쓰면 변수 가능
      [e.target.name] : e.target.value
    });
  }

  // ...a 스프레드연산자
  // const a = [1,2,3];
  // ...a; //1,2,3
  // a; //[1,2,3]
  
  // const a = {
  // name : 'kim'
  // age : 20
  // };
  // ...a;  name: 'kim' , age : 20

  return (
    <>
      <div>inputTest</div>
      <div>id : <input type="text" name='id' onChange={(e) => {
        changeData(e)
      }} /></div>

      <div>나이 : <input type="text" name='age' onChange={(e) => {
        changeData(e)
      }} /></div>

      



      {/*setData 반복되기 때문에 함수로 작성 */}
      <div>나이 : <input type="text" onChange={(e) => {
        //input 태그에 입력한 값을 data변수에 저장
        e.target.value;
        setData({
          ...data,
          age: e.target.value
        });
      }} /></div>
      
      <div>이름 : <input type="text" onChange={(e) => {
        setData({
          ...data,
          age: e.target.value
        });
      }}/></div>
    </>
  )
}

export default InputTest