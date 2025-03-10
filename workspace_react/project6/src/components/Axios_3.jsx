import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Axios_3 = () => {
  //서버넹서 넘어오는 데이터를 저장할 변수의 초기값은
  //최종적으로 받는 데이터의 자료형과 일치시켜서 만들어줌
  const [person, setPerson] = useState({});

  //컴포넌트의 특정 생애주기에 기능을 구현할 때
  //서버에서 데이터 받을 때 오래 걸리기 때문에 ->그림 다 그린 후 마지막에 실행
  // useEffect();

  //서버에서 데이터 받을 때 사용
  // axios.get();

  //서번에서 데이터를 받아 person에 저장하는 함수
  const getPersonData = () => {
    axios.get('/api/t3')
      //then : 서버와 통신 성공 시 실행할 내용 작성
      //res : 통신 성공한 모든 데이터를 객체 형태
      //우리가 서버에서 받은 데이터 : res.data
      .then((res) => {
        console.log('통신 성공');
        console.log(res.data);
        setPerson(res.data);
      })
      //catch :서버와 통신 실패 시 실행할 내용 작성
      //error : 통신 실패에 대한 모든 데이터를 객체 형태
      .catch((error) => {
        console.log('통신 실패');
        console.log(error); 
      });
  };

  return (
    <>
      <div>Axios_3</div>
      <input type="button" value={'버튼'} 
      onClick={(e) => {
        getPersonData();
      }} />

      <div>
        <p>이름 : {person.name}</p>
        <p>나이 : {person.age}</p>
        <p>주소 : {person.addr}</p>
      </div>
    </>
  )
}

export default Axios_3