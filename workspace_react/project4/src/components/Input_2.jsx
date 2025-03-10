import React, { useState } from 'react'

const Input_2 = () => {
  //이름을 입력하는 input 태그에 작성한 내용을 저장할 state 변수
  // const [name, setName] = useState('');
  // const [age, setAge] = useState('');
  // const [addr, setAddr] = useState('');


  //모든 input태그에 입력한 데이터를 저장할 state변수
  const [data, setData] = useState({
    name : '',
    age : '',
    addr : ''
  });

  //input 태그의 값이 변경되는 실행시킬 함수
  function chageDate(e){
    setData({
      ...data,
      [e.target.name] : e.target.value
    })
  }

  return (
    <>
      이름 : <input name='name' type="text" value={data.name} onChange={(e) => {
        // setData({
        //   ...data,
        //   name : e.target.value
        // });
        chageDate(e);
      }}/> <br />
      나이 : <input name='age' type="text" value={data.age} onChange={(e) => {
        //input 태그의 값이 변경될때마다(input 태그에 입력할때마다)
        //input 태그에 작성한 데이터를 age변수에 저장한다.
        // setData({
        //   ...data,
        //   age : e.target.value
        // });
        chageDate(e);
      }}/> <br />
      주소 : <input name='addr'type="text" value={data.addr} onChange={(e) => {
        // setData({
        //   ...data,
        //   addr : e.target.value
        // });
        chageDate(e);
      }}/> <br />

      <div>
        입력받은 이름 : {data.name}
      </div>
      <div>
        입력받은 나이 : {data.age}
      </div>
      <div>
        입력받은 주소 : {data.addr}
      </div>
    </>
  )
}

export default Input_2