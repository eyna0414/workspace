import React, { useState } from 'react'

const Test5 = () => {
  const [test5, setTest5] = useState({
    name : '김자바',
    age : 20,
    addr : '울산시'
  })


  return (
    <>

      <div>Test5</div> 
      <h2>이름 : {test5.name}</h2>
      <h2>나이 : {test5.age}</h2>
      <h2>주소 : {test5.addr}</h2>

      <button id="aaa" className='bbb' type='button' onClick={(e)=> {
        //이벤트 발생시 실행코드로 작성하는 함수의 매개변수로는 
        //이벤트 객체를 전달받을 수 있다.
        //이벤트 객체는 이벤트와 관련된 모든 정보를 객체 형태로 갖고 있다
        console.log(e);

        //e.targer -> 이벤트가 발생한 태그
        console(e.target);
        //이벤트가 발생한 태그의 type 속성값
        console(e.target.type);
        console(e.target.id);
        console(e.target.className);
      }}>이름을 홍길동으로 변경</button>

      <button type='button' onClick={()=>{
        setTest5({
          ...test5,
          age : '30'
        })
      }}>나이를 30으로 변경</button>

      <button type='button' onClick={()=>{
        setTest5({
          ...test5,
          addr : '서울시'
        })
      }}>주소를 서울시로 변경</button>


    </>
  )
}

export default Test5