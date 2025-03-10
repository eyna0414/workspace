import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Axios_2 = () => {
  //서버에서 받은 데이터를 저장할 State 변수
  const [person, setPerson] = useState({});

  useEffect(() => {
    axios.get('/api/t3')
    .then((res) => {
      console.log(res.data);
      setPerson(res.data);
    })
    .catch((error) => {
      console.log('통신 중 오류 발생');
      console.log(error);
    });
  }, []);

  return (
    <>
      <p>이름 : {person.name}</p>
      <p>나이 : {person.age}</p>
      <p>주소 : {person.addr}</p>
    </>
  )
}

export default Axios_2